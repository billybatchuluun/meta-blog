import React from "react";
import { useEffect, useState } from "react";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <section>
      <div className="flex flex-col gap-8">
        <div>
          <h4 className="font-bold text-2xl">Trending</h4>
        </div>
        <div className="flex gap-5">
          {articles.slice(0, 4).map((article) => {
            return (
              <>
                <div className="flex  relative w-[290px] h-[320px]  ">
                  <img
                    className="opacity-90 rounded-md"
                    src={
                      article.cover_image
                        ? article.cover_image
                        : "https://res.cloudinary.com/practicaldev/image/fetch/s--ToZbxUFF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9gl6twd8r59cvwqlllw7.jpg"
                    }
                    alt=""
                  />
                  <div className="flex absolute bottom-0">
                    {article?.tag_list.slice(0, 1).map((tags) => {
                      return (
                        <div className="py-1  text-white absolute bottom-20 left-7 text-base bg-[#4B6BFB] rounded-lg">
                          {tags}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex absolute bottom-1 left-3 w-[230px] h-[76px] text-white text-lg font-semibold">
                    {article.title}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};
