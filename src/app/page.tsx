"use client";

import BackToTopButton from "@/components/components/backToTop/BackToTopButton";
import StickyCategoryId from "@/components/components/categories/StickyCategoryId";
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

  const isLoginModalOpen = useSelector(
    (state: RootState) => state.general.isLoginModalOpen
  );

  const [innerWidth, setInnerWidth] = useState<number>(0);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const handleResize = () => {
        setInnerWidth(width);
      };

      setInnerWidth(width);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 700) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isNavbarOpen && innerWidth < 1024
          ? "bg-blackGlass"
          : isNavbarOpen && innerWidth > 1024
          ? "bg-white"
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
        <section
          className={`sticky top-0 bg-white py-3 ${
            isSticky ? "shadow-navbarShadow" : ""
          }`}
        >
          <StickyCategoryId />
        </section>
        <section className="py-10 ">
          <ProductCard />
          <div>
            <BackToTopButton />
          </div>
        </section>
      </main>

      <footer className="py-16 border-t-2 border-lineColor">
        <Footer />
      </footer>
    </div>
  );
}
