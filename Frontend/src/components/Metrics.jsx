import React from 'react';

const Metrics = () => {
    return (
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
    );
};

export default Metrics;
