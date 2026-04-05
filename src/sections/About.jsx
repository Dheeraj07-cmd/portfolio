import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";
import SpotlightCard from "../components/ui/SpotlightCard";

export default function About() {
  return (
    <section id="about" className="py-32 relative z-10 px-6">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center"
      >
        <motion.div variants={fadeInUp} className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="text-indigo-400 font-semibold">Dheeraj</span>, a software engineer who loves creating systems that live on the internet. My interest in development started with building small applications and has grown into a passion for architecting full-stack solutions.
            </p>
            <p>
              Currently pursuing my B.Tech in Computer Science and Engineering at the Indore Institute of Science and Technology, I focus heavily on writing clean, scalable backend logic with <span className="text-emerald-400 font-semibold">Spring Boot</span> and building seamless user interfaces with <span className="text-emerald-400 font-semibold">React</span>.
            </p>
            <p>
              Whether it's optimizing database relations for a Blood Donation Platform or handling real-time data for a trading dashboard, I thrive on solving complex problems with elegant code.
            </p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full md:w-1/2">
          <SpotlightCard className="aspect-square flex flex-col items-center justify-center text-center p-8 bg-linear-to-br from-[#030712] to-indigo-900/20">

            <div className="w-40 h-40 rounded-full border-4 border-indigo-500/30 mb-6 shadow-[0_0_40px_rgba(99,102,241,0.3)] overflow-hidden relative group">

              <div className="absolute inset-0 bg-indigo-500/10 animate-pulse"></div>
              <img 
                src="/profile.jpeg" 
                alt="Dheeraj Choudhary" 
                className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span class="text-6xl flex items-center justify-center h-full">👨‍💻</span>';
                }}
              />
            </div>
       

            <h3 className="text-2xl font-bold text-white mb-2">Constantly Building</h3>
            <p className="text-indigo-300 font-mono text-sm">Turning coffee into scalable software.</p>
          </SpotlightCard>
        </motion.div>
      </motion.div>
    </section>
  );
}