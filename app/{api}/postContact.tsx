import { sanityClient } from '@/lib/sanity';
import { groq } from 'next-sanity';

type Props = {
  _type: string;
  name: string;
  email: string;
  message: string;
};

export async function postContact(contact: Props) {
  return await sanityClient.create(contact);
}
