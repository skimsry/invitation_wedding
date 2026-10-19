// Centralized API configuration for MERN backend
const getApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL.replace(/\/$/, '');
  }
  // If running locally on localhost/127.0.0.1, default to local backend port 5001
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return 'http://localhost:5001';
  }
  return 'https://invitation-wedding-backend.onrender.com';
};

export const API_URL = getApiUrl();
export default API_URL;
