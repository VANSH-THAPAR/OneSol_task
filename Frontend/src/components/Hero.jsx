import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-hero-bg">
        <div className="orbit-container hidden xl:block absolute inset-0 pointer-events-none max-w-[90rem] mx-auto">
          {/* Top Left Bubble */}
          <div className="absolute top-[10%] left-[2%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm animate-float z-20 transition-colors duration-300">
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
          </div>
          
          {/* Top Right Bubble */}
          <div className="absolute top-[15%] right-[2%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm animate-float z-20 transition-colors duration-300" style={{ animationDelay: '1.5s' }}>
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
          </div>

          {/* Bottom Left Bubble */}
          <div className="absolute bottom-[5%] left-[5%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm animate-float z-20 transition-colors duration-300" style={{ animationDelay: '3s' }}>
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
          </div>

          {/* Bottom Right Bubble */}
          <div className="absolute bottom-[10%] right-[5%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 max-w-sm animate-float z-20 transition-colors duration-300" style={{ animationDelay: '4.5s' }}>
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
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-blue-200 dark:border-blue-900 text-primary text-xs font-bold uppercase tracking-wide mb-8 backdrop-blur-sm">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
             AI-Powered Recruitment V2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
             Every Hire, <br/>
            <span className="text-primary">Faster and Better</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
             Automate your recruitment pipeline today. Connect with top talent instantly using our intelligent automation engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 transition-all">Start Free Trial</button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-slate-400">play_circle</span> Watch Demo
            </button>
          </div>
        </div>
      </section>
  );
};

export default Hero;
