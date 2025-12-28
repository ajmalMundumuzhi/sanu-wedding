import { motion } from "framer-motion";

// 1. Define a list of hearts with random positions and animation speeds
// (Kept the settings slightly larger for better visibility of the new color)
const hearts = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`, 
  size: Math.random() * (35 - 18) + 18, // Slightly larger range
  duration: Math.random() * (18 - 10) + 10, // Slightly slower for elegance
  delay: Math.random() * 10,
}));

const Background = () => {
  return (
    <div className="fixed inset-0 -z-20 bg-[#f5f5dc] overflow-hidden">
      
      {/* --- FLOATING LOVE ICONS --- */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0, rotate: 0 }}
          animate={{ 
            y: "-10vh", 
            opacity: [0, 0.6, 0.6, 0], // Increased opacity slightly for the red to pop
            rotate: 360 
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{ 
            left: heart.left, 
            width: heart.size, 
            height: heart.size 
          }}
          // 👇👇👇 CHANGE HAPPENED HERE 👇👇👇
          // Changed from text-stone-400/30 to text-rose-500/40
          className="absolute text-rose-500/40 drop-shadow-sm"
        >
          {/* Simple SVG Heart Icon */}
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* --- THE CLOUDS (Optional - keeping them subtle behind the hearts) --- */}
      <div className="absolute top-20 left-[10%] w-64 h-32 bg-white/50 blur-3xl rounded-full animate-pulse" />
      <div className="absolute top-[40%] right-[15%] w-80 h-40 bg-white/30 blur-3xl rounded-full animate-pulse delay-1000" />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
    </div>
  );
};

export default Background;