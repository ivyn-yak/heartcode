import React from "react";
import { Compare } from "@/components/ui/compare";

export function Landing() {
  return (
    
    <div className="mt-6 h-[80vh] w-[100vw] px-1 md:px-8 [transform-style:preserve-3d]">
      <div className=" mx-auto w-5/6 h-full">
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
