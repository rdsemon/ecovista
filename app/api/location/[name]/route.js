import { findLocation } from "../../data/location-utils";
export async function GET(request, { params }) {
  const { name } = await params;
  const location = findLocation(name);

  return Response.json(location);
}
