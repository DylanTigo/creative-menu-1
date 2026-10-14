import { useEffect, useState } from "react";
import Button from "./Button";
import { AnimatePresence, motion, cubicBezier, useReducedMotion } from "motion/react";
import Nav from "./Nav";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FloatingMenu() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const update = () => {
      const pastThreshold = window.scrollY > window.innerHeight * 0.3;
      setIsVisible(pastThreshold);
      if (!pastThreshold) setIsActive(false);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

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
    <>
      <AnimatePresence>
        {isActive && (
          <motion.button
            key="menu-overlay"
            type="button"
            aria-label="Close menu"
            className="fixed inset-0 z-40 cursor-pointer bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.2 : 0.25, ease }}
            onClick={() => setIsActive(false)}
          />
        )}
      </AnimatePresence>
      <motion.div
        className={`fixed right-10 top-10 z-50 origin-center ${isVisible ? "" : "pointer-events-none"}`}
        initial={false}
        animate={
          reduce
            ? { opacity: isVisible ? 1 : 0 }
            : {
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.9)",
              }
        }
        transition={{ duration: reduce ? 0.2 : 0.25, ease }}
        inert={!isVisible}
        aria-hidden={!isVisible}
      >
      <motion.div
        className="bg-primary-1 rounded-3xl relative"
        variants={menuVariants}
        animate={isActive ? "open" : "closed"}
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </motion.div>
    </>
  );
}
