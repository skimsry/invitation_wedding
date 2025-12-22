import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Bubbles from "../components/Bubbles";
import img1 from '../assets/gallery/1.webp';
import img2 from '../assets/gallery/2.webp';
import img3 from '../assets/gallery/3.webp';
import img4 from '../assets/gallery/4.webp';
import img5 from '../assets/gallery/5.webp';
import img6 from '../assets/gallery/6.webp';
import img7 from '../assets/gallery/7.webp';
import img8 from '../assets/gallery/8.webp';
import img9 from '../assets/gallery/9.webp';
import img10 from '../assets/gallery/10.webp';
import img11 from '../assets/gallery/11.webp';
import img12 from '../assets/gallery/12.webp';
import img13 from '../assets/gallery/13.webp';
import img14 from '../assets/gallery/14.webp';
import img15 from '../assets/gallery/15.webp';
import img16 from '../assets/gallery/16.webp';
import img17 from '../assets/gallery/17.webp';
import img18 from '../assets/gallery/18.webp';
import img19 from '../assets/gallery/19.webp';
import img20 from '../assets/gallery/20.webp';
import img21 from '../assets/gallery/21.webp';
import img22 from '../assets/gallery/22.webp';
export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const images = [
    img1,img2,img3,img13,img4,img9,img5,img6,img7,img8,img10,img14,img11,img12,img16,img17,img15,img18,img20,img19,img21,img22
    
  ];

  const openImage = (index) => setSelectedIndex(index);
  const closePopup = () => setSelectedIndex(null);

  const changeImage = (newIndex, dir) => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setFadeKey((prev) => prev + 1);
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const prevImage = () => {
    const newIndex = selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    changeImage(newIndex, -1);
  };

  const nextImage = () => {
    const newIndex = selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    changeImage(newIndex, 1);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 50) prevImage();
    else if (deltaX < -50) nextImage();
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "Escape") closePopup();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="relative w-full min-h-[100dvh] bg-green-950 flex flex-col items-center justify-center text-center p-6 sm:p-12 animate-fadeIn overflow-hidden">
    

      <Bubbles />
      {/* Blur only on desktop */}
      <div className="hidden md:block absolute inset-0 backdrop-blur-sm bg-white/5 z-0"></div>
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Titles */}
        <h2 className="animate-fade-in-up text-2xl sm:text-2xl md:text-3xl lg:text-5xl text-[#d5c243] drop-shadow-lg mb-4 lg:mb-12 md:mb-12 leading-tight font-kh">
          សិរីមង្គលអាពាហ៍ពិពាហ៍
        </h2>
        <h1 className="animate-fade-in-up text-3xl sm:text-3xl md:text-4xl lg:text-6xl text-[#d5c243] drop-shadow-lg mb-8 sm:mb-12 md:mb-12 lg:mb-12 leading-tight font-moulpali">
          វិចិត្រសាល
        </h1>

        {/* Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 sm:mb-12 md:mb-12 lg:mb-12">
  {images.map((src, index) => {
    const isImg22 = index === images.length - 1; // last one

    return (
      <div
        key={index}
        className={isImg22 ? "block md:hidden" : ""} // 👈 only mobile
      >
        <img
          className="h-auto max-w-full rounded-xl border-2 border-gray-300 cursor-pointer hover:scale-105 transition-transform"
          src={src}
          loading="lazy"
          alt={`Gallery ${index + 1}`}
          onClick={() => openImage(index)} // 👈 correct
        />
      </div>
    );
  })}
</div>


        {/* Link */}
        <div className="flex gap-4">
  {/* <Link
    to="/list"
    className="px-8 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-out font-battambang"
  >
    ត្រឡប់ក្រោយ
  </Link>
  <Link
    to="/prewedding"
    className="px-8 py-3 bg-white text-green-900 text-sm sm:text-base font-bold uppercase tracking-wider rounded-full shadow-xl hover:scale-105 hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 ease-out font-battambang animate-bounce"
  >
    ទស្សនាវីដេអូ
  </Link> */}
  <div className="flex justify-center gap-4">
  <Link
    to="/list"
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
    to="/prewedding"
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

      {/* Fullscreen Popup */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black/90"
            onClick={closePopup}
          ></div>

          {/* Image + buttons container */}
          <div
            className="relative z-50 flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Prev button */}
            <button
              className="absolute left-5 text-white text-4xl font-bold hover:text-gray-300 z-50"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              ‹
            </button>

            {/* Close button */}
            <button
              className="absolute top-5 right-5 text-white text-4xl font-bold hover:text-gray-300 z-50"
              onClick={(e) => {
                e.stopPropagation();
                closePopup();
              }}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              ×
            </button>

            {/* Image */}
            <div
              key={fadeKey}
              className={`transition-all duration-300 ease-out`}
              style={{
                transform: isAnimating ? `translateX(${direction * 100}%)` : "translateX(0%)",
                opacity: isAnimating ? 0 : 1,
              }}
            >
              <img
                src={images[selectedIndex]}
                alt="Fullscreen"
                className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
              />
            </div>

            {/* Next button */}
            <button
              className="absolute right-5 text-white text-4xl font-bold hover:text-gray-300 z-50"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
