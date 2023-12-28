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
      <div>
        <div>
          <h4 className="font-bold text-2xl">Trending</h4>
        </div>
      </div>
    </section>
  );
};
