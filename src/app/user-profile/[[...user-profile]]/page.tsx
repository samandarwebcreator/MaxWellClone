"use client";

import BackToTopButton from "@/components/backToTop/BackToTopButton";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { RootState } from "@/lib/store";
import { UserProfile } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserProfilePage = () => {
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
      <main className="container py-0">
        <UserProfile path="/user-profile" />
        <div>
          <BackToTopButton />
        </div>
      </main>
      <footer className="pt-16 border-t border-lineColor">
        <Footer />
      </footer>
    </div>
  );
};

export default UserProfilePage;
