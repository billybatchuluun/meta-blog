import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AllBlogPost } from "@/components/AllBlogPost";

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
    <main className="flex  w-screen py-8 justify-center">
      <section className="flex flex-col  gap-20">
        <Navbar />
        <Hero />
        <AllBlogPost />
      </section>
    </main>
  );
}
