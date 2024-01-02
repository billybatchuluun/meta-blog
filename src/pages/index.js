import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AllBlogPost } from "@/components/AllBlogPost";
import { Trending } from "@/components/Trending";
import { HeroTest } from "@/components/HeroTest";
import { LoadMore } from "@/components/LoadMore";
import { About } from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex  w-screen py-8 justify-center">
      <section className="flex flex-col  gap-20">
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
