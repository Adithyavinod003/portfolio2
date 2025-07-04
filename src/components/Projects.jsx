import { motion } from "framer-motion";

const projects = [
  {
    title: "Quiz app",
    desc: " Developed a quiz app that allows users to take quizzes and track their scores. The app features a user friendly interface, real-time score tracking, and a database to store quiz questions and user data",
    link: "https://adithyavinod003.github.io/login",
  },
  {
    title: "ShopEase",
    desc: " Developed a fully functional e-commerce website with features such as product listings, shopping cart,and checkout process. The website has a responsive design and a user-friendly interface..",
    link: "https://adithyavinod003.github.io/shopping-website/#home",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-orbitron font-bold mb-12 text-blue-400">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 hover:scale-105 transform transition duration-300 group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
              >
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
