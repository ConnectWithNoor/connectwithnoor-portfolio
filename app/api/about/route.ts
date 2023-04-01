import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const query = groq`
  *[_type == "about-me"] {
    _id, title, description, imageUrl
    }
  `;

  const aboutme: AboutMeType[] = await sanityClient.fetch(query);

  return NextResponse.json(aboutme);
}
