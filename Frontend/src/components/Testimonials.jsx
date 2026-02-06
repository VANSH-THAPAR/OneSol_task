import React from 'react';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    text: "RecruiterAI has completely transformed our hiring process. We've reduced our time-to-hire by 70% and the quality of candidates has never been better.",
    name: "Jennifer Lopez",
    role: "Head of Talent, TechCorp",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    text: "The automated screening is a game-changer. It's like having an extra 10 recruiters on the team working 24/7. Highly recommended.",
    name: "Mark Chen",
    role: "VP of HR, GrowthInc",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    text: "The interview scheduling features alone saved me 15 hours a week. I can finally focus on building relationships with candidates.",
    name: "Sarah Miller",
    role: "Recruiting Lead, ScaleUp",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
    return (
      <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">What our users say</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Join thousands of hiring managers who have transformed their recruitment process.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-full flex flex-col transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:border-blue-200 dark:hover:border-blue-900 hover:shadow-2xl hover:shadow-blue-500/10 cursor-default"
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  <span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 flex-1 italic">"{item.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <img alt={item.name} className="w-full h-full object-cover" src={item.img} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );    
};

export default Testimonials;
