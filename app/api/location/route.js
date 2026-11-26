import { getLoaction } from "../data/location-utils";

export async function GET() {
  const locations = getLoaction();
  return Response.json(locations);
}
