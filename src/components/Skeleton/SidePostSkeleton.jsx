import React from "react";
import Animate from "./Animate";

const SidePostSkeleton = () => {
  return (
    <div className=" relative overflow-hidden flex flex-col lg:flex-row justify-start items-start gap-1  rounded  p-3 mb-3 mr-1 w-full bg-[#f2f2f2] dark:bg-[#0a0a0a]">
      <div className="w-full h-60 lg:h-[146px]  lg:w-60 bg-[#E0E0E0] dark:bg-[#777] rounded" />
      <div className="w-full">
        <div className="flex item p-main-text  p-1 items-center gap-2 lg:gap-0 lg:justify-between">
          <div className="w-8 h-8 rounded-full dark:bg-[#777] bg-[#E0E0E0]" />
          <div className="w-3/4 ml-3 h-5 dark:bg-[#777] rounded bg-[#E0E0E0]" />
        </div>
        <h6 className=" md:text-3xl w-full mt-3 lg:text-sm h-16 dark:bg-[#777] rounded bg-[#E0E0E0]"></h6>
        <div className="flex flex-row-reverse mt-3 justify-center items-center text-sm p-main-text float-right">
          <div className="w-16 h-2 dark:bg-[#777] bg-[#E0E0E0] rounded"></div>
          <div className="w-10 h-[1px] rounded dark:bg-[#777] bg-[#E0E0E0]" />
        </div>
      </div>
      <Animate />
    </div>
  );
};

export default SidePostSkeleton;
