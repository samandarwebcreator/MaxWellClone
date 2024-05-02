"use client";

import { AppDispatch, RootState } from "@/lib/store";
import { openLoginDialog, toggleNavbar } from "@/redux/generalSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function OpenLogin() {
  const isLoginModalOpen = useSelector(
    (state: RootState) => state.general.isLoginModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(openLoginDialog(!isLoginModalOpen));
    dispatch(toggleNavbar(false));
  };

  return (
    <div>
      <button
        onClick={openLoginModal}
        className="text-xl font-semibold text-start w-full p-2 bg-white rounded-xl hover:bg-navbarHover"
      >
        Kirish
      </button>
    </div>
  );
}
