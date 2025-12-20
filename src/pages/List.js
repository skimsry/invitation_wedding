import bglist from "../assets/bglist.jpg";
import bgwelcomeMobile from "../assets/mobile_bg.png"; 
import Bubbles from "../components/Bubbles";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    let touchStartY = 0;

    const handleWheel = (e) => {
      if (e.deltaY > 50) {
        // scroll down
        navigate("/gallery");
      } else if (e.deltaY < -50) {
        // scroll up
        navigate("/date"); // change this to your desired route
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // swipe up
        navigate("/gallery");
      } else if (touchEndY - touchStartY > 50) {
        // swipe down
        navigate("/date"); // change this to your desired route
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
        fixed inset-0 w-full h-screen
        bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
      style={{
        "--bg-mobile": `url(${bgwelcomeMobile})`,
        "--bg-desktop": `url(${bglist})`,
      }}
    >
      {/* Blur only on desktop */}
      <div className="hidden md:block absolute inset-0 backdrop-blur-sm bg-white/5 z-0"></div>
      <Bubbles />
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* ✅ Scrollable content layer */}
      <div
        className="
          relative z-10
          h-full w-full
          overflow-y-auto md:overflow-hidden
          flex flex-col items-center
          justify-start md:justify-center
          px-4 py-6 sm:px-6
        "
      >
        <div className="flex flex-col items-center w-full max-w-5xl text-center mt-24 sm:mt-0 md:mt-0 lg:mt-0">
          <h2 className="hidden md:block animate-fade-in-up text-3xl sm:text-4xl md:text-5xl font-kh text-[#d5c243] mb-6 drop-shadow-lg">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </h2>

          <p className="animate-fade-in-up text-lg sm:text-xl md:text-2xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] mb-4 leading-relaxed font-moulpali drop-shadow-lg">
            កម្មវិធីមង្គលការ
          </p>

          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Left */}
            <div className="col-span-2 text-center animate-fade-in-up">
              <h3 className="text-left text-base md:text-xl font-kh text-green-900 sm:text-white mb-3 drop-shadow-lg">
                កម្មវិធីពេលព្រឹក
              </h3>
          <dl>
  <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៦:៣០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ជួបជុំភ្ញៀវកិត្តិយស ដើម្បីរៀបចំពិធីហែជំនូន
  </dd>
</dl>
<dl>
  <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៧:០០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីហែជំនូនជូនផ្កាស្លា និយាយជើងការ និងជូនបណ្តាការ
  </dd>
</dl>
<dl>
  <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៨:០០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីបំពាក់ចិញ្ចៀន និងពិសាស្លា
  </dd>
</dl>
<dl>
  <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៩:០០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត
  </dd>
</dl>
<dl>
  <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ១០:០០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីកាត់សក់បង្កក់សិរី
  </dd>
</dl>
<div className="block md:hidden">
  <dl>
    <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed drop-shadow-lg mb-1">
      ម៉ោង ១១:១៥ ព្រឹក
    </dt>
    <dd className="font-battambang text-left text-green-800 leading-relaxed drop-shadow-lg mb-1">
      ពិធីសំពះផ្ទឹម សែនចងដៃ បង្វិលពពិល ព្រះថោងតោងស្បៃនាងនាគ
    </dd>
  </dl>

  <dl>
    <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed drop-shadow-lg mb-1">
      ម៉ោង ១១:៥០ ព្រឹក
    </dt>
    <dd className="font-battambang text-left text-green-800 leading-relaxed drop-shadow-lg mb-1">
      អញ្ជើញភ្ញៀវកិត្តិយសពិសារភោជនាហារពេលថ្ងៃត្រង់
    </dd>
  </dl>
</div>

             
            </div>

            {/* Right */}
            <div className="col-span-2 text-center animate-fade-in-up">
                        
            <dl className="hidden sm:block">
  <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ១១:១៥ ព្រឹក
  </dt>
  <dd className="font-battambang text-left text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ពិធីសំពះផ្ទឹម សែនចងដៃ បង្វិលពពិល ព្រះថោងតោងស្បៃនាងនាគ
  </dd>
</dl>

<dl className="hidden sm:block">
  <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ១១:៥០ ព្រឹក
  </dt>
  <dd className="font-battambang text-left text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    អញ្ជើញភ្ញៀវកិត្តិយសពិសារភោជនាហារពេលថ្ងៃត្រង់
  </dd>
</dl>

            <h3 className="text-lg md:text-xl font-kh text-green-900 sm:mb-4 md:mb-4 mb-2 sm:text-white md:text-white drop-shadow-lg sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] mt-4 text-left">
              កម្មវិធីពេលល្ងាច
            </h3>
            <dl>
  <dt className="text-left font-battambang font-bold italic text-green-800 leading-relaxed sm:text-[#d5c243] md:text-[#d5c243] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ម៉ោង ០៥ៈ០០ ល្ងាច
  </dt>
  <dd className="font-battambang text-left text-green-800 leading-relaxed sm:text-[#e7d996] md:text-[#e7d996] drop-shadow-lg mb-1 sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
    ទទួលបដិសណ្ឋារកិច្ចភ្ញៀវកិត្តិយសពិសារភោជនាហាពេលល្ងាច នៅគេហដ្ឋានខាងស្រី ស្រុកកោះធំ (ស្ពានទី៤៦ ក្បែរវត្តតាដួង)
  </dd>
</dl>

          
          
            </div>
          </div>

          <Link
            to="/gallery"
            className="mt-6 mb-10 px-8 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 transition-all duration-300 font-battambang animate-bounce"
          >
            បើកវិចិត្រសាល
          </Link>
        </div>
      </div>
    </div>
  );
}
