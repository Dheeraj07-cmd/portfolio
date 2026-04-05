import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";

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
    <section id="experience" className="py-32 bg-[#030712] px-6">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-gray-400">My academic journey and continuous learning path.</p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div variants={fadeInUp} key={index} className="relative pl-8 md:pl-12">
              <div className="absolute -left-2.25 top-1.5 h-4 w-4 rounded-full bg-[#030712] border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
              
              <div className="group rounded-2xl border border-white/5 bg-white/5 p-6 md:p-8 transition-colors hover:border-white/10 hover:bg-white/[0.07]">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.title}</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-mono font-medium border border-indigo-500/20 whitespace-nowrap w-max">
                    {exp.date}
                  </span>
                </div>
                
                <div className="text-emerald-400 font-medium text-sm mb-4">
                  {exp.company}
                </div>
                
                <ul className="space-y-2">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                      <span className="text-indigo-500 mt-1">▹</span> 
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}