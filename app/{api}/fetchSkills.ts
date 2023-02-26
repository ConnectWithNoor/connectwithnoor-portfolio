import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

export async function fetchSkills() {
  const query = groq`
  *[_type == "skill"] {
     _id, name, icon, bgColor
    }
  `;

  const skills: SkillType[] = await sanityClient.fetch(query);

  return skills;
}
