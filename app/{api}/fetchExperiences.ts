import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchExperiences() {
  const query = groq`
   *[_type == "experience"] {
  _id, year, works
}
  `;

  const experience: ExperienceType[] = await sanityClient.fetch(query);

  return experience;
}
