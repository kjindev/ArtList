import Image from "next/image";
import NavBar from "./component/common/NavBar";
import Book from "./component/common/Book";

export default function Home() {
  return (
    <div className="w-[100%] flex flex-col text-center justify-center items-center">
      <Now />
      <Location />
    </div>
  );
}

export function Now() {
  return (
    <div className="flex flex-col justify-center items-center pb-10 h-[100vh]">
      <div className="mt-9 mb-5">
        <p className="text-3xl mb-1">이런 전시는 어때요?</p>
        <p className="text-sm text-gray-500">테마로 모아보는 요즘 핫한 전시</p>
      </div>
      <div className="flex flex-wrap">
        <div className="m-7">
          <Book width={210} height={240} color="#d6d3d1">
            <div>hello</div>
          </Book>
        </div>
        <div className="m-7">
          <Book width={210} height={240} color="#a1a1aa">
            <div>hello</div>
          </Book>
        </div>
        <div className="m-7">
          <Book width={210} height={240} color="#94a3b8">
            <div>hello</div>
          </Book>
        </div>
        <div className="m-7">
          <Book width={210} height={240} color="rgb(53, 66, 62)">
            <div>hello</div>
          </Book>
        </div>
      </div>
    </div>
  );
}

export function Location() {
  return (
    <div className="flex flex-col justify-center items-center pb-10 h-[100vh]"></div>
  );
}
