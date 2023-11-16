import { Total } from "./_component/home/Total";
import { ArtNow } from "./_component/home/ArtNow";
import { StageNow } from "./_component/home/StageNow";
import { useRecoilState } from "recoil";

// async function getData() {
//   const url = process.env.NEXT_PUBLIC_API_URL ?? "";
//   const res = await fetch(url, { cache: "force-cache" });
//   const data = await res.json();
//   return data.culturalEventInfo.row;
// }

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div id="total">
        <Total />
      </div>
      <div id="artNow">
        <ArtNow />
      </div>
      <div id="stageNow">
        <StageNow />
      </div>
      <footer className="w-[100%] h-[240px] flex justify-center items-center bg-slate-700 text-[#ffffff90]">
        hello world
      </footer>
    </div>
  );
}
