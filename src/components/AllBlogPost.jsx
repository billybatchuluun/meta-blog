import React from "react";
import { useEffect, useState } from "react";

export const AllBlogPost = () => {
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
        <div className="flex gap-7.5 justify-between">
          <div className="flex gap-5">
            <p>All</p>
            <p>design</p>
            <p>Travel</p>
            <p>Fashion</p>
            <p>Technology</p>
            <p>Branding</p>
          </div>
          <div className="flex items-center">
            <p className="font-bold text-xs text-title">View All</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {articles.map((article) => {
          return (
            <a href={`${article.id}`} className="flex flex-col  p-4 gap-4">
              <div>
                <img
                  className="w-[360px] h-[249px] rounded-md"
                  src={
                    article.cover_image
                      ? article.cover_image
                      : "https://picsum.photos/536/354"
                  }
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
            </a>
          );
        })}
      </div>
    </section>
  );
};
