"use client";

import { Link } from "lucide-react";
import React from "react";

export default function OpenLogin() {
  return (
    <div>
      <Link
        href="/user-profile"
        className="text-xl font-semibold text-start w-full p-2 bg-white rounded-xl hover:bg-navbarHover"
      >
        Kirish
      </Link>
    </div>
  );
}
