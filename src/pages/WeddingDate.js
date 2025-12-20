import bgdate from "../assets/bgdate.png";
import bgwelcomeMobile from "../assets/mobile_bg.png"; 
import Typewriter from "../components/Typewriter";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";

export default function WeddingDate() {
  const navigate = useNavigate();

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (e.deltaY > 50) {
        // scroll down
        navigate("/list");
      } else if (e.deltaY < -50) {
        // scroll up
        navigate("/spouse"); // change this to your desired route
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // swipe up
        navigate("/list");
      } else if (touchEndY - touchStartY > 50) {
        // swipe down
        navigate("/spouse"); // change this to your desired route
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
        "--bg-desktop": `url(${bgdate})`,
      }}
    >
       <Bubbles />
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-4 lg:mb-8 md:mb-8 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
  </h2>
         <p className="italic animate-fade-in-up text-xl sm:text-2lg md:text-2xl  text-green-900 sm:text-[#d5c243] md:text-[#d5c243] sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-4 px-4 sm:mb-8 sm:px-8 md:mb-8 md:px-8 lg:mb-8 lg:px-8 leading-relaxed font-battambang">
          ថ្ងៃខែឆ្នាំកម្មវិធី
        </p>
        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-green-900 sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-4 px-4 sm:mb-8 sm:px-8 md:mb-8 md:px-8 lg:mb-8 lg:px-8  leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          <Typewriter
    text="២១"
    speed={90}
    delay={800}
  />
        </h1>
        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-green-900 sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-4 px-4 sm:mb-8 sm:px-8 md:mb-8 md:px-8 lg:mb-8 lg:px-8  leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          
          <Typewriter
    text="កុម្ភៈ"
    speed={90}
    delay={800}
  />
        </h1>
        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-green-900 sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-4 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          
          <Typewriter
    text="២០២៦"
    speed={90}
    delay={800}
  />
        </h1>
        <p className="italic animate-fade-in-up text-xl sm:text-2lg md:text-2xl  text-green-900 sm:text-[#d5c243] md:text-[#d5c243] sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-8 px-8 leading-relaxed font-battambang">
          ចាប់ពីម៉ោង៥ ល្ងាច
        </p>
        
        
        <Link
          to="/list"
          className="
            px-8 py-3 
            bg-white text-green-900 
            text-sm sm:text-base font-bold uppercase tracking-wider
            rounded-full shadow-xl 
            hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
            transition-all duration-300 ease-out font-battambang animate-bounce
          "
        >
          កម្មវិធីមង្គលការ
        </Link>
      </div>
    
      
    </div>
  );
}