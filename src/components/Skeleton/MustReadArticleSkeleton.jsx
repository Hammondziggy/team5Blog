import React from "react";
import SidePost from "../body/SidePost";
import SidePostSkeleton from "./SidePostSkeleton";
import Animate from "./Animate";
// SidePostSkeleton
const MustReadArticleSkeleton = () => (
  <div className=" w-full min-w-full flex flex-col lg:flex-row justify-between items-start gap-4 bg-[#f2f2f2] dark:bg-[#0a0a0a] p-4">
    <div className="flex flex-col items-start justify-start min-h-max flex-1 relative overflow-hidden w-full">
      <div className="w-full h-60 bg-[#E0E0E0] dark:bg-[#777] rounded"></div>
      <div className="flex items-center w-full p-3 gap-2 mt-3 p-main-text">
        <div className="rounded-full w-10 h-10 dark:bg-[#777] bg-[#E0E0E0]" />
        <div className="w-full ml-3 h-5 dark:bg-[#777] rounded bg-[#E0E0E0]"></div>
      </div>
      <h3 className="w-full  h-5 mb-5 dark:bg-[#777] rounded bg-[#E0E0E0]"></h3>
      <p className="w-full h-[100px] mb-5 dark:bg-[#777] bg-[#E0E0E0] rounded"></p>
      <div className="w-full  h-5 mb-5 dark:bg-[#777] rounded bg-[#E0E0E0]"></div>
      <div className="flex flex-row-reverse justify-center items-center ">
        <p className="w-20 h-3 rounded dark:bg-[#777] bg-[#E0E0E0]"></p>
        <div className="w-10 h-[1px] rounded dark:bg-[#777] bg-[#E0E0E0]" />
      </div>
      <Animate />
    </div>
    <div className="w-full lg:w-2/5 flex flex-col justify-start items-start">
      <SidePostSkeleton />
      <SidePostSkeleton />
      <SidePostSkeleton />
      {/* <SidePost /> */}
    </div>
  </div>
);
export default MustReadArticleSkeleton;
