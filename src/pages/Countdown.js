
import { useCallback, useEffect, useState } from "react";
import bgcountdate from "../assets/bgcountdate.webp";
import bgwelcomeMobile from "../assets/mobile_bg2.png";
import { Link, useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";


export default function Countdown() {
// const navigate = useNavigate();

//   useEffect(() => {
//     let touchStartY = 0;

//     const handleWheel = (e) => {
//       if (e.deltaY > 50) {
//         // scroll down
//         navigate("/qrscan");
//       } else if (e.deltaY < -50) {
//         // scroll up
//         navigate("/map"); // change this to your desired route
//       }
//     };

//     const handleTouchStart = (e) => {
//       touchStartY = e.touches[0].clientY;
//     };

//     const handleTouchEnd = (e) => {
//       const touchEndY = e.changedTouches[0].clientY;
//       if (touchStartY - touchEndY > 50) {
//         // swipe up
//         navigate("/qrscan");
//       } else if (touchEndY - touchStartY > 50) {
//         // swipe down
//         navigate("/map"); // change this to your desired route
//       }
//     };

//     window.addEventListener("wheel", handleWheel, { passive: true });
//     window.addEventListener("touchstart", handleTouchStart, { passive: true });
//     window.addEventListener("touchend", handleTouchEnd, { passive: true });

//     return () => {
//       window.removeEventListener("wheel", handleWheel);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchend", handleTouchEnd);
//     };
//   }, [navigate]);
const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const getTimeDifference = (countDownTime) => {
    const currentTime = new Date().getTime();
    const timeDiffrence = countDownTime - currentTime;
    let days =
      Math.floor(timeDiffrence / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))
        : `0${Math.floor(timeDiffrence / (24 * 60 * 60 * 1000))}`;
    const hours =
      Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        : `0${Math.floor(
            (timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
          )}`;
    const minutes =
      Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))
        : `0${Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60))}`;
    const seconds =
      Math.floor((timeDiffrence % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDiffrence % (60 * 1000)) / 1000)
        : `0${Math.floor((timeDiffrence % (60 * 1000)) / 1000)}`;
    if (timeDiffrence < 0) {
      setCountDownTIme({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval();
    } else {
      setCountDownTIme({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }
  };
  const startCountDown = useCallback(() => {
  // Target date: 21 February 2026 (00:00:00)
  const countDownDate = new Date(2026, 1, 21, 0, 0, 0); // month is 0-based (1 = Feb)

  setInterval(() => {
    getTimeDifference(countDownDate.getTime());
  }, 1000);
}, []);

  useEffect(() => {
    startCountDown();
  }, [startCountDown]);
  return (
    <div      
      className="
        relative w-full min-h-[100dvh]
        bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]
        bg-cover bg-center bg-no-repeat
        flex flex-col items-center justify-center
        text-center p-6 sm:p-12
        animate-fadeIn overflow-hidden
      "
      style={{
        "--bg-mobile": `url(${bgwelcomeMobile})`,
        "--bg-desktop": `url(${bgcountdate})`,
      }}
    >
      <Bubbles />
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 sm:gap-16 mb-4">         
        <h2 className="animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-lime-100 leading-tight font-kh drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                  
   {/* Mobile only */}
  <span className="block sm:hidden">
    <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-yellow-400 drop-shadow-lg mb-8 lg:mb-8 md:mb-8 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
  </h2>
  
         <p className="sm:[-webkit-text-stroke:.1px_#000000] animate-fade-in-up text-xl sm:text-2lg md:text-3xl  text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-4 px-4 sm:mb-8 sm:px-8 md:mb-8 md:px-8 lg:mb-8 lg:px-8 leading-relaxed font-moulpali">
         រាប់ថយក្រោយ
        </p>
        <p className="sm:[-webkit-text-stroke:.1px_#000000] animate-fade-in-up text-xl sm:text-2lg md:text-3xl  text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-4 px-4 sm:mb-8 sm:px-8 md:mb-8 md:px-8 lg:mb-8 lg:px-8 leading-relaxed font-moulpali">
         ថ្ងៃមង្គលការ
        </p>
    
  </span>

  {/* Tablet & up */}
  <span className="hidden sm:block">
    <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-yellow-400 drop-shadow-lg mb-4 lg:mb-8 md:mb-8 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
  </h2>
  
         <p className="sm:[-webkit-text-stroke:.1px_#000000] animate-fade-in-up text-xl sm:text-2lg md:text-3xl  text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-4 px-4 sm:mb-8 sm:px-8 md:mb-8 md:px-8 lg:mb-8 lg:px-8 leading-relaxed font-moulpali">
          រាប់ថយក្រោយ ទៅកាន់ថ្ងៃមង្គលការ
        </p>
    {/* <h2 className="hidden sm:block animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-4 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          រាប់ថយក្រោយ ទៅកាន់ថ្ងៃមង្គលការ
        </h2> */}
    
  </span>
        </h2>
        <div className="animate-fade-in-up flex justify-center gap-3 sm:gap-8">
            
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {countDownTime?.days}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-center animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-lime-100 mb-4 lg:mb-4 md:mb-4 leading-tight font-kh drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              ថ្ងៃ
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {countDownTime?.hours}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-center animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-lime-100 mb-4 lg:mb-4 md:mb-4 leading-tight font-kh drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              ម៉ោង
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {countDownTime?.minutes}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-center animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-lime-100 mb-4 lg:mb-4 md:mb-4 leading-tight font-kh drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              នាទី
            </span>
          </div>
          <div className="flex flex-col gap-5 relative">
            <div className="h-16 w-16 sm:w-32 sm:h-32 lg:w-40 lg:h-40 flex justify-between items-center bg-[#343650] rounded-lg">
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 !-left-[6px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-7xl sm:text-6xl text-3xl font-semibold text-white">
                {countDownTime?.seconds}
              </span>
              <div className="relative h-2.5 w-2.5 sm:h-3 sm:w-3 -right-[6px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-center animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-lime-100 mb-4 lg:mb-4 md:mb-4 leading-tight font-kh drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              វិនាទី
            </span>
          </div>
        </div>
      
    </div> 
    {/* <Link
          to="/qrscan"
          className="
            px-8 py-3 
            bg-white text-green-900 
            text-sm sm:text-base font-bold uppercase tracking-wider
            rounded-full shadow-xl 
            hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
            transition-all duration-300 ease-out font-battambang animate-bounce
          "
        >
          បើកទំព័របន្ទាប់ 
        </Link> */}
        <div className="flex justify-center gap-4">
  <Link
    to="/map"
    className="
      px-8 py-3 
      bg-white text-green-900 
      text-sm sm:text-base font-bold uppercase tracking-wider
      rounded-full shadow-xl 
      hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
      transition-all duration-300 ease-out font-kangrey
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
    to="/qrscan"
    className="
      px-8 py-3 
      bg-white text-green-900 
      text-sm sm:text-base font-bold uppercase tracking-wider
      rounded-full shadow-xl 
      hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
      transition-all duration-300 ease-out font-kangrey animate-bounce
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
