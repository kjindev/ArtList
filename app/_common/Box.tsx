import React, { ReactNode } from "react";

export default function Box({ children }: { children: ReactNode }) {
  return (
    <div className="w-[240px] h-[200px] rounded-xl shadow my-7 p-5 text-center hover:scale-105 hover:cursor-pointer">
      {children}
    </div>
  );
}
