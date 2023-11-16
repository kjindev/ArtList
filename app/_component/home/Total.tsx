"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import MapIcon from "../../_common/MapIcon";
import { useSetRecoilState } from "recoil";
import { artDataState } from "@/app/_state/state";
import { getArtData } from "@/app/_utils/useData";

export function Total() {
  const setArtData = useSetRecoilState(artDataState);

  useEffect(() => {
    if (!artDataState) {
      getArtData().then((data) => setArtData(data));
    }
  }, []);

  return (
    <div className="pc:w-[900px] w-[100%] h-[100vh] flex justify-center tems-center">
      <div className="w-[100%] flex flex-wrap-reverse pc:flex-nowrap items-center justify-center">
        <div>
          <div className="text-3xl pc:text-4xl font-bold mb-1">
            문화생활,
            <br /> 한 눈에 확인해보세요
          </div>
          <div className="text-sm pc:text-base text-gray-700 pl-[0.15rem]">
            지도로 서울 전체의 전시/뮤지컬/오페라를 찾아볼 수 있어요!
          </div>
          <div className="mt-7 pc:mt-0 mr-6 pc:w-[450px]">
            <Link href="/map">
              <div className="mt-6 pc:mt-10 w-[130px] text-center bg-gradient-to-r from-[#57a3f2] to-[#3c86ec] rounded-lg px-4 py-3 text-sm hover:scale-105 duration-300 shadow-md text-white">
                지금 확인하기
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-end items-center pc:w-[450px]">
          <MapIcon />
        </div>
      </div>
    </div>
  );
}
