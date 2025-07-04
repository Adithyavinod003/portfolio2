import { motion } from "framer-motion";
import profile from "/ADITHYA M.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center gap-10 p-10" id="home">
      <motion.img
        src={profile}
        alt="Adithya"
        className="rounded-full w-56 h-56 md:w-64 md:h-64 object-cover shadow-xl border-4 border-blue-600"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-5xl font-playfair text-blue-600">Hi, I’m Adithya 👩‍💻</h1>
        <p className="text-lg md:text-xl mt-4 font-light leading-relaxed max-w-xl">
          I’m a passionate Full Stack Developer with a passion for creating beautiful, fast, and functional web experiences.
          With a strong foundation in the MERN stack and an eye for design, I build websites that not only work but impress.
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
