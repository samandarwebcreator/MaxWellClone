"use client";

import BackToTopButton from "@/components/backToTop/BackToTopButton";
import Corucel from "@/components/corucel/Corucel";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ProductCard from "@/components/productCard/ProductCard";
import { RootState } from "@/lib/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const isNavbarOpen = useSelector(
    (state: RootState) => state.general.isNavbarOpen
  );

  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setInnerWidth(window.innerWidth);
      };

      setInnerWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div
      className={`${
        innerWidth > 1024
          ? "bg-white"
          : isNavbarOpen
          ? "bg-blackGlass z-[99999]"
          : "bg-white"
      }`}
    >
      <header className="">
        <Navbar />
      </header>
      <main>
        <section className="py-6 md:py-12">
          <Corucel />
        </section>
        <div>
          <BackToTopButton />
        </div>
        <section className="py-10 ">
          <ProductCard />
        </section>
      </main>

      <footer className="py-16 border-t-2 border-lineColor">
        <Footer />
      </footer>
    </div>
  );
}
