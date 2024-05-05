"use client";

import BackToTopButton from "@/components/components/backToTop/BackToTopButton";
import BranchCard from "@/components/branch/card/BranchCard";
import Footer from "@/components/footer/Footer";
import BranchMap from "@/components/branch/map/BranchMap";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/lib/store";
import { changeBranchVisual } from "@/redux/generalSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Branch() {
  const { isNavbarOpen, isCardBranchType } = useSelector(
    (state: RootState) => state.general
  );

  const dispatch = useDispatch<AppDispatch>();

  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      setInnerWidth(width);
    }
  }, []);

  const changeBranchVisually = () => {
    dispatch(changeBranchVisual(!isCardBranchType));
  };

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
      <header
        className={`${
          isCardBranchType ? "fixed" : ""
        } top-0 left-0 right-0 border-b-2 border-lineColor bg-white`}
      >
        <Navbar />
      </header>
      <main>
        <section
          className={` ${
            isCardBranchType
              ? "py-24 md:py-20 lg:py-40"
              : "py-4 md:py-7 lg:py-14"
          }`}
        >
          <div className="w-full flex justify-between items-center flex-col md:flex-row  mb-10 container px-5">
            <h1 className="text-4xl font-bold my-4 md:my-0">Branches</h1>
            <div className="flex gap-2 w-full md:w-96">
              <Button
                onClick={changeBranchVisually}
                className={`py-2 w-1/2 px-6 md:py-3 md:px-7 lg:py-2 lg:px-16 text-lg bg-lineColor rounded-full border-0  hover:bg-brandColor hover:text-white active:opacity-10 transition-all duration-500 ease-in-out ${
                  isCardBranchType ? "bg-brandColor text-white" : ""
                }`}
              >
                List
              </Button>
              <Button
                onClick={changeBranchVisually}
                className={`py-2 w-1/2 px-6 md:py-3 md:px-7 lg:py-2 lg:px-16 text-lg bg-lineColor rounded-full border-0  hover:bg-brandColor hover:text-white active:opacity-10 transition-all duration-500 ease-in-out ${
                  !isCardBranchType ? "bg-brandColor text-white" : ""
                }`}
              >
                Map
              </Button>
            </div>
          </div>

          {isCardBranchType ? <BranchCard /> : <BranchMap />}

          <div>
            <BackToTopButton />
          </div>
        </section>
      </main>

      <footer
        className={`border-t-2 border-lineColor pt-7 static lg:static bottom-0`}
      >
        <Footer />
      </footer>
    </div>
  );
}
