import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleBtn from "./toggleBtn/ToggleBtn";

const variants = {
  open: {
    clipPath: "",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className=""
    >
      <motion.div
        variants={variants}
        className=""
      >
        <Links />
      </motion.div>
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;
