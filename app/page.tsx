import Image from "next/image";
import NavBar from "./component/NavBar";

export default function Home() {
  return (
    <div className="px-5">
      <div className="">
        <div>🤩 이런 전시는 어때요?</div>
        <div className="text-sm text-gray-500">전시/미술을 추천해줄게요</div>
        <div>😍 요즘 핫한 공연</div>
        <div className="text-sm text-gray-500">뮤지컬/오페라 보러가요!</div>
      </div>
    </div>
  );
}
