import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const bubbleVariants = {
    float: (i) => ({
      y: [0, -20, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-hero-bg">
        <div className="orbit-container hidden xl:block absolute inset-0 pointer-events-none max-w-[90rem] mx-auto">
          {/* Top Left Bubble */}
          <motion.div 
            custom={0}
            variants={bubbleVariants}
            animate="float"
            className="absolute top-[10%] left-[2%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm z-20 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="size-12 min-w-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img alt="Sarah K." className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/12.jpg" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white italic mb-2">"Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors."</p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-200">Sarah K.</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">Founder at TechStart</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Top Right Bubble */}
          <motion.div 
            custom={1}
            variants={bubbleVariants}
            animate="float"
            className="absolute top-[15%] right-[2%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm z-20 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="size-12 min-w-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img alt="Rahul M." className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/45.jpg" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white italic mb-2">"Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months."</p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-200">Rahul M.</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">Hiring Manager at GrowthCo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Left Bubble */}
          <motion.div 
            custom={2}
            variants={bubbleVariants}
            animate="float"
            className="absolute bottom-[5%] left-[5%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm z-20 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="size-12 min-w-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img alt="Priya S." className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/65.jpg" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white italic mb-2">"I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."</p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-200">Priya S.</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">CEO at InnovateLabs</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Right Bubble */}
          <motion.div 
            custom={0.5}
            variants={bubbleVariants}
            animate="float"
            className="absolute bottom-[10%] right-[5%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm z-20 transition-colors duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="size-12 min-w-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img alt="Amit T." className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/22.jpg" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 dark:text-white italic mb-2">"Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."</p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-200">Amit T.</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">Head of HR at ScaleUp</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-blue-200 dark:border-blue-900 text-primary text-xs font-bold uppercase tracking-wide mb-8 backdrop-blur-sm"
          >
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
             AI-Powered Recruitment V2.0
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]"
          >
             Every Hire, <br/>
            <span className="text-primary">Faster and Better</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
          Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 transition-all overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">Start Hiring Smarter</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-purple-500/10 dark:hover:shadow-purple-900/10"
            >
              <span className="material-symbols-outlined text-slate-400">play_circle</span> See How It Works
            </motion.button>
          </motion.div>
        </div>
      </section>
  );
};

export default Hero;
