import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white pt-20 pb-10">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-orbitron font-bold text-blue-400 mb-6">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Let's connect! Whether it's a collaboration or a casual chat — I'm just a message away.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg mb-10">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 px-5 py-3 rounded-lg transition"
          >
            <FaEnvelope className="text-blue-400" />
            adithyavinod003@gmail.com
          </a>
          <a
            href="tel:+911234567890"
            className="flex items-center gap-3 bg-gray-800 hover:bg-blue-600 px-5 py-3 rounded-lg transition"
          >
            <FaPhone className="text-blue-400" />
            +918075142642
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-800 hover:bg-pink-600 px-5 py-3 rounded-lg transition"
          >
            <FaInstagram className="text-pink-400" />
            @adithya_vinod_
          </a>
        </div>

        {/* CTA Button */}
        <div className="mb-12">
          <a
            href="mailto:your.email@example.com"
            className="inline-block text-xl px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold"
          >
            📩 Send a Message
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-2xl mb-8">
          <a
            href="https://www.linkedin.com/in/adithya-m-53645b2b8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Adithyavinod003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub />
          </a>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 border-t border-gray-800 pt-6">
          &copy; {new Date().getFullYear()} Adithya. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
