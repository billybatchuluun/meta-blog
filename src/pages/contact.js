import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ContactUs } from "@/components/ContactUs";
import { About } from "@/components/About";


export default function Home() {
  return (
    <main className="flex w-screen py-8 justify-center">
      <section className="flex flex-col gap-[100px]">
        <Navbar />
        <ContactUs />
        <About />
      </section>
    </main>
  );
}
