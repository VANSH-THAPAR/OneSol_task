import React, { useEffect, useRef, useState } from 'react';

const LogoSlider = () => {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  // Using a ref to track precise scroll position for smooth slow scrolling
  const positionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const adjustScroll = () => {
      const firstSet = scrollContainer.children[0];
      // Initialize positionRef to current scrollLeft
      if (firstSet && scrollContainer.scrollLeft < 10) {
         const startPos = firstSet.offsetWidth;
         scrollContainer.scrollLeft = startPos;
         positionRef.current = startPos;
      } else {
         positionRef.current = scrollContainer.scrollLeft;
      }
    };
    
    // Small delay to ensure layout is ready
    setTimeout(adjustScroll, 100);

    let animationFrameId;

    const scroll = () => {
      if (!isPaused && scrollContainer.children.length > 0) {
        // Decrease speed: 0.5 pixels per frame instead of 1
        positionRef.current -= 0.5;
        scrollContainer.scrollLeft = positionRef.current;
      } else {
        // Allow manual scroll to update our reference
        positionRef.current = scrollContainer.scrollLeft;
      }
      
      const firstSetWidth = scrollContainer.children[0]?.offsetWidth || 0;
      if (firstSetWidth > 0) {
        if (positionRef.current <= 0) {
           positionRef.current = firstSetWidth;
           scrollContainer.scrollLeft = firstSetWidth; 
        }
        else if (positionRef.current >= 2 * firstSetWidth) {
           positionRef.current = firstSetWidth;
           scrollContainer.scrollLeft = firstSetWidth;
        }
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  // Fallback to Google Favicons for high availability, as Clearbit can be flaky without API keys or on certain networks.
  // Using size=128 for higher resolution.
  const companies = [
    { name: "LinkedIn", logo: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=128" },
    { name: "Naukri.com", logo: "https://www.google.com/s2/favicons?domain=naukri.com&sz=128" },
    { name: "Indeed", logo: "https://www.google.com/s2/favicons?domain=indeed.com&sz=128" },
    { name: "AngelList", logo: "https://www.google.com/s2/favicons?domain=angellist.com&sz=128" },
    { name: "Instahyre", logo: "https://www.google.com/s2/favicons?domain=instahyre.com&sz=128" },
    { name: "Wellfound", logo: "https://www.google.com/s2/favicons?domain=wellfound.com&sz=128" },
    { name: "IIMJobs", logo: "https://www.google.com/s2/favicons?domain=iimjobs.com&sz=128" },
    { name: "Glassdoor", logo: "https://www.google.com/s2/favicons?domain=glassdoor.com&sz=128" },
    { name: "Monster India", logo: "https://www.google.com/s2/favicons?domain=monsterindia.com&sz=128" },
    { name: "Cutshort", logo: "https://www.google.com/s2/favicons?domain=cutshort.io&sz=128" },
  ];

  return (
      <section className="py-16 bg-integration-bg border-y border-slate-200 dark:border-slate-800 logo-slider transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Available on top hiring platforms</p>
        </div>
        <div className="relative w-full">
          {/* Using integration-bg (slate-50/slate-100 approx) for gradients to match background */}
          <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-integration-bg to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-integration-bg to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto w-full no-scrollbar pb-4 items-center" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
            style={{ scrollBehavior: 'auto' }}
          >
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-20 min-w-max items-center px-8">
                {companies.map((company, i) => (
                  <div key={`${setIndex}-${i}`} className="group flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer min-w-[120px]">
                    <div className="h-12 flex items-center justify-center">
                        <img 
                            src={company.logo} 
                            alt={company.name}
                            className="h-full w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'block'; // Show fallback if img fails
                            }}
                        />
                        <span className="hidden material-symbols-outlined text-4xl text-slate-400">image_not_supported</span>
                    </div>
                    {/* Name always visible, larger size */}
                    <span className="text-lg font-bold text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors duration-300 whitespace-nowrap">{company.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default LogoSlider;
