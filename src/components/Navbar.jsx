import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > 150 && latest > previous) setHidden(true);
    else setHidden(false);
  });

  const navLinks = ['About', 'Skills', 'Projects', 'Experience'];

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-150%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center gap-8 rounded-full border border-white/10 bg-[#030712]/60 px-8 py-4 backdrop-blur-xl shadow-2xl">
        <a href="#home" className="text-xl font-bold tracking-tight text-white">
          DC<span className="text-indigo-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block rounded-full bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-400 transition-all hover:bg-indigo-500 hover:text-white"
        >
          Let's Talk
        </a>
      </nav>
    </motion.header>
  );
}