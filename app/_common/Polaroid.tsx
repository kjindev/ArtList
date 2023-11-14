"use client";
import React, { useState } from "react";
import "../_style/polaroid.css";

interface DataType {
  children: any;
  img: string;
  rotate: number;
}

export default function Polaroid({ children, img, rotate }: DataType) {
  const [rotateDeg, setRotateDeg] = useState(rotate);
  return (
    <div
      style={{
        transition: "transform 0.5s ease-in-out",
        transform: `rotate(${rotateDeg}deg)`,
      }}
      onMouseOver={() => setRotateDeg(-rotate)}
      onMouseLeave={() => setRotateDeg(rotate)}
      className="polaroid flex flex-col items-center bg-neutral-100 w-[240px] h-[240px] shadow-md rounded"
    >
      <img src={img} className="mt-3 bg-slate-100 w-[220px] h-[212px]" />
      <div className="w-[240px] h-[40px] flex justify-center items-center text-center text-xs">
        {children}
      </div>
    </div>
  );
}
