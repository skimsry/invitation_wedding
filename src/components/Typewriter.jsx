import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed = 80,
  delay = 0,
  className = "",
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index + 1));
        index++;

        if (index === text.length) {
          clearInterval(interval);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(start);
    };
  }, [text, speed, delay]);

  return <span className={className}>{displayedText}</span>;
}
