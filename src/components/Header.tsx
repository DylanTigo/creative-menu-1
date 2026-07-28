import { useState } from "react";
import Button from "./Button";
import { motion } from "motion/react";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const menuVariants = {
    open: {
      width: "25rem",
      height: "40.5rem",
      top: "-1rem",
      right: "-1rem",
    },
    closed: {
      width: "6.25rem",
      height: "2.5rem",
      top: "0",
      right: "0",
    },
  }

  return (
    <header className="fixed right-14 top-14">
      <motion.div
        className="w-100 h-162 bg-primary-2 rounded-3xl relative"
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
        transition={{ duration: 0.5, ease: [1, 0, 0, 1] }}
      ></motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
}
