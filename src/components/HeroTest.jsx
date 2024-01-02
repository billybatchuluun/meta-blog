import React from "react";
import { useEffect, useState } from "react";

export const HeroTest = () => {
  const [articles, setArticles] = useState([]);
  const [data, setDate] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  articles.map((article) => {
    const date = new Date(article.published_at);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    article.longDate = formattedDate;
  });

  return;
  <div className="flex flex-col w-full h-[650px] gap-2">
    <div className="w-full h-[600] flex overflow-scroll" id="SliderContainer">
      {articles.slice(0, 4).map((article) => {
        return (
          <div className="w-[1200px] h-[600px] relative snap-center flex-none">
            <img
              src={article.cover_image}
              className="w-full  h-full rounded-xl snap-center absolute top-0 left-0"
              alt=""
            />
            <div className="absolute bottom-3 left-3 w-1/2 h-2/5 rounded-xl bg-white p-10 gap-6 flex flex-col">
              <div className="py-1 px-2 flex justify-center bg-blue-500 rounded-md text-sm font-medium text-white w-fit">
                {article.tags}
              </div>
              <div className="text-4xl font-semibold">{article.title}</div>
              <div className="text-normal font-normal text-gray-400">
                {article.longDate}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>;
};
