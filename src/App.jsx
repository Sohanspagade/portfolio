import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { GradientBackground } from './UI/GradientBackground';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent/30 selection:text-white">
      <GradientBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      
      <Contact />
    </div>
  );
}

export default App;
