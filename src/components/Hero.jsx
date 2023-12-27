import React from "react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  // console.log("articles", articles);
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
      <div className="flex flex-col justify-center items-center">
        {article && (
          <div className="">
            <img className="w-[1216px]" src={article.cover_image} alt="" />
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <button
          onClick={leftClick}
          className="flex w-10 h-10 border-2 justify-center items-center"
        >
          <img src="./Iconleft.svg" alt="" />
        </button>
        <button
          onClick={rightClick}
          className="flex w-10 h-10 border-2 justify-center items-center"
        >
          <img src="./Iconright.svg" alt="" />
        </button>
      </div>
    </section>
  );
};
