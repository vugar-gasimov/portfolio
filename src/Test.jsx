import { motion } from "framer-motion";
// import { useState } from "react";
const Test = () => {
  //   const [open, setOpen] = useState(false);

  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 100,
      transition: { delay: i * 0.2 },
    }),
    hidden: { opacity: 0 },
  };

  const items = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <div className="h-screen flex items-center justify-center">
      {/* <motion.div
        className="w-[200px] h-[200px] bg-white"
        variants={variants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        // initial={{ opacity: 0.5, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        // whileHover={{ opacity: 1, scale: 2 }}
        // drag
      ></motion.div>
      <button onClick={() => setOpen((prev) => !prev)}>Click</button> */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
