import { SectionWrapper } from "@/app/{components}";

import TestimonialsUI from "./testimonialsUI";

import "./testimonials.scss";

async function Testinomials() {
  const response = await fetch(`${process.env.API_ROOT}api/testimonials`, {
    next: {
      revalidate: 3600, // 60 mins
    },
  });

  const testimonialsData: TestimonialType[] = await response.json();

  return (
    <SectionWrapper idName="testimonials" className="app__primarybg">
      {/* heading */}
      <h2 className="head-text">
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
