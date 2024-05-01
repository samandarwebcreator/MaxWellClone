"use client";

import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import logo from "../../../public/maxwayLogo.png";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { toggleNavbar } from "@/redux/generalSlice";

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
        dispatch(toggleNavbar(width > 1024 ? true : !isNavbarOpen));
      }
    };

    if (typeof window !== "undefined") {
      setInnerWidth(innerWidth);
      dispatch(toggleNavbar(innerWidth > 1024 ? true : !isNavbarOpen));

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const navLinks: { id: number; linkName: string; path: string }[] = [
    { id: 0, linkName: "menu", path: "/" },
    { id: 1, linkName: "branches", path: "/branch" },
    { id: 2, linkName: "about", path: "/about" },
    { id: 3, linkName: "contact", path: "/contact" },
  ];

  const location = usePathname();

  const handleToggleMenu = () => {
    dispatch(toggleNavbar(!isNavbarOpen));
  };

  return (
    <div className="relative">
      <div
        className={`flex lg:hidden fixed flex-col z-50 ${
          innerWidth > 500 ? "w-[35%]" : "w-[75%]"
        }  bg-white h-screen rounded-l-none rounded-r-xl ${
          isNavbarOpen ? "left-0" : "-left-full"
        } transition-all duration-700 ease-in-out`}
      >
        <div className="flex items-center justify-between w-full px-3 py-2 bg-navbarTop">
          <h3 className="text-2xl font-semibold">Menu</h3>
          <button
            className="bg-transparent border-none text-3xl p-2 hover:bg-navbarHover rounded-xl"
            onClick={handleToggleMenu}
          >
            <IoClose />
          </button>
        </div>
        <div className="w-full px-2 pb-4 mt-4 mb-4 border-b-2 border-lineColor ">
          <button className="text-xl font-semibold text-start w-full p-2 bg-white rounded-xl hover:bg-navbarHover">
            Kirish
          </button>
        </div>
        <ul className="flex gap-4 flex-col lg:flex-row w-full px-2">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="w-full text-start py-2 px-2 rounded-xl hover:bg-navbarHover"
            >
              <Link
                href={`${item.path}`}
                className="capitalize font-medium flex items-center justify-between px-2"
              >
                <span>{item.linkName}</span>
                {location === item.path && (
                  <span className="text-brandColor font-bold text-xl">
                    <FaCheck />
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

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
                    location === item.path ? "font-bold text-brandColor" : ""
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

            <button className="hidden lg:block p-3 bg-brandBackground text-brandColor rounded-full text-xl">
              <FaUser />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
