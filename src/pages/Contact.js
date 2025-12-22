import bgcontact from "../assets/bgcontact.webp";
import bgwelcomeMobile from "../assets/bgwelcome_contact_mobile.webp"; 
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
  //       // navigate("/");
  //     } else if (e.deltaY < -50) {
  //       // scroll up
  //       navigate("/qrscan"); // change this to your desired route
  //     }
  //   };

  //   const handleTouchStart = (e) => {
  //     touchStartY = e.touches[0].clientY;
  //   };

  //   const handleTouchEnd = (e) => {
  //     const touchEndY = e.changedTouches[0].clientY;
  //     if (touchStartY - touchEndY > 50) {
  //       // swipe up
  //       // navigate("/");
  //     } else if (touchEndY - touchStartY > 50) {
  //       // swipe down
  //       navigate("/qrscan"); // change this to your desired route
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
        { name: "( កូនប្រុស )", link: "https://t.me/sornkimsry",call:"SORN KIMSRY" },
        { name: "( កូនស្រី )", link: "https://t.me/SothearothVuthy",call:"VUTHY SOTHEAROTH" },
        { name: "( ប្អូនប្រុស )", link: "https://t.me/phisan",call:"SORN KIMSAN" },
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
      <div className="hidden md:block absolute inset-0 backdrop-blur-sm bg-black/20 z-0" />
      <Bubbles />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-5xl p-6 sm:p-12">
        <h2 className="hidden md:block animate-fade-in-up text-3xl sm:text-4xl md:text-5xl font-kh text-[#d5c243] mb-6 drop-shadow-lg">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2>

        {/* <p className="animate-fade-in-up text-xl sm:text-2lg md:text-2xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] mb-4 px-4 leading-relaxed font-moulpali drop-shadow-lg">
          ទំនាក់ទំនង កម្មវិធី
        </p> */}
        <p className="animate-fade-in-up text-xl sm:text-2xl md:text-3xl text-green-900 sm:text-[#d5c243] md:text-[#d5c243] mb-4 leading-relaxed font-moulpali drop-shadow-lg">
  ទំនាក់ទំនង កម្មវិធី
</p>


        <div className="flex flex-col gap-6 w-full text-left pb-8">
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
                
                <span className="text-green-900 sm:text-[#d5c243] md:text-[#d5c243]">{val.name}</span>: {val.call}
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


        {/* <Link
          to="/"
          className="mt-8 px-8 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-out font-battambang animate-bounce"
        >
          ត្រឡប់ទៅទំព័រដើម
        </Link> */}
          <div className="flex justify-center gap-4">
  <Link
    to="/qrscan"
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
    to="/thanks"
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
  );
}
