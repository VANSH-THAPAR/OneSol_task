import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const benefitsData = [
  { icon: 'bolt', title: 'Fast Processing', description: 'Process thousands of resumes in seconds.', details: 'Our AI engine never sleeps, ensuring no candidate is left waiting.', color: 'from-blue-400 to-blue-600' },
  { icon: 'speed', title: 'Quick Time-to-Hire', description: 'Cut down hiring cycles from months to days.', details: 'Identify top talent instantly and schedule interviews automatically.', color: 'from-purple-400 to-purple-600' },
  { icon: 'database', title: 'Massive Capacity', description: 'Handle unlimited applicants without bottlenecks.', details: 'Scale your hiring campaigns without scaling your HR team.', color: 'from-indigo-400 to-indigo-600' },
  { icon: 'balance', title: 'Unbiased AI', description: 'Fair and objective scoring for every candidate.', details: 'Remove unconscious bias and build a diverse workforce.', color: 'from-green-400 to-green-600' },
  { icon: 'link', title: 'Seamless Integration', description: 'Connects with your existing ATS and tools.', details: 'Works with Greenhouse, Lever, Workday, Slack and Zoom.', color: 'from-orange-400 to-orange-600' },
  { icon: 'support_agent', title: '24/7 Support', description: 'Dedicated support team whenever you need help.', details: 'Comprehensive knowledge base and live chat support.', color: 'from-pink-400 to-pink-600' },
];

const Benefits = () => {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
      if(containerRef.current) {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    }, [benefitsData]);

    return (
      <section className="py-24 bg-slate-50 dark:bg-[#020617] transition-colors duration-300 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-30 pointer-events-none">
             <div className="w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
        </div>
        <div className="absolute bottom-0 left-0 p-12 opacity-30 pointer-events-none">
             <div className="w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
            >
              Why companies <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Trust RecruiterAI</span>
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-slate-400"
            >
                Drag to explore the intelligence engine powering your next hire.
            </motion.p>
          </div>
          
          <motion.div 
            ref={containerRef} 
            className="cursor-grab active:cursor-grabbing overflow-visible p-4"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              className="flex gap-10 w-max"
            >
              {benefitsData.map((item, index) => (
                <GlassCard key={index} item={item} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    );  
};

const GlassCard = ({ item, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(event.clientX - centerX);
      y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
      x.set(0);
      y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, z: 100 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="relative w-[320px] md:w-[360px] h-[500px] rounded-[2.5rem] bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl flex flex-col justify-between p-10 group overflow-hidden perspective-1000 transform-gpu transition-all hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30"
    >
      {/* Dynamic Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500"></div>

      <div className="relative z-10">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
          <span className="material-symbols-outlined text-3xl">{item.icon}</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 font-medium">{item.description}</p>
      </div>

      <div className="relative z-10 mt-auto pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
        <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100">
          {item.details}
        </p>
      </div>
    </motion.div>
  );
};


export default Benefits;
