import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="size-8 text-primary flex items-center justify-center bg-blue-50 rounded-lg">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">RecruiterAI</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Product</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Solutions</a>
              <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#">Pricing</a>
            </nav>
            <div className="flex items-center gap-4">
              <a className="hidden md:block text-sm font-semibold text-slate-900 hover:text-primary" href="#">Log in</a>
              <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm">Start Free Trial</button>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
