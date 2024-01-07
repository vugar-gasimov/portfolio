import { motion, useScroll, useSpring } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "WebStudio",
    img: "/webstudio.png",
    desc: "Led the development of the WebStudio website, implementing a user-friendly interface and cutting-edge technologies. Delivered strategic solutions, optimized for timely key message delivery. The website features interactive displays, mobile responsiveness, and a visually compelling team section.",
    skills: "HTML CSS JavaScript",
  },
  {
    id: 2,
    title: "Minimal",
    img: "/minimal.png",
    desc: "Crafted a modern furniture e-commerce platform with a sleek design and sustainable materials. Contributed to a seamless user experience, showcasing unique handcrafted pieces and receiving accolades for quality craftsmanship.",
    skills: "JavaScript Parcel Github",
  },
  {
    id: 3,
    title: "Bookshelf",
    img: "/bookshelf.png",
    desc: " Contributed to a dynamic e-commerce platform showcasing diverse best-selling books. Collaborated on responsive web pages for seamless user experience. This project was technically enriching and personally rewarding. Active participation taught me the value of teamwork, finding inspiration in a collaborative environment. Identified leadership aptitude without a formal title, affirming belief in the power of teamwork for learning and growth",
    skills: "Teamwork Firebase(Authentication) JavaScript",
  },
  {
    id: 4,
    title: "Expense Tracker",
    img: "/e-tracker.png",
    desc: "A website with a responsive layout. Build project on github, checked for build errors and live page performance. The main goal of the project: Implement an Expense Tracker that allows the user to monitor their daily expenses.Complete tasks according to the deadline (November 23, 2023-November 29, 2023)",
    skills: "MongoDB Next.js NextAuth",
  },
  {
    id: 5,
    title: "MindSpark",
    img: "/mind-spark.png",
    desc: "🚀 MindSpark Creative Thoughts Agency. Unlock creativity with MindSpark! This is my passion project, a digital playground for web development, creative insights, and administration.What You'll Find:🌐 Web Services | 📝 Blogs | 🔐 Admin Panel. Explore our mission, read our insights, and experience the admin privileges! Join us on a journey of digital innovation.",
    skills: "React Redux Axios",
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
  return <section> {item.title}</section>;
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
