import { motion } from "framer-motion";
import SpotlightCard from "../components/ui/SpotlightCard";
import { staggerContainer, fadeInUp } from "../utils/motion";
import { Code2, Database, Layout, Server } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    { title: "Backend Systems", icon: Server, skills: ["Java", "Spring Boot", "Spring Security", "REST APIs"] },
    { title: "Frontend Engineering", icon: Layout, skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML/CSS"] },
    { title: "Database Architecture", icon: Database, skills: ["MongoDB", "MySQL"] },
    { title: "DevOps & Tools", icon: Code2, skills: ["Docker", "AWS", "Git/GitHub", "Render"] },
  ];

  return (
    <section id="skills" className="py-32 relative z-10 px-6">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Engineering Arsenal</h2>
          <p className="text-gray-400 max-w-2xl">The technologies and tools I use to build robust applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div variants={fadeInUp} key={idx} className={idx === 0 || idx === 1 ? "lg:col-span-2" : "lg:col-span-2"}>
                <SpotlightCard className="h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg border border-white/10 bg-[#030712]/50 text-sm text-gray-300 font-medium hover:border-indigo-500/50 hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}