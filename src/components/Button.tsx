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
      className="h-10 w-25 bg-primary-3 rounded-full cursor-pointer uppercase overflow-hidden"
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        className="w-full h-full"
        animate={{ y: isActive ? "-100%" : 0 }}
        transition={{ duration: 0.5, ease: [1, 0, 0, 1] }}
      >
        <div className="w-full h-full group">
          <PerspectiveText label="Menu" />
        </div>
        <div className="w-full h-full group bg-black text-white">
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </button>
  );
}

function PerspectiveText({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`size-full relative flex-center group-hover:rotate-x-90 transition-base transform-3d ${className || ""}`}
    >
      <p className="group-hover:-translate-y-full group-hover:opacity-0 transition-base">
        {label}
      </p>
      <p className="absolute -rotate-x-90 opacity-0 group-hover:opacity-100 translate-y-2  transition-base">
        {label}
      </p>
    </div>
  );
}
