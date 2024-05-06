"use client";
import React from "react";

import BackToTopButton from "@/components/components/backToTop/BackToTopButton";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import BasketComponent from "@/components/basket/Basket";

export default function Basket() {
  return (
    <div className={`flex flex-col min-h-screen -z-50`}>
      <header className="border-b border-lineColor">
        <Navbar />
      </header>
      <main className="container py-7 md:py-10 flex-1  bg-white ">
        <section>
          <BasketComponent />
          <div>
            <BackToTopButton />
          </div>
        </section>
      </main>
      <footer className="pt-16 border-t border-lineColor static">
        <Footer />
      </footer>
    </div>
  );
}
