import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import bgwelcome from '../assets/bgwelcome_temple.webp';
import bgwelcomeMobile from '../assets/mobile_bg.png';
import ring from '../assets/ring.png';
import Bubbles from '../components/Bubbles';
import Typewriter from '../components/Typewriter';
import { API_URL } from '../config/api';

export default function Welcome() {
  const { code: urlCode } = useParams();
  const navigate = useNavigate();

  // Try URL code first, otherwise check localStorage
  const effectiveCode = urlCode || localStorage.getItem('inviteCode') || '';

  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(Boolean(effectiveCode));
  const [notFound, setNotFound] = useState(false);
  const [inputCode, setInputCode] = useState('');

  useEffect(() => {
    if (!effectiveCode) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setNotFound(false);

    fetch(`${API_URL}/api/person/${effectiveCode.trim()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Not found');
        }
        return res.json();
      })
      .then((data) => {
        setPerson(data);
        localStorage.setItem('inviteCode', data.code);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching invitation person:', err);
        setPerson(null);
        setNotFound(true);
        setLoading(false);
      });
  }, [effectiveCode]);

  const handleManualCodeSubmit = (e) => {
    e.preventDefault();
    if (inputCode.trim()) {
      localStorage.setItem('inviteCode', inputCode.trim());
      navigate(`/${inputCode.trim()}`);
    }
  };

  // Loading spinner state
  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-6 text-center">
        <div role="status" className="flex flex-col items-center">
          <svg
            aria-hidden="true"
            className="inline w-12 h-12 animate-spin text-amber-200/30 fill-amber-400 mb-4"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="text-amber-300 font-battambang text-sm tracking-wide">
            កំពុងដំណើរការសំបុត្រអញ្ជើញ...
          </span>
        </div>
      </div>
    );
  }

  // Not found state (if invalid code entered)
  if (notFound) {
    return (
      <div
        className="
          relative w-full min-h-[100dvh]
          bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]
          bg-cover bg-center bg-no-repeat
          flex flex-col items-center justify-center
          text-center p-6 sm:p-12
        "
        style={{
          '--bg-mobile': `url(${bgwelcomeMobile})`,
          '--bg-desktop': `url(${bgwelcome})`,
        }}
      >
        <div className="absolute inset-0 bg-black/75 z-0"></div>
        <div className="relative z-10 max-w-md w-full bg-black/60 backdrop-blur-md border border-amber-500/30 p-8 rounded-2xl shadow-2xl text-center text-white">
          <div className="text-amber-400 text-5xl mb-3">✉️</div>
          <h2 className="text-2xl font-bold font-moulpali text-amber-300 mb-2">
            រកមិនឃើញកូដអញ្ជើញ
          </h2>
          <p className="text-gray-300 text-sm font-battambang mb-6">
            មិនមានឈ្មោះភ្ញៀវត្រូវគ្នានឹងកូដ &quot;{effectiveCode}&quot; ឡើយ។
            សូមពិនិត្យមើលកូដឡើងវិញ ឬទាក់ទងមកម្ចាស់កម្មវិធី។
          </p>

          <form onSubmit={handleManualCodeSubmit} className="mb-4">
            <input
              type="text"
              placeholder="បញ្ចូលកូដអញ្ជើញរបស់អ្នក..."
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              className="w-full px-4 py-2 mb-3 bg-neutral-900/80 border border-amber-400/50 rounded-lg text-amber-200 text-center font-bold focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold rounded-lg transition"
            >
              ស្វែងរកសំបុត្រអញ្ជើញ
            </button>
          </form>

          <div className="border-t border-white/10 pt-4 mt-4 text-xs text-gray-400 space-y-1">
            <p>ទំនាក់ទំនងលេខទូរស័ព្ទ៖</p>
            <p className="text-amber-300 font-mono font-semibold">
              016 571 913 / 071 879 4559
            </p>
          </div>

          <div className="mt-5">
            <Link
              to="/welcomespouse"
              className="inline-block text-xs text-amber-300/80 hover:text-amber-300 underline font-battambang"
            >
              ចូលមើលកម្មវិធីទូទៅ →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Determine displayed guest name
  const guestName = person ? person.name : 'ភ្ញៀវកិត្តិយសទាំងអស់';
  const additionalName = person?.adname || '';
  const customStyleClass = person?.stext || '';

  return (
    <div
      className="
        relative w-full min-h-[100dvh]
        bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]
        bg-cover bg-center bg-no-repeat
        flex flex-col items-center justify-center
        text-center p-6 sm:p-12
        animate-fadeIn overflow-auto
      "
      style={{
        '--bg-mobile': `url(${bgwelcomeMobile})`,
        '--bg-desktop': `url(${bgwelcome})`,
      }}
    >
      <Bubbles />
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
        <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-yellow-400 drop-shadow-lg mb-6 lg:mb-10 md:mb-10 leading-tight font-kh">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2>

        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#e7d996] drop-shadow-lg mb-1 leading-tight font-moulpali">
          គឹមស្រ៊ី
        </h1>

        <img
          src={ring}
          alt="Wedding Ring"
          className="animate-fade-in-up hover:scale-105 w-20 h-20 sm:w-24 sm:h-24 my-2 transition-transform duration-300"
        />

        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#e7d996] drop-shadow-lg mb-6 leading-tight font-moulpali">
          សុធារ័ត្ឋ
        </h1>

        <p className="animate-fade-in-up text-xl sm:text-2xl md:text-2xl text-yellow-300 mb-3 px-4 leading-relaxed font-kangrey sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] sm:[-webkit-text-stroke:.1px_#000000]">
          សូមគោរពអញ្ជើញ
        </p>

        {/* Personalized Guest Name with Typewriter Effect */}
        <div className="min-h-[5rem] flex flex-col items-center justify-center mb-6">
          <h2
            className={`
              sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
              animate-fade-in-up
              text-lg sm:text-xl md:text-2xl lg:text-3xl
              text-yellow-400
              leading-relaxed font-kh
              px-4
              ${customStyleClass}
            `}
          >
            <Typewriter text={guestName} speed={90} delay={600} />
          </h2>

          {additionalName && (
            <h3 className="sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)] animate-fade-in-up text-base sm:text-lg md:text-xl text-yellow-300/90 leading-relaxed font-kh mt-1">
              <Typewriter text={additionalName} speed={90} delay={1400} />
            </h3>
          )}
        </div>

        {/* Open Invitation Button */}
        <Link
          to="/welcomespouse"
          className="
            px-8 py-3.5 
            bg-lime-950 text-yellow-400 border border-yellow-400/40
            text-sm sm:text-base font-bold uppercase tracking-wider
            rounded-full shadow-2xl 
            hover:scale-105 hover:bg-lime-900 hover:shadow-yellow-500/20 
            transition-all duration-300 ease-out font-moulpali animate-bounce
            inline-flex items-center gap-3
          "
        >
          <span>បើកសំបុត្រអញ្ជើញ</span>
          <svg
            fill="#facc15"
            height="26px"
            width="26px"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M32.9,110c0,0,0-3.3,0-3.8h47.5c-0.7,1.4-1.2,3-1.5,4.5c-0.4,2.1-0.2,4.1,0.3,6l-39.7-0.1C35.8,116.6,32.9,113.6,32.9,110 M85.4,24.4c0,6.8-0.1,67-0.1,73.8H39.9l28.4-23.8l-0.1-50.1C70.8,24.4,82.9,24.4,85.4,24.4 M89.8,116.7h-1.9 c-1.1-1.2-1.5-2.8-1.2-4.7c0.5-3.1,2.8-5.7,3.9-6.1l0,0c1.5-0.5,2.7-2,2.7-3.7l0.1-81.8c0-2.2-1.8-4-4-4c0,0-16.5,0-21.1,0 c0-3.9,0-9.2,0-9.2c0-1.6-0.9-3.1-2.4-3.7c-1.5-0.6-3.2-0.3-4.3,0.8L33.8,31.9c-4.9,4.8-8.7,14-8.7,20.8L24.9,110 c0,8,6.5,14.6,14.5,14.6l50.3,0.2c2.2,0,4-1.8,4-4v0C93.7,118.5,92,116.8,89.8,116.7" />
            </g>
          </svg>
        </Link>
      </div>

      {/* Admin link discreetly in footer */}
      <div className="absolute bottom-3 right-4 z-20">
        <Link
          to="/admin"
          className="text-xs text-yellow-300/40 hover:text-yellow-300 transition-colors font-mono"
          title="Guest Management Dashboard"
        >
          ⚙️ Admin
        </Link>
      </div>
    </div>
  );
}