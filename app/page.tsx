import Link from "next/link";
import Book from "./_common/Book";
import NavBar from "./_common/NavBar";
import Polaroid from "./_common/Polaroid";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div id="intro">
        <Intro />
      </div>
      <div id="now">
        <Now />
      </div>
      <div id="stage">
        <Stage />
      </div>
      <div id="location">
        <Location />
      </div>
    </div>
  );
}

export function Intro() {
  return (
    <div className="flex flex-col justify-center items-center lg:w-[900px] h-[100vh]">
      <div className="text-4xl font-bold">
        <p>우리의 예술과 문화, </p>
        <p>그 공간을 공유합니다</p>
      </div>
      우리는 오늘도 일상을 살아냅니다. 반복되는 하루, 반복되는 고민, 반복되는
      지겨움 속에서 숨 돌릴 곳을 찾는 사람들. 이런 우리를 일상에서 벗어나게
      해주는 모든 것은 예술이 됩니다. 누군가에게는 추억, 누군가에게는 쉼터,
      누군가에게는 즐거움이 되어주는 우리의 예술과 문화. 그 예술과 문화의 공간을
      공유합니다.
    </div>
  );
}

export function Now() {
  return (
    <div className="flex flex-col justify-center items-center lg:w-[900px] h-[100vh]">
      <div className="flex flex-col justify-center self-start mt-9 mb-5">
        <p className="text-4xl font-bold mb-1">전시회 추천해줄게요</p>
        <p className="text-gray-700 pl-[0.15rem]">
          요즘 핫한 전시를 모아왔어요!
        </p>
      </div>
      <div className="flex flex-wrap pb-10">
        <div className="m-5">
          <Book width={180} height={210} color="#d6d3d1">
            <div>hello</div>
          </Book>
        </div>
        <div className="m-5">
          <Book width={180} height={210} color="#a1a1aa">
            <div>hello</div>
          </Book>
        </div>
        <div className="m-5">
          <Book width={180} height={210} color="#94a3b8">
            <div>hello</div>
          </Book>
        </div>
        <div className="m-5">
          <Book width={180} height={210} color="rgb(53, 66, 62)">
            <div>hello</div>
          </Book>
        </div>
      </div>
    </div>
  );
}

export function Stage() {
  return (
    <div className="flex flex-col justify-center items-center lg:w-[900px] h-[100vh]">
      <div className="flex flex-col justify-center self-start mt-9 mb-5">
        <p className="justify-self-start text-4xl font-bold mb-1">
          뮤지컬, 오페라는 어때요?
        </p>
        <p className="text-gray-700 pl-[0.15rem]">공연으로 추억을 남겨봐요</p>
      </div>
      <div className="flex flex-wrap pt-5 pb-10">
        <div className="m-3">
          <Polaroid
            img="https://images.unsplash.com/photo-1494435619026-9e21da76be75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rotate={3}
          >
            hello
          </Polaroid>
        </div>
        <div className="m-3">
          <Polaroid
            img="https://images.unsplash.com/photo-1494435619026-9e21da76be75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rotate={-2}
          >
            hello
          </Polaroid>
        </div>
        <div className="m-3">
          <Polaroid
            img="https://images.unsplash.com/photo-1494435619026-9e21da76be75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rotate={-1.5}
          >
            hello
          </Polaroid>
        </div>
        <div className="m-3">
          <Polaroid
            img="https://images.unsplash.com/photo-1494435619026-9e21da76be75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            rotate={2}
          >
            hello
          </Polaroid>
        </div>
      </div>
    </div>
  );
}

export function Location() {
  return (
    <div className="flex justify-center items-center lg:w-[900px] h-[100vh]">
      {/* <div className="flex flex-col justify-center self-start mt-9 mb-5"> */}
      <div className="mr-6">
        <div className="text-4xl font-bold mb-1">
          문화생활,
          <br /> 한 눈에 확인해보세요
        </div>
        <div className="text-gray-700 pl-[0.15rem]">
          지도로 서울 전체의 전시/뮤지컬/오페라를 찾아볼 수 있어요!
        </div>
        <Link href="/map">
          <div className="my-10 w-[130px] text-center bg-cyan-200 rounded-lg px-4 py-3 text-sm hover:scale-105 duration-300">
            지금 확인하기
          </div>
        </Link>
      </div>
      <div className="cube-container">
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
        </div>
      </div>
    </div>
  );
}
