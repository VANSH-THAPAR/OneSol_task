import React, { useEffect, useRef, useState } from 'react';

function App() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Initialize scroll position to the start of the second set
    // This allows scrolling left immediately without hitting the wall
    const adjustScroll = () => {
        const firstSet = scrollContainer.children[0];
        if (firstSet && scrollContainer.scrollLeft === 0) {
           scrollContainer.scrollLeft = firstSet.offsetWidth;
        }
    };
    // Small delay to ensure layout is ready
    setTimeout(adjustScroll, 100);

    let animationFrameId;

    const scroll = () => {
      if (!isPaused && scrollContainer.children.length > 0) {
        scrollContainer.scrollLeft += 1;
      }
      
      // Infinite scroll logic (wrap around)
      const firstSetWidth = scrollContainer.children[0]?.offsetWidth || 0;
      if (firstSetWidth > 0) {
        // If we've scrolled past the second set (into the third), jump back to first
        // We use >= 2 * width to enable bi-directional infinite scroll simulation
        if (scrollContainer.scrollLeft >= 2 * firstSetWidth) {
           scrollContainer.scrollLeft -= firstSetWidth;
        }
        // If we've scrolled back to minimal (into the first set), jump forward to second
        else if (scrollContainer.scrollLeft <= 0) {
           scrollContainer.scrollLeft += firstSetWidth;
        }
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const companies = [
    { name: "LinkedIn", icon: "work", color: "text-[#0A66C2]" },
    { name: "Naukri.com", icon: "badge", color: "text-[#2196F3]" },
    { name: "Indeed", icon: "search", color: "text-[#2164f3]" },
    { name: "AngelList", icon: "verified", color: "text-slate-900" },
    { name: "Instahyre", icon: "bolt", color: "text-[#FF5722]" },
    { name: "Wellfound (formerly AngelList Talent)", icon: "handshake", color: "text-black" },
    { name: "IIMJobs", icon: "school", color: "text-[#E91E63]" },
    { name: "Glassdoor", icon: "door_open", color: "text-[#00A65F]" },
    { name: "Monster India", icon: "destruction", color: "text-[#673AB7]" },
    { name: "Cutshort", icon: "content_cut", color: "text-[#FF9800]" },
  ];

  return (
    <div className="bg-white text-slate-900 antialiased font-display">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-hero-bg">
        <div className="orbit-container hidden xl:block absolute inset-0 pointer-events-none max-w-[90rem] mx-auto">
          {/* Top Left Bubble */}
          <div className="absolute top-[10%] left-[2%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 max-w-sm animate-float z-20">
            <div className="flex items-start gap-4">
              <div className="size-12 min-w-12 rounded-full bg-slate-200 overflow-hidden">
                <img alt="Sarah K." className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Sarah+K&background=random" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 italic mb-2">"Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors."</p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-900">Sarah K.</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">Founder at TechStart</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Top Right Bubble */}
          <div className="absolute top-[15%] right-[2%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 max-w-sm animate-float z-20" style={{ animationDelay: '1.5s' }}>
            <div className="flex items-start gap-4">
              <div className="size-12 min-w-12 rounded-full bg-slate-200 overflow-hidden">
                <img alt="Rahul M." className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Rahul+M&background=random" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 italic mb-2">"Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months."</p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-900">Rahul M.</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">Hiring Manager at GrowthCo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Bubble */}
          <div className="absolute bottom-[5%] left-[5%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 max-w-sm animate-float z-20" style={{ animationDelay: '3s' }}>
            <div className="flex items-start gap-4">
              <div className="size-12 min-w-12 rounded-full bg-slate-200 overflow-hidden">
                <img alt="Priya S." className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Priya+S&background=random" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 italic mb-2">"I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly."</p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-900">Priya S.</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">CEO at InnovateLabs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right Bubble */}
          <div className="absolute bottom-[10%] right-[5%] bg-surface-light p-5 rounded-2xl shadow-xl border border-slate-100 max-w-sm animate-float z-20" style={{ animationDelay: '4.5s' }}>
            <div className="flex items-start gap-4">
              <div className="size-12 min-w-12 rounded-full bg-slate-200 overflow-hidden">
                <img alt="Amit T." className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Amit+T&background=random" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900 italic mb-2">"Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening."</p>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-900">Amit T.</p>
                  <p className="text-[10px] uppercase tracking-wide text-slate-500 font-semibold">Head of HR at ScaleUp</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-blue-200 text-primary text-xs font-bold uppercase tracking-wide mb-8">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
             AI-Powered Recruitment V2.0
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1]">
             Every Hire, <br/>
            <span className="text-primary">Faster and Better</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
             Automate your recruitment pipeline today. Connect with top talent instantly using our intelligent automation engine.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-500/20 transition-all">Start Free Trial</button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-slate-400">play_circle</span> Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="bg-flow-bg py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Visual Logic Engine</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Build complex hiring workflows with our intuitive drag-and-drop node builder.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Flow 1 */}
            <div className="bg-flow-card rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-8 text-center text-white/90">Screening Flow</h3>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-blue-600/20 border border-blue-500 text-blue-100 px-6 py-3 rounded-full text-sm font-medium w-full text-center">New Application</div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="bg-slate-700 border border-slate-600 text-slate-200 px-6 py-4 rounded-sm text-sm font-medium w-full text-center">AI Resume Screen</div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="my-2 size-24 rotate-45 border border-purple-500/50 bg-purple-900/20 flex items-center justify-center">
                  <div className="-rotate-45 text-center text-xs font-bold text-purple-200 leading-tight">Score<br/>&gt; 75%?</div>
                </div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="bg-green-900/20 border border-green-500 text-green-100 px-6 py-4 rounded-sm text-sm font-medium w-full text-center">Auto-Schedule</div>
              </div>
            </div>

            {/* Flow 2 */}
            <div className="bg-flow-card rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-8 text-center text-white/90">Interview Loop</h3>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-blue-600/20 border border-blue-500 text-blue-100 px-6 py-3 rounded-full text-sm font-medium w-full text-center">AI Video Interview</div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="my-2 size-24 rotate-45 border border-purple-500/50 bg-purple-900/20 flex items-center justify-center">
                  <div className="-rotate-45 text-center text-xs font-bold text-purple-200 leading-tight">Score<br/>&gt; 80%?</div>
                </div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="bg-slate-700 border border-slate-600 text-slate-200 px-6 py-4 rounded-sm text-sm font-medium w-full text-center">Manager Interview</div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="flex w-full gap-2">
                  <div className="flex-1 bg-green-900/20 border border-green-500/50 text-green-100 py-3 rounded-sm text-center text-xs font-bold">HIRE</div>
                  <div className="flex-1 bg-red-900/20 border border-red-500/50 text-red-100 py-3 rounded-sm text-center text-xs font-bold">REJECT</div>
                </div>
              </div>
            </div>

            {/* Flow 3 */}
            <div className="bg-flow-card rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold mb-8 text-center text-white/90">Re-engagement</h3>
              <div className="flex flex-col items-center gap-1">
                <div className="bg-slate-700/50 border border-slate-600 text-slate-400 px-6 py-3 rounded-full text-sm font-medium w-full text-center">Rejected Candidate</div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="bg-slate-700 border border-slate-600 text-slate-200 px-6 py-4 rounded-sm text-sm font-medium w-full text-center">Wait 3 Months</div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="my-2 size-24 rotate-45 border border-purple-500/50 bg-purple-900/20 flex items-center justify-center">
                  <div className="-rotate-45 text-center text-xs font-bold text-purple-200 leading-tight">New<br/>Role?</div>
                </div>
                <span className="material-symbols-outlined text-slate-500">arrow_downward</span>
                <div className="bg-blue-900/20 border border-blue-500 text-blue-100 px-6 py-4 rounded-sm text-sm font-medium w-full text-center">AI Email Invite</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-metric-bg py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Proven Impact</h2>
            <p className="text-lg text-slate-600">Real results from over 500+ companies.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-8 items-end h-[400px] max-w-7xl mx-auto px-4">
            
            {/* Metric 1 */}
            <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
              <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">10x</div>
              <div className="w-full bg-[#3B82F6] rounded-t-lg h-[60%] group-hover:opacity-90 transition-all duration-500 relative overflow-hidden group-hover:h-[65%] shadow-lg shadow-blue-500/20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wide">Faster Screening</p>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">250+ apps/day<br/>vs 25 manual</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
              <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">70%</div>
              <div className="w-full bg-[#8B5CF6] rounded-t-lg h-[50%] group-hover:opacity-90 transition-all duration-500 relative overflow-hidden group-hover:h-[55%] shadow-lg shadow-purple-500/20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wide">Faster Hire</p>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">42 days to<br/>12 days</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
              <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">25x</div>
              <div className="w-full bg-[#0EA5E9] rounded-t-lg h-[75%] group-hover:opacity-90 transition-all duration-500 relative overflow-hidden group-hover:h-[80%] shadow-lg shadow-sky-500/20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wide">Capacity</p>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">200+ auto calls<br/>vs 8 manual</p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
              <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">95%</div>
              <div className="w-full bg-[#10B981] rounded-t-lg h-[85%] group-hover:opacity-90 transition-all duration-500 relative overflow-hidden group-hover:h-[90%] shadow-lg shadow-emerald-500/20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wide">Completion</p>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">Smart forms<br/>reduce drop-off</p>
              </div>
            </div>

            {/* Metric 5 */}
            <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
              <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">89%</div>
              <div className="w-full bg-[#F59E0B] rounded-t-lg h-[80%] group-hover:opacity-90 transition-all duration-500 relative overflow-hidden group-hover:h-[85%] shadow-lg shadow-amber-500/20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wide">Qualified Apps</p>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">AI optimized<br/>descriptions</p>
              </div>
            </div>

            {/* Metric 6 */}
            <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
              <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">80%</div>
              <div className="w-full bg-[#EC4899] rounded-t-lg h-[55%] group-hover:opacity-90 transition-all duration-500 relative overflow-hidden group-hover:h-[60%] shadow-lg shadow-pink-500/20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wide">Lower Costs</p>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">vs agencies<br/>& subscriptions</p>
              </div>
            </div>

            {/* Metric 7 */}
            <div className="flex flex-col items-center gap-3 group w-full h-full justify-end">
              <div className="text-xl md:text-2xl font-black text-slate-900 mb-1">50%</div>
              <div className="w-full bg-[#6366F1] rounded-t-lg h-[40%] group-hover:opacity-90 transition-all duration-500 relative overflow-hidden group-hover:h-[45%] shadow-lg shadow-indigo-500/20">
                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
              <div className="text-center">
                <p className="text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wide">Fewer Bad Hires</p>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1">Accuracy<br/>improvement</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Leading Companies Trust Us</h2>
            <p className="text-slate-500">From startups to enterprises, RecruiterAI scales with your hiring needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-[#FFFFFF] hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Processing</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Process thousands of resumes in seconds. Our AI engine never sleeps, ensuring no candidate is left waiting.</p>
            </div>
            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-[#FFFFFF] hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="size-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quick Time-to-Hire</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Cut down hiring cycles from months to days. Identify top talent instantly and schedule interviews automatically.</p>
            </div>
            {/* Card 3 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-[#FFFFFF] hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="size-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">database</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Massive Capacity</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Handle unlimited applicants without bottlenecks. Scale your hiring campaigns without scaling your HR team.</p>
            </div>
            {/* Card 4 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-[#FFFFFF] hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="size-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">balance</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Unbiased AI</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Fair and objective scoring for every candidate. Remove unconscious bias and build a diverse workforce.</p>
            </div>
            {/* Card 5 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-[#FFFFFF] hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="size-12 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">link</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Seamless Integration</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Connects with your existing ATS (Greenhouse, Lever, Workday) and communication tools like Slack and Zoom.</p>
            </div>
            {/* Card 6 */}
            <div className="p-6 rounded-2xl border border-slate-100 bg-[#FFFFFF] hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
              <div className="size-12 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Our dedicated support team and comprehensive knowledge base are available whenever you need help.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Marquee */}
      <section className="py-16 bg-integration-bg border-y border-slate-200 logo-slider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Integrated with the platforms you use every day</p>
        </div>
        <div className="relative w-full">
          <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto w-full no-scrollbar pb-4" 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
            style={{ scrollBehavior: 'auto' }} // Ensure immediate update for JS scroll
          >
            {/* Render 3 sets for seamless infinite loop */}
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 min-w-max items-center px-8">
                {companies.map((company, i) => (
                  <div key={`${setIndex}-${i}`} className="group flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                    <span className={`material-symbols-outlined text-4xl ${company.color}`}>{company.icon}</span>
                    <span className={`ml-2 font-bold text-xl ${company.color}`}>{company.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">What our users say</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Join thousands of hiring managers who have transformed their recruitment process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full flex flex-col">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span>
              </div>
              <p className="text-slate-700 text-lg mb-8 flex-1 italic">"RecruiterAI has completely transformed our hiring process. We've reduced our time-to-hire by 70% and the quality of candidates has never been better."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Jennifer Lopez" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Jennifer+L&background=random" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Jennifer Lopez</p>
                  <p className="text-sm text-slate-500">Head of Talent, TechCorp</p>
                </div>
              </div>
            </div>
            {/* Review 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full flex flex-col">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span>
              </div>
              <p className="text-slate-700 text-lg mb-8 flex-1 italic">"The automated screening is a game-changer. It's like having an extra 10 recruiters on the team working 24/7. Highly recommended."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Mark Chen" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Mark+C&background=random" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Mark Chen</p>
                  <p className="text-sm text-slate-500">VP of HR, GrowthInc</p>
                </div>
              </div>
            </div>
            {/* Review 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 h-full flex flex-col">
              <div className="flex gap-1 mb-6 text-yellow-400">
                <span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span><span className="material-symbols-outlined text-lg">star</span>
              </div>
              <p className="text-slate-700 text-lg mb-8 flex-1 italic">"The interview scheduling features alone saved me 15 hours a week. I can finally focus on building relationships with candidates."</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                  <img alt="Sarah Miller" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Sarah+M&background=random" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Sarah Miller</p>
                  <p className="text-sm text-slate-500">Recruiting Lead, ScaleUp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Everything you need to know about RecruiterAI.</p>
          </div>
          <div className="space-y-4">
            <details className="group p-6 rounded-2xl bg-white border border-slate-200 open:bg-slate-50 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-lg select-none">
                 How does the AI matching work?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">Our AI analyzes candidate profiles against your job descriptions using natural language processing to identify the best matches based on skills, experience, and cultural fit.</p>
            </details>
            <details className="group p-6 rounded-2xl bg-white border border-slate-200 open:bg-slate-50 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-lg select-none">
                 Is my data secure?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">Yes, we are SOC2 Type II compliant and use enterprise-grade encryption to ensure your data and candidate information is always protected.</p>
            </details>
            <details className="group p-6 rounded-2xl bg-white border border-slate-200 open:bg-slate-50 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-lg select-none">
                 Can I integrate with my current ATS?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">Absolutely. We offer native integrations with all major ATS platforms including Greenhouse, Lever, Workday, and more.</p>
            </details>
            <details className="group p-6 rounded-2xl bg-white border border-slate-200 open:bg-slate-50 transition-all cursor-pointer">
              <summary className="flex items-center justify-between font-bold text-slate-900 text-lg select-none">
                 What is the pricing model?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 text-slate-600 leading-relaxed">We offer flexible pricing based on your hiring volume. Contact our sales team for a custom quote tailored to your needs.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}

export default App;