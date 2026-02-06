import React from 'react';

const Benefits = () => {
    return (
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
    );  
};

export default Benefits;
