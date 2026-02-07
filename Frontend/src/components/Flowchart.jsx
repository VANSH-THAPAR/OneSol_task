import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  },
  exit: { 
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 50, damping: 10 } }
};

const Flowchart = () => {
  const [activeFlow, setActiveFlow] = useState(0);

  const flows = [
    {
      title: "Automated Screening",
      benefit: "Screen 250+ applications in minutes vs. 8 hours manually",
      steps: [
        { type: 'trigger', label: '[New Application] Submitted', icon: 'description' },
        { type: 'action', label: 'AI Resume Screening (Top 20%)', icon: 'psychology' },
        { type: 'action', label: 'Auto-send Screening Questions', icon: 'mail' },
        { type: 'condition', label: 'Qualification > 75%?', icon: 'rule' },
        { type: 'branch', 
          yes: { label: '[Auto-schedule Interview] via Calendar', icon: 'event_available', color: 'green' },
          no: { label: '[Send Thank You] + Add to Talent Pool', icon: 'mark_email_read', color: 'slate' }
        },
        { type: 'outcome', label: 'Send Reminder (24h Before)', icon: 'notifications_active', color: 'blue' }
      ]
    },
    {
      title: "Multi-Stage Interview",
      benefit: "Reduce time-to-hire from 42 days to 12 days",
      steps: [
        { type: 'trigger', label: 'Candidate Accepts Invite', icon: 'how_to_reg' },
        { type: 'action', label: 'Round 1: AI Video Interview', icon: 'videocam' },
        { type: 'action', label: 'AI Scores Responses', icon: 'analytics' },
        { type: 'condition', label: 'Score > 80%?', icon: 'fact_check' },
        { type: 'branch', 
          yes: { label: '[Auto-schedule Round 2] with HM', icon: 'groups', color: 'blue' },
          no: { label: '[Auto-rejection] with Feedback', icon: 'unsubscribe', color: 'slate' }
        },
        { type: 'action', label: 'Hiring Manager Interview', icon: 'badge' },
        { type: 'condition', label: 'Hiring Decision?', icon: 'gavel' },
        { type: 'branch', 
            yes: { label: '[Send Offer] + Welcome Kit', icon: 'verified', color: 'green' },
            no: { label: '[Personalized Reject] + Future Note', icon: 'rate_review', color: 'orange' }
          }
      ]
    },
    {
      title: "Passive Re-engagement",
      benefit: "Build a qualified talent pipeline automatically - never start from zero",
      steps: [
        { type: 'trigger', label: 'Candidate Rejected (60-74%)', icon: 'person_search' },
        { type: 'action', label: 'Add to "Future Talent" DB', icon: 'database' },
        { type: 'action', label: 'Wait 3 Months (Patience Period)', icon: 'hourglass_top' },
        { type: 'condition', label: 'New Role Opens?', icon: 'domain_add' },
        { type: 'branch', 
            yes: { label: 'Send AI Re-engagement Email', icon: 'send', color: 'purple' },
            no: { label: 'Loop Back: Wait Another Quarter', icon: 'update', color: 'slate' }
        },
        { type: 'condition', label: 'Candidate Interested?', icon: 'contact_support' },
        { type: 'branch', 
            yes: { label: 'Fast-track to Interview (Skip Screening)', icon: 'rocket_launch', color: 'green' },
            no: { label: 'Keep in Talent Pool', icon: 'archive', color: 'slate' }
        }
      ]
    }
  ];

  return (
      <section className="bg-slate-950 py-24 text-white overflow-hidden relative selection:bg-purple-500/30">
        
        {/* Animated Background Ambience */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(30,58,138,0.2),_transparent_70%)]"></div>
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]"></div>
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
              Automate complex recruitment workflows with intelligent branching.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 min-h-[850px]">
            {/* Sidebar Controls */}
            <div className="flex-none lg:w-80 space-y-4">
               {flows.map((flow, idx) => (
                 <button 
                  key={idx}
                  onClick={() => setActiveFlow(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group relative overflow-hidden ${activeFlow === idx ? 'bg-slate-800/80 border-blue-500/50 shadow-lg shadow-blue-900/20' : 'bg-slate-900/40 border-slate-800 hover:bg-slate-800/60'}`}
                 >
                   {/* Button Active Glow */}
                   {activeFlow === idx && <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>}

                   <div className={`size-12 rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-inner ${activeFlow === idx ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-blue-500/20' : 'bg-slate-800 text-slate-500 group-hover:bg-slate-700'}`}>
                      <span className="material-symbols-outlined text-2xl">{idx === 0 ? 'filter_alt' : idx === 1 ? 'video_chat' : 'published_with_changes'}</span>
                   </div>
                   <div>
                       <span className={`block font-bold text-lg mb-0.5 ${activeFlow === idx ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>{flow.title}</span>
                       <span className={`text-xs font-mono uppercase tracking-widest ${activeFlow === idx ? 'text-blue-300' : 'text-slate-600'}`}>Workflow {idx + 1}</span>
                   </div>
                 </button>
               ))}

               {/* Benefit Card */}
               <motion.div 
                    key={activeFlow}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 backdrop-blur-md relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <span className="material-symbols-outlined text-6xl">trending_up</span>
                    </div>
                    <div className="relative z-10">
                        <div className="text-xs opacity-70 uppercase font-bold tracking-wider mb-2 text-blue-300 flex items-center gap-2">
                             <span className="size-2 rounded-full bg-blue-400 animate-pulse"></span>
                             Efficiency Impact
                        </div>
                        <div className="font-medium text-blue-50 leading-relaxed text-lg">"{flows[activeFlow].benefit}"</div>
                    </div>
                </motion.div>
            </div>

            {/* Canvas Area */}
            <div className="flex-1 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/5 p-4 md:p-12 relative overflow-hidden shadow-2xl flex flex-col ring-1 ring-inset ring-white/5">
              
               {/* Grid Pattern inside Canvas */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

               {/* Toolbar Header */}
               <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none z-20">
                 <div className="flex items-center gap-3 bg-black/20 p-2 rounded-full backdrop-blur-md border border-white/5 pr-4">
                    <div className="flex gap-1.5 pl-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/40 border border-green-500/50"></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 border-l border-white/10 pl-3">FLOW_ID: {activeFlow + 101}</span>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-300 backdrop-blur-md">
                    <span className="size-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    SYSTEM_ACTIVE
                 </div>
              </div>

               {/* Nodes Container */}
               <div className="flex-1 flex items-start justify-center pt-20 pb-12 overflow-y-auto custom-scrollbar relative">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeFlow}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="flex flex-col items-center gap-10 relative w-full max-w-2xl px-4"
                  >
                     {/* MAIN VERTICAL LINE (Animated) */}
                    <div className="absolute top-6 bottom-12 left-1/2 w-[2px] bg-slate-800 -z-50 -translate-x-1/2 overflow-hidden rounded-full">
                         <motion.div 
                            className="w-full h-[150px] bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-50"
                            animate={{ top: ['-20%', '120%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            style={{ position: 'absolute' }}
                         />
                    </div>
                    
                    {flows[activeFlow].steps.map((step, idx) => (
                      <NodeResolver key={idx} step={step} isLast={idx === flows[activeFlow].steps.length - 1} />
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

const NodeResolver = ({ step, isLast }) => {
    if (step.type === 'branch') {
        return (
            <motion.div 
              variants={itemVariants} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="w-full flex justify-between gap-2 relative py-4"
            >
                {/* Branch Lines SVG - Visible Connection */}
                <svg className="absolute top-0 left-0 w-full h-[60px] -z-40 pointer-events-none overflow-visible">
                     <defs>
                        <linearGradient id="gradPath" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#64748b" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    {/* Left Branch (Yes) */}
                    <path d="M 50% 0 V 20 H 25% V 50" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 50% 0 V 20 H 25% V 50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" />
                    
                    {/* Right Branch (No) */}
                    <path d="M 50% 0 V 20 H 75% V 50" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4 4" />
                    
                    {/* Center Junction Dot */}
                    <circle cx="50%" cy="0" r="4" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                </svg>
                
                <div className="flex-1 flex flex-col items-center">
                     <div className="mb-3 relative">
                         <div className="absolute top-1/2 left-0 w-full h-px bg-emerald-500/20 -z-10"></div>
                         <span className="bg-[#022c22] border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg shadow-emerald-900/50">YES</span>
                     </div>
                     <NodeCard step={step.yes} small colorOverride="emerald" />
                </div>
                <div className="flex-1 flex flex-col items-center">
                     <div className="mb-3 relative">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-500/20 -z-10"></div>
                        <span className="bg-[#1e1e1e] border border-slate-600 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">NO</span>
                     </div>
                     <NodeCard step={step.no} small colorOverride="slate" />
                </div>
            </motion.div>
        )
    }

    if (step.type === 'condition') {
        return (
            <motion.div 
              variants={itemVariants} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              className="relative z-10 py-1"
            >
                 {/* Input Pipe */}
                 <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-700 z-0"></div>
                 
                 <div className="size-32 rotate-45 border border-slate-700 bg-[#0f172a] flex items-center justify-center group shadow-2xl relative">
                    <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     {/* Inner Border */}
                    <div className="absolute inset-2 border border-dashed border-slate-700 group-hover:border-purple-500/50 transition-colors"></div>
                    
                    <div className="-rotate-45 text-center p-2 relative z-10">
                        <span className="material-symbols-outlined text-purple-400 text-3xl mb-1 block group-hover:scale-110 transition-transform">{step.icon}</span>
                        <p className="text-xs font-bold text-slate-200 leading-tight">{step.label}</p>
                    </div>
                 </div>

                 {/* Output Pipe */}
                 <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-slate-700 z-0"></div>
            </motion.div>
        )
    }

    return (
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
            <NodeCard step={step} isLast={isLast} />
        </motion.div>
    );
}

const NodeCard = ({ step, isLast, small, colorOverride }) => {
    const activeColor = step.color || 'blue';
    const borderColor = colorOverride ? `border-${colorOverride}-500/40` : `border-${activeColor}-500/40`;
    
    return (
        <div className={`relative bg-[#1e293b] border ${isLast ? borderColor : 'border-slate-700'} rounded-xl ${small ? 'p-3 w-44' : 'p-4 w-72'} flex items-center gap-3 shadow-xl z-10 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 group`}>
          
          {/* Top Connector Dot */}
          <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1e293b] border-2 border-slate-600 rounded-full z-20"></div>
          
          {/* Bottom Connector Dot */}
          {!isLast && (
            <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-[#1e293b] border-2 border-slate-600 rounded-full z-20"></div>
          )}

          <div className={`${small ? 'size-9 text-lg' : 'size-12'} aspect-square rounded-lg flex items-center justify-center shrink-0 ${isLast || colorOverride ? `bg-opacity-20` : 'bg-slate-800'} ${colorOverride === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' : colorOverride === 'slate' ? 'bg-slate-700/50 text-slate-400' : 'bg-blue-500/10 text-blue-400'} border border-white/5`}>
            <span className="material-symbols-outlined">{step.icon}</span>
          </div>
          
          <div className="min-w-0">
            {!small && <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-0.5">{step.type}</p>}
            <p className={`${small ? 'text-xs' : 'text-sm'} font-bold text-white leading-tight`}>{step.label}</p>
          </div>
          
          {/* Status Indicator for specific nodes */}
          {step.type === 'trigger' && !small && (
             <div className="absolute top-3 right-3 flex gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
             </div>
          )}
        </div>
    )
}

export default Flowchart;
