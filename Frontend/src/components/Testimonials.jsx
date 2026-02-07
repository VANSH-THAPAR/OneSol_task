import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialsData = [
  {
    id: 1,
    text: "RecruiterAI has completely transformed our hiring process. We've reduced our time-to-hire by 70% and the quality of candidates has never been better.",
    name: "Jennifer Lopez",
    role: "Head of Talent, TechCorp",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    highlight: "Reduced time-to-hire by 70%"
  },
  {
    id: 2,
    text: "The automated screening is a game-changer. It's like having an extra 10 recruiters on the team working 24/7. Highly recommended.",
    name: "Mark Chen",
    role: "VP of HR, GrowthInc",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    highlight: "Like having 10 extra recruiters"
  },
  {
    id: 3,
    text: "The interview scheduling features alone saved me 15 hours a week. I can finally focus on building relationships with candidates.",
    name: "Sarah Miller",
    role: "Recruiting Lead, ScaleUp",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    highlight: "Saved 15 hours a week"
  }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
      <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden relative">
        {/* Abstract Backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">Voices of Success</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Join thousands of hiring managers who have transformed their recruitment process.
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-2xl rounded-3xl border border-white/20 dark:border-slate-800 shadow-2xl p-8 md:p-16 relative overflow-hidden min-h-[400px] flex flex-col justify-center items-center text-center">
                
                {/* Giant Quote Icon */}
                <span className="absolute top-8 left-8 text-[12rem] leading-none text-blue-500/10 dark:text-blue-500/5 font-serif select-none pointer-events-none">"</span>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10 max-w-3xl"
                    >
                         <div className="flex justify-center mb-8">
                            <div className="flex gap-1 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined fill-current">star</span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl md:text-3xl font-medium text-slate-900 dark:text-white leading-relaxed mb-10 italic">
                            "{testimonialsData[activeIndex].text}"
                        </h3>

                        <div className="flex flex-col items-center gap-2">
                             <div className="w-16 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
                             <div className="text-lg font-bold text-slate-900 dark:text-white">{testimonialsData[activeIndex].name}</div>
                             <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">{testimonialsData[activeIndex].role}</div>
                             <div className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold mt-2 border border-blue-100 dark:border-blue-800">
                                {testimonialsData[activeIndex].highlight}
                             </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Avatars */}
            <div className="flex justify-center gap-6 mt-12">
                {testimonialsData.map((item, index) => (
                    <button 
                        key={item.id}
                        onClick={() => setActiveIndex(index)}
                        className={`group relative transition-all duration-300 ${activeIndex === index ? 'scale-110' : 'scale-100 opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 transition-all duration-300 ${activeIndex === index ? 'border-primary ring-4 ring-primary/20' : 'border-transparent'}`}>
                             <img src={item.img} alt={item.name} className="w-full h-full object-cover filter saturate-50 group-hover:saturate-100 transition-all" />
                        </div>
                        {activeIndex === index && (
                             <motion.div 
                                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full"
                                layoutId="activeIndicator"
                             />
                        )}
                    </button>
                ))}
            </div>
          </div>
        </div>
      </section>
    );    
};

export default Testimonials;

