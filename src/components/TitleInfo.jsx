import React, { useEffect, useState } from "react";

export const TitleInfo = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <section>
      <div></div>
      <div></div>
    </section>
  );
};
