// import { ArtTypes } from "../types/data";

export default async function Art() {
  // const res = await fetch("http://localhost:3000/api");
  // const result = await res.json();
  // const data = await result.artList;

  return (
    <div>
      hello world
      {/* {data.map((item: ArtTypes, index: number) => (
        <div key={index}>
          {item.TITLE}
          <div>
            <img
              src={item.MAIN_IMG}
              className="w-[270px] h-[360px] rounded-2xl object-cover"
            />
          </div>
        </div>
      ))} */}
    </div>
  );
}
