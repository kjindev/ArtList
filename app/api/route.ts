import { ArtTypes } from "../component/types/data";

export async function GET() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
  const res = await fetch(API_URL);

  const result = await res.json();
  const data = await result.culturalEventInfo.row;

  const artList: ArtTypes[] = [];

  for (let el of data) {
    const currentDate = new Date();
    const artEndDate = new Date(el.END_DATE.slice(0, 10));
    if (artEndDate >= currentDate) {
      artList.push(el);
    }
  }

  return Response.json({ artList });
}
