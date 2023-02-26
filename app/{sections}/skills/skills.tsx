'use client';

import { fetchSkills } from '@/app/{api}/fetchSkills';
import { fetchExperiences } from '@/app/{api}/fetchExperiences';

import { useState, use } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import ReactTooptip from 'react-tooltip';

import { urlFor } from '@/lib/sanity';
import { SectionWrapper } from '@/app/{components}';

import './skills.scss';
import Image from 'next/image';

function Skills() {
  // const experiencesData = await fetchExperiences();

  const skillsData = use(fetchSkills());
  return (
    <SectionWrapper idName='skills'>
      <div>
        <h2 className='head-text'>Skills & Experience</h2>
        {/* left skills part */}
        <div className='app__skills-container'>
          <motion.div className='app__skills-list'>
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill._id + index}
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
              >
                <div
                  className='app__flex'
                  style={{ backgroundColor: skill.bgColor }}
                >
                  <div>
                    <Image
                      src={urlFor(skill.icon).url()}
                      alt={skill.name}
                      fill
                    />
                  </div>
                </div>

                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* right experience part */}
      </div>
    </SectionWrapper>
  );
}

export default Skills;
