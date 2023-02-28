import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchWork() {
  const query = groq`
  *[_type == "work"] {
      _id, title, description, codeLink, projectLink, imageUrl, tags 
    }
  `;

  const work: WorkType[] = await sanityClient.fetch(query);

  return work;
}