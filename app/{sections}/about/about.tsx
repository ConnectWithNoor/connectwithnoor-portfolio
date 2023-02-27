'use client';

import { fetchAboutMe } from '@/app/{api}/fetchAboutMe';
import { use } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { urlFor } from '@/lib/sanity';
import { SectionWrapper } from '@/app/{components}';
import './about.scss';

function AboutSection() {
  const aboutMeData = use(fetchAboutMe());
  return (
    <SectionWrapper idName='about' className='app__whitebg'>
      <div>
        {/* heading */}
        <h2 className='head-text'>
          I Know that
          <span> Good Apps </span>
          <br />
          means Good Business
        </h2>

        <div className='app__profiles'>
          {aboutMeData.map((item, index) => {
            return (
              <motion.div
                key={item.title + index}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.5,
                  type: 'tween',
                }}
                className='app__profile-item'
              >
                <div>
                  <Image
                    src={urlFor(item.imageUrl).url()}
                    alt={item.title}
                    fill
                  />
                </div>

                <h2 className='bold-text' style={{ marginTop: '20px' }}>
                  {item.title}
                </h2>
                <p className='p-text' style={{ marginTop: '10px' }}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
