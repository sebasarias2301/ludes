import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Institution from './components/Institution';
import Project from './components/Project';
import Context from './components/Context';
import Theoretical from './components/Theoretical';
import References from './components/References';
import Schedule from './components/Schedule';
import ResourcesGoals from './components/ResourcesGoals';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="min-h-screen bg-ludes-cream font-sans selection:bg-ludes-orange selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Institution />
        <Project />
        <Gallery />
        <div className="wave-separator text-ludes-orange/5" style={{marginTop: '-25px', zIndex: 10}}></div>
        <Context />
        <Theoretical />
        <References />
        <Schedule />
        <ResourcesGoals />
      </main>
      <Footer />
    </div>
  );
}

export default App;