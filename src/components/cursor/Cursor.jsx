import { useEffect, useState } from "react";
import "./cursor.scss";
import { motion } from "framer-motion";
const Cursor = () => {
  const [position, setPosition] = useState({ x: 1329, y: 222 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  console.log(position);
  return (
    <motion.div
      className="cursor"
      animate={{
        x: position.x - 5,
        y: position.y - 5,
      }}
    ></motion.div>
  );
};

export default Cursor;
