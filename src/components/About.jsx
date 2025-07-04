import { motion } from "framer-motion";

const skills = [
  "React", "Tailwind", "MongoDB", "Node.js", "Express", "JavaScript", "Git & GitHub",
  "REST APIs", "Firebase", "Framer Motion", "HTML5", "CSS3", "Bootstrap", "Figma"
];

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-400 font-orbitron">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a self-driven web developer who enjoys building sleek interfaces and solving real-world problems.
            I love working with JavaScript, exploring new frameworks, and turning concepts into reality. Whether it's a
            responsive UI or a full-stack solution — I make it happen.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {skills.map((skill, i) => (
            <div key={i} className="bg-gray-800 text-center py-4 rounded-lg shadow-lg hover:scale-105 transition">
              <p className="text-blue-300 font-semibold">{skill}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
