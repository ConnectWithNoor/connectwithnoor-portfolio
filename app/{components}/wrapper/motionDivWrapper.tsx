'use client';

import { motion, Variants } from 'framer-motion';

type Props = {
  variants: Variants;
  children: React.ReactNode;
  className?: string;
};

function MotionDivWrapper({ variants, children, className }: Props) {
  return (
    <motion.div
      layout
      variants={variants}
      initial='hidden'
      whileInView='show'
      exit='exit'
      whileHover='hover'
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default MotionDivWrapper;
