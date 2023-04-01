import { sanityClient } from "@/lib/sanity";
import { groq } from "next-sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const query = groq`
   *[_type == "testimonials"] {
   _id, name, imageUrl, feedback, company
 }
  `;

  const testimonials: TestimonialType[] = await sanityClient.fetch(query);

  return NextResponse.json(testimonials);
}
