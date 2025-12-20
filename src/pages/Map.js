import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";

export default function Map() {
  const navigate = useNavigate();

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (e.deltaY > 50) {
        // scroll down
        navigate("/countdown");
      } else if (e.deltaY < -50) {
        // scroll up
        navigate("/prewedding"); // change this to your desired route
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // swipe up
        navigate("/countdown");
      } else if (touchEndY - touchStartY > 50) {
        // swipe down
        navigate("/prewedding"); // change this to your desired route
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
    <div className="relative w-full h-screen bg-green-900 flex flex-col items-center justify-center text-center p-4 sm:p-6 overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Bubbles animation */}
      <Bubbles />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center w-full h-full justify-between gap-4">

        {/* Responsive Google Map with border radius and shadow */}
        <div className="w-full h-[85%] rounded-xl shadow-2xl overflow-hidden">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15638.67710438229!2d105.0440525!3d11.5037639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310bfd417ff33b7b%3A0xa131c6a2135ba78e!2sKokir%20Market!5e0!3m2!1sen!2skh!4v1766134272356!5m2!1sen!2skh"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          />
        </div>

        {/* Button Link */}
        <div className="flex gap-4">
  <Link
    to="/prewedding"
    className="px-8 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-out font-battambang"
  >
    ត្រឡប់ក្រោយ
  </Link>
  <Link
    to="/countdown"
    className="px-6 py-3
            bg-white text-green-900
            text-sm sm:text-base font-bold uppercase tracking-wider
            rounded-full shadow-xl
            hover:scale-105 hover:bg-gray-100 hover:shadow-2xl
            transition-all duration-300 ease-out font-battambang animate-bounce
            flex items-center justify-center gap-2
            max-w-xs sm:max-w-sm"
  >
    បើកទំព័របន្ទាប់
  </Link>
</div>
        
      </div>
    </div>
  );
}
