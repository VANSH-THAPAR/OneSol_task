import React from 'react';
import { motion } from 'framer-motion';

const benefitsData = [
  { icon: 'bolt', title: 'Fast Processing', description: 'Process thousands of resumes in seconds. Our AI engine never sleeps, ensuring no candidate is left waiting.', colorClass: 'text-primary', bgClass: 'bg-blue-50' },
  { icon: 'speed', title: 'Quick Time-to-Hire', description: 'Cut down hiring cycles from months to days. Identify top talent instantly and schedule interviews automatically.', colorClass: 'text-purple-600 dark:text-purple-400', bgClass: 'bg-purple-50' },
  { icon: 'database', title: 'Massive Capacity', description: 'Handle unlimited applicants without bottlenecks. Scale your hiring campaigns without scaling your HR team.', colorClass: 'text-indigo-600 dark:text-indigo-400', bgClass: 'bg-indigo-50' },
  { icon: 'balance', title: 'Unbiased AI', description: 'Fair and objective scoring for every candidate. Remove unconscious bias and build a diverse workforce.', colorClass: 'text-green-600 dark:text-green-400', bgClass: 'bg-green-50' },
  { icon: 'link', title: 'Seamless Integration', description: 'Connects with your existing ATS (Greenhouse, Lever, Workday) and communication tools like Slack and Zoom.', colorClass: 'text-orange-600 dark:text-orange-400', bgClass: 'bg-orange-50' },
  { icon: 'support_agent', title: '24/7 Support', description: 'Our dedicated support team and comprehensive knowledge base are available whenever you need help.', colorClass: 'text-pink-600 dark:text-pink-400', bgClass: 'bg-pink-50' },
];

const Benefits = () => {
    return (
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Leading Companies Trust Us</h2>
            <p className="text-slate-500 dark:text-slate-400">From startups to enterprises, RecruiterAI scales with your hiring needs.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all group"
              >
                <div className={`size-12 rounded-lg ${item.bgClass} dark:bg-slate-800 flex items-center justify-center ${item.colorClass} mb-4 group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );  
};

export default Benefits;
