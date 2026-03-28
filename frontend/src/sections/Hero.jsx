export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <p className="text-cyan-400 font-mono mb-5 tracking-wide">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tight">
          Dheeraj Choudhary.
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-500 mb-8 tracking-tight">
          I build full-stack solutions.
        </h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          I'm a software engineer specializing in building exceptional digital experiences. Currently focused on building robust backends with Spring Boot and dynamic frontends with React.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#projects" className="px-8 py-4 bg-cyan-400 text-slate-900 font-bold rounded-lg hover:bg-cyan-300 transition-all duration-300 hover:-translate-y-1">
            View My Work
          </a>
          <a href="https://github.com/Dheeraj07-cmd" target="_blank" rel="noreferrer" className="text-slate-300 font-mono hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400 pb-1">
            GitHub Profile ↗
          </a>
        </div>
      </div>
    </section>
  );
}