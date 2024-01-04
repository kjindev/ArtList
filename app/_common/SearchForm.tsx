"use client";

import React, { useState } from "react";

export default function SearchForm() {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (event: any) => {
    const keyword = event?.target.value;
    setSearchKeyword(keyword);
  };

  return (
    <form className="w-[90%] text-sm">
      <input
        onChange={handleSearch}
        value={searchKeyword}
        placeholder="지역, 이름으로 검색해보세요"
        className="w-full py-3 px-4 bg-slate-100 rounded-xl text-sm"
      />
    </form>
  );
}
