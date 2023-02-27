import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchTestimonials() {
  const query = groq`
  *[_type == "testinomial"] {
    _id, name, imageUrl, company, feedback
  }
  `;

  const testimonials: TestimonialType[] = await sanityClient.fetch(query);

  return testimonials;
}
