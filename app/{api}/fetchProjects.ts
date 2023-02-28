import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchProjects() {
  const query = groq`
  *[_type == "projects"] {
      _id, title, description, codeLink, projectLink, imageUrl, tags[] -> {
        _id, name
      } 
  }
  `;

  const work: ProjectType[] = await sanityClient.fetch(query);

  return work;
}
