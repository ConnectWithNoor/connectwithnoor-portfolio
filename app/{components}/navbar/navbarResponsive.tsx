'use client';
import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { AnimatePresence, Variants } from 'framer-motion';

import './navbar.scss';
import MotionDivWrapper from '../wrapper/motionDivWrapper';

const motionVariance: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: 'easeOut' },
  },
  exit: {
    x: 100,
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
          <MotionDivWrapper variants={motionVariance}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {[
                'home',
                'about',
                'work',
                'skills',
                'testinomials',
                'contact',
              ].map((item, index) => (
                <li key={item + index}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </MotionDivWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavbarResponsive;
