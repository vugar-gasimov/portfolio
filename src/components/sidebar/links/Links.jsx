import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div
      variants={variants}
      className=" absolute w-full h-full flex flex-col items-center justify-center gap-20"
    >
      {items.map((item) => (
        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={`#${item}`}
          key={item}
          className="text-2xl sm:text-xl"
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
