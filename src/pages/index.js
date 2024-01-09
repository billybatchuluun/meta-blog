import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AllBlogPost } from "@/components/AllBlogPost";
import { Trending } from "@/components/Trending";
import { LoadMore } from "@/components/LoadMore";
import { About } from "@/components/About";



export default function Home() {
  return (
    <main className="flex  w-screen py-8 justify-center">
      <section className="flex flex-col gap-[100px]">
        <Navbar />
        <Hero />
        <Trending />
        <AllBlogPost />
        <LoadMore />
        <About />
      </section>
    </main>
  );
}
