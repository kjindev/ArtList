"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="z-[100] fixed w-full px-[15%] pt-4 pb-3 shadow-sm bg-white flex justify-between items-center">
        <div className="titleFont hover:cursor-pointer text-xl tracking-tight mr-2">
          <p>서울, 오늘의 문화</p>
        </div>
        <div className="text-sm flex">
          <a href="#intro" className="mr-4">
            소개
          </a>
          <a href="#now" className="mr-4">
            요즘 전시
          </a>
          <a href="#stage" className="mr-4">
            요즘 공연
          </a>
          <a href="#location">지도로 찾기</a>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
