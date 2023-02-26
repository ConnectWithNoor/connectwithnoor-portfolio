'use client';

import { fetchSkills } from '@/app/{api}/fetchSkills';
import { fetchExperiences } from '@/app/{api}/fetchExperiences';

import { use } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { urlFor } from '@/lib/sanity';
import { SectionWrapper } from '@/app/{components}';

import './skills.scss';
import 'react-tooltip/dist/react-tooltip.css';

function Skills() {
  const skillsData = use(fetchSkills());
  const experiencesData = use(fetchExperiences());

  return (
    <SectionWrapper idName='skills' className='app__whitebg'>
      <div>
        <h2 className='head-text'>Skills & Experience</h2>
        <div className='app__skills-container'>
          {/* left skills part */}
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

          {/* right experience part */}
          <motion.div className='app__skills-exp'>
            {experiencesData.map((experience) => {
              return (
                <motion.div
                  key={experience._id}
                  className='app__skills-exp-item'
                >
                  <div className='app__skills-exp-year'>
                    <p className='bold-text'>{experience.year}</p>
                  </div>

                  <motion.div className='app__skills-exp-works'>
                    {experience.works.map((work) => (
                      <div key={work.name}>
                        <motion.div
                          initial={{
                            opacity: 0,
                          }}
                          whileInView={{
                            opacity: 1,
                          }}
                          transition={{ duration: 0.5 }}
                          className='app__skills-exp-work'
                          data-tooltip-id={work.name}
                        >
                          <h4 className='bold-text'>{work.name}</h4>

                          <p className='p-text'>{work.company}</p>
                        </motion.div>
                        <Tooltip id={work.name} className='skills-tooltip'>
                          {work.desc}
                        </Tooltip>
                      </div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
