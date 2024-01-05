import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-222%",

    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="custom-height overflow-hidden relative bg-gradient-to-b from-custom-start-color to-custom-end-color">
      <div className="max-w-screen-lg mx-auto my-auto h-full">
        <motion.div
          className="w-1/2 h-full flex flex-col justify-center gap-10"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            variants={textVariants}
            className="font-bold text-3xl text-purple-text  tracking-[10px]"
          >
            VUGAR GASIMOV
          </motion.h2>
          <motion.h1 variants={textVariants} className="font-bold text-5xl">
            Frond-End Developer
          </motion.h1>
          <motion.div variants={textVariants} className="">
            <motion.button
              variants={textVariants}
              className="p-4 border-2 border-white rounded-lg text-white mr-5 cursor-pointer font-light"
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              className="p-4 border-2 border-white rounded-lg text-white mr-5 cursor-pointer font-light"
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollBtn"
            className="w-12"
            src="/scroll.png"
            alt="Scroll sign"
          />
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="absolute text-[50vh] bottom-[-180px] whitespace-nowrap text-bg-hero-text w-1/2 font-bold"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="h-full absolute top-0 right-0">
        <img className="w-[650px] " src="/hero.png" alt="My image" />
      </div>
    </div>
  );
};

export default Hero;
