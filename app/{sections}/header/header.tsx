import {
  SectionWrapper,
  MotionDivWrapper,
  MotionImgWrapper,
} from '@/app/{components}';
import { headerConstants } from '@/app/{utils}/constants';
import { Variants } from 'framer-motion';
import Image from 'next/image';

import './header.scss';

const variantLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },

  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const variantCenter: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
    },
  },
};

const variantRight: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const variantImg: Variants = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

function Header() {
  return (
    <SectionWrapper idName='home'>
      <div className='app__header app__flex'>
        {/* greetings, name and job title*/}
        <MotionDivWrapper variants={variantLeft} className='app__header-info'>
          <div className='app__header-badge'>
            {/* greeting + name */}
            <div className='badge-cmp app__flex'>
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text'>{headerConstants.name}</h1>
              </div>
            </div>
            {/* job title */}
            <div className='tag-cmp app__flex'>
              <p className='p-text'>{headerConstants.job_1}</p>
              <p className='p-text'>{headerConstants.job_2}</p>
            </div>
          </div>
        </MotionDivWrapper>

        {/* center image */}
        <MotionDivWrapper variants={variantCenter} className='app__header-img'>
          <div>
            <Image src='/profile.png' alt='profile' fill />
          </div>
          <MotionImgWrapper
            variants={variantImg}
            src='/circle.svg'
            className='overlay_circle'
          />
        </MotionDivWrapper>

        {/* tech icon circles */}

        <MotionDivWrapper
          variants={variantRight}
          className='app__header-circles'
        >
          {headerConstants.imagesList.map((item, index) => {
            return (
              <div className='circle-cmp app__flex' key={item + index}>
                <div>
                  <Image src={item} alt={item} fill />
                </div>
              </div>
            );
          })}
        </MotionDivWrapper>
      </div>
    </SectionWrapper>
  );
}

export default Header;
