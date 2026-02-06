import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Flowchart from './components/Flowchart';
import Metrics from './components/Metrics';
import Benefits from './components/Benefits';
import LogoSlider from './components/LogoSlider';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-slate-900 antialiased font-display">
      <Navbar />
      <Hero />
      <Flowchart />
      <Metrics />
      <Benefits />
      <LogoSlider />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
