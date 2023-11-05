"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  if (pathname === "/" || pathname === "/art" || pathname === "/stage") {
    return (
      <div className="px-5 pt-2 pb-1">
        <div className="h-[50px] flex items-center">
          <Link href="/" className="titleFont text-xl tracking-tight mr-2">
            서울, <span>오늘의 문화</span>
          </Link>
          <Link
            href="/art"
            className="h-[100%] text-sm ml-2 mr-1 flex items-center"
          >
            <div
              className={
                pathname === "/art" ? "text-cyan-600" : "hover:text-cyan-600"
              }
            >
              요즘 전시
            </div>
            <div className="mt-2 self-start text-[0.6rem] text-red-400 rounded-md font-bold">
              N
            </div>
          </Link>
          <Link
            href="stage"
            className="h-[100%] text-sm ml-2 mr-1 flex items-center"
          >
            <div
              className={
                pathname === "/stage" ? "text-cyan-600" : "hover:text-cyan-600"
              }
            >
              요즘 공연
            </div>
            <div className="mt-2 self-start text-[0.6rem] text-red-400 rounded-md font-bold">
              N
            </div>
          </Link>
          <Link href="/map" className="text-sm mx-2 hover:text-cyan-600">
            지도로 찾기
          </Link>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
