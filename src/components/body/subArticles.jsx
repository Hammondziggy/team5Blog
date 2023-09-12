import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { mockData } from './mock';
import { useGlobalContext } from "../context";
import images from "../../UI/constants/images";
import SubHeaderAndFilter from "./subArticlesHeader";
import LatestArticleSkeleton from "../Skeleton/LatestArticleSkeleton";

const SubArticles = () => {
  const { articlesData } = useGlobalContext();
  const [article, setArticle] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Latest Articles");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 16; // 4 rows * 4 columns = 16 articles per page

  useEffect(() => {
    setArticle(articlesData);
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(article.length / articlesPerPage);

  // Update the filteredArticles array based on the current page
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const filteredArticles = article.slice(startIndex, endIndex);

  const categories = [
    "Latest Articles",
    "Javascript",
    "Design",
    "Algorithms",
    "UI/UX",
    "Security",
  ];

  // Function to handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <SubHeaderAndFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => setSelectedCategory(category)}
      />
      <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredArticles.length === 0
          ? [1, 2, 3, 4, 5, 6].map((_, id) => (
              <LatestArticleSkeleton key={id} />
            ))
          : filteredArticles.map((article, index) => {
              const text = (
                <div
                  className="text-gray-600 font-sans mb-4"
                  dangerouslySetInnerHTML={{
                    __html: article.editorHtml,
                  }}
                />
              );
              return (
                <div
                  key={index}
                  className=" relative max-w-[320px] md:max-w-[370px] bg-light-body dark:bg-dark-body rounded-lg p-4 overflow-hidden group hover:bg-cards-light transition-translate duration-500 ease-out mx-auto cursor-pointer scale-90 hover:scale-100 dark:hover:bg-[#0a0a0a]"
                >
                  <img
                    src={article.thumbnail}
                    alt="Banner"
                    className="w-full h-60 object-cover mx-auto rounded"
                  />
                  <div className="py-6 flex flex-col item-center justify-center gap-4">
                    <div className="flex items-center mb-2">
                      <img
                        className="rounded-full w-10  mr-2"
                        src={images.avatar2}
                        alt=""
                      />
                      <p className="text-sm text-gray-500 font-sans font-bold p-main-text">
                        {" "}
                        {article.author}
                      </p>
                    </div>
                    <h1 className="font-semibold font-sans leading-tight text-3xl capitalize text-light-header dark:text-dark-header">
                      {article.title}
                    </h1>
                    <div className="flex flex-row-reverse mt-3 justify-start items-center text-sm p-main-text float-right">
                      <p className="text-sm p-main-text">{article.category}</p>
                      <div className="w-10 h-[1px] bg-light-text dark:bg-dark-text" />
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: text.props.dangerouslySetInnerHTML.__html.slice(
                          0,
                          100
                        ),
                      }}
                      className="p-main-text pb-8 .d-text"
                    />
                    <div className="flex w-full  items-center justify-between gap-1 absolute bottom-0 right-1">
                      <div className="flex py-4 flex-1 items-center gap-3 text-light-header dark:text-dark-header font-semibold font-sans ml-3">
                        <span className="flex gap-1">
                          <i className="bx bxs-heart bx-sm"></i>
                          2,460
                        </span>
                        <span className="flex gap-1">
                          <i className="bx bxs-message-rounded-dots bx-sm "></i>
                          200
                        </span>
                        <span className="flex gap-1">
                          <i className="bx bxs-time bx-sm "></i>
                          100
                        </span>
                      </div>
                      <Link
                        to={`/ArticlePost/${article.id}`}
                        className="p-3 rounded-sm bg-hover-dark text-dark-text "
                      >
                        <i className="bx bx-right-down-arrow-circle bx-md"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-l-lg ${
            currentPage === 1 ? "disabled:opacity-50" : ""
          }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 text-blue-500">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-r-lg ${
            currentPage === totalPages ? "disabled:opacity-50" : ""
          }`}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default SubArticles;
