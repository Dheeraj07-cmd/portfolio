import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";
import { ArrowRight } from "lucide-react";
import { FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/ui/SocialIcons"; 

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] pt-20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
      >
        <motion.div variants={fadeInUp} className="mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm">
          Open to Opportunities
        </motion.div>

        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Building the backbones of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-emerald-400">
            modern applications.
          </span>
        </motion.h1>

        <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Hi, I’m Dheeraj Choudhary — a Full-Stack Developer specializing in Spring Boot and React. I build reliable backend systems and clean, responsive frontends that come together into smooth, intuitive user experiences.
        </motion.p>

        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center gap-4">
          <a 
            href="/resume/Dheeraj_Choudhary_Resume.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/40"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            View Resume
          </a>

          <a href="#projects" className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#030712] transition-transform hover:scale-105">
            View My Work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          
          <div className="flex gap-4 sm:ml-4">
            <a href="https://github.com/Dheeraj07-cmd" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/dheerajChoudhary07" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}