export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-8 text-center mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
        <p className="text-slate-500 text-sm font-mono">
          Designed & Built by Dheeraj Choudhary
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/Dheeraj07-cmd" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}