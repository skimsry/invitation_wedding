import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";
export default function Video() {
  const navigate = useNavigate();

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (e.deltaY > 50) {
        // scroll down
        navigate("/map");
      } else if (e.deltaY < -50) {
        // scroll up
        navigate("/gallery"); // change this to your desired route
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // swipe up
        navigate("/map");
      } else if (touchEndY - touchStartY > 50) {
        // swipe down
        navigate("/gallery"); // change this to your desired route
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigate]);
  return (
    <div className="relative w-full h-screen bg-orange-200 flex flex-col items-center justify-center text-center p-4 sm:p-6 overflow-hidden">
      {/* Blur only on desktop */}
      <div className="hidden md:block absolute inset-0 backdrop-blur-sm bg-white/5 z-0"></div>
      <div className="absolute inset-0 bg-black/30 z-0"></div>
<Bubbles />
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl h-full justify-center gap-4">
        {/* Responsive Video Container */}
        <div className="w-full h-[60%] sm:h-[65%] md:h-[70%] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full rounded-xl border-2 border-gray-300"
            src="https://www.youtube.com/embed/sAYEYy3zYDY"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div className="w-full h-[60%] sm:h-[65%] md:h-[70%] rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full rounded-xl border-2 border-gray-300"
            src="https://www.youtube.com/embed/NV025F7SW-8"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}

        {/* Link */}
        <div className="flex gap-4">
        <Link
    to="/gallery"
    className="px-8 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-out font-battambang"
  >
    ត្រឡប់ក្រោយ
  </Link>
  <Link
    to="/map"          
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2
            max-w-[280px] px-4 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-out font-battambang animate-bounce"
  >
    មើលទីតាំងកម្មវិធី
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 232597 333333"
            className="w-5 h-5"
            fill="currentColor"
          >
            <path d="M151444 5419C140355 1916 128560 0 116311 0 80573 0 48591 16155 27269 41534l54942 46222 69232-82338z" fill="#1a73e8"/>
            <path d="M27244 41534C10257 61747 0 87832 0 116286c0 21876 4360 39594 11517 55472l70669-84002-54942-46222z" fill="#ea4335"/>
            <path d="M116311 71828c24573 0 44483 19910 44483 44483 0 10938-3957 20969-10509 28706 0 0 35133-41786 69232-82313-14089-27093-38510-47936-68048-57286L82186 87756c8166-9753 20415-15928 34125-15928z" fill="#4285f4"/>
            <path d="M116311 160769c-24573 0-44483-19910-44483-44483 0-10863 3906-20818 10358-28555l-70669 84027c12072 26791 32159 48289 52851 75381l85891-102122c-8141 9628-20339 15752-33948 15752z" fill="#fbbc04"/>
            <path d="M148571 275014c38787-60663 84026-88210 84026-158728 0-19331-4738-37552-13080-53581L64393 247140c6578 8620 13206 17793 19683 27900 23590 36444 17037 58294 32260 58294 15172 0 8644-21876 32235-58320z" fill="#34a853"/>
          </svg>
  </Link>
        </div>   
       
      </div>
    </div>
  );
}
