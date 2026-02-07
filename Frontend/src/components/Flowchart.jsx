import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Flowchart = () => {
  const [activeFlow, setActiveFlow] = useState(0);

  const flows = [
    {
      title: "Screening Automation",
      steps: [
        { type: 'trigger', label: 'New Application', icon: 'description' },
        { type: 'action', label: 'AI Resume Screen', icon: 'psychology' },
        { type: 'condition', label: 'Score > 85%', icon: 'rule' },
        { type: 'outcome', label: 'Auto-Schedule Interview', icon: 'calendar_month', color: 'green' }
      ]
    },
    {
      title: "Interview Loop",
      steps: [
        { type: 'trigger', label: 'Video Interview Completed', icon: 'video_call' },
        { type: 'action', label: 'AI Sentiment Analysis', icon: 'sentiment_satisfied' },
        { type: 'condition', label: 'Soft Skills passed?', icon: 'thumbs_up_down' },
        { type: 'outcome', label: 'Notify Hiring Manager', icon: 'notifications_active', color: 'blue' }
      ]
    },
    {
      title: "Candidate Re-engagement",
      steps: [
        { type: 'trigger', label: 'Old Candidate Database', icon: 'folder_open' },
        { type: 'action', label: 'Check "Open for Work"', icon: 'work_history' },
        { type: 'condition', label: 'Skills match new role?', icon: 'grading' },
        { type: 'outcome', label: 'Send Invite Email', icon: 'send', color: 'purple' }
      ]
    }
  ];

  return (
      <section className="bg-flow-bg py-24 text-white overflow-hidden relative selection:bg-purple-500/30">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, #4b5563 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
            >
              Visual Logic <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Engine</span>
            </motion.h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Build powerful, branching workflows without writing a single line of code.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 min-h-[600px]">
            {/* Sidebar Controls */}
            <div className="flex-none lg:w-64 space-y-4">
               {flows.map((flow, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setActiveFlow(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-3 group ${activeFlow === idx ? 'bg-white/10 border-white/20 shadow-lg shadow-purple-500/10' : 'bg-transparent border-transparent hover:bg-white/5'}`}
                 >
                   <div className={`size-8 rounded-lg flex items-center justify-center transition-colors ${activeFlow === idx ? 'bg-purple-500/20 text-purple-300' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'}`}>
                      <span className="material-symbols-outlined text-sm">{idx + 1}</span>
                   </div>
                   <span className={`font-semibold ${activeFlow === idx ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>{flow.title}</span>
                 </button>
               ))}
            </div>

            {/* Canvas Area */}
            <div className="flex-1 bg-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden shadow-2xl">
              {/* Toolbar Mockup */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                 <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                    </div>
                 </div>
                 <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
                    Auto-Save: On
                 </div>
              </div>

               {/* Nodes Container */}
               <div className="h-full flex items-center justify-center pt-8">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeFlow}
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center gap-8 relative"
                  >
                    {/* SVG Connector Line Background */}
                    <div className="absolute top-0 bottom-0 w-px bg-slate-800 -z-10"></div>
                    <AnimatedPath />

                    {flows[activeFlow].steps.map((step, idx) => (
                      <Node key={idx} step={step} isLast={idx === flows[activeFlow].steps.length - 1} />
                    ))}
                  </motion.div>
                </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </section>
  );
};

const Node = ({ step, isLast }) => {
  const isDiamond = step.type === 'condition';
  
  return (
    <div className="relative z-10 group">
      {/* Connector Nodes */}
      {!isDiamond && (
          <div className={`relative bg-[#1e293b] border ${isLast ? `border-${step.color || 'blue'}-500/50` : 'border-slate-600'} rounded-2xl p-4 w-72 flex items-center gap-4 shadow-xl transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10`}>
          <div className={`size-10 rounded-lg flex items-center justify-center ${isLast ? `bg-${step.color || 'blue'}-500/20 text-${step.color || 'blue'}-400` : 'bg-slate-700 text-slate-300'}`}>
            <span className="material-symbols-outlined">{step.icon}</span>
          </div>
          <div>
            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-0.5">{step.type}</p>
            <p className="font-semibold text-white">{step.label}</p>
          </div>
          
          {/* Active Pulse Dot */}
          {step.type === 'trigger' && (
             <span className="absolute -right-1 -top-1 size-3 bg-green-500 rounded-full animate-pulse border-2 border-[#1e293b]"></span>
          )}
        </div>
      )}

      {isDiamond && (
        <div className="size-32 rotate-45 border-2 border-dashed border-purple-500/40 bg-purple-900/10 flex items-center justify-center my-4 group-hover:border-purple-500 transition-colors backdrop-blur-sm">
          <div className="-rotate-45 text-center">
             <span className="material-symbols-outlined text-purple-400 text-2xl mb-1">{step.icon}</span>
             <p className="text-sm font-bold text-purple-200 leading-tight">{step.label}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const AnimatedPath = () => {
    return (
        <div className="absolute top-0 left-1/2 -ml-[1px] w-[2px] h-full overflow-hidden -z-10 bg-slate-800/50">
             <motion.div 
                className="w-full h-[100px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"
                animate={{ top: ['-20%', '120%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                style={{ position: 'absolute' }}
             />
        </div>
    );
};

export default Flowchart;
