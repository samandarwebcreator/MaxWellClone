import Link from "next/link";
import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/maxwayLogo.png";

export default function Footer() {
  const footerSocial: { id: number; icon: React.ReactNode; link: string }[] = [
    {
      id: 1,
      icon: <RiInstagramLine />,
      link: "https://www.instagram.com/maxwayuz/",
    },
    {
      id: 2,
      icon: <FaFacebook />,
      link: "https://www.facebook.com/maxway.uzb/",
    },
    {
      id: 3,
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@maxway2010",
    },
  ];

  const navLinks: { id: number; linkName: string; path: string }[] = [
    { id: 1, linkName: "branches", path: "/branch" },
    { id: 2, linkName: "about", path: "/about" },
    { id: 3, linkName: "contact", path: "/contact" },
  ];

  return (
    <div className="container flex flex-col">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-start gap-4 md:gap-52 lg:gap-96 pb-5 md:pb-10 border-b-2 border-lineColor">
        <Link href={"/"}>
          <Image
            priority={true}
            width={50}
            height={50}
            src={logo}
            alt="maxway logo"
          ></Image>
        </Link>
        <ul className=" flex flex-col md:flex-row w-1/4  gap-4  items-center">
          {navLinks.map((item) => (
            <li
              key={item.id}
              className="w-full text-start md:text-center rounded-xl  text-md group relative"
            >
              <Link
                href={`${item.path}`}
                className={` hover:text-black text-footerSocials capitalize z-40 font-normal transition-all duration-500 ease-in-out`}
              >
                {item.linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-between w-full mt-3 mb-5">
        <p className="text-footerSocials text-sm md:text-md">
          {" "}
          &#169; Delever 2020 - 2024 Barcha huquqlar himoyalangan
        </p>
        <ul className="flex items-center justify-center gap-5">
          {footerSocial.map((item) => {
            const { id, icon, link } = item;

            return (
              <li className="text-lg" key={id}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-xl  md:text-2xl text-footerSocials hover:text-brandColor transition-all duration-300 ease-in-out"
                >
                  {icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
