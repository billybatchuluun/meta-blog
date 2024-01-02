import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { AllBlog } from "@/components/AllBlog";
import { LoadMore } from "@/components/LoadMore";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main className="flex w-screen py-8 justify-center">
      <section className="flex flex-col gap-20">
        <Navbar />
        <AllBlog />
        <LoadMore />
        <About />
      </section>
    </main>
  );
}
