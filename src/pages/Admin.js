import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { API_URL } from '../config/api';

export default function Admin() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: '' }
  const [backendHealth, setBackendHealth] = useState({ checked: false, connected: false });

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBulkOpen, setIsBulkOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    adname: '',
    stext: '',
  });

  // Bulk input state
  const [bulkText, setBulkText] = useState('');

  const showToast = useCallback((message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  }, []);

  // Check health and fetch items
  const checkHealth = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/api/health`);
      if (res.ok) {
        const data = await res.json();
        setBackendHealth({ checked: true, connected: data.mongoConnected });
      } else {
        setBackendHealth({ checked: true, connected: false });
      }
    } catch {
      setBackendHealth({ checked: true, connected: false });
    }
  }, []);

  const fetchItems = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/api/items`);
      if (!res.ok) throw new Error('Failed to load guest list');
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error(err);
      showToast('Could not connect to backend API: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    checkHealth();
    fetchItems();
  }, [checkHealth, fetchItems]);

  // Filtered items
  const filteredItems = useMemo(() => {
    if (!search.trim()) return items;
    const q = search.toLowerCase();
    return items.filter(
      (item) =>
        (item.code && item.code.toLowerCase().includes(q)) ||
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.adname && item.adname.toLowerCase().includes(q)) ||
        (item.stext && item.stext.toLowerCase().includes(q))
    );
  }, [items, search]);

  // Open modal for Create
  const handleOpenCreate = () => {
    setEditingItem(null);
    setFormData({ code: '', name: '', adname: '', stext: '' });
    setIsModalOpen(true);
  };

  // Open modal for Edit
  const handleOpenEdit = (item) => {
    setEditingItem(item);
    setFormData({
      code: item.code || '',
      name: item.name || '',
      adname: item.adname || '',
      stext: item.stext || '',
    });
    setIsModalOpen(true);
  };

  // Generate a random clean code
  const handleGenerateCode = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setFormData((prev) => ({ ...prev, code: `VIP-${randomNum}` }));
  };

  // Save guest (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.code.trim() || !formData.name.trim()) {
      showToast('Code and Name are required fields', 'error');
      return;
    }

    try {
      setSubmitting(true);
      const url = editingItem
        ? `${API_URL}/api/items/${editingItem._id}`
        : `${API_URL}/api/items`;
      const method = editingItem ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || 'Operation failed');
      }

      showToast(
        editingItem
          ? `Guest "${formData.name}" updated successfully`
          : `Guest "${formData.name}" added successfully!`
      );
      setIsModalOpen(false);
      fetchItems();
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // Delete guest
  const handleDelete = async (item) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete guest "${item.name}" (Code: ${item.code})?`
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`${API_URL}/api/items/${item._id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete item');
      showToast(`Guest "${item.name}" deleted`);
      fetchItems();
    } catch (err) {
      showToast(err.message, 'error');
    }
  };

  // Copy invitation link to clipboard
  const handleCopyLink = (code) => {
    const origin = window.location.origin;
    const link = `${origin}/${code}`;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        showToast(`Copied invite link: ${link}`);
      })
      .catch(() => {
        showToast(`Failed to copy. Link is: ${link}`, 'error');
      });
  };

  // Bulk import submit
  const handleBulkSubmit = async () => {
    if (!bulkText.trim()) {
      showToast('Please paste data in the format: Code, Name, AdName, SText', 'error');
      return;
    }

    // Parse lines
    const lines = bulkText.split('\n').filter((l) => l.trim().length > 0);
    const parsedItems = [];

    for (const line of lines) {
      // Split by comma or tab
      const parts = line.includes('\t') ? line.split('\t') : line.split(',');
      if (parts.length >= 2) {
        parsedItems.push({
          code: parts[0]?.trim(),
          name: parts[1]?.trim(),
          adname: parts[2]?.trim() || '',
          stext: parts[3]?.trim() || '',
        });
      }
    }

    if (parsedItems.length === 0) {
      showToast('No valid lines detected. Each line should have at least: Code, Name', 'error');
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(`${API_URL}/api/items/bulk`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: parsedItems }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Bulk import failed');

      showToast(data.message);
      setBulkText('');
      setIsBulkOpen(false);
      fetchItems();
    } catch (err) {
      showToast(err.message, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (items.length === 0) {
      showToast('No guests to export', 'error');
      return;
    }

    const headers = ['Code', 'Name', 'Additional Name', 'Style/Notes', 'Invitation Link', 'Created At'];
    const rows = items.map((item) => [
      `"${item.code}"`,
      `"${(item.name || '').replace(/"/g, '""')}"`,
      `"${(item.adname || '').replace(/"/g, '""')}"`,
      `"${(item.stext || '').replace(/"/g, '""')}"`,
      `"${window.location.origin}/${item.code}"`,
      `"${new Date(item.createdAt || Date.now()).toLocaleDateString()}"`,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `wedding_guests_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported guest list to CSV');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8">
      {/* Toast Notification */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-2xl flex items-center gap-3 transition-all transform animate-bounce ${
            toast.type === 'error'
              ? 'bg-rose-600 text-white border border-rose-400'
              : 'bg-emerald-600 text-white border border-emerald-400'
          }`}
        >
          <span>{toast.type === 'error' ? '⚠️' : '✅'}</span>
          <span className="text-sm font-medium">{toast.message}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top Navbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-6 rounded-2xl backdrop-blur-md">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-2xl">💍</span>
              <h1 className="text-2xl font-bold tracking-tight text-amber-400 font-kh">
                ការគ្រប់គ្រងភ្ញៀវមង្គលការ (Wedding MERN Admin)
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Manage invitation codes, guest names, personalized links, and MongoDB database.
            </p>
          </div>

          {/* Action buttons & Live Link */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition flex items-center gap-2"
            >
              <span>🌐</span>
              <span>View Invitation</span>
            </Link>

            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-semibold rounded-xl border border-slate-700 transition flex items-center gap-1.5"
              title="Download CSV file of all guests"
            >
              <span>📥</span>
              <span>CSV</span>
            </button>

            <button
              onClick={() => setIsBulkOpen(true)}
              className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold rounded-xl transition flex items-center gap-1.5 shadow-lg shadow-indigo-600/20"
            >
              <span>⚡</span>
              <span>Bulk Add</span>
            </button>

            <button
              onClick={handleOpenCreate}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold rounded-xl transition flex items-center gap-1.5 shadow-lg shadow-amber-500/20"
            >
              <span>➕</span>
              <span>Add Guest</span>
            </button>
          </div>
        </div>

        {/* Status & Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Total Guests</p>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-white">{items.length}</span>
              <span className="text-xs text-amber-400 font-medium">in MongoDB</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Search Matches</p>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-white">{filteredItems.length}</span>
              <span className="text-xs text-slate-400">showing</span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">MongoDB Status</p>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`w-3 h-3 rounded-full ${
                  backendHealth.connected ? 'bg-emerald-400 animate-pulse' : 'bg-rose-500'
                }`}
              ></span>
              <span className="text-sm font-bold text-white">
                {backendHealth.connected ? 'Connected ✅' : 'Checking / Disconnected'}
              </span>
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 p-5 rounded-2xl">
            <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Backend Server</p>
            <p className="text-xs font-mono text-slate-300 truncate mt-1" title={API_URL}>
              {API_URL}
            </p>
          </div>
        </div>

        {/* Search & Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-slate-900/50 border border-slate-800 p-4 rounded-2xl">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search by code, guest name, title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-xl text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <span className="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={fetchItems}
            className="w-full sm:w-auto px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
          >
            <span>🔄</span>
            <span>Refresh</span>
          </button>
        </div>

        {/* Guests Table */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
          {loading ? (
            <div className="p-16 text-center text-slate-400 space-y-3">
              <div className="inline-block w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-medium">Loading guests from MongoDB...</p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="p-16 text-center text-slate-400 space-y-3">
              <span className="text-4xl">📭</span>
              <p className="text-base font-medium text-slate-300">No guests found</p>
              <p className="text-xs text-slate-500">
                {search ? 'Try clearing your search query' : 'Click "Add Guest" or "Bulk Add" to get started'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300">
                <thead className="bg-slate-800/70 text-xs uppercase tracking-wider text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="py-4 px-5">Code (កូដ)</th>
                    <th className="py-4 px-5">Guest Name (ឈ្មោះ)</th>
                    <th className="py-4 px-5">Additional Name (ភរិយា/ស្វាមី)</th>
                    <th className="py-4 px-5">Note/Style</th>
                    <th className="py-4 px-5">Personalized Link</th>
                    <th className="py-4 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredItems.map((item) => (
                    <tr key={item._id} className="hover:bg-slate-800/40 transition-colors">
                      {/* Code */}
                      <td className="py-4 px-5">
                        <span className="px-2.5 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-lg font-mono font-bold text-xs tracking-wider">
                          {item.code}
                        </span>
                      </td>

                      {/* Name */}
                      <td className="py-4 px-5">
                        <span className="font-semibold text-white font-kh text-base">
                          {item.name}
                        </span>
                      </td>

                      {/* Additional Name */}
                      <td className="py-4 px-5 text-slate-400 font-kh">
                        {item.adname || <span className="text-slate-600 italic">-</span>}
                      </td>

                      {/* Style / Notes */}
                      <td className="py-4 px-5 text-xs font-mono text-slate-400">
                        {item.stext || <span className="text-slate-600 italic">-</span>}
                      </td>

                      {/* Copy link */}
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleCopyLink(item.code)}
                            className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700 rounded-lg text-xs font-medium transition flex items-center gap-1"
                            title="Copy invitation link"
                          >
                            <span>📋</span>
                            <span>Copy Link</span>
                          </button>

                          <Link
                            to={`/${item.code}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 text-slate-400 hover:text-white transition"
                            title="Open invitation in new tab"
                          >
                            👁️
                          </Link>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-5 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleOpenEdit(item)}
                            className="p-2 hover:bg-slate-800 text-slate-300 hover:text-amber-300 rounded-lg transition"
                            title="Edit Guest"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => handleDelete(item)}
                            className="p-2 hover:bg-rose-900/30 text-slate-400 hover:text-rose-400 rounded-lg transition"
                            title="Delete Guest"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-2xl shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>{editingItem ? '✏️ Edit Guest' : '➕ Add New Guest'}</span>
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Code */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Invitation Code *
                  </label>
                  <button
                    type="button"
                    onClick={handleGenerateCode}
                    className="text-xs text-amber-400 hover:underline font-mono"
                  >
                    🎲 Auto-generate
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="e.g. VIP-01, chhay, sokha"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Guest Name (ឈ្មោះ) *
                </label>
                <input
                  type="text"
                  placeholder="e.g. ឯកឧត្តម ជា សុផារ៉ា or លោក សន គឹមស្រ៊ី"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-kh focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Additional Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Additional Name (ភរិយា/ស្វាមី/ងារ)
                </label>
                <input
                  type="text"
                  placeholder="e.g. និងភរិយា, និងលោកជំទាវ"
                  value={formData.adname}
                  onChange={(e) => setFormData({ ...formData, adname: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white font-kh focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Custom style or note */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Style Class or Note (stext)
                </label>
                <input
                  type="text"
                  placeholder="e.g. text-yellow-300, table-01 (optional)"
                  value={formData.stext}
                  onChange={(e) => setFormData({ ...formData, stext: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>

              {/* Preview card */}
              <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-4 text-center">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Live Card Preview</p>
                <p className="text-xs text-amber-400 font-kangrey">សូមគោរពអញ្ជើញ</p>
                <p className="text-base text-yellow-300 font-kh font-bold mt-0.5">
                  {formData.name || '(ឈ្មោះអ្នកអញ្ជើញ)'}
                </p>
                {formData.adname && (
                  <p className="text-xs text-yellow-200 font-kh">{formData.adname}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm rounded-xl transition shadow-lg shadow-amber-500/20 disabled:opacity-50"
                >
                  {submitting ? 'Saving...' : editingItem ? 'Update Guest' : 'Save to MongoDB'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bulk Import Modal */}
      {isBulkOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 w-full max-w-xl rounded-2xl shadow-2xl p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>⚡ Bulk Add Guests</span>
              </h2>
              <button
                onClick={() => setIsBulkOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Paste guest list lines formatted as: <br />
              <code className="text-amber-300 font-mono">Code, Guest Name, Additional Name, Notes</code>
            </p>

            <textarea
              rows={8}
              placeholder={`VIP-01, លោក គឹម សុផល, និងភរិយា, Table 1\nVIP-02, លោកស្រី ម៉ៅ សុខា, , Table 1\nVIP-03, លោក ចាន់ រស្មី, និងគូដណ្តឹង, Table 2`}
              value={bulkText}
              onChange={(e) => setBulkText(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <div className="flex justify-between items-center pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setBulkText(
                    `VIP-01, លោក គឹម សុផល, និងភរិយា, Table 1\nVIP-02, លោកស្រី ម៉ៅ សុខា, , Table 1\nVIP-03, លោក ចាន់ រស្មី, និងគូដណ្តឹង, Table 2`
                  );
                }}
                className="text-xs text-indigo-400 hover:underline"
              >
                Insert Sample Data
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsBulkOpen(false)}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleBulkSubmit}
                  disabled={submitting}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-indigo-600/20 disabled:opacity-50"
                >
                  {submitting ? 'Importing...' : 'Start Bulk Import'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
