import bgscan from "../assets/bgscan.png";
import bgwelcomeMobile from "../assets/mobile_bg.png"; 
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import dollar from "../assets/dollar.jpg";
import acleda from "../assets/acleda.jpg";
import Bubbles from "../components/Bubbles";
export default function ScanMoney() {
  const navigate = useNavigate();

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (e.deltaY > 50) {
        // scroll down
        navigate("/contact");
      } else if (e.deltaY < -50) {
        // scroll up
        navigate("/countdown"); // change this to your desired route
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // swipe up
        navigate("/contact");
      } else if (touchEndY - touchStartY > 50) {
        // swipe down
        navigate("/countdown"); // change this to your desired route
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
        "--bg-desktop": `url(${bgscan})`,
      }}
    >
      <Bubbles />
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center w-full">
        
       
<div className="w-full grid grid-cols-1 md:grid-cols-2">
  <div className="text-center animate-fade-in-up">
  <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-4 lg:mb-12 md:mb-12 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
  ចំណងដៃឌីជីថល
  </h2>
  

<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-6 sm:mb-10 sm:px-4 md:mb-10 md:px-4 mb-2 px-2">

  {/* Left Div */}
  <div className="col-span-2 text-center animate-fade-in-up">
    <h3 className="text-lg md:text-xl font-kh text-green-900 mb-2 sm:mb-4 md:mb-4 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
      Acleda QR (៛)($)
    </h3>
<img
  src={acleda}
  alt="Acleda QR Scan"
  className="mx-auto animate-fade-in-up hover:scale-105 mb-4 w-48 h-48 rounded-xl border-2 border-gray-300"
/>

  {/* <p className="text-lg md:text-xl font-kh text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-2 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    KIMSRY SORN 
  </p> */}
  <p className="hidden md:block text-lg md:text-xl font-kh text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2">
  KIMSRY SORN 
</p>

  </div>

  {/* Right Div */}
  <div className="col-span-2 text-center animate-fade-in-up">
    <h3 className="text-lg md:text-xl font-kh text-green-900 sm:mb-4 md:mb-4 mb-2 sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
       ABA QR ($)
    </h3>
   <div className="text-center pb-2">
  <img
    src={dollar}
    alt="ABA QR Scan $"
    className="mx-auto animate-fade-in-up hover:scale-105 mb-1 w-48 h-48 rounded-xl border-2 border-gray-300"
  />
</div>

  <p className="hidden md:block text-lg md:text-xl font-kh text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-2 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    SORN KIMSRY <br/>
    000 886 505
  </p>
  
  </div>

</div>
 
  <div className="pb-8 flex justify-center">
  <a
    href="https://acledabank.com.kh/acleda?payment_data=qWY5B2SAUfIhLblxzOtfu5ckLzMHjaSki6Ru0bsOyNK+ylPBgZ0sHH6BeGUscKoE6vI2UzRWmc+Od5kkwlR0bWp0xj4HrVrqNi0p/TSGrh31nNQIsTsZ4NR/dRObjrLeZoXr/rfuXF3K0C8aE6ndR6wwAdG4SiEdmR9DcGdA3MCq91od83tqJKC15TFuS/QtxctV9mQNqjAompzuZ0TJ+2pqgncagiRAQ777F9M5kks=&key=khqr"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-4 py-3
      bg-white text-green-900 
      text-sm sm:text-base font-bold uppercase tracking-wider
      rounded-full shadow-xl 
      hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
      transition-all duration-300 ease-out font-battambang animate-bounce
      flex items-center justify-center gap-2
      max-w-[280px]
    "
  >
    ឬ ចុចដើម្បីផ្ញើរចំណងដៃ
    <svg fill="#2c8d02" width="36px" height="36px" viewBox="-1.7 0 20.4 20.4" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg" stroke="#2c8d02"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.844 1.754a2.249 2.249 0 0 0-.556-1.477l-.001-.002a3.02 3.02 0 0 0-.835-.665l-.003-.002a3.498 3.498 0 0 0-.866-.313H9.31a3.78 3.78 0 0 0-.795-.083 2.849 2.849 0 0 1-.475-.037 1.8 1.8 0 0 1-.494-.158l-.002-.001a1.17 1.17 0 0 1-.371-.298L7.172 9a.733.733 0 0 1-.175-.44.749.749 0 0 1 .421-.63 2.157 2.157 0 0 1 1.11-.297 2.283 2.283 0 0 1 .391.066l.049.01a2.479 2.479 0 0 1 .473.166 1.33 1.33 0 0 1 .381.261.792.792 0 1 0 1.118-1.12 2.902 2.902 0 0 0-.85-.585 3.996 3.996 0 0 0-.785-.268h-.001l-.008-.002v-.786a.792.792 0 1 0-1.583 0v.763a3.557 3.557 0 0 0-1.14.454 2.328 2.328 0 0 0-1.159 1.967 2.296 2.296 0 0 0 .529 1.44 2.724 2.724 0 0 0 .894.717 3.342 3.342 0 0 0 .942.305 4.398 4.398 0 0 0 .736.059 2.202 2.202 0 0 1 .46.046 1.927 1.927 0 0 1 .467.168 1.431 1.431 0 0 1 .382.308.674.674 0 0 1 .165.436c0 .097 0 .324-.385.573a2.182 2.182 0 0 1-1.132.314 3.515 3.515 0 0 1-.494-.06 2.381 2.381 0 0 1-.459-.148h-.001a.953.953 0 0 1-.356-.274.792.792 0 1 0-1.197 1.037 2.516 2.516 0 0 0 .967.708 3.799 3.799 0 0 0 .774.237h.007v.783a.792.792 0 1 0 1.583 0v-.79a3.581 3.581 0 0 0 1.17-.479 2.215 2.215 0 0 0 1.107-1.9z"></path></g></svg>
  </a>
</div>


  <Link
          to="/contact"
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
        </Link>
  </div>
</div>

        
      </div>
     
      
    </div>
  );
}