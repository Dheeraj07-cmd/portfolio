export const projectsData = [
  {
    id: 1,
    title: "TradeX Dashboard",
    description: "Engineered a high-performance trading platform using Spring Boot and MongoDB.",
    tag: "Full-Stack",
    points: [
      <>Delivered real-time market updates via WebSockets at {" "}<span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">5-seconds</span>{" "} intervals.</>,
      <>Optimized REST APIs to achieve sub-<span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">200ms</span>
        {" "} response times. </>,
      "Secured endpoints using JWT authentication and role-based access control.",
      <>Deployed using Docker with {" "}<span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">~99% uptime</span>{" "} simulated uptime.</>
    ],
    techStack: "React, Tailwind, Spring Boot, MongoDB, Docker",
    githubUrl: "https://github.com/Dheeraj07-cmd/TradeX",
    liveUrl: "https://tradex-frontend-jrfk.onrender.com",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Blood Donation Platform",
    description: "Developed a full-stack platform connecting donors and recipients efficiently.",
    tag: "Web App",
    points: [
      <>Handled {" "}<span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">100+</span>{" "} simulated transactions, improving match success by {" "}<span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">35%</span>.</>,
      <>Optimized MySQL database queries, reducing response time by {" "}<span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">40%</span>.</>,
      <>Built a responsive frontend with {" "}<span className="text-indigo-400 font-bold bg-indigo-500/10 px-1 rounded">95%</span>{" "} mobile compatibility.</>,
      "Focused on usability, accessibility, and performance optimization."
    ],
    techStack: "HTML, CSS, JSP, Servlet, MySQL",
    githubUrl: "https://github.com/Dheeraj07-cmd/BloodDonation_System",
    liveUrl: "https://github.com/Dheeraj07-cmd",
    imageUrl: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1000&auto=format&fit=crop",
    featured: true,
  },
];