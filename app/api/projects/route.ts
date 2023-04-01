import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const tagsQuery = groq`
 *[_type == "tags"] {
      _id, name
    }
  `;

  const projectsQuery = groq`
    *[_type == "projects"] {
      _id, title, description, codeLink, projectLink, imageUrl, tags[] -> {
        _id, name
      } 
  }
  `;

  const promise = [
    sanityClient.fetch(tagsQuery),
    sanityClient.fetch(projectsQuery),
  ];

  const [tagsData, projectsData] = await Promise.all(promise);
  return NextResponse.json({ tagsData, projectsData });
}
