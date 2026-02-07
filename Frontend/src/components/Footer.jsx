import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-footer-bg pt-20 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Creative CTA Box */}
          <div className="group relative rounded-3xl p-[2px] mb-16">
            {/* Gradient Border Animation */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-40 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-pulse"></div>
            
            <div className="relative bg-slate-900 rounded-[22px] p-12 text-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/20">
              {/* Dynamic Background */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-700 animate-float pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/30 transition-all duration-700 animate-float pointer-events-none" style={{animationDelay: '1s'}}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Ready to Hire Better, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">Faster?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto group-hover:text-slate-200 transition-colors">
                   Join 500+ companies hiring smarter with AI
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="relative overflow-hidden px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1 group/btn">
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]"></div>
                  </button>
                  
                  <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-white text-slate-300 hover:text-white rounded-xl font-bold text-lg transition-all hover:scale-105 hover:bg-white/5">
                     Schedule Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
              <span className="font-bold text-slate-200">RecruiterAI</span>
              <span className="text-slate-600">© 2026</span>
            </div>
            <div className="flex gap-6">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Twitter</a>
              <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
