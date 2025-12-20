import bgwelcomeparents from "../assets/bgwelcome_parents.png";
import bgwelcomeMobile from "../assets/mobile_bg.png"; 
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bubbles from "../components/Bubbles";


export default function WelcomeParents() {
  const navigate = useNavigate();

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (e.deltaY > 50) {
        // scroll down
        navigate("/spouse");
      } else if (e.deltaY < -50) {
        // scroll up
        navigate("/welcomespouse"); // change this to your desired route
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // swipe up
        navigate("/spouse");
      } else if (touchEndY - touchStartY > 50) {
        // swipe down
        navigate("/welcomespouse"); // change this to your desired route
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
  <Link
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
        </Link>
  </div>

</div>

        
      </div>
     
      
    </div>
  );
}