"use client";

import { Fragment, useEffect, useState } from "react";
import { BsCaretUpFill } from "react-icons/bs";

export default function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  });

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {show ? (
        <div className="fixed bottom-0 right-0 mb-6 mr-6 z-10">
          <button
            onClick={jumpToTop}
            className="bg-brandColor text-white rounded-full px-3.5 pt-3 pb-4 hover:opacity-80 transition"
          >
            <BsCaretUpFill />
          </button>
        </div>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
}
