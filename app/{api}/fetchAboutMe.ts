import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchAboutMe() {
  const query = groq`
  *[_type == "about-me"] {
    _id, title, description, imageUrl
    }
  `;

  const aboutme: AboutMeType[] = await sanityClient.fetch(query);

  return aboutme;
}
