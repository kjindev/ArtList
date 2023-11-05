import { ArtTypes } from "../types/data";

export default async function Art() {
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

  return (
    <div>
      {artList.map((item: ArtTypes, index: number) => (
        <div key={index}>
          {item.TITLE}
          <div>
            <img
              src={item.MAIN_IMG}
              className="w-[270px] h-[360px] rounded-2xl object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
