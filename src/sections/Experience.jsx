import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/motion";

export default function Experience() {
  const experiences = [
    {
      title: "B.Tech in Computer Science and Engineering",
      company: "Indore Institute of Science and Technology",
      date: "Present",
      details: ["Developing a solid understanding of core computer science fundamentals.", "Actively building practical, real-world applications.", "Continuously improving problem-solving and system design skills."],
      certificate: null
    },
    {
      title: "AWS Certified Developer",
      company: "Infosys",
      date: "Completed",
      details: [
        "Gained hands-on understanding of cloud-based application development using AWS services.",
        "Worked with core services like EC2, S3, and IAM for deploying and managing scalable applications.",
        "Learned best practices for building secure, reliable, and high-performance cloud solutions."
      ],
      certificate: "/certificates/AWS_Cretificate__Infosys.pdf"
    },
    {
      title: "Software Engineering Job Simulation",
      company: "JPMorgan Chase & Co.",
      date: "Completed",
      details: [
        "Completed real-world engineering tasks including REST API development and backend integration.",
        "Implemented Kafka-based messaging and worked with microservice-style architecture concepts.",
        "Gained practical exposure to industry-level workflows and financial system design patterns."
      ],
      certificate: "/certificates/JPMorgan__JobSimulation__Forage.pdf"
    },
    {
      title: "Introduction to Cybersecurity",
      company: "Cisco Networking Academy",
      date: "Completed",
      details: [
        "Understood core cybersecurity principles including threats, vulnerabilities, and attack vectors.",
        "Learned fundamentals of network security, encryption, and secure communication practices.",
        "Developed awareness of protecting systems and data in real-world digital environments."
      ],
      certificate: "/certificates/Cybersecurity_Certificate__Cisco.pdf"
    },
    {
      title: "SQL and Relational Databases",
      company: "Cognitive Class",
      date: "Completed",
      details: [
        "Mastered writing complex SQL queries including joins, aggregations, and subqueries.",
        "Designed and managed relational databases with focus on data integrity and optimization.",
        "Gained practical knowledge of database schema design and efficient data retrieval techniques."
      ],
      certificate: "/certificates/IBM__SQLCertificate__CognitiveClass.pdf"
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations",
      company: "AWS Academy",
      date: "Completed",
      details: [
        "Built a strong foundation in cloud computing concepts including IaaS, PaaS, and SaaS models.",
        "Explored AWS services, cloud architecture, and deployment strategies.",
        "Understood scalability, cost optimization, and security in cloud-based systems."
      ],
      certificate: "/certificates/AWS_Academy_Graduate__Cloud_Foundations.pdf"
    },
    {
      title: "DSA with Java",
      company: "Apna College",
      date: "Completed",
      details: [
        "Strengthened problem-solving skills using data structures like arrays, linked lists, trees, and graphs.",
        "Implemented algorithms for sorting, searching, and recursion-based problem solving.",
        "Developed a strong foundation for writing efficient and optimized code."
      ],
      certificate: "/certificates/Java_DSA__ApnaCollege.pdf"
    },
    {
      title: "Frontend Developer (React)",
      company: "HackerRank",
      date: "Completed",
      details: [
        "Built dynamic and reusable UI components using React and modern JavaScript.",
        "Worked with state management, props, and component-based architecture.",
        "Focused on creating responsive, accessible, and performance-optimized user interfaces."
      ],
      certificate: "/certificates/React_Certificate__HackerRank.pdf"
    },


  ];

  return (
    <section id="experience" className="py-32 relative z-10 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeInUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-gray-400">A strong academic foundation combined with a commitment to continuous learning and technical growth.</p>
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

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-lg border border-indigo-500/30 text-indigo-300 text-sm font-medium hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300"
                  >
                    View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}