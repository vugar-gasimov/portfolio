import { motion } from "framer-motion";
import Sidebar from "../sidebar/sidebar";

const Navbar = () => {
  return (
    <div className=" h-[100px]">
      <Sidebar />
      <div className=" max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold "
        >
          Vugar Gasimov
        </motion.span>
        <div className="flex gap-5">
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="w-[24px] h-[24px]"
              src="/facebook.png"
              alt="facebook"
            />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="w-[24px] h-[24px]"
              src="/instagram.png"
              alt="instagram"
            />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="w-[24px] h-[24px]"
              src="/linkedin.png"
              alt="linkedin"
            />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="w-[24px] h-[24px]"
              src="/telegram.png"
              alt="telegram"
            />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
