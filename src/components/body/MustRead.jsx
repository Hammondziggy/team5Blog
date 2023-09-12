import React from "react";
import { useGlobalContext } from "../context";
import images from "../../UI/constants/images";
import SidePost from "./SidePost";
import { Link } from "react-router-dom";
import MustReadArticleSkeleton from "../Skeleton/MustReadArticleSkeleton";

const MustRead = () => {
  const { articlesData } = useGlobalContext();
  // Check if there are articles and get the last one
  const LastPosted = articlesData.length ? articlesData[0] : null;
  return (
    <>
      {articlesData.length === 0 ? (
        <MustReadArticleSkeleton />
      ) : (
        <div className="p-8 md:px-14">
          <h1 className="relative inline-block font-semibold lg:font-bold  text-light-header dark:text-dark-header font-sans ">
            MUST READ
          </h1>
          <div className="relative w-full min-w-full flex flex-col lg:flex-row justify-between items-start gap-4">
            {LastPosted && (
              <div className="flex flex-col items-start justify-start min-h-max flex-1">
                <div className="h-60 w-full">
                  <img
                    src={LastPosted.thumbnail}
                    className="object-fill rounded w-full h-full"
                    alt="..."
                  />
                </div>
                <div className="flex items-center w-full p-3 gap-2 mt-3 p-main-text">
                  <img
                    src={images.avatar2}
                    className="w-10 rounded-full"
                    alt=""
                  />
                  <p>{LastPosted.author}</p>
                  <div className="w-10 h-[1px] bg-light-text dark:bg-dark-text" />
                  <p>6 hours ago</p>
                </div>
                <h3 className="text-light-header dark:text-dark-header font-semibold">
                  {LastPosted.title}
                </h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: LastPosted.editorHtml.slice(0, 100),
                  }}
                  className="p-main-text m-3 .d-text"
                />
                <Link
                  to={`/ArticlePost/${LastPosted.id}`}
                  className="text-hover-dark font-sans py-2 text-center w-full scale-75 hover:scale-90"
                >
                  Read More
                </Link>
                <div className="flex flex-row-reverse justify-center items-center">
                  <p className="p-main-text ">{LastPosted.category}</p>
                  <div className="w-10 h-[1px] bg-light-text dark:bg-dark-text" />
                </div>
              </div>
            )}

            <div className="w-full lg:w-2/5 flex flex-col justify-start items-start">
              {/* <SidePost /> */}
              {articlesData.slice(1, 4).map((data) => (
                <SidePost
                  author={data.author}
                  category={data.category}
                  thumbnail={data.thumbnail}
                  id={`/ArticlePost/${data.id}`}
                  title={data.title}
                  key={data.id}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MustRead;
