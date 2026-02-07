import React from 'react';
import { motion } from 'framer-motion';

const metricsData = [
  { value: '10x', subValue: 'Speed Increase', label: 'Faster Screening', description: 'AI parses and ranks 250+ applications per day compared to just 25 manually.', height: '60%', color: 'bg-[#3B82F6]', shadow: 'shadow-blue-500/20' },
  { value: '70%', subValue: 'Reduction', label: 'Faster Time-to-Hire', description: 'The average hiring timeline drops significantly from 42 days to just 12 days.', height: '50%', color: 'bg-[#8B5CF6]', shadow: 'shadow-purple-500/20' },
  { value: '25x', subValue: 'Volume', label: 'Increased Interview Capacity', description: 'AI conducts 200+ automated screening interviews daily versus 8 manual calls.', height: '75%', color: 'bg-[#0EA5E9]', shadow: 'shadow-sky-500/20' },
  { value: '95%', subValue: 'Completion Rate', label: 'Application Completion', description: 'Smart application forms reduce candidate drop-off dramatically.', height: '85%', color: 'bg-[#10B981]', shadow: 'shadow-emerald-500/20' },
  { value: '89%', subValue: 'Quality Improvement', label: 'More Qualified Applications', description: 'AI job description optimizer attracts higher-quality candidate pipelines.', height: '80%', color: 'bg-[#F59E0B]', shadow: 'shadow-amber-500/20' },
  { value: '80%', subValue: 'Cost Savings', label: 'Lower Recruitment Costs', description: 'Significant reduction compared to traditional recruiting agencies and multiple software subscriptions.', height: '55%', color: 'bg-[#EC4899]', shadow: 'shadow-pink-500/20' },
  { value: '50%', subValue: 'Improvement', label: 'Reduction in Bad Hires', description: 'AI skills assessment and matching improves hiring accuracy dramatically.', height: '40%', color: 'bg-[#6366F1]', shadow: 'shadow-indigo-500/20' },
];

const Metrics = () => {
    return (
      <section className="bg-metric-bg py-24 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">The RecruiterAI Advantage</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Real results from over 500+ companies.</p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 items-end h-[450px] max-w-7xl mx-auto px-4">
            {metricsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 group w-full h-full justify-end relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                  className="text-center mb-2 z-10"
                >
                  <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-none">{item.value}</div>
                  <div className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">{item.subValue}</div>
                </motion.div>
                
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: item.height }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, type: "spring", bounce: 0.2 }}
                  className={`w-full ${item.color} rounded-t-lg relative shadow-lg ${item.shadow} group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center p-2 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-colors" />
                  
                  {/* Description overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm text-center">
                      <p className="text-white text-xs font-medium leading-relaxed drop-shadow-md">{item.description}</p>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  className="text-center mt-2 h-10 flex items-start justify-center"
                >
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide leading-tight px-1">{item.label}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Metrics;
