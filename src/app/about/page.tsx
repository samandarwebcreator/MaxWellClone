"use client";

import AboutMain from "@/components/about/AboutMain";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { RootState } from "@/lib/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function About() {
  const isNavbarOpen = useSelector(
    (state: RootState) => state.general.isNavbarOpen
  );

  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      setInnerWidth(width);
    }
  }, []);

  return (
    <div
      className={`${
        isNavbarOpen && innerWidth < 1024
          ? "bg-blackGlass"
          : isNavbarOpen && innerWidth > 1024
          ? "bg-white"
          : "bg-white"
      } flex flex-col min-h-screen -z-50`}
    >
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <AboutMain />
        </section>
      </main>
      <footer
        className={`border-t-2 border-lineColor pt-7 ${
          innerWidth > 728 && innerWidth < 1024 ? "sticky bottom-0" : "static"
        }`}
      >
        <Footer />
      </footer>
    </div>
  );
}
