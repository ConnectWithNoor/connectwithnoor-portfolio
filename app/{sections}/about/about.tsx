import { Variants } from 'framer-motion';
import Image from 'next/image';

import { urlFor } from '@/app/{lib}/sanity';
import { SectionWrapper, MotionDivWrapper } from '@/app/{components}';
import './about.scss';

const divVariant: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'tween',
    },
  },
  hover: { scale: 1.1 },
};

async function AboutSection() {
  // const response = await fetch(`${process.env.API_ROOT}/api/about`, {
  //   method: 'GET',
  // });

  // const aboutMeData: AboutMeType[] = await response.json();

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

        {/* <div className='app__profiles'>
          {aboutMeData.map((item) => {
            return (
              <MotionDivWrapper
                key={item._id}
                variants={divVariant}
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
              </MotionDivWrapper>
            );
          })}
        </div> */}
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
