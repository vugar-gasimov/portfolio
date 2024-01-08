import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./services.scss";

const variantLeft = {
  initial: {
    x: -500,
  },
  animate: {
    x: 0,

    transition: { duration: 1, delay: 1 },
    staggerChildren: 0.1,
  },
};
const variantRight = {
  initial: {
    x: 1000,
  },
  animate: {
    x: 0,

    transition: { duration: 1, delay: 1 },
    staggerChildren: 0.1,
  },
};
const variantTop = {
  initial: {
    y: -500,
  },
  animate: {
    y: 0,
    transition: { duration: 1 },
  },
};

const Services = () => {
  const ref = useRef();
  const [showToggleDiv, setShowToggleDiv] = useState(false);
  const [showFullContent, setShowFullContent] = useState({
    hardSkills: false,
    languages: false,
    softSkills: false,
  });
  const toggleContent = (section) => {
    setShowFullContent({
      hardSkills: false,
      languages: false,
      softSkills: false,
      [section]: !showFullContent[section],
    });
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 738) {
        setShowToggleDiv(false);
      } else {
        setShowToggleDiv(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variantTop}
      initial="initial"
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
            <motion.b whileHover={{ color: "lightgray" }}>Why </motion.b>
            me ?
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "lightgray" }}>
              My uniqueness
            </motion.b>{" "}
            and skills.
          </h1>
          {/* <button>WHAT I DO?</button> */}
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variantRight}>
        {showToggleDiv ? (
          <motion.div
            onClick={() => toggleContent("hardSkills")}
            className="mobile-box"
          >
            <h2>
              My hard skills <FaChevronDown />
            </h2>
            {showFullContent.hardSkills && (
              <p>
                I have been coding for some time now, continuously exploring new
                technologies. Currently, my expertise lies in front-end
                fundamentals like HTML, CSS, Sass, and JavaScript. I have also
                explored into backend technologies like Node.js, RESTful APIs,
                and MongoDb. My experience extends to working with React, Redux,
                Axios, and various libraries such as Styled Components, Bcrypt,
                Joi, and React Router. Additionally, I am familiar with
                TypeScript, Next.js, and Tailwind CSS.
              </p>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>My hard skills</h2>
            <p>
              I have been coding for some time now, continuously exploring new
              technologies. Currently, my expertise lies in front-end
              fundamentals like HTML, CSS, Sass, and JavaScript. I have also
              explored into backend technologies like Node.js, RESTful APIs, and
              MongoDb. My experience extends to working with React, Redux,
              Axios, and various libraries such as Styled Components, Bcrypt,
              Joi, and React Router. Additionally, I am familiar with
              TypeScript, Next.js, and Tailwind CSS.
            </p>
            {/* <button>Go</button> */}
          </motion.div>
        )}
        {showToggleDiv ? (
          <motion.div
            onClick={() => toggleContent("languages")}
            className="mobile-box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>
              Languages <FaChevronDown />
            </h2>
            {showFullContent.languages && (
              <p>
                I strongly believe that being a proficient programmer extends
                beyond mastering multiple programming languages; it also
                involves fluency in various spoken languages. English, for
                instance, has been crucial in accessing and finding solutions to
                my programming challenges. I am fluent in five languages
                English, Ukrainian, Turkish, Russian, and Azerbaijani—and have a
                foundational understanding of German, which I am actively
                improving whenever an opportunity arises.
              </p>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Languages</h2>
            <p>
              I strongly believe that being a proficient programmer extends
              beyond mastering multiple programming languages; it also involves
              fluency in various spoken languages. English, for instance, has
              been crucial in accessing and finding solutions to my programming
              challenges. I am fluent in five languages English, Ukrainian,
              Turkish, Russian, and Azerbaijani—and have a foundational
              understanding of German, which I am actively improving whenever an
              opportunity arises.
            </p>
            {/* <button>Go</button> */}
          </motion.div>
        )}
        {showToggleDiv ? (
          <motion.div
            onClick={() => toggleContent("softSkills")}
            className="mobile-box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>
              Soft skills <FaChevronDown />
            </h2>
            {showFullContent.softSkills && (
              <p>
                I understand the significance of soft skills in the IT field,
                and I pride myself on being a strong team player. Responsibility
                and proactiveness are integral parts of my work ethic. Having
                been involved in three team projects—with two more upcoming I
                have found significant satisfaction in collaborations where
                effective communication within the team led to quicker task
                completion. My diverse work experience across various roles has
                significantly developed my soft skills, particularly in
                communication, emotional, intelligence, adaptability further
                enhancing my effectiveness in team environments.
              </p>
            )}
          </motion.div>
        ) : (
          <motion.div
            className="box"
            whileHover={{ background: "lightgray", color: "black" }}
          >
            <h2>Soft skills</h2>
            <p>
              I understand the significance of soft skills in the IT field, and
              I pride myself on being a strong team player. Responsibility and
              proactiveness are integral parts of my work ethic. Having been
              involved in three team projects—with two more upcoming I have
              found significant satisfaction in collaborations where effective
              communication within the team led to quicker task completion. My
              diverse work experience across various roles has significantly
              developed my soft skills, particularly in communication,
              emotional, intelligence, adaptability further enhancing my
              effectiveness in team environments.
            </p>
            {/* <button>Go</button> */}
          </motion.div>
        )}
        {/* <motion.div
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
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
