import { ThemeProvider } from './context/ThemeContext';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <MouseGlow />
      <Navbar />
      <div className="snap-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
