import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchTags() {
  const query = groq`
    *[_type == "tags"] {
      _id, name
    }
  `;

  const aboutme: TagsType[] = await sanityClient.fetch(query);

  return aboutme;
}
