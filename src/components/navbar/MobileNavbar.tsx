import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store";
import { toggleNavbar } from "@/redux/generalSlice";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";
import OpenLogin from "../components/openLogin/openMobileLogin";

export default function MobileNavbar() {
  const isNavbarOpen = useSelector(
    (state: RootState) => state.general.isNavbarOpen
  );
  const dispatch: AppDispatch = useDispatch();
  const location = usePathname();
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

  const handleToggleMenu = () => {
    dispatch(toggleNavbar(!isNavbarOpen));
  };

  return (
    <div
      className={`flex lg:hidden fixed flex-col z-50 ${
        innerWidth < 500 ? "w-[75%]" : "w-[35%]"
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
        <OpenLogin />
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
  );
}
