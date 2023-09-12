import React from "react";
import { useParams } from "react-router-dom";
import Main from "../components/body/main";
const ArticlePost = ({ articles }) => {
    const { post } = useParams(); 
    //console.log("article data:", articles);


  const articleSelected = articles.find((article) => article.id === post);
  const test2 = {
    ...articleSelected,
  };
  if (!articleSelected) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <div className="mx-10 lg:mx-60 ">
        <h1 className="text-4xl font-bold my-10 font-sans dark:text-dark-text">
          {articleSelected.title}
        </h1>
        <p className=" mb-2 p-main-text font-semibold">
          Author: {articleSelected.author}
        </p>
        <p className="text-sm text-gray-500 mt-2 dark:text-dark-text">
          {articleSelected.category}
        </p>
        <img
          src={articleSelected.thumbnail}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div
          dangerouslySetInnerHTML={{ __html: test2.editorHtml }}
          className="mt-10 p-main-text pb-10"
        />
      </div>
      {/* <Main /> */}
    </>
  );
};

export default ArticlePost;