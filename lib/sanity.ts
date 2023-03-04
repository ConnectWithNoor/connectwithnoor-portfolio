import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID,
  apiVersion: '2023-02-25', // 25 Feb 2023
  useCdn: true,
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: any) => builder.image(source);
