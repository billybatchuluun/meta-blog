import React from "react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const [index, setIndex] = useState(0);

  function rightClick() {
    if (index < articles.length - 1) {
      setIndex(index + 1);
    }
  }
  function leftClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const article = articles[index];

  return (
    <section>
      <div className="flex flex-col  relative items-center">
        {article && (
          <div className="">
            <img className="w-[1216px]" src={article.cover_image} alt="" />
            <div className="flex p-10 flex-col gap-6 absolute bottom-1 left-1 bg-white w-[598px] rounded-xl">
              <div>
                {article?.tag_list.slice(0, 1).map((tags) => {
                  return (
                    <>
                      <div className="py-1  text-white flex flex-col items-center justify-center bottom-20 left-7 text-base bg-[#4B6BFB] w-20 rounded-lg">
                        {tags}
                      </div>
                      <div className="text-4xl">{article.title}</div>
                      <div>
                        <p>
                          {article.readable_publish_date +
                            ", " +
                            new Date(article.published_at).getFullYear()}
                        </p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-end gap-4 mt-3">
        <button
          onClick={leftClick}
          className="flex w-10 h-10 border-[1px] border-black justify-center items-center rounded-md"
        >
          <img src="./Iconleft.svg" alt="" />
        </button>
        <button
          onClick={rightClick}
          className="flex w-10 h-10 border-[1px] border-black justify-center items-center rounded-md"
        >
          <img src="./Iconright.svg" alt="" />
        </button>
      </div>
    </section>
  );
};
