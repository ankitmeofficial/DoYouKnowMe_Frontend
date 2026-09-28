import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import use3DTilt from './hooks/use3DTilt';

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize ScrollReveal entrance observer & 3D Magnetic Tilt
  useScrollReveal(loading);
  use3DTilt();

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-main)' }}>
      {/* Initial Animated Loading Screen */}
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {/* Interactive Particle Canvas */}
      <CanvasBackground />

      {/* Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Achievements />
        <Extracurricular />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
