import { fetchTestimonials } from '@/app/{api}/fetchTestimonials';

import { SectionWrapper } from '@/app/{components}';

import './testimonials.scss';
import TestimonialsUI from './testimonialsUI';

async function Testinomials() {
  const testimonialsData = await fetchTestimonials();

  return (
    <SectionWrapper idName='testimonials' className='app__primarybg'>
      {/* heading */}
      <h2 className='head-text'>
        Words that are
        <span> Trustable </span>
      </h2>
      {testimonialsData.length ? (
        <TestimonialsUI testimonialsData={testimonialsData} />
      ) : null}
    </SectionWrapper>
  );
}

export default Testinomials;
