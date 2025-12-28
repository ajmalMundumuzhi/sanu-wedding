import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  // SETTING THE TARGET: Dec 19, 2025 at 6:00 PM
  const targetDate = new Date('2025-12-19T18:00:00').getTime();
  
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
      <div className="grid grid-cols-4 gap-2 md:gap-8 w-full max-w-[500px] md:max-w-4xl px-2">
        {[
          { label: 'DAYS', value: timeLeft.days },
          { label: 'HOURS', value: timeLeft.hours },
          { label: 'MINUTES', value: timeLeft.minutes },
          { label: 'SECONDS', value: timeLeft.seconds },
        ].map((item, idx) => (
          <div key={item.label} className="flex flex-col items-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center w-full"
            >
              {/* The Circular Card: 
                  Added responsive sizing: w-16 h-16 (mobile) up to w-32 h-32 (desktop)
              */}
              <div className="w-16 h-16 md:w-32 md:h-32 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/40 flex items-center justify-center relative group">
                <span className="text-xl md:text-5xl font-serif font-bold text-stone-800">
                  {isClient ? formatNumber(item.value) : '00'}
                </span>
              </div>

              {/* Minimal Label */}
              <span className="mt-2 text-[8px] md:text-xs font-bold tracking-[0.1em] md:tracking-[0.3em] text-stone-500 uppercase">
                {item.label}
              </span>
            </motion.div>

            {/* The Separator Dot (:):
                Only show between cards, not after the last one.
            */}
            {idx < 3 && (
              <div className="absolute -right-1 md:-right-4 top-1/2 -translate-y-full text-stone-400 font-bold text-lg md:text-3xl">
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