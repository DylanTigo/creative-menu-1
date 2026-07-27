import React from "react";
import { motion } from "motion/react";

export default function Button({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      className="h-10 w-24 bg-primary-3 rounded-full cursor-pointer uppercase overflow-hidden"
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div className="w-full h-full" animate={{ y: isActive ? "-100%" : 0 }} transition={{ duration: 0.5, ease: [1, 0, 0, 1]}}>
        <div className="w-full h-full flex justify-center items-center">
          Menu
        </div>
        <div className="w-full h-full flex justify-center items-center bg-black text-white">
          Close
        </div>
      </motion.div>
    </button>
  );
}
