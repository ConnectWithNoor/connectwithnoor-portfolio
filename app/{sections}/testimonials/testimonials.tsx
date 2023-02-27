'use client';

import { fetchTestimonials } from '@/app/{api}/fetchTestimonials';

import { AnimatePresence, motion, Variants } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';

import { urlFor } from '@/lib/sanity';
import { SectionWrapper } from '@/app/{components}';

import './testimonials.scss';
import Image from 'next/image';

const motionVariance: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', duration: 0.25, ease: 'easeIn' },
  },
  end: {
    x: 100,
    opacity: 0.3,
    transition: { type: 'tween', duration: 0.2, ease: 'easeIn' },
  },
};

function Testinomials() {
  const [index, setIndex] = useState(0);
  const [testimonialsData, setTestimonialData] = useState<TestimonialType[]>(
    []
  );

  useEffect(() => {
    const fetch = async () => {
      const testimonialsData = await fetchTestimonials();
      setTestimonialData(testimonialsData);
    };

    fetch();
  }, []);

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
    <SectionWrapper idName='testimonials' className='app__primarybg'>
      {/* heading */}
      <h2 className='head-text'>
        Words that are
        <span> Trustable </span>
      </h2>
      <AnimatePresence>
        {testimonialsData.length ? (
          <>
            <motion.div
              variants={motionVariance}
              initial='hidden'
              animate='show'
              exit='end'
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
            </motion.div>

            <div className='app__testimonial-btns app__flex'>
              <div
                className='app__flex'
                onClick={() => handleClick(index, 'prev')}
              >
                <HiChevronLeft />
              </div>

              <div
                className='app__flex'
                onClick={() => handleClick(index, 'next')}
              >
                <HiChevronRight />
              </div>
            </div>
          </>
        ) : (
          ''
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

export default Testinomials;
