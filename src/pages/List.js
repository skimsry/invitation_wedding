import bglist from "../assets/bglist.webp";
import bgwelcomeMobile from "../assets/bgwelcome_list_mobile.png"; 
import Bubbles from "../components/Bubbles";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   let touchStartY = 0;

  //   const handleWheel = (e) => {
  //     if (e.deltaY > 50) {
  //       // scroll down
  //       navigate("/gallery");
  //     } else if (e.deltaY < -50) {
  //       // scroll up
  //       navigate("/date"); // change this to your desired route
  //     }
  //   };

  //   const handleTouchStart = (e) => {
  //     touchStartY = e.touches[0].clientY;
  //   };

  //   const handleTouchEnd = (e) => {
  //     const touchEndY = e.changedTouches[0].clientY;
  //     if (touchStartY - touchEndY > 50) {
  //       // swipe up
  //       navigate("/gallery");
  //     } else if (touchEndY - touchStartY > 50) {
  //       // swipe down
  //       navigate("/date"); // change this to your desired route
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
                "--bg-desktop": `url(${bglist})`,
      }}
    >
      {/* Blur only on desktop */}
      {/* <div className="hidden md:block absolute inset-0 backdrop-blur-sm bg-white/5 z-0"></div> */}
      <Bubbles />
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* <h2 className="hidden md:block sm:block animate-fade-in-up text-3xl sm:text-4xl md:text-5xl font-kh text-[#d5c243] mb-6 drop-shadow-lg">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </h2>

          
          <p className="animate-fade-in-up text-xl sm:text-2xl md:text-3xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] mb-4 leading-relaxed font-moulpali drop-shadow-lg">
  កម្មវិធីមង្គលការ
</p> */}
<h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-yellow-400 drop-shadow-lg mb-4 lg:mb-8 md:mb-8 leading-tight font-kh sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
  </h2>
  
         <p className="sm:[-webkit-text-stroke:.1px_#000000] animate-fade-in-up text-xl sm:text-2lg md:text-3xl  text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-4 px-4 sm:mb-8 sm:px-8 md:mb-8 md:px-8 lg:mb-8 lg:px-8 leading-relaxed font-moulpali">
          កម្មវិធីមង្គលការ
        </p>
<p className="animate-fade-in-up text-lg sm:text-2lg md:text-2xl  text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mb-2 sm:mb-4 sm:px-4 md:mb-4 md:px-4 leading-relaxed font-moulpali">
          ថ្ងៃសៅរ៍ ទី២១ ខែកុម្ភៈ ឆ្នាំ២០២៦
        </p>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Left */}
            <div className="col-span-2 text-center animate-fade-in-up">
              <h3 className="text-lg md:text-xl font-kangrey text-white sm:mb-4 md:mb-4 mb-2 drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mt-4 text-left">
                កម្មវិធីពេលព្រឹក
              </h3>
          <dl>
  <dt className="text-left font-battambang font-bold italic text-white leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៦:៣០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left indent-8 text-[#e7d996] leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ជួបជុំភ្ញៀវកិត្តិយស ដើម្បីរៀបចំពិធីហែជំនូន
  </dd>
</dl>
<dl>
  <dt className="text-left font-battambang font-bold italic text-white leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៧:០០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left indent-8 text-[#e7d996] leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីហែជំនូនជូនផ្កាស្លា (កំណត់)
  </dd>
</dl>
<dl>
  <dt className="text-left font-battambang font-bold italic text-white leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៨:០០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left indent-8 text-[#e7d996] leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីគោរពសំពះកុងម៉ា 
  </dd>
</dl>
<dl>
  </dl>

<dl>
  <dt className="text-left font-battambang font-bold italic text-white leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៩:០០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left indent-8 text-[#e7d996] leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីកាត់សក់បង្កក់សិរី
  </dd>
</dl>
<dl>
  <dt className="text-left font-battambang font-bold italic text-white leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ១០:០០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left indent-8 text-[#e7d996] leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីបំពាក់ចិញ្ចៀន
  </dd>
</dl>

  <dl>
    <dt className="text-left font-battambang font-bold italic text-white leading-relaxed drop-shadow-lg mb-1">
      ម៉ោង ១១:០០ ថ្ងៃត្រង់
    </dt>
    <dd className="font-battambang text-left indent-8 text-[#e7d996] leading-relaxed drop-shadow-lg mb-1">
      ពិធីសំពះផ្ទឹម សែនចងដៃ បង្វិលពពិល ព្រះថោងតោងស្បៃនាងនាគ
    </dd>
  </dl>    

  <dl>
    <dt className="text-left font-battambang font-bold italic text-white leading-relaxed drop-shadow-lg mb-1">
      ម៉ោង ១២:០០ ថ្ងៃត្រង់
    </dt>
    <dd className="font-battambang text-left indent-8 text-[#e7d996] leading-relaxed drop-shadow-lg mb-1">
      អញ្ជើញភ្ញៀវកិត្តិយសពិសារភោជនាហារពេលថ្ងៃត្រង់
    </dd>
  </dl>

             
            </div>

            {/* Right */}
            <div className="col-span-2 text-center animate-fade-in-up">

            <h3 className="text-lg md:text-xl font-kangrey text-white sm:mb-4 md:mb-4 mb-2 drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mt-4 text-left">
              កម្មវិធីពេលល្ងាច
            </h3>
            <dl>
  <dt className="text-left font-battambang font-bold italic text-white leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៥:០០ ល្ងាច
  </dt>
  <dd className="font-battambang text-left indent-8 text-[#e7d996] leading-relaxed drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ទទួលបដិសណ្ឋារកិច្ចភ្ញៀវកិត្តិយសពិសារភោជនាហាពេលល្ងាច នៅគេហដ្ឋានខាងស្រី ស្រុកកោះធំ (ស្ពានទី៤៦ ក្បែរវត្តតាដួង)
  </dd>
</dl>

          
          
            </div>
          </div>

          {/* <Link
            to="/gallery"
            className="mt-6 mb-10 px-8 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 transition-all duration-300 font-battambang animate-bounce"
          >
            បើកវិចិត្រសាល
          </Link> */}
          <div className="flex justify-center gap-4 pb-16">
  <Link
    to="/date"
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
    to="/gallery"
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
