import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-6xl mx-auto pt-20">
      <motion.div variants={container} initial="hidden" animate="show">

        <motion.p variants={item} className="font-mono text-indigo-400 text-sm mb-4">
          Hi, my name is
        </motion.p>

        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Dheeraj Choudhary.
        </motion.h1>

        <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold text-neutral-500 mb-6">
          I build things for the web.
        </motion.h2>

        <motion.p variants={item} className="text-neutral-400 text-lg max-w-xl mb-10 leading-relaxed">
          Full Stack Developer specializing in building exceptional digital experiences
          with React, Spring Boot, Docker, and cloud platforms.
        </motion.p>

        <motion.div variants={item} className="flex gap-4 flex-wrap">

          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded transition-all duration-200 font-medium"
          >
            View my work
          </a>

          <a
            href="#contact"
            className="border border-neutral-700 hover:border-indigo-400 text-neutral-300 hover:text-indigo-400 px-6 py-3 rounded transition-all duration-200 font-medium"
          >
            Get in touch
          </a>

        </motion.div>
      </motion.div>
    </section>
  )
}