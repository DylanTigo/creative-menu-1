import React from "react";
import { motion } from "motion/react";
import PerspectiveText from "./PerspectiveText";

export default function Button({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="h-10 w-25 bg-primary-1 rounded-full cursor-pointer uppercase overflow-hidden absolute right-0 top-0"
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ y: isActive ? "-100%" : 0 }}
        transition={{ duration: 0.5, ease: [1, 0, 0, 1] }}
      >
        <div className="w-full h-full group">
          <PerspectiveText label="Menu" className="size-full" />
        </div>
        <div className="w-full h-full group bg-black text-white">
          <PerspectiveText label="Close" className="size-full" />
        </div>
      </motion.div>
    </button>
  );
}
