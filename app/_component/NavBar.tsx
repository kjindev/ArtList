import Link from "next/link";

export default function NavBar() {
  return (
    <div className="z-[100] fixed w-[100vw] pt-4 pb-3 flex justify-center shadow-sm bg-white">
      <div className="w-[100%] pc:w-[900px] flex justify-between items-center">
        <Link
          href="/"
          className="titleFont hover:cursor-pointer text-xl tracking-tight"
        >
          서울, 오늘의 문화
        </Link>
        <div className="text-sm flex">
          <a href="#total" className="mr-4">
            문화생활
          </a>
          <a href="#artNow" className="mr-4">
            추천 전시
          </a>
          <a href="#stageNow">추천 공연</a>
        </div>
      </div>
    </div>
  );
}
