import React from 'react';

const Flowchart = () => {
  return (
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
  );
};

export default Flowchart;
