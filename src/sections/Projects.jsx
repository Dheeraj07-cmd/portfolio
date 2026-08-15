import { motion } from "framer-motion";
import SpotlightCard from "../components/ui/SpotlightCard";
import { staggerContainer, fadeInUp } from "../utils/motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/ui/SocialIcons";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-gray-400">A collection of thoughtfully engineered applications that demonstrate my approach to solving real-world problems through code.</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div variants={fadeInUp} key={project.id}>
              <SpotlightCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-6">

                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-16 h-16 rounded-xl object-cover shadow-lg" />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {project.title.charAt(0)}
                      </div>
                    )}

                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="text-indigo-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                          <GithubIcon className="w-6 h-6" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-indigo-400 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <ul className="text-gray-400 text-sm leading-relaxed mb-8 space-y-2">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-indigo-500">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.split(',').map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}