"use client";

import React, { useState } from "react";
import "../_style/book.css";

interface DataType {
  width: number;
  height: number;
  color: string;
  children: any;
}
export default function Book({ width, height, color, children }: DataType) {
  return (
    <div id="container">
      <div className="book">
        <div
          className="bookCover"
          style={{
            width: width,
            height: height,
            backgroundColor: color,
          }}
        >
          <div className="binder"></div>
          <div>{children}</div>
          {/* <img
              src="https://images.unsplash.com/photo-1528459061998-56fd57ad86e3?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="object-cover w-[100%] h-[100%] fixed z-[1]"
            /> */}
        </div>
        <div className="bookSide" style={{ width: 20, height: height }}></div>
        <div
          className="bookBack"
          style={{
            width: width,
            height: height - 10,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
