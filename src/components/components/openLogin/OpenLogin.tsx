"use client";

import { AppDispatch, RootState } from "@/lib/store";
import { openLoginDialog } from "@/redux/generalSlice";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function OpenLogin() {
  const isLoginModalOpen = useSelector(
    (state: RootState) => state.general.isLoginModalOpen
  );
  const dispatch: AppDispatch = useDispatch();

  const openLoginModal = () => {
    dispatch(openLoginDialog(!isLoginModalOpen));
  };

  return (
    <div>
      <button
        onClick={openLoginModal}
        className="hidden lg:block p-3 bg-brandBackground text-brandColor rounded-full text-xl"
      >
        <FaUser />
      </button>
    </div>
  );
}
