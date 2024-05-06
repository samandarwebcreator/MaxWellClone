"use client";

import BackToTopButton from "@/components/components/backToTop/BackToTopButton";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { RootState } from "@/lib/store";
import { SignIn } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Page() {
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
    <div className={`flex flex-col min-h-screen -z-50`}>
      <header className="border-b border-lineColor">
        <Navbar />
      </header>
      <main className="container py-10 md:py-10 flex items-center justify-center flex-1 max-w-[350px] bg-white md:max-w-[450px] lg:max-w-[500px]">
        <SignIn path="/sign-in" />
        <div>
          <BackToTopButton />
        </div>
      </main>
      <footer className="pt-16 border-t border-lineColor static md:sticky lg:static bottom-0">
        <Footer />
      </footer>
    </div>
  );
}
