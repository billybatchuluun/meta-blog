import React from "react";
import { useEffect, useState } from "react";

export const AllBlog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <section className="flex flex-col justify-center my-24">
      <div className="flex flex-col justify-center mb-8 gap-8">
        <div>
          <h4 className="font-bold text-2xl">All Blog Post</h4>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {articles.map((article) => {
          return (
            <div className="flex flex-col flex-start  p-4 gap-4">
              <div>
                <img
                  className="w-[360px] h-[249px] rounded-md"
                  src={article.cover_image}
                  alt="coverpicture"
                ></img>
              </div>
              <div>
                <p className="flex">
                  {article.tag_list.map((tag) => {
                    return (
                      <label className="text-sm mr-1 mb-1 rounded-md text-[#4b6bfb] bg-[#4b6bfb0d] py-1 px-2.5]">
                        {tag}
                      </label>
                    );
                  })}
                </p>
              </div>
              <div className="text-2xl w-[344px]">{article.title}</div>
              <div className="flex items-center text-[#97989F] text-base">
                <p>
                  {article.readable_publish_date +
                    ", " +
                    new Date(article.published_at).getFullYear()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
