"use client";

import { infoWindowData } from "@/app/_state/state";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

export default function ArtDetailContent() {
  const art = useRecoilValue(infoWindowData);

  return (
    <div className="w-[270px] h-[500px] flex flex-col items-center">
      <img
        src={art.MAIN_IMG ?? ""}
        alt={art.TITLE}
        className="h-[60%] object-contain rounded-md shadow-lg"
      />
      <div>{art.DATE}</div>
      END_DATE GUNAME IS_FREE ORG_LINK ORG_NAME PLACE TITLE
    </div>
  );
}
