import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navLinks = [
    { name: 'Product', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  useEffect(() => {
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="size-8 text-primary flex items-center justify-center bg-blue-50 dark:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">smart_toy</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">RecruiterAI</span>
            </div>
            <nav className="hidden md:flex items-center gap-2" onMouseLeave={() => setHoveredIndex(null)}>
              {navLinks.map((link, index) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-primary dark:hover:text-primary"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.span
                        className="absolute inset-0 rounded-lg bg-blue-50 dark:bg-slate-800 -z-10"
                        layoutId="nav-hover"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors relative overflow-hidden group">
                  <span className="material-symbols-outlined text-xl relative z-10 transition-transform duration-500 group-hover:rotate-180">{isDark ? 'light_mode' : 'dark_mode'}</span>
              </button>
              <a className="hidden md:block text-sm font-semibold text-slate-900 dark:text-white hover:text-primary transition-colors" href="#">Log in</a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm group"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10">Start Free Trial</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;
