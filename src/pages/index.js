import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  console.log("articles", articles);
  return (
    <main>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section className="my-24">
        <div className="flex justify-center mb-8">
          <h4 className="font-bold text-2xl">All Blog Post</h4>
          <p className="font-bold text-xs text-title">View All</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {articles.map((article) => {
            return (
              <>
                <div>
                  <img
                    className="w-[360px] h-[249px] rounded-md"
                    src="{article.cover_image"
                    alt="coverpicture"
                  ></img>
                </div>
                <div>
                  <p className="flex justify-center items-center">
                    {article.tag_list.map((tag) => {
                      return (
                        <label className="text-sm mr-1 mb-1 rounded-md text-[#4b6bfb] bg-[#4b6bfb0d py-1 px-2.5]">
                          {tag}
                        </label>
                      );
                    })}
                  </p>
                </div>
                <div className="text-2xl w-[344px]">{article.title}</div>
                <div>{article.description}</div>
              </>
            );
          })}
        </div>
      </section>
    </main>
  );
}
