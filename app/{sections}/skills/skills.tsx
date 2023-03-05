import Image from 'next/image';
import { Variants } from 'framer-motion';

import { urlFor } from '@/app/{lib}/sanity';
import {
  MotionDivWrapper,
  SectionWrapper,
  TooltipWrapper,
} from '@/app/{components}';

import './skills.scss';
import 'react-tooltip/dist/react-tooltip.css';

const leftVariant: Variants = {
  hidden: {
    x: -30,
    opacity: 0,
    scale: 0.7,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      type: 'tween',
    },
  },
  hover: { scale: 1.1 },
};

const rightContainerVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
      staggerChildren: 0.25,
      type: 'tween',
    },
  },
};

const rightVariant: Variants = {
  hidden: {
    x: 30,
    opacity: 0,
    scale: 0.7,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.25,
      type: 'tween',
    },
  },
};

async function fetchData() {
  const response = await fetch(`https://techsume.vercel.app/api/skills`, {
    method: 'GET',
  });

  const { skillsData, expData } = (await response.json()) as {
    skillsData: SkillType[];
    expData: ExperienceType[];
  };

  return {
    skillsData,
    expData,
  };
}

async function Skills() {
  const { expData, skillsData } = await fetchData();

  return (
    <SectionWrapper idName='skills' className='app__whitebg'>
      <div>
        <h2 className='head-text'>Skills & Experience</h2>
        <div className='app__skills-container'>
          {/* left skills part */}
          <div className='app__skills-list'>
            {skillsData.map((skill, index) => (
              <MotionDivWrapper
                key={skill._id + index}
                variants={leftVariant}
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
              </MotionDivWrapper>
            ))}
          </div>

          {/* right experience part */}
          <div className='app__skills-exp'>
            {expData.map((experience) => {
              return (
                <MotionDivWrapper
                  variants={rightContainerVariant}
                  key={experience._id}
                  className='app__skills-exp-item'
                >
                  <div className='app__skills-exp-year'>
                    <p className='bold-text'>{experience.year}</p>
                  </div>

                  <div className='app__skills-exp-works'>
                    {experience.works.map((work) => (
                      <div key={work._id}>
                        <MotionDivWrapper
                          variants={rightVariant}
                          className='app__skills-exp-work'
                        >
                          <div data-tooltip-id={work._id}>
                            <h4 className='bold-text'>{work.position}</h4>

                            <p className='p-text'>{work.company}</p>
                          </div>
                        </MotionDivWrapper>

                        <TooltipWrapper
                          id={work._id}
                          className='skills-tooltip'
                        >
                          {work.desc}
                        </TooltipWrapper>
                      </div>
                    ))}
                  </div>
                </MotionDivWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
