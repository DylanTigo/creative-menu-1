import { motion, useReducedMotion } from "motion/react";
import PerspectiveText from "./PerspectiveText";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="flex justify-between"
      initial={
        reduce
          ? { opacity: 0 }
          : { opacity: 0, transform: "translateY(-100%)" }
      }
      animate={{ opacity: 1, transform: "translateY(0%)" }}
      transition={{ duration: reduce ? 0.2 : 0.6, ease }}
    >
      <div className="text-white text-xl font-medium">FlowBeat</div>
      <nav className="flex gap-8">
        {["Home", "About", "Contact"].map((label) => (
          <button
            key={label}
            type="button"
            className="cursor-pointer overflow-hidden text-white group"
          >
            <PerspectiveText label={label} />
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
