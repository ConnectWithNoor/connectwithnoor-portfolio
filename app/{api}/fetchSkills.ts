import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchSkills() {
  const query = groq`
  *[_type == "skills"] {
     _id, name, icon
    }
  `;

  const skills: SkillType[] = await sanityClient.fetch(query);

  return skills;
}
