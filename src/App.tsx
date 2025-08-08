import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import IntroSplash from './components/IntroSplash';

const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-100 via-dark-200 to-dark-300 overflow-x-hidden">
      <IntroSplash isVisible={showIntro} onFinish={() => setShowIntro(false)} />
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App; 