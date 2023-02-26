import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchExperiences() {
  const query = groq`
  *[_type == "work"] {
      _id, title, description, codeLink, projectLink, imageUrl, tags 
    }
  `;

  const skills: WorkType[] = await sanityClient.fetch(query);

  return skills;
}
