"use client";

import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <div className="fixed w-full px-5 pt-4 pb-3 shadow bg-white flex justify-between items-center">
        <div className="titleFont hover:cursor-pointer text-xl tracking-tight mr-2">
          <p>서울, 오늘의 문화</p>
        </div>
        <div className="text-sm flex">
          <p className="mr-4 hover:cursor-pointer hover:text-cyan-600">소개</p>
          <p className="mr-4 hover:cursor-pointer hover:text-cyan-600">
            요즘 전시
          </p>
          <p className="hover:cursor-pointer hover:text-cyan-600">
            지도로 찾기
          </p>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
