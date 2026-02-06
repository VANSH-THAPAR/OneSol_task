import React from 'react';

const FAQ = () => {
    return (
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
    );
};

export default FAQ;
