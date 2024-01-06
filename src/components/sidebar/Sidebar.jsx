import { useState } from "react";
import { motion } from "framer-motion";
import ToggleBtn from "./toggleBtn/ToggleBtn";
import Links from "./links/Links";
import "./sidebar.scss";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
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
    <motion.div animate={open ? "open" : "closed"} className="sidebar">
      <motion.div variants={variants} className="bg">
        <Links />
      </motion.div>
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;
