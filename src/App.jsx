import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import InteractiveBackground from './components/ui/InteractiveBackground';

export default function App() {
  return (

    <div className="relative min-h-screen text-slate-50 font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      <InteractiveBackground />

      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'url("/noise.png")' }}></div>

      <Navbar />

      <main className="relative z-10 flex flex-col items-center w-full">
        <div className="w-full max-w-7xl mx-auto backdrop-blur-[1px]">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}