"use client";

import { motion, Variants } from "framer-motion";

type Props = {
  variants: Variants;
  children: React.ReactNode;
  className?: string;
  style?: Record<string, string | number>;
};

function MotionDivWrapper({ variants, children, className, style }: Props) {
  return (
    <motion.div
      layout
      variants={variants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      whileHover="hover"
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default MotionDivWrapper;
