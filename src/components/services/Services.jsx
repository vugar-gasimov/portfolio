import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./services.scss";

const variantLeft = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,

    transition: { duration: 3, delay: 3 },
    staggerChildren: 0.1,
  },
};
const variantRight = {
  initial: {
    x: 1000,
  },
  animate: {
    x: 0,

    transition: { duration: 3, delay: 3 },
    staggerChildren: 0.1,
  },
};
const variantTop = {
  initial: {
    y: -500,
  },
  animate: {
    y: 0,
    transition: { duration: 3 },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variantTop}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variantRight}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variantLeft}>
        <div className="title">
          <img src="/people.webp" alt="Team working together." />
          <h1>
            <motion.b whileHover={{ color: "lightgray" }}>Unique </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "lightgray" }}>For Your </motion.b>
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variantRight}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
            quas magni officiis magnam dolore. Rerum, similique veritatis
            doloribus pariatur quae, qui dolorum tempora cumque quod atque ullam
            possimus magni sapiente.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
