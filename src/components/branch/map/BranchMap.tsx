"use client";

import type { NextPage } from "next";

const BranchMap: NextPage = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://yandex.com/map-widget/v1/?um=constructor%3A96fd1f127794ef331a5dd08fbebb4fb0784c8f8fb4f790f75cefca0fdff7aafe&amp;source=constructor"
        width="0"
        height="0"
        className="w-full h-[720px]"
      ></iframe>
    </div>
  );
};

export default BranchMap;
