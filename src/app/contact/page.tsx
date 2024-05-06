"use client";

import BackToTopButton from "@/components/components/backToTop/BackToTopButton";
import ContactMain from "@/components/contact/ContactMain";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { RootState } from "@/lib/store";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function Contact() {
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
    <div className={` flex flex-col min-h-screen -z-50`}>
      <header>
        <Navbar />
      </header>
      <main className="flex-1">
        <section className="py-10 md:py-10">
          <ContactMain />
          <div>
            <BackToTopButton />
          </div>
        </section>
      </main>
      <footer
        className={`border-t-2 border-lineColor pt-7 bottom-0 static md:sticky lg:static`}
      >
        <Footer />
      </footer>
    </div>
  );
}
