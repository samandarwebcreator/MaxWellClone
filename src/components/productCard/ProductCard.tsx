"use client";

import useFetchData, { Product } from "@/lib/useFetchData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SkeletonCard } from "./skeleton/Skeleton";

const ProductCard: React.FC = () => {
  const apiUrl = "https://662f30d943b6a7dce30ea23b.mockapi.io/Products";

  const { data, loading, error } = useFetchData(apiUrl);
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      setInnerWidth(width);
    }
  }, []);

  if (loading) {
    return (
      <div className="container">
        <SkeletonCard />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No product data available</div>;
  }

  return (
    <div className="flex items-center justify-between flex-wrap lg:gap-5 gap-y-4 container">
      {data.map(
        (item: Product, index) =>
          index >= 1 &&
          index <= 9 && (
            <div
              key={item.id}
              className=" max-w-[170px] md:max-w-56 lg:max-w-72 w-full h-[310px] lg:h-[410px] rounded-xl shadow-navbarShadow flex flex-col justify-between items-center gap-[1px] lg:gap-3"
            >
              <div className="w-full h-[120px] lg:[240px]">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="rounded-tl-xl  rounded-tr-xl w-full h-[140px] lg:h-[230px]"
                  src={item.productImage}
                  alt={item.productName}
                />
              </div>

              <div className="px-3 w-full py-2">
                <div className="flex items-start flex-col gap-1 lg:gap-2">
                  <h2 className="text-lg lg:text-2xl font-semibold lg:font-bold">
                    {innerWidth < 1024
                      ? item.productName.slice(0, 10)
                      : item.productName.slice(0, 15)}
                  </h2>
                  <p className="text-sm">
                    {innerWidth < 1024
                      ? item.productDesc.slice(0, 30)
                      : item.productDesc.slice(0, 80)}
                    ...
                  </p>
                </div>
                <div className="flex items-start lg:items-center w-full justify-between flex-col lg:flex-row">
                  <p className="font-semibold text-xl  my-3">
                    {item.productPrice} so&apos;m
                  </p>
                  <button className="w-full lg:w-28 bg-brandColor py-1 lg:py-2 px-6 rounded-full text-white cursor-pointer">
                    Add
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProductCard;
