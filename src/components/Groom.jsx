import { motion } from "framer-motion"
export default function Groom() {
    return (
    <section className="flex items-center justify-center  px-4">
      {/* Main Animated Card Container */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative w-full max-w-5xl rounded-[3rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden group"
      >
        
        {/* --- BACKGROUND IMAGE LAYER --- */}
        {/* We use 'grayscale' to make it B&W and a white overlay for contrast */}
        <div className="absolute inset-0 z-0">
          {/* REPLACE SRC: Use the actual photo of hands/rings here */}
          <img 
            src="/public/images/download.jpg" 
            alt="Couple Hands" 
            className="w-full h-full object-cover grayscale brightness-110 transform group-hover:scale-105 transition-transform duration-1000"
          />
          {/* A semi-transparent white overlay to make text readable */}
          <div className="absolute inset-0 bg-white/60 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-white/80"></div>
        </div>

        {/* --- CONTENT GRID (Groom & Bride) --- */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 p-10 md:py-16">
          
          {/* ---- GROOM SECTION (Left) ---- */}
          <div className="flex flex-col items-center text-center md:pr-10">
            {/* Label Badge */}
            <span className="bg-[#f2eee8] px-8 py-2 rounded-full text-xs font-bold tracking-[0.2em] text-stone-600 shadow-sm mb-6">
              GROOM
            </span>
            {/* Name */}
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
              Adil Sunu
            </h2>
            {/* Details */}
            <div className="text-stone-700 leading-relaxed font-medium opacity-90">
              <p>S/O Mr. Muhammed Sunu & Mrs. Vahida</p>
              <p className="mt-2">Palat Parambathu, Kuttikkattoor</p>
            </div>
          </div>

          {/* ---- CENTRAL DIVIDER (Desktop Only) ---- */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-px bg-stone-400/40 content-['']"></div>

          {/* ---- BRIDE SECTION (Right) ---- */}
          <div className="flex flex-col items-center text-center md:pl-10">
            {/* Label Badge */}
            <span className="bg-[#f2eee8] px-8 py-2 rounded-full text-xs font-bold tracking-[0.2em] text-stone-600 shadow-sm mb-6">
              BRIDE
            </span>
            {/* Name */}
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
              Fathima Sanah
            </h2>
            {/* Details */}
            <div className="text-stone-700 leading-relaxed font-medium opacity-90">
              <p>Grand D/O Late Mammad Koya Haji & Late Alavi Kutty Haji</p>
              <p className="mt-2">Mehfil House, Olavanna, Calicut</p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}