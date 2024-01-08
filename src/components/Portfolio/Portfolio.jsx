import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "WebStudio",
    img: "/webstudio.png",
    desc: "Led the development of the WebStudio website, implementing a user-friendly interface and cutting-edge technologies. Delivered strategic solutions, optimized for timely key message delivery. The website features interactive displays, mobile responsiveness, and a visually compelling team section.",
    skills: "HTML, CSS, JavaScript",
    link: "https://vugar-gasimov.github.io/goit-markup-hw-06/index.html",
  },
  {
    id: 2,
    title: "Minimal",
    img: "/minimal.png",
    desc: "Crafted a modern furniture e-commerce platform with a sleek design and sustainable materials. Contributed to a seamless user experience, showcasing unique handcrafted pieces and receiving accolades for quality craftsmanship.",
    skills: "JavaScript, Parcel, Github",
    link: "https://lirikape.github.io/team-project-sunflowers/",
  },
  {
    id: 3,
    title: "Bookshelf",
    img: "/bookshelf.png",
    desc: " Contributed to a dynamic e-commerce platform showcasing diverse best-selling books. Collaborated on responsive web pages for seamless user experience. This project was technically enriching and personally rewarding. Active participation taught me the value of teamwork, finding inspiration in a collaborative environment.",
    skills: "Teamwork, Firebase(Authentication), JavaScript",
    link: "https://titiof.github.io/teamwork-js/index.html",
  },
  {
    id: 4,
    title: "Expense Tracker",
    img: "/e-tracker.png",
    desc: "A website with a responsive layout. Build project on github, checked for build errors and live page performance. The main goal of the project: Implement an Expense Tracker that allows the user to monitor their daily expenses.Complete tasks according to the deadline (November 23, 2023-November 29, 2023)",

    skills: "React, Redux, Axios",
    link: "https://tane4ka170.github.io/project_blackout/",
  },
  {
    id: 5,
    title: "MindSpark",
    img: "/mind-spark.png",
    desc: "🚀 MindSpark Creative Thoughts Agency. Unlock creativity with MindSpark! This is my passion project, a digital playground for web development, creative insights, and administration.What You'll Find:🌐 Web Services | 📝 Blogs | 🔐 Admin Panel. Explore our mission, read our insights, and experience the admin privileges! Join us on a journey of digital innovation.",
    skills: "MongoDB, Next.js, NextAuth",
    link: "https://mind-spark-eta.vercel.app/",
  },
  //   {
  //     id: 2,
  //     title: "",
  //     img: "",
  //     desc: "",
  //     skills: "",
  //   },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "ent start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <h3>{item.skills}</h3>
            <a href={item.link} target="_blank" rel="noreferrer">
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
