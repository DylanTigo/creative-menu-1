import { useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion, cubicBezier } from "motion/react";
import Nav from "./Nav";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const menuVariants = {
    open: {
      width: "25rem",
      height: "34rem",
      top: "-1rem",
      right: "-1rem",
      transition: {
        duration: 0.5,
        ease: cubicBezier(1, 0, 0, 1),
      },
    },
    closed: {
      width: "6.25rem",
      height: "2.5rem",
      top: "0",
      right: "0",
      transition: {
        duration: 0.5,
        ease: cubicBezier(1, 0, 0, 1),
        delay: 0.3,
      },
    },
  };

  return (
    <header className="fixed right-14 top-14">
      <motion.div
        className="bg-primary-2 rounded-3xl relative"
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </header>
  );
}
