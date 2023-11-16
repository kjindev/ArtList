import Book from "../../_common/Book";

export function ArtNow() {
  return (
    <div className="flex flex-col justify-center items-center pc:w-[900px] w-[100%] pc:h-[100vh]">
      <div className="flex flex-col justify-center self-start mt-9 mb-5">
        <p className="text-4xl font-bold mb-1">전시회 추천해줄게요</p>
        <p className="text-gray-700 pl-[0.15rem]">
          요즘 핫한 전시를 모아왔어요!
        </p>
      </div>
      <div className="flex flex-wrap justify-between w-[100%] pb-10">
        <Book width={180} height={210} color="#d6d3d1">
          <div>hello</div>
        </Book>
        <Book width={180} height={210} color="#a1a1aa">
          <div>hello</div>
        </Book>
        <Book width={180} height={210} color="#94a3b8">
          <div>hello</div>
        </Book>
        <Book width={180} height={210} color="rgb(53, 66, 62)">
          <div>hello</div>
        </Book>
      </div>
    </div>
  );
}
