import SearchForm from "./_common/SearchForm";
import Category from "./_component/home/Category";
import { Total } from "./_component/home/Total";

// async function getData() {
//   const url = process.env.NEXT_PUBLIC_API_URL ?? "";
//   const res = await fetch(url, { cache: "force-cache" });
//   const data = await res.json();
//   return data.culturalEventInfo.row;
// }

export default async function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col  justify-center items-center">
        {/* <div className="w-full pc:w-[900px]  flex justify-between items-center"> */}
        <div>
          <Total />
        </div>
        <div>
          <Category />
        </div>
        {/* <MapContent2 /> */}
        {/* <ArtDetailContent /> */}
        {/* </div> */}
      </div>

      {/* <div id="artNow">
        <ArtNow />
      </div>
      <div id="stageNow">
        <StageNow />
      </div> */}
    </div>
  );
}
