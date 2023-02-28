import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchExperiences() {
  const query = groq`
     *[_type == "experiences"] {
  _id, year, works[] -> {
    _id, position, desc, company
  }
}
  `;

  const experience: ExperienceType[] = await sanityClient.fetch(query);

  return experience;
}
