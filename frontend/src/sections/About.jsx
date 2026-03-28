export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <div className="h-px bg-white/10 flex-grow" />
        </div>
        
        <div className="text-slate-400 text-lg leading-relaxed space-y-6">
          <p>
            Hello! My name is Dheeraj and I enjoy creating things that live on the internet. My interest in web development started when I realized that combining logic with design could create powerful tools accessible to anyone in the world.
          </p>
          <p>
            Fast-forward to today, I've had the privilege of building full-stack applications like a complete trading dashboard (TradeX) and a social impact Blood Donation Platform. I specialize in bridging the gap between robust, secure backends using <span className="text-cyan-400 font-medium">Java and Spring Boot</span> and dynamic, responsive frontends using <span className="text-cyan-400 font-medium">React</span>.
          </p>
          <p>
            When I'm not at the computer, I'm usually reading up on system design, exploring new cloud technologies, or participating in tech communities.
          </p>
        </div>
      </div>
    </section>
  );
}