import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-footer-bg pt-20 pb-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-footer-card rounded-3xl p-12 text-center relative overflow-hidden mb-16 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to Hire Better, Faster?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                 Join 500+ companies hiring smarter with AI
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-[#3B82F6] hover:bg-primary-dark text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/50">
                   Start Free Trial
                </button>
                <button className="px-8 py-4 bg-transparent border border-slate-500 hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all">
                   Schedule Demo
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
              <span className="font-bold text-slate-200">RecruiterAI</span>
              <span className="text-slate-600">© 2024</span>
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
