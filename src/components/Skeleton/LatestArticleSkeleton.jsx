import React from "react";
import Animate from "./Animate";
//
// #f2f2f2
// #
// #777
const LatestArticleSkeleton = () => (
  <div className="mb-3 overflow-hidden relative w-[320px] md:max-w-[370px] bg-[#f2f2f2] dark:bg-[#0a0a0a] rounded-lg p-4 overflow-hidden mx-auto">
    <div className="w-full h-60 bg-[#E0E0E0] dark:bg-[#777] rounded "></div>
    <div className="py-6 flex flex-col item-center justify-center gap-4">
      <div className="flex items-center mb-2">
        <div className="rounded-full w-10 h-10 dark:bg-[#777] bg-[#E0E0E0]" />
        <div className="w-24 ml-3 h-5 dark:bg-[#777] rounded bg-[#E0E0E0]"></div>
      </div>
      <h1 className="w-full  h-5 dark:bg-[#777] rounded bg-[#E0E0E0]"></h1>
      <div className="flex flex-row-reverse mt-3 justify-start items-center float-right">
        <p className="w-24 h-5 dark:bg-[#777]  rounded bg-[#E0E0E0]"></p>
        <div className="w-10 h-[1px] rounded dark:bg-[#777] bg-[#E0E0E0]" />
      </div>
      <div className="w-full h-[100px] dark:bg-[#777] bg-[#E0E0E0] rounded" />
    </div>
    <Animate />
  </div>
);

export default LatestArticleSkeleton;
