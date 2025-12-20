import { useState, useEffect, useRef } from "react";
import ComponentA from "./Welcome";
import ComponentB from "./WelcomeSpouse";
import ComponentC from "./WelcomeParents";

export default function ScrollNavigation() {
  const [pageIndex, setPageIndex] = useState(0);
  const containerRef = useRef(null);
  const components = [<ComponentA />, <ComponentB />, <ComponentC />];
  let scrollTimeout = useRef(null);

  // Mouse wheel handler
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (scrollTimeout.current) return;

      if (e.deltaY > 0) setPageIndex((prev) => Math.min(prev + 1, components.length - 1));
      else setPageIndex((prev) => Math.max(prev - 1, 0));

      scrollTimeout.current = setTimeout(() => (scrollTimeout.current = null), 800);
    };

    const container = containerRef.current;
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // Touch swipe handler
  useEffect(() => {
    let touchStartY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (scrollTimeout.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (deltaY > 50) setPageIndex((prev) => Math.min(prev + 1, components.length - 1));
      else if (deltaY < -50) setPageIndex((prev) => Math.max(prev - 1, 0));

      scrollTimeout.current = setTimeout(() => (scrollTimeout.current = null), 800);
    };

    const container = containerRef.current;
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Scroll and animate
  useEffect(() => {
    containerRef.current.scrollTo({
      top: pageIndex * window.innerHeight,
      behavior: "smooth",
    });
  }, [pageIndex]);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      {components.map((Comp, index) => (
        <div
          key={index}
          className={`h-screen w-full absolute top-0 left-0 transition-opacity duration-700 ease-in-out
            ${index === pageIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {Comp}
        </div>
      ))}
    </div>
  );
}
