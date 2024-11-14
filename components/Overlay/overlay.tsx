import { cn } from "@/utils/functions";
import { AnimatePresence, motion } from "framer-motion";
import React, { MouseEvent } from "react";

interface OverlayProps {
  isOpen: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen, className, onClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClick}
          className={cn(
            "overlay fixed z-[99999] bg-black/60 w-screen h-screen top-0 left-0",
            className
          )}
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;
