import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockData } from "./mock";
import images from "../../UI/constants/images";
import HeaderAndFilter from "./mainHeader";

const Main = () => {
  const [article, setArticle] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Latest Articles");

  useEffect(() => {
    setArticle(mockData);
  }, []);

  const showSeeAllLink = article.length > 3 * 3;
  const articlesToDisplay = showSeeAllLink ? article.slice(0, 3 * 3) : article;

  const filteredArticles = articlesToDisplay.filter((article) => {
    return (
      selectedCategory === "Latest Articles" ||
      article.category === selectedCategory
    );
  });

  const categories = [
    "Latest Articles",
    "Javascript",
    "Design",
    "Algorithms",
    "UI/UX",
    "Security",
  ];

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength)+'...';
  };

  return (
    <>
      <HeaderAndFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => setSelectedCategory(category)}
      />
      <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArticles.length === 0 ? (
          <div className="text-center text-gray-500">
            No articles found for "{selectedCategory}".
          </div>
        ) : (
          filteredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-light-body rounded-lg overflow-hidden group hover:bg-cards-light transition duration-300"
            >
              <img
                src={article.thumbnail}
                alt="Banner"
                className="w-80 h-40 object-cover mx-auto"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                    <img
                    className="rounded-full w-6 ring-4 ring-light-body mr-2"
                    src={images.avatar2}
                    alt=""
                    />
                    <p className="text-sm text-gray-500 font-sans"> {article.author}</p>
                </div>
                <h2 className="text-xl font-semibold font-serif leading-tight">{article.title}</h2>
                <p className="text-sm text-gray-500 mb-2 font-sans">{article.category}</p>
                <p className="text-gray-600 font-sans mb-4">
                    {truncateText(article.content, 100)}
                </p>
                <div>
                    <Link
                    to={`/ArticlePost/${article.id}`}
                    className="p-2 bg-hover-dark text-dark-text"
                    >
                    <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                </div>
              </div>
            </div>
          ))
        )}
        {showSeeAllLink && (
          <Link
            to="/subArticles"
            className="text-orange-500 hover:underline text-right mt-4"
          >
            See All
          </Link>
        )}
      </div>
    </>
  );
};

export default Main;
