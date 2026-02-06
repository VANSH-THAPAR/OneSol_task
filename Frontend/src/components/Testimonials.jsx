import React from 'react';

const Testimonials = () => {
    return (
      <section className="py-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">What our users say</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Join thousands of hiring managers who have transformed their recruitment process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-full flex flex-col transition-colors duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 flex-1 italic">"RecruiterAI has completely transformed our hiring process. We've reduced our time-to-hire by 70% and the quality of candidates has never been better."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <img alt="Jennifer Lopez" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Jennifer Lopez</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Head of Talent, TechCorp</p>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-full flex flex-col transition-colors duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 flex-1 italic">"The automated screening is a game-changer. It's like having an extra 10 recruiters on the team working 24/7. Highly recommended."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <img alt="Mark Chen" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Mark Chen</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">VP of HR, GrowthInc</p>
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-full flex flex-col transition-colors duration-300">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-lg mb-8 flex-1 italic">"The interview scheduling features alone saved me 15 hours a week. I can finally focus on building relationships with candidates."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="size-12 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <img alt="Sarah Miller" className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/68.jpg" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Sarah Miller</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Recruiting Lead, ScaleUp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );    
};    
// };

export default Testimonials;
