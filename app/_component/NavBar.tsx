"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const pathname = usePathname();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event: any) => {
    const keyword = event?.target.value;
    setSearchKeyword(keyword);
  };

  return (
    <div className="z-[100] fixed w-[100vw] h-[60px] flex justify-center shadow-sm bg-white">
      <div className="w-full pc:w-[900px] flex justify-between items-center pr-3">
        {pathname === "/" && (
          <Link
            href="/"
            className="titleFont hover:cursor-pointer text-xl tracking-tight"
          >
            서울, 오늘의 문화
          </Link>
        )}
        {pathname === "/map" && (
          <>
            <Link
              href="/"
              className="w-[10%] titleFont hover:cursor-pointer text-xl tracking-tight"
            >
              {"<"}
            </Link>
            <form className="w-[90%] text-sm">
              <input
                onChange={handleSearch}
                value={searchKeyword}
                placeholder="지역, 이름으로 검색해보세요"
                className="w-full py-3 px-4 bg-slate-100 rounded-xl text-sm"
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
