// import { useState, useRef, useEffect } from "react";
// import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

// export default function BackgroundMusic() {
//   const [isMuted, setIsMuted] = useState(true);
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       // Start muted autoplay (safe for all browsers)
//       audioRef.current.muted = true;
//       audioRef.current.play().catch((err) => console.log("Autoplay blocked:", err));
//     }
//   }, []);

//   const toggleMute = () => {
//     if (!audioRef.current) return;

//     if (isMuted) {
//       audioRef.current.muted = false;   // unmute
//       audioRef.current.play();           // play if paused
//       setIsMuted(false);
//     } else {
//       audioRef.current.muted = true;    // mute
//       setIsMuted(true);
//     }
//   };

//   return (
//     <div>
//       <audio ref={audioRef} src="/bgmusic.mp3" loop />
//       <button onClick={toggleMute} className="fixed bottom-4 right-4 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700">
//   {isMuted ? <SpeakerXMarkIcon className="h-6 w-6"/> : <SpeakerWaveIcon className="h-6 w-6"/>}
// </button>
//     </div>
//   );
// }


// import { useRef, useState } from "react";
// import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

// export default function BackgroundMusic() {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleMusic = async () => {
//     if (!audioRef.current) return;

//     try {
//       if (!isPlaying) {
//         audioRef.current.loop = true;
//         audioRef.current.volume = 0.5;
//         await audioRef.current.play(); // ✅ user interaction
//         setIsPlaying(true);
//       } else {
//         audioRef.current.pause();
//         setIsPlaying(false);
//       }
//     } catch (err) {
//       console.log("Audio blocked:", err);
//     }
//   };

//   return (
//     <>
//       <audio ref={audioRef} src="/bgmusic.mp3" preload="auto" />

//       <button
//         onClick={toggleMusic}
//         className="
//           fixed bottom-4 right-4
//           z-[9999] pointer-events-auto
//           p-3 rounded-full
//           bg-blue-600 text-white
//           shadow-xl hover:bg-blue-700
//         "
//       >
//         {isPlaying ? (
//           <SpeakerWaveIcon className="h-6 w-6" />
//         ) : (
//           <SpeakerXMarkIcon className="h-6 w-6" />
//         )}
//       </button>
//     </>
//   );
// }

import { useState } from "react";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

/* ✅ AUDIO CREATED ONCE */
const audio = new Audio("/bgmusic.mp3");
audio.loop = true;
audio.volume = 0.5;

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    try {
      if (!isPlaying) {
        await audio.play();   // starts once
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (err) {
      console.log("Play blocked:", err);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="
        fixed bottom-4 right-4 z-[9999]
        p-3 rounded-full
        bg-blue-600 text-white shadow-xl
        hover:bg-blue-700
      "
    >
      {isPlaying ? (
        <SpeakerWaveIcon className="h-6 w-6" />
      ) : (
        <SpeakerXMarkIcon className="h-6 w-6" />
      )}
    </button>
  );
}




