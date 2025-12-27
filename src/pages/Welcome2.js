import { useEffect} from 'react'
import { Link } from "react-router-dom";
import bgwelcome from "../assets/bgwelcome_temple.webp";
import bgwelcomeMobile from "../assets/mobile_bg.png";
import ring from "../assets/ring.png";
import Bubbles from "../components/Bubbles";
import Typewriter from "../components/Typewriter";

export default function Welcome2() {

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
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        
        <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-yellow-400 drop-shadow-lg mb-8 lg:mb-12 md:mb-12 leading-tight font-kh">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
</h2>

        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#e7d996] drop-shadow-lg mb-1 leading-tight font-moulpali">
          គឹមស្រ៊ី
        </h1>
        <img
          src={ring}
          alt="ring"
          className="animate-fade-in-up hover:scale-105 w-24 h-24 mb-1"
        />
        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#e7d996] drop-shadow-lg mb-8 leading-tight font-moulpali">
          សុធារ័ត្ឋ
        </h1>
        <p className="
  animate-fade-in-up
  text-xl sm:text-2lg md:text-2xl
  text-yellow-300
  mb-4 px-4 leading-relaxed
  font-kangrey
  sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
  sm:[-webkit-text-stroke:.1px_#000000]
">
  សូមគោរពអញ្ជើញ
</p>

        
        
        <h2 className="sm:drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]
  animate-fade-in-up text-base sm:text-xl md:text-xl lg:text-2xl text-yellow-400 mb-8 lg:mb-12 md:mb-12 leading-tight font-kh">
          <Typewriter text="ឈ្មោះអ្នកអញ្ជើញ" speed={90} delay={800} />
        </h2>


<Link
  to="/welcomespouse"
  className="
    px-8 py-3 
    bg-lime-950 text-yellow-400
    text-sm sm:text-base font-bold uppercase tracking-wider
    rounded-full shadow-xl 
    hover:scale-105 hover:bg-lime-900 hover:shadow-2xl 
    transition-all duration-300 ease-out font-moulpali animate-bounce
    inline-flex items-center gap-2
  "
>
  <span>បើកសំបុត្រអញ្ជើញ</span>
  <svg
    fill="#facc15"
    height="28px"
    width="28px"
    viewBox="0 0 128 128"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
  <g
    id="SVGRepo_tracerCarrier"
    strokeLinecap="round"
    strokeLinejoin="round"
  ></g>
  <g id="SVGRepo_iconCarrier">
    <path d="M32.9,110c0,0,0-3.3,0-3.8h47.5c-0.7,1.4-1.2,3-1.5,4.5c-0.4,2.1-0.2,4.1,0.3,6l-39.7-0.1C35.8,116.6,32.9,113.6,32.9,110 M85.4,24.4c0,6.8-0.1,67-0.1,73.8H39.9l28.4-23.8l-0.1-50.1C70.8,24.4,82.9,24.4,85.4,24.4 M89.8,116.7h-1.9 c-1.1-1.2-1.5-2.8-1.2-4.7c0.5-3.1,2.8-5.7,3.9-6.1l0,0c1.5-0.5,2.7-2,2.7-3.7l0.1-81.8c0-2.2-1.8-4-4-4c0,0-16.5,0-21.1,0 c0-3.9,0-9.2,0-9.2c0-1.6-0.9-3.1-2.4-3.7c-1.5-0.6-3.2-0.3-4.3,0.8L33.8,31.9c-4.9,4.8-8.7,14-8.7,20.8L24.9,110 c0,8,6.5,14.6,14.5,14.6l50.3,0.2c2.2,0,4-1.8,4-4v0C93.7,118.5,92,116.8,89.8,116.7" />
  </g>
  </svg>
</Link>

      </div>
    </div>
  );
}

