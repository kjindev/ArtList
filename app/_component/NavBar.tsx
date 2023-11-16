"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="z-[100] fixed w-full pt-4 pb-3 flex justify-center shadow-sm bg-white">
        <div className="w-[100%] pc:w-[900px] flex justify-between items-center">
          <div className="titleFont hover:cursor-pointer text-xl tracking-tight mr-2">
            <p>서울, 오늘의 문화</p>
          </div>
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
  } else {
    return <></>;
  }
}
