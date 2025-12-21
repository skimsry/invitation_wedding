import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";

export default function Map() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   let touchStartY = 0;

  //   const handleWheel = (e) => {
  //     if (e.deltaY > 50) {
  //       // scroll down
  //       navigate("/countdown");
  //     } else if (e.deltaY < -50) {
  //       // scroll up
  //       navigate("/prewedding"); // change this to your desired route
  //     }
  //   };

  //   const handleTouchStart = (e) => {
  //     touchStartY = e.touches[0].clientY;
  //   };

  //   const handleTouchEnd = (e) => {
  //     const touchEndY = e.changedTouches[0].clientY;
  //     if (touchStartY - touchEndY > 50) {
  //       // swipe up
  //       navigate("/countdown");
  //     } else if (touchEndY - touchStartY > 50) {
  //       // swipe down
  //       navigate("/prewedding"); // change this to your desired route
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel, { passive: true });
  //   window.addEventListener("touchstart", handleTouchStart, { passive: true });
  //   window.addEventListener("touchend", handleTouchEnd, { passive: true });

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("touchstart", handleTouchStart);
  //     window.removeEventListener("touchend", handleTouchEnd);
  //   };
  // }, [navigate]);
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
        {/* <div className="flex gap-4">
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
</div> */}
<div className="flex justify-center gap-4">
  <Link
    to="/prewedding"
    className="
      px-8 py-3 
      bg-white text-green-900 
      text-sm sm:text-base font-bold uppercase tracking-wider
      rounded-full shadow-xl 
      hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
      transition-all duration-300 ease-out font-battambang
      flex items-center gap-2 whitespace-nowrap
    "
  ><svg
  width="28"
  height="28"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="shrink-0 -scale-x-100"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M18.9792 32.3759L8.69035 39.3951C6.69889 40.7537 3.99878 39.3269 3.99878 36.917V11.005C3.99878 8.59361 6.69843 7.166 8.69028 8.52489L27.6843 21.4809C29.4304 22.672 29.4304 25.249 27.6843 26.4371L20.9792 31.0114V36.9144C20.9792 37.7185 21.8791 38.1937 22.5432 37.7406L41.5107 24.787C42.0938 24.3882 42.0938 23.5316 41.5112 23.1342L22.5436 10.1805C21.8791 9.72714 20.9792 10.2023 20.9792 11.0064V11.9464C20.9792 12.4987 20.5315 12.9464 19.9792 12.9464C19.4269 12.9464 18.9792 12.4987 18.9792 11.9464V11.0064C18.9792 8.59492 21.6789 7.16945 23.6711 8.52861L42.6387 21.4823C44.3845 22.6732 44.3845 25.2446 42.6391 26.4382L23.6707 39.3925C21.6789 40.7514 18.9792 39.3259 18.9792 36.9144V32.3759Z"
    fill="#14532D"
  />
</svg>

    <span>ត្រឡប់</span>
    
  </Link>
  <Link
    to="/countdown"
    className="
      px-8 py-3 
      bg-white text-green-900 
      text-sm sm:text-base font-bold uppercase tracking-wider
      rounded-full shadow-xl 
      hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
      transition-all duration-300 ease-out font-battambang animate-bounce
      flex items-center gap-2 whitespace-nowrap
    "
  >
    <span>បន្ទាប់</span>
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9792 32.3759L8.69035 39.3951C6.69889 40.7537 3.99878 39.3269 3.99878 36.917V11.005C3.99878 8.59361 6.69843 7.166 8.69028 8.52489L27.6843 21.4809C29.4304 22.672 29.4304 25.249 27.6843 26.4371L20.9792 31.0114V36.9144C20.9792 37.7185 21.8791 38.1937 22.5432 37.7406L41.5107 24.787C42.0938 24.3882 42.0938 23.5316 41.5112 23.1342L22.5436 10.1805C21.8791 9.72714 20.9792 10.2023 20.9792 11.0064V11.9464C20.9792 12.4987 20.5315 12.9464 19.9792 12.9464C19.4269 12.9464 18.9792 12.4987 18.9792 11.9464V11.0064C18.9792 8.59492 21.6789 7.16945 23.6711 8.52861L42.6387 21.4823C44.3845 22.6732 44.3845 25.2446 42.6391 26.4382L23.6707 39.3925C21.6789 40.7514 18.9792 39.3259 18.9792 36.9144V32.3759Z"
        fill="#14532D"
      />
    </svg>
  </Link>
</div>
        
      </div>
    </div>
  );
}
