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
      className={`lg:hidden fixed z-50 h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isNavbarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`flex flex-col ${innerWidth < 500 ? "w-[75%]" : "w-[35%]"} ${
          isNavbarOpen ? "left-0" : "-left-full"
        } rounded-lg bg-white min-h-screen transition-all rounded-r-xl duration-300 ease-in-out`}
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
        <div className="w-full px-2 pb-4 mt-4 mb-4 border-b-2 border-lineColor">
          <OpenLogin />
        </div>
        <ul className="flex flex-col lg:flex-row w-full px-2">
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
      <div
        className={`bg-red-500 ${innerWidth < 500 ? "w-[25%]" : "w-[65%]"}`}
      ></div>
    </div>
  );
}

{
  /* <div className="">
  <div className="flex w-96   flex-row-reverse flex-wrap rounded-lg bg-white p-6"></div>
</div>; */
}
