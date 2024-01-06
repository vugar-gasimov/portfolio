import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={ref}
      className=" "
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }} className="">
        {type === "services" ? "What We Do ?" : "What We Did ?"}
      </motion.h1>
      <motion.div
        className=""
        style={{ backgroundImage: 'url("/mountains.png")', zIndex: 3 }}
      ></motion.div>
      <motion.div
        className=" "
        style={{
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
          zIndex: 2,
          y: yBg,
        }}
      ></motion.div>
      <motion.div
        className=" "
        style={{
          backgroundImage: 'url("/stars.png")',
          zIndex: 1,
          x: yBg,
        }}
      ></motion.div>
    </div>
  );
};

export default Parallax;
