import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper ">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Vugar Gasimov
        </motion.span>
        <div className="social">
          <motion.a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/vugar-gasimov"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100006303706598"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/facebook.png" alt="facebook" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/_vugargasimov_?igsh=YXdmaHN0OHh2a29n"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/instagram.png" alt="instagram" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noreferrer"
            href="www.linkedin.com/in/vugar5gasimov"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/linkedin.png" alt="linkedin" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/GasimovVugar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/telegram.png" alt="telegram" />
          </motion.a>
          <motion.a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Vugar5Gasimov"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <FaSquareXTwitter size={24} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
