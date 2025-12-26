import bgwelcomespouse from "../assets/bgwelcome_spouse.webp";
import bgwelcomeMobile from "../assets/bgwelcome_spouse2_mobile.png"; 
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import gb from "../assets/gb.png";
import Bubbles from "../components/Bubbles";


export default function WelcomeSpouse() {
  const inviteCode = localStorage.getItem("inviteCode");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   let touchStartY = 0;

  //   const handleWheel = (e) => {
  //     if (e.deltaY > 50) {
  //       // scroll down
  //       navigate("/welcomeparent");
  //     } else if (e.deltaY < -50) {
  //       // scroll up
  //       navigate("/"); // change this to your desired route
  //     }
  //   };

  //   const handleTouchStart = (e) => {
  //     touchStartY = e.touches[0].clientY;
  //   };

  //   const handleTouchEnd = (e) => {
  //     const touchEndY = e.changedTouches[0].clientY;
  //     if (touchStartY - touchEndY > 50) {
  //       // swipe up
  //       navigate("/welcomeparent");
  //     } else if (touchEndY - touchStartY > 50) {
  //       // swipe down
  //       navigate("/"); // change this to your desired route
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
        "--bg-desktop": `url(${bgwelcomespouse})`,
      }}
    >
      
       <Bubbles />
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        
       
<div className="w-full grid grid-cols-1 md:grid-cols-2">
  <div className="text-center animate-fade-in-up">
  <h2 className="whitespace-nowrap animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-yellow-400 drop-shadow-lg mb-4 lg:mb-12 md:mb-12 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
  </h2>
  

<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-5 gap-6 sm:mb-10 sm:px-4 md:mb-10 md:px-4 mb-2 px-2">

  {/* Left Div */}
  <div className="col-span-2 text-center animate-fade-in-up">
    <h3 className="text-lg md:text-xl font-kh mb-2 sm:mb-4 md:mb-4 text-[#d5c243] drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
      កូនប្រុសនាម
    </h3>
    
    {/* Mobile only */}
<p className="text-lg font-kh text-[#e7d996] leading-relaxed drop-shadow-lg mb-2 md:hidden">
  សន គឹមស្រ៊ី
</p>

{/* Tablet / Desktop only */}
<div className="hidden md:block">
  <p className="text-lg md:text-xl font-kh text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-2 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    សន
  </p>
  <p className="text-lg md:text-xl font-kh text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    គឹមស្រ៊ី
  </p>
</div>
  </div>

  {/* Middle Div (Smaller) */}
  <div className="hidden lg:block col-span-1 text-center animate-fade-in-up">
  <img src={gb} alt="ring" className="animate-fade-in-up hover:scale-105 mb-1"/>
</div>

  {/* Right Div */}
  <div className="col-span-2 text-center animate-fade-in-up">
    <h3 className="text-lg md:text-xl font-kh text-[#d5c243] sm:mb-4 md:mb-4 mb-2 drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
      កូនស្រីនាម
    </h3>
    {/* Mobile only */}
<p className="text-lg font-kh text-[#e7d996] leading-relaxed drop-shadow-lg mb-2 md:hidden">
  វុទ្ធី សុធារ័ត្ឋ
</p>

{/* Tablet / Desktop only */}
<div className="hidden md:block">
  <p className="text-lg md:text-xl font-kh text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-2 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    វុទ្ធី
  </p>
  <p className="text-lg md:text-xl font-kh text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    សុធារ័ត្ឋ
  </p>
</div>
  </div>

</div>
 <p className="font-battambang text-white leading-relaxed drop-shadow-lg mb-2 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] shadow-white/80">
      ដែលប្រព្រឹត្តទៅ
    </p>
<p className="animate-fade-in-up text-lg sm:text-2lg md:text-2xl  text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:mb-4 sm:px-4 md:mb-4 md:px-4 leading-relaxed font-kh">
          ថ្ងៃសៅរ៍ ទី២១ ខែកុម្ភៈ ឆ្នាំ២០២៦
        </p>
        <p className="font-battambang text-white leading-relaxed drop-shadow-lg mb-2 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] shadow-white/80">
      ចាប់ពីម៉ោង៥ ល្ងាច
    </p>
  

  <p className="md:hidden text-lg md:text-xl font-kh text-[#e7d996] leading-relaxed drop-shadow-lg mb-2 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    នៅគេហដ្ឋានខាងស្រី ស្រុកកោះធំ 
  </p>
  <p className="md:hidden text-lg md:text-xl font-kh text-[#e7d996] leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    (ស្ពានទី៤៦ ក្បែរវត្តតាដួង)
  </p>
  <p className="hidden md:block text-lg md:text-xl font-kh text-[#e7d996] leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    នៅគេហដ្ឋានខាងស្រី ស្រុកកោះធំ (ស្ពានទី៤៦ ក្បែរវត្តតាដួង)
  </p>



  <div className="pb-8 pt-4 flex justify-center">
  <a
    href="https://maps.app.goo.gl/s5vf9Bsu8oqJjbsP8"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-4 py-3
      bg-lime-950 text-yellow-400 
      text-sm sm:text-base font-bold uppercase tracking-wider
      rounded-full shadow-xl 
      hover:scale-105 hover:bg-lime-900 hover:shadow-2xl 
      transition-all duration-300 ease-out font-moulpali
      flex items-center justify-center gap-2
      max-w-[280px]
    "
  >
    គេហដ្ឋានខាងកូនស្រី
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
  </a>
</div>

<div className="flex justify-center gap-4">
  <Link
    to={`/${inviteCode}`}
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
    to="/welcomeparent"
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

        
      </div>
     
      
    </div>
  );
}