'use client';

import { motion, scroll, Variants } from 'framer-motion';

type Props = {
  variants: Variants;
  src: string;
  className?: string;
};

function MotionImgWrapper({ variants, className, src }: Props) {
  return (
    <motion.img
      variants={variants}
      initial='hidden'
      whileInView='show'
      animate='show'
      exit='exit'
      className={className}
      src={src}
    />
  );
}

export default MotionImgWrapper;
