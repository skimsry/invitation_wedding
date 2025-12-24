import { Link } from "react-router-dom";
import bgwelcome from "../assets/bgwelcome_temple_thank.webp";
import bgwelcomeMobile from "../assets/bgwelcome_gallery.png";
import Bubbles from "../components/Bubbles";
import male from "../assets/thank.png";

export default function Thanks() {
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
      {/* <div className="hidden md:block absolute inset-0 backdrop-blur-sm bg-black/20 z-0" /> */}
      <Bubbles />
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-yellow-400 drop-shadow-lg mb-8 lg:mb-12 md:mb-12 leading-tight font-kh">
  សិរីមង្គលអាពាហ៍ពិពាហ៍
</h2>
        <img
  src={male}
  alt="profile"
  className="
    relative
    w-24 h-24 sm:w-48 sm:h-48 md:w-48 md:h-48
    object-cover
    rounded-full
    shadow-xl
    border-2 border-white mb-8 lg:mb-12 md:mb-12
  "
/>

        {/* <p className="animate-fade-in-up text-xl sm:text-2lg md:text-2xl   text-green-900 sm:text-white md:text-white sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] sm:mb-4 sm:px-4 md:mb-4 md:px-4 leading-relaxed font-kh">
          សេចក្តីថ្លៃងអំណរគុណ និងសូមអភ័យទោស
        </p> */}
        {/* Mobile text */}
<p className="
  block sm:hidden
  animate-fade-in-up
  text-lg pb-2
  text-white
  leading-relaxed
  font-moulpali
">
  ការអំណរគុណ និងអភ័យទោស
</p>

{/* Desktop / tablet text */}
<p className="
  hidden sm:block
  animate-fade-in-up
  text-xl sm:text-2lg md:text-2xl
  text-white
  sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
  md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
  sm:mb-4 sm:px-4 md:mb-4 md:px-4
  leading-relaxed
  font-moulpali
">
  សេចក្តីថ្លៃងអំណរគុណ និងសូមអភ័យទោស
</p>

  
    <p className="
  
  font-battambang
  text-white
  leading-relaxed
  drop-shadow-lg mb-8
  sm:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
  md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]
  shadow-white/80
  
  indent-[2em]
">
  យើងខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះការអញ្ជើញចូលរួមជា ភ្ញៀវកិត្តិយស ក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ ។ យើងខ្ញុំសូមអភ័យទោស ដោយពុំបានជួបអញ្ជើញដោយផ្ទាល់ ឬការសរសេរឈ្មោះរបស់ភ្ញៀវកិត្តិយសមិនបានត្រឹមត្រូវ ឬពុំបានសរសេរឈ្មោះ ។ យើងខ្ញុំសូមគោរពជូនពរជ័យ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងភ្ញៀវកិត្តិយសទាំងអស់មានសុខភាពល្អ និងទទួលបានភាពជោគជ័យគ្រប់ភារកិច្ច ។ សូមអរគុណ !
</p>




        <div className="flex justify-center gap-4">
  <Link
    to="/contact"
    className="
      px-8 py-3 
      bg-white text-green-900 
      text-sm sm:text-base font-bold uppercase tracking-wider
      rounded-full shadow-xl 
      hover:scale-105 hover:bg-gray-100 hover:shadow-2xl 
      transition-all duration-300 ease-out  font-kangrey
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
    to="/"
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
    <span>ទំព័រដើម</span>
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
