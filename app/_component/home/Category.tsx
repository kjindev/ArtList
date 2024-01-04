import Box from "@/app/_common/Box";
import React from "react";

export default function Category() {
  return (
    <div className="pt-[100px] pb-7 pc:w-[900px] w-[100%] h-[100vh] flex flex-col justify-center tems-center px-7">
      <div className="text-3xl font-bold">키워드를 추천해드려요</div>
      <div className="w-[100%] flex flex-wrap items-center justify-between">
        <Box>전시/미술</Box>
        <Box>교양/강좌</Box>
        <Box>공연</Box>
        <Box>전통/국악</Box>
        <Box>축제</Box>
        <Box>기타</Box>
      </div>
    </div>
  );
}
