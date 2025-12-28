import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  // SETTING THE TARGET: Dec 19, 2025 at 6:00 PM
const targetDate = new Date('2025-12-29T11:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => num.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center py-8 w-full">
      {/* CHANGE: Removed grid-cols-2. 
          Using grid-cols-4 globally to keep them in one line.
          Using gap-2 on mobile and gap-8 on desktop.
      */}
      {/* Updated CountdownTimer.jsx typography snippet */}
<div className="grid grid-cols-4 gap-2 md:gap-8 w-full max-w-4xl px-2">
  {[
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ].map((item, idx) => (
    <div key={item.label} className="flex flex-col items-center relative">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center w-full"
      >
        <div className="w-16 h-16 md:w-32 md:h-32 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-white/50">
          {/* Use the new serif font here */}
          <span className="font-wedding-serif text-2xl md:text-5xl font-bold text-stone-800">
            {isClient ? formatNumber(item.value) : '00'}
          </span>
        </div>
        
        {/* Use wide-tracked sans-serif for the labels */}
        <span className="mt-3 font-wedding-sans text-[8px] md:text-xs font-semibold tracking-[0.25em] text-stone-500 uppercase">
          {item.label}
        </span>
      </motion.div>

      {idx < 3 && (
        <div className="absolute -right-1 md:-right-4 top-1/2 -translate-y-full text-stone-400 font-light text-lg md:text-3xl">
          :
        </div>
      )}
    </div>
  ))}
</div>
    </div>
  );
};

export default CountdownTimer;