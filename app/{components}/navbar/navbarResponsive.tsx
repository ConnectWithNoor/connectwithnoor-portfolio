'use client';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion, AnimatePresence, Variants } from 'framer-motion';

import './navbar.scss';

const motionVariance: Variants = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: 'easeOut' },
  },
  exit: {
    x: 300,
    opacity: 0,
    transition: { duration: 0.85, ease: 'easeOut' },
  },
};

function NavbarResponsive() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='app__navbar-menu'>
      <HiMenuAlt4 onClick={() => setToggle(true)} />
      <AnimatePresence>
        {toggle && (
          <motion.div
            variants={motionVariance}
            initial='hidden'
            animate='show'
            exit='exit'
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map(
                (item, index) => (
                  <li key={item + index}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavbarResponsive;
