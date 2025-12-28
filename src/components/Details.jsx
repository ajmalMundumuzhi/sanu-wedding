import { Calendar, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReceptionDetails() {
  const details = [
    {
      title: "DATE",
      value: "29",
      subValue: "December 2025",
      icon: <Calendar size={20} className="text-amber-600" />,
    },
    {
      title: "TIME",
      value: "11:00 AM",
      subValue: "9:00 PM",
      icon: <Clock size={20} className="text-amber-600" />,
    },
    {
      title: "VENUE",
      value: "Parakkandi",
      subValue: "Kuttikkattoor",
      icon: <MapPin size={20} className="text-amber-600" />,
    }
  ];

  return (
    <section className="flex items-center justify-center py-20 px-4">
      {/* Main Container with Soft Rounded Corners */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-[#f2eee8]/80 backdrop-blur-md p-8 md:p-12 rounded-[3rem] shadow-xl w-full max-w-5xl border border-white/40"
      >
        <h2 className="text-center font-wedding-serif text-3xl md:text-4xl text-stone-800 mb-12 tracking-wide">
          Reception Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/90 p-8 rounded-[2.5rem] shadow-md flex flex-col items-center text-center border border-white/60 transition-transform hover:scale-105 duration-300"
            >
              {/* Soft Circular Icon Wrapper */}
              <div className="w-12 h-12 bg-[#f8f4f0] rounded-full flex items-center justify-center shadow-inner mb-6 border border-white">
                {item.icon}
              </div>

              <span className="font-wedding-sans text-[10px] font-bold tracking-[0.2em] text-stone-400 mb-6 uppercase">
                {item.title}
              </span>

              <h3 className="font-wedding-serif text-3xl font-bold text-stone-800 mb-2">
                {item.value}
              </h3>

              {/* Decorative dash for the Time column */}
              {item.title === "TIME" && <div className="w-4 h-px bg-stone-300 my-2" />}

              <p className="font-wedding-sans text-sm text-stone-500 font-medium">
                {item.subValue}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}