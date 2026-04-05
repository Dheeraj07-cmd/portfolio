// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import SpotlightCard from "../components/ui/SpotlightCard";
// import { staggerContainer, fadeInUp } from "../utils/motion";
// import { ExternalLink, AlertCircle, Database } from "lucide-react";
// import { GithubIcon } from "../components/ui/SocialIcons";

// export default function Projects() {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/projects/featured`)
//       .then(res => {
//         if (!res.ok) throw new Error("Failed to fetch from backend");
//         return res.json();
//       })
//       .then(data => {
//         setProjects(data);
//         setError(false);
//       })
//       .catch(err => {
//         console.error("Database connection failed:", err);
//         setError(true);
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <section id="projects" className="py-32 bg-[#030712] px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
//           <p className="text-gray-400">A selection of my recent full-stack applications.</p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center py-20">
//             <div className="w-8 h-8 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
//           </div>
//         ) : 

//         error ? (
//           <div className="flex flex-col items-center justify-center py-20 text-center border border-red-500/10 bg-red-500/5 rounded-3xl">
//             <AlertCircle className="w-10 h-10 text-red-400 mb-4 opacity-80" />
//             <h3 className="text-xl font-bold text-white mb-2">Backend Connection Failed</h3>
//             <p className="text-gray-400 max-w-md">Could not connect to the Spring Boot server to retrieve projects.</p>
//           </div>
//         ) : 

//         projects.length === 0 ? (
//           <div className="flex flex-col items-center justify-center py-20 text-center border border-white/5 bg-white/5 rounded-3xl">
//             <Database className="w-10 h-10 text-gray-500 mb-4 opacity-50" />
//             <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
//             <p className="text-gray-400 max-w-md">The database is currently empty. Please run your data.sql script to populate projects.</p>
//           </div>
//         ) : 

//         (
//           <motion.div 
//             variants={staggerContainer} 
//             initial="hidden" 
//             whileInView="show" 
//             viewport={{ once: true, margin: "-100px" }}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8"
//           >
//             {projects.map((project) => (
//               <motion.div variants={fadeInUp} key={project.id}>
//                 <SpotlightCard className="h-full flex flex-col justify-between group">
//                   <div>
//                     <div className="flex justify-between items-start mb-6">
                      
//                       <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
//                         {project.imageUrl ? project.imageUrl : project.title.charAt(0)}
//                       </div>
                      
//                       <div className="flex gap-3">
//                         {project.githubUrl && (
//                           <a href={project.githubUrl} className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noreferrer">
//                             <GithubIcon className="w-5 h-5" />
//                           </a>
//                         )}
//                         {project.liveUrl && (
//                           <a href={project.liveUrl} className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noreferrer">
//                             <ExternalLink className="w-5 h-5" />
//                           </a>
//                         )}
//                       </div>
//                     </div>
                    
//                     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
//                     <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>
//                   </div>

//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.techStack.split(',').map((tech, i) => (
//                       <span key={i} className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
//                         {tech.trim()}
//                       </span>
//                     ))}
//                   </div>
//                 </SpotlightCard>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

import { motion } from "framer-motion";
import SpotlightCard from "../components/ui/SpotlightCard";
import { staggerContainer, fadeInUp } from "../utils/motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../components/ui/SocialIcons";
import { projectsData } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-[#030712] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-gray-400">A selection of my recent full-stack applications.</p>
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
                    
                    {/* Render Image if available, otherwise show the first letter */}
                    {project.imageUrl ? (
                        <img src={project.imageUrl} alt={project.title} className="w-16 h-16 rounded-xl object-cover shadow-lg" />
                    ) : (
                        <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-emerald-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {project.title.charAt(0)}
                        </div>
                    )}
                    
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                          <GithubIcon className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="text-gray-500 hover:text-white transition-colors" target="_blank" rel="noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">{project.description}</p>
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