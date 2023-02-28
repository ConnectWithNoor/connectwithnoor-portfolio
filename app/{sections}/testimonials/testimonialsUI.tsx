import { MotionDivWrapper } from '@/app/{components}';
import { urlFor } from '@/lib/sanity';
import { Variants } from 'framer-motion';
import Image from 'next/image';

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
  testimonialsData: TestimonialType;
};

function TestimonialsUI({ testimonialsData }: Props) {
  return (
    <MotionDivWrapper
      variants={motionVariance}
      className='app__testimonial-item app__flex'
      key={testimonialsData._id}
    >
      <div>
        <Image
          src={urlFor(testimonialsData.imageUrl).url()}
          alt={testimonialsData.name}
          fill
        />
      </div>
      <div className='app__testimonial-content'>
        <p className='p-text'>{testimonialsData.feedback}</p>
        <div>
          <h4 className='bold-text'>{testimonialsData.name}</h4>
          <h5 className='p-text'>{testimonialsData.company}</h5>
        </div>
      </div>
    </MotionDivWrapper>
  );
}

export default TestimonialsUI;
