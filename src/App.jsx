import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
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
        <Experience />
      </main>
      
      <Contact />
    </div>
  );
}

export default App;
