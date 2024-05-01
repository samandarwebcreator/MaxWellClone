"use client";

import BackToTopButton from "@/components/backToTop/BackToTopButton";
import Corucel from "@/components/corucel/Corucel";
// import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { RootState } from "@/lib/store";
import { useSelector } from "react-redux";

export default function Home() {
  const isNavbarOpen = useSelector(
    (state: RootState) => state.general.isNavbarOpen
  );

  console.log(isNavbarOpen);

  return (
    <div
      className={`${
        isNavbarOpen ? "bg-blackGlass z-[99999]" : ""
      } min-h-screen`}
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
      </main>
      {/* 
      <footer>
        <Footer />
      </footer> */}
    </div>
  );
}
