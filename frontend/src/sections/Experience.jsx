export default function Experience() {
  const experiences = [
    {
      title: "B.Tech in Computer Science and Engineering",
      company: "Indore Institute of Science and Technology",
      date: "Present",
      details: ["Focusing on full-stack development, algorithms, and system design.", "Building complex academic and personal projects."]
    },
    {
      title: "Introduction to Cybersecurity",
      company: "Cisco Networking Academy",
      date: "Completed",
      details: ["Gained foundational knowledge of cybersecurity principles, network security, and cryptography."]
    },
    {
      title: "SQL and Relational Databases",
      company: "Cognitive Class",
      date: "Completed",
      details: ["Mastered relational database concepts, complex queries, and data management."]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl font-bold text-white">Education & Certifications</h2>
          <div className="h-[1px] bg-white/10 flex-grow" />
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-slate-900 text-cyan-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,212,255,0.8)]"></span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition-colors">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                </div>
                <div className="text-cyan-400 font-mono text-sm mb-4">{exp.company} <span className="text-slate-500">• {exp.date}</span></div>
                <ul className="text-slate-400 text-sm space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-500 mt-1">▹</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}