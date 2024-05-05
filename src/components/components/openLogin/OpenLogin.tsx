import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="hidden lg:flex justify-between p-5">
      <Link
        href="/user-profile"
        className="hidden lg:block p-3 bg-brandBackground text-brandColor rounded-full text-xl"
      >
        <FaUser />
      </Link>
    </header>
  );
}

function OpenLogin() {
  return <Header />;
}

export default OpenLogin;
