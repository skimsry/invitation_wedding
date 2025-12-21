import bgwelcomeparents from "../assets/bgwelcome_parents.png";
import bgwelcomeMobile from "../assets/bgwelcome_parents2_mobile.png"; 
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";


export default function WelcomeParents() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   let touchStartY = 0;

  //   const handleWheel = (e) => {
  //     if (e.deltaY > 50) {
  //       // scroll down
  //       navigate("/spouse");
  //     } else if (e.deltaY < -50) {
  //       // scroll up
  //       navigate("/welcomespouse"); // change this to your desired route
  //     }
  //   };

  //   const handleTouchStart = (e) => {
  //     touchStartY = e.touches[0].clientY;
  //   };

  //   const handleTouchEnd = (e) => {
  //     const touchEndY = e.changedTouches[0].clientY;
  //     if (touchStartY - touchEndY > 50) {
  //       // swipe up
  //       navigate("/spouse");
  //     } else if (touchEndY - touchStartY > 50) {
  //       // swipe down
  //       navigate("/welcomespouse"); // change this to your desired route
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
        "--bg-desktop": `url(${bgwelcomeparents})`,
      }}
    >
       <Bubbles />
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        
       
<div className="w-full grid grid-cols-1 md:grid-cols-2">
  {/* Left Div */}
  <div></div>

  {/* Right Div */}
  <div className="text-center animate-fade-in-up">
  <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-4 lg:mb-12 md:mb-12 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
  </h2>
  {/* Parents Section */}
<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:mb-10 sm:px-4 md:mb-10 md:px-4 mb-2 px-2">

  {/* Left Div */}
  <div className="text-center animate-fade-in-up">
    <h3 className="text-lg md:text-xl font-kh text-green-900 mb-2 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
      ឪពុកម្តាយ កូនប្រុស
    </h3>
    <p className="font-battambang text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
      លោក សន ស៊ីម
      <br />
      លោកស្រី តូច សាវី
    </p>
  </div>

  {/* Right Div */}
  <div className="text-center animate-fade-in-up">
    <h3 className="text-lg md:text-xl font-kh text-green-900 mb-2 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
      ឪពុកម្តាយ កូនស្រី
    </h3>
    <p className="font-battambang text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
      លោក រឿន វុទ្ធី
      <br />
      លោកស្រី ភន គន្ធា
    </p>
  </div>

</div>
<p className="animate-fade-in-up text-xl sm:text-2lg md:text-2xl   text-green-900 sm:text-white md:text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:mb-4 sm:px-4 md:mb-4 md:px-4 leading-relaxed font-kh">
          សូមគោរពអញ្ជើញ
        </p>
  <p className="font-battambang text-green-900 sm:text-white md:text-white leading-relaxed drop-shadow-lg mb-16 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] shadow-white/80">
      ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា ចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ កូនប្រុស កូនស្រី របស់យើងខ្ញុំ។
    </p>
  {/* <Link
          to="/spouse"
          className="
            px-8 py-3 
    bg-white text-green-900 
    text-sm sm:text-base font-bold uppercase tracking-wider
    rounded-full shadow-xl 
    transition-all duration-300 ease-out font-battambang
    animate-bounce inline-block
          "
        >
          បើកទំព័របន្ទាប់
        </Link> */}
        <div className="flex justify-center gap-4">
  <Link
    to="/welcomespouse"
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
    to="/spouse"
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

        
      </div>
     
      
    </div>
  );
}