"use client";

import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../../../public/maxwayLogo.png";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { toggleNavbar } from "@/redux/generalSlice";
import OpenLogin from "../components/openLogin/OpenLogin";
import { navLinks } from "@/lib/data";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const [totalPrice, setTotalPrice] = useState(12000);
  const isNavbarOpen = useSelector(
    (state: RootState) => state.general.isNavbarOpen
  );
  const dispatch: AppDispatch = useDispatch();
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        setInnerWidth(width);
        dispatch(toggleNavbar(width > 1024));
      }
    };

    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      setInnerWidth(width);
      dispatch(toggleNavbar(width > 1024));
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [dispatch]);

  const location = usePathname();

  const handleToggleMenu = () => {
    dispatch(toggleNavbar(!isNavbarOpen));
  };

  return (
    <div className="relative">
      <MobileNavbar />
      <div className="container py-3 flex w-full items-center justify-between">
        <div className="flex items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-1">
            <button
              className="block lg:hidden bg-transparent border-none hover:bg-navbarHover hover:text-brandColor  p-3 text-lg  rounded-xl"
              onClick={handleToggleMenu}
            >
              <FaBars />
            </button>
            <Image
              priority={true}
              src={logo}
              alt=" website logo"
              width={50}
              height={50}
            />
          </div>
          <ul className=" hidden lg:flex gap-4">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className="w-full text-start rounded-xl  text-md group relative"
              >
                <Link
                  href={`${item.path}`}
                  className={` ${
                    location === item.path
                      ? "border-b-2 border-transparent font-semibold text-brandColor"
                      : ""
                  } capitalize z-40 font-normal`}
                >
                  {item.linkName}
                </Link>
                <span className="absolute bottom-0 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
                <span className="absolute bottom-0 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center justify-center gap-4">
            <button className="hidden lg:flex items-center justify-center gap-4">
              <span className="text-brandColor  p-3 bg-brandBackground rounded-full">
                <FaLocationDot />
              </span>
              <p className="text-sm">
                Yetkazib berish yoki Olib ketish <br />
                <span className="text-brandColor">
                  Qabul qilib olish turini tanlang
                </span>
              </p>
            </button>
            <div className="flex gap-2 items-center justify-center ">
              <span className="p-3 bg-brandBackground text-brandColor rounded-full text-xl">
                <FaCartShopping />
              </span>
              <Link className="text-sm" href="/basket">
                {totalPrice} so&apos;m
              </Link>
            </div>
            <OpenLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
