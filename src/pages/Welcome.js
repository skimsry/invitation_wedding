import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgwelcome from "../assets/bgwelcome_temple.png";
import bgwelcomeMobile from "../assets/mobile_bg.png";
import ring from "../assets/ring.png";
import Bubbles from "../components/Bubbles";
import Typewriter from "../components/Typewriter";

export default function Welcome() {
  const navigate = useNavigate();

  useEffect(() => {
  const handleWheel = (e) => {
    if (e.deltaY > 50) { // scroll down
      navigate("/welcomespouse");
    }
  };

  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY;
  };
  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchStartY - touchEndY > 50) { // swipe up
      navigate("/welcomespouse");
    }
  };

  let touchStartY = 0;
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
        animate-fadeIn overflow-auto
      "
      style={{
        "--bg-mobile": `url(${bgwelcomeMobile})`,
        "--bg-desktop": `url(${bgwelcome})`,
      }}
    >
      <Bubbles />
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-8 lg:mb-12 md:mb-12 leading-tight font-kh">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2>
        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-green-900 sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 leading-tight font-moulpali">
          គឹមស្រ៊ី
        </h1>
        <img
          src={ring}
          alt="ring"
          className="animate-fade-in-up hover:scale-105 w-24 h-24 mb-1"
        />
        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-green-900 sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-8 leading-tight font-moulpali">
          សុធារ័ត្ឋ
        </h1>
        <p className="animate-fade-in-up text-xl sm:text-2lg md:text-2xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] mb-4 px-4 leading-relaxed font-battambang">
          សូមគោរពអញ្ជើញ
        </p>

        <h2 className="animate-fade-in-up text-xl sm:text-xl md:text-xl lg:text-2xl text-lime-100 mb-8 lg:mb-12 md:mb-12 leading-tight font-kh">
          <Typewriter text="លោក វរសេនីយ៍ត្រី សន គឹមស្រ៊ី" speed={90} delay={800} />
        </h2>

        <Link
          to="/welcomespouse"
          className="
            px-8 py-3 
            bg-white text-green-900 
            text-sm sm:text-base font-bold uppercase tracking-wider
            rounded-full shadow-xl 
            hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
            transition-all duration-300 ease-out font-battambang animate-bounce
          "
        >
          បើកសំបុត្រអញ្ជើញ
        </Link>
      </div>
    </div>
  );
}
