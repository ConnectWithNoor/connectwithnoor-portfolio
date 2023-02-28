'use client';

import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { AnimatePresence, Variants } from 'framer-motion';
import { urlFor } from '@/lib/sanity';

import { MotionDivWrapper, SectionWrapper } from '@/app/{components}';
import { fetchWork } from '@/app/{api}/fetchWork';

import './work.scss';
import Image from 'next/image';

const divVariant: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, delayChildren: 0.5 },
  },
  exit: { y: 50, opacity: 0 },
};

const hoverVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: 'easeInOut',
      staggerChildren: 0.5,
    },
  },
};

const IconVariant: Variants = {
  hover: {
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

function WorkSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [workData, setWorkData] = useState<WorkType[]>([]);
  const [filterWork, setFilterWork] = useState<WorkType[]>([]);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);

    setFilterWork(workData.filter((work) => work.tags.includes(item)));
  };

  useEffect(() => {
    const fetch = async () => {
      const workData = await fetchWork();
      setWorkData(workData);
      setFilterWork(workData);
    };

    fetch();
  }, []);

  return (
    <SectionWrapper idName='work' className='app__primarybg'>
      <div>
        {/* heading */}
        <h2 className='head-text'>
          My Creative
          <span> Portfolio </span>
          Section
        </h2>

        {/* filters */}
        <div className='app__work-filter'>
          {['ui/ux', 'web app', 'mobile app', 'react js', 'all'].map(
            (item, index) => {
              return (
                <div
                  className={`app__work-filter-item app__flex p-text ${
                    activeFilter === item ? 'item-active' : ''
                  }`}
                  key={item + index}
                  onClick={() => handleWorkFilter(item)}
                >
                  {item}
                </div>
              );
            }
          )}
        </div>

        <div className='app__work-portfolio'>
          <AnimatePresence>
            {filterWork.map((work, index) => {
              return (
                // work item container
                <MotionDivWrapper
                  variants={divVariant}
                  key={index}
                  className='app__work-item app__flex'
                >
                  <div className='app__work-img app__flex'>
                    {/* image */}
                    <Image
                      src={urlFor(work.imageUrl).url()}
                      alt={work.title}
                      fill
                    />

                    {/* on hover effects */}

                    <MotionDivWrapper
                      variants={hoverVariant}
                      className='app__work-hover app__flex'
                    >
                      <a
                        href={work.projectLink}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <MotionDivWrapper
                          variants={IconVariant}
                          className='app__flex'
                        >
                          <AiFillEye />
                        </MotionDivWrapper>
                      </a>

                      <a href={work.codeLink} target='_blank' rel='noreferrer'>
                        <MotionDivWrapper
                          variants={IconVariant}
                          className='app__flex'
                        >
                          <AiFillGithub />
                        </MotionDivWrapper>
                      </a>
                    </MotionDivWrapper>
                  </div>

                  {/* title and description and tags*/}
                  <div className='app__work-content app__flex'>
                    <h4 className='bold-text'>{work.title}</h4>
                    <p className='p_text' style={{ marginTop: 10 }}>
                      {work.description}
                    </p>
                    {/* tags */}
                    <div className='app__work-tag app__flex'>
                      <p
                        className='p-text'
                        style={{ textTransform: 'capitalize' }}
                      >
                        {work.tags[0]}
                      </p>
                    </div>
                  </div>
                </MotionDivWrapper>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default WorkSection;
