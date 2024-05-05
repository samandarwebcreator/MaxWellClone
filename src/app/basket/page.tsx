"use client";
import React from "react";

import BackToTopButton from "@/components/components/backToTop/BackToTopButton";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasketComponent from "@/components/basket/Basket";

export default function Basket() {
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
      <header className="border-b border-lineColor">
        <Navbar />
      </header>
      <main className="container py-7 md:py-10 flex items-center justify-center flex-1  bg-white ">
        <section>
          <BasketComponent />
          <div>
            <BackToTopButton />
          </div>
        </section>
      </main>
      <footer className="pt-16 border-t border-lineColor static md:sticky lg:static bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
