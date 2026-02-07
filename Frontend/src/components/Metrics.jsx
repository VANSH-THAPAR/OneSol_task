import React from 'react';
import { motion } from 'framer-motion';

const metricsData = [
  { value: '10x', label: 'Faster Screening', description: '250+ apps/day\nvs 25 manual', height: '60%', color: 'bg-[#3B82F6]', shadow: 'shadow-blue-500/20' },
  { value: '70%', label: 'Faster Hire', description: '42 days to\n12 days', height: '50%', color: 'bg-[#8B5CF6]', shadow: 'shadow-purple-500/20' },
  { value: '25x', label: 'Capacity', description: '200+ auto calls\nvs 8 manual', height: '75%', color: 'bg-[#0EA5E9]', shadow: 'shadow-sky-500/20' },
  { value: '95%', label: 'Completion', description: 'Smart forms\nreduce drop-off', height: '85%', color: 'bg-[#10B981]', shadow: 'shadow-emerald-500/20' },
  { value: '89%', label: 'Qualified Apps', description: 'AI optimized\ndescriptions', height: '80%', color: 'bg-[#F59E0B]', shadow: 'shadow-amber-500/20' },
  { value: '80%', label: 'Lower Costs', description: 'vs agencies\n& subscriptions', height: '55%', color: 'bg-[#EC4899]', shadow: 'shadow-pink-500/20' },
  { value: '50%', label: 'Fewer Bad Hires', description: 'Accuracy\nimprovement', height: '40%', color: 'bg-[#6366F1]', shadow: 'shadow-indigo-500/20' },
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
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 items-end h-[400px] max-w-7xl mx-auto px-4">
            {metricsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3 group w-full h-full justify-end">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                  className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-1"
                >
                  {item.value}
                </motion.div>
                
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: item.height }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, type: "spring", bounce: 0.2 }}
                  className={`w-full ${item.color} rounded-t-lg relative overflow-hidden shadow-lg ${item.shadow} group-hover:brightness-110 group-hover:scale-y-105 origin-bottom transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                  className="text-center"
                >
                  <p className="text-xs md:text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wide">{item.label}</p>
                  <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-pre-line">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Metrics;
