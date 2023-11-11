"use client";

import React, { useState } from "react";
import "./animation.css";

export default function Book() {
  return (
    <div id="container">
      <div className="book">
        <div className="bookCover">
          <div className="binder"></div>
          <div>오늘의 전시는?</div>
        </div>
        <div className="bookSide"></div>
        <div className="bookBack"></div>
      </div>
    </div>
  );
}
