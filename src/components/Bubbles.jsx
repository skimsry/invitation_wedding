export default function Bubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Bubble 1 */}
      <span className="absolute bottom-0 left-[10%] w-6 h-6 bg-white/30 rounded-full animate-bubble" />

      {/* Bubble 2 */}
      <span className="absolute bottom-0 left-[25%] w-10 h-10 bg-white/20 rounded-full animate-bubbleSlow" />

      {/* Bubble 3 */}
      <span className="absolute bottom-0 left-[45%] w-4 h-4 bg-white/40 rounded-full animate-bubbleFast" />

      {/* Bubble 4 */}
      <span className="absolute bottom-0 left-[65%] w-8 h-8 bg-white/25 rounded-full animate-bubble" />

      {/* Bubble 5 */}
      <span className="absolute bottom-0 left-[85%] w-12 h-12 bg-white/15 rounded-full animate-bubbleSlow" />
    </div>
  );
}
