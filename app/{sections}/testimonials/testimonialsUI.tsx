'use client';

import { MotionDivWrapper } from '@/app/{components}';
import { urlFor } from '@/lib/sanity';
import { AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const motionVariance: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.25, ease: 'easeIn' },
  },
  end: {
    x: 50,
    opacity: 0.3,
    transition: { type: 'tween', duration: 0.2, ease: 'easeIn' },
  },
};

type Props = {
  testimonialsData: TestimonialType[];
};

function TestimonialsUI({ testimonialsData }: Props) {
  const [index, setIndex] = useState(0);

  const handleClick = (currentIndex: number, direction: 'next' | 'prev') => {
    let imageIndex: number;

    if (direction === 'prev') {
      if (currentIndex === 0) {
        imageIndex = testimonialsData.length - 1;
      } else {
        imageIndex = currentIndex - 1;
      }
    } else {
      if (currentIndex === testimonialsData.length - 1) {
        imageIndex = 0;
      } else {
        imageIndex = currentIndex + 1;
      }
    }
    setIndex(imageIndex);
  };

  return (
    <>
      <AnimatePresence>
        <MotionDivWrapper
          variants={motionVariance}
          className='app__testimonial-item app__flex'
          key={testimonialsData[index]._id}
        >
          <div>
            <Image
              src={urlFor(testimonialsData[index].imageUrl).url()}
              alt={testimonialsData[index].name}
              fill
            />
          </div>
          <div className='app__testimonial-content'>
            <p className='p-text'>{testimonialsData[index].feedback}</p>
            <div>
              <h4 className='bold-text'>{testimonialsData[index].name}</h4>
              <h5 className='p-text'>{testimonialsData[index].company}</h5>
            </div>
          </div>
        </MotionDivWrapper>
      </AnimatePresence>
      <div className='app__testimonial-btns app__flex'>
        <div className='app__flex' onClick={() => handleClick(index, 'prev')}>
          <HiChevronLeft />
        </div>

        <div className='app__flex' onClick={() => handleClick(index, 'next')}>
          <HiChevronRight />
        </div>
      </div>
    </>
  );
}

export default TestimonialsUI;
