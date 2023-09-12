import React from "react";
import images from "../../UI/constants/images";
import { Link } from "react-router-dom";

const SidePost = ({ author, thumbnail, id, title, category }) => {
  return (
    <Link
      to={id}
      className="flex flex-col lg:flex-row justify-start items-start gap-1 cursor-pointer rounded hover:bg-cards-light p-3 mb-3 mr-1 w-full dark:hover:bg-[#0a0a0a]"
    >
      <div className="w-full h-60 lg:h-[146px]  lg:w-60">
        <img
          src={thumbnail}
          className="object-fill rounded w-full h-full"
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="flex item p-main-text  p-1 items-center gap-2 lg:gap-0 lg:justify-between">
          <img src={images.avatar2} className="w-8 rounded-full" alt="" />
          <small className="text-xs">{author}</small>
          <div className="w-4 h-[1px] bg-light-text dark:bg-dark-text" />
          <small className="text-xs ">6 hours ago</small>
        </div>
        <h6 className="text-light-header dark:text-dark-header md:text-3xl font-semibold mt-3 lg:text-sm">
          {title}
        </h6>
        <div className="flex flex-row-reverse mt-3 justify-center items-center text-sm p-main-text float-right">
          <small className="">{category}</small>
          <div className="w-10 h-[1px] bg-light-text dark:bg-dark-text" />
        </div>
      </div>
    </Link>
  );
};
export default SidePost;
