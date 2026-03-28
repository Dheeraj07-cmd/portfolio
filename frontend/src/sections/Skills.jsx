export default function Skills() {
  const skills = [
    "Java", "Spring Boot", "Spring Security", "REST APIs",
    "JavaScript (ES6+)", "React", "Tailwind CSS", "HTML5/CSS3",
    "MySQL", "MongoDB", "Docker", "Git/GitHub", "AWS", "Render"
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          <div className="h-[1px] bg-white/10 flex-grow max-w-xs" />
        </div>
        
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="text-cyan-400 mr-2 font-mono">▹</span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}