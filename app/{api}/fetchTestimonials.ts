import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchTestimonials() {
  const query = groq`
   *[_type == "testimonials"] {
   _id, name, imageUrl, feedback, company
 }
  `;

  const testimonials: TestimonialType[] = await sanityClient.fetch(query);

  return testimonials;
}
