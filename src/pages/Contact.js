import bgcontact from "../assets/bgcontact.png";
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
        // navigate("/");
      } else if (e.deltaY < -50) {
        // scroll up
        navigate("/qrscan"); // change this to your desired route
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 50) {
        // swipe up
        // navigate("/");
      } else if (touchEndY - touchStartY > 50) {
        // swipe down
        navigate("/qrscan"); // change this to your desired route
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
  const contacts = [
    {
      label: "អសយដ្ឋាន",
      value: "ភូមិស្វាយតាមេឃ ឃុំកោះធំ(ខ) ស្រុកកោះធំ ខេត្តកណ្តាល ប្រទេសកម្ពុជា",
    },
    {
      label: "លេខទូរសព្ទ",
      value: [
        { name: "( កូនប្រុស )", number: "016571913" },
        { name: "( កូនស្រី )", number: "093720308" },
        { name: "( ប្អូនប្រុស )", number: "011636968" },
      ],
    },
    {
      label: "តេឡេក្រាម",
      value: [
        { name: "( កូនប្រុស )", link: "https://t.me/sornkimsry" },
        { name: "( កូនស្រី )", link: "https://t.me/SothearothVuthy" },
        { name: "( ប្អូនប្រុស )", link: "https://t.me/phisan" },
      ],
    },
  ];

  return (
    <div
      className="
        relative w-full h-screen
        bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]
        bg-cover bg-center bg-no-repeat
        flex flex-col items-center justify-center
        text-center p-6 sm:p-12
        overflow-hidden
      "
      style={{
        "--bg-mobile": `url(${bgwelcomeMobile})`,
        "--bg-desktop": `url(${bgcontact})`,
      }}
    >
      
      <Bubbles />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl p-6 sm:p-12">
        <h2 className="hidden md:block animate-fade-in-up text-3xl sm:text-4xl md:text-5xl font-kh text-[#d5c243] mb-6 drop-shadow-lg">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2>

        <p className="animate-fade-in-up text-xl sm:text-2lg md:text-2xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] mb-4 px-4 leading-relaxed font-moulpali drop-shadow-lg">
          ទំនាក់ទំនង កម្មវិធី
        </p>

        <div className="flex flex-col gap-6 w-full text-left">
  {contacts.map((item, idx) => (
    <div key={idx}>
      <p className="animate-fade-in-up font-bold text-lg text-green-900 sm:text-[#d5c243] md:text-[#d5c243] mb-2 font-moulpali drop-shadow-lg">
        {item.label}:
      </p>

      {Array.isArray(item.value) ? (
        <div className="flex flex-col gap-1 pl-4 animate-fade-in-up">
          {item.value.map((val, i) =>
            val.number ? (
              <a
                key={i}
                href={`tel:${val.number}`}
                className="text-white hover:text-[#d5c243] transition-colors font-battambang drop-shadow-lg"
              >
                <span className="text-green-900 sm:text-[#d5c243] md:text-[#d5c243]">{val.name}</span>: {val.number}
              </a>
            ) : (
              <a
                key={i}
                href={val.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#d5c243] transition-colors font-battambang drop-shadow-lg"
              >
                <span className="text-green-900 sm:text-[#d5c243] md:text-[#d5c243]">{val.name}</span>: {val.link}
              </a>
            )
          )}
        </div>
      ) : (
        <p className="text-white animate-fade-in-up pl-4 font-battambang drop-shadow-lg">{item.value}</p>
      )}
    </div>
  ))}
</div>


        <Link
          to="/"
          className="mt-8 px-8 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-out font-battambang animate-bounce"
        >
          ត្រឡប់ទៅទំព័រដើម
        </Link>
      </div>
    </div>
  );
}
