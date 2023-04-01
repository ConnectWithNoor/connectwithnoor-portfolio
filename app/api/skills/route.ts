import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const skillsQuery = groq`
 *[_type == "skills"] {
     _id, name, icon
    }
  `;

  const expQuery = groq`
    *[_type == "experiences"] {
  _id, year, works[] -> {
    _id, position, desc, company
  }
}
  `;

  const promise = [
    sanityClient.fetch(skillsQuery),
    sanityClient.fetch(expQuery),
  ];

  const [skillsData, expData] = await Promise.all(promise);
  return NextResponse.json({ skillsData, expData });
}
