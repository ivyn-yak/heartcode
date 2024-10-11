import React from "react";
import { Compare } from "@/components/ui/compare";

export function Landing() {
  return (
    <div className=" h-[100vh] w-[100vw] px-1 md:px-8 flex items-center justify-center [transform-style:preserve-3d]">
      <div
        style={{
          transform: "rotateX(15deg) translateZ(80px)",
        }}
        className="py-2 mx-auto w-5/6 h-5/6"
      >
        <Compare
          firstImage="/male.png"
          secondImage="/addict.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="w-full h-full"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
}
