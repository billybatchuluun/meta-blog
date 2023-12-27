import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AllBlog } from "@/components/AllBlog";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  console.log("articles", articles);

  return (
    <main className="flex w-screen py-8 px-[350px]">
      <section>
        <Navbar />
        <AllBlog />
      </section>
    </main>
  );
}
