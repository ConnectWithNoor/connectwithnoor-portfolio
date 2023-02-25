'use client';
import { SectionWrapper } from '@/app/{components}';
import { motion } from 'framer-motion';
import Image from 'next/image';

import './header.scss';

function Header() {
  return (
    <SectionWrapper idName='home'>
      <div className='app__header app__flex'>
        {/* greetings, name and job title*/}
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          className='app__header-info'
        >
          <div className='app__header-badge'>
            {/* greeting + name */}
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text'>Noor M</h1>
              </div>
            </div>
            {/* job title */}
            <div className='tag-cmp app__flex'>
              <p className='p-text'>Web Developer</p>
              <p className='p-text'>Freelancer</p>
            </div>
          </div>
        </motion.div>

        {/* center image */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delayChildren: 0.5,
            },
          }}
          className='app__header-img'
        >
          <div>
            <Image src='/profile.png' alt='profile' fill />
          </div>
          <motion.img
            initial={{
              scale: 0,
            }}
            whileInView={{
              scale: 1,
              transition: {
                duration: 1,
                ease: 'easeInOut',
              },
            }}
            src='/circle.svg'
            className='overlay_circle'
          />
        </motion.div>

        {/* tech icon circles */}

        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
          }}
          className='app__header-circles'
        >
          {['/flutter.png', '/redux.png', '/sass.png'].map((item, index) => {
            return (
              <div className='circle-cmp app__flex' key={item + index}>
                <div>
                  <Image src={item} alt={item} fill />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Header;
