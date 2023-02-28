'use client';

import { fetchTestimonials } from '@/app/{api}/fetchTestimonials';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';

import { SectionWrapper } from '@/app/{components}';

import './testimonials.scss';
import TestimonialsUI from './testimonialsUI';
import { AnimatePresence } from 'framer-motion';

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
      {testimonialsData.length ? (
        <>
          <AnimatePresence>
            <TestimonialsUI testimonialsData={testimonialsData[index]} />
          </AnimatePresence>
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
      ) : null}
    </SectionWrapper>
  );
}

export default Testinomials;
