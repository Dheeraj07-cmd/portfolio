import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'TypeScript', 'HTML/CSS']
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Java 21', 'REST APIs', 'Spring Security', 'JPA/Hibernate', 'Maven']
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Redis', 'JPA', 'Hibernate', 'Flyway']
  },
  {
    title: 'DevOps & Tools',
    skills: ['Docker', 'GitHub Actions', 'Git', 'Linux', 'Postman', 'IntelliJ IDEA']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-mono text-indigo-400 text-sm mb-2">02. What I work with</p>
        <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#161616] border border-[#262626] rounded-xl p-6 hover:border-indigo-500/40 transition-colors duration-300"
          >
            <h3 className="text-indigo-400 font-mono text-sm font-medium mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="bg-[#1f1f1f] text-neutral-300 text-xs px-3 py-1.5 rounded-full border border-[#333] hover:border-indigo-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}