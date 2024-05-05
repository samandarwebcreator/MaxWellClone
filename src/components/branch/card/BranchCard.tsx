import { branches } from "@/lib/data";
import React from "react";
import { BranchType } from "@/lib/data";
import Link from "next/link";

export default function BranchCard() {
  return (
    <div className="w-full container">
      <div className="w-full md:max-w-4xl gap-7 flex flex-col items-center md:items-start justify-center md:justify-center">
        {branches.map((item: BranchType) => {
          const {
            id,
            branchName,
            branchLocation,
            branchWorkTime,
            branchCloseTime,
            branchNumber,
          } = item;

          return (
            <div
              key={id}
              className="shadow-navbarShadow w-full  flex flex-col items-center justify-between rounded-xl p-2 md:p-4 px-3"
            >
              <div className="flex items-start pb-5 border-b-2 border-lineColor  justify-between w-full">
                <div className="flex flex-col items-start gap-1">
                  <h3 className="text-md md:text-xl font-bold">{branchName}</h3>
                  <p className="capitalize text-sm text-footerSocials">
                    {branchLocation}
                  </p>
                </div>
                <span className="text-end text-red-500 text-sm">
                  {branchCloseTime}
                </span>
              </div>
              <div className="flex items-start justify-between w-full">
                <div className="flex items-start flex-col mt-2 gap-1">
                  <span className="text-start text-sm text-footerSocials">
                    Ish vaqti:
                  </span>
                  <p>{branchWorkTime}</p>
                </div>
                <div className="flex items-end flex-col mt-2 gap-1">
                  <span className="text-end text-sm text-footerSocials">
                    Telefon:
                  </span>
                  <Link
                    className="text-sm md:text-lg"
                    href={`tel:${branchNumber}`}
                  >
                    {branchNumber}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
