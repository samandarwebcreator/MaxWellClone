"use client";

import useFetchData from "@/lib/useFetchData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Counter from "../components/counter/Counter";

export default function BasketComponent() {
  const apiUrl = "https://662f30d943b6a7dce30ea23b.mockapi.io/Products";
  const { data, loading, error } = useFetchData(apiUrl);
  const [basketProducts, setBasketProducts] = useState<any>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("basket");
    if (localStorageData && data) {
      const localStorageObj = JSON.parse(localStorageData);
      const filteredProducts = Object.keys(localStorageObj)
        .map((productId) => {
          const product = data.find((p) => p.id === productId);
          if (product) {
            return {
              ...product,
              quantity: localStorageObj[productId],
            };
          }
          return null;
        })
        .filter(Boolean);
      setBasketProducts(filteredProducts);
    }
  }, [data]);

  return (
    <div className="w-full">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {basketProducts.length > 0 && (
        <div className="w-full flex flex-col gap-7 lg:gap-10 justify-center lg:justify-start items-center lg:items-start">
          {basketProducts.map(
            (product: {
              id: number;
              productName: string;
              productPrice: string;
              productImage: string;
              productDesc: string;
            }) => (
              <div
                key={product.id}
                className="w-full lg:w-[800px] flex items-center justify-between rounded-2xl py-6 px-3 shadow-navbarShadow"
              >
                <div className="flex items-center gap-4">
                  <Image
                    width={100}
                    height={100}
                    src={product.productImage}
                    alt={product.productDesc}
                    className="rounded-xl"
                    priority={true}
                  />
                  <h3>{product.productName}</h3>
                </div>

                <div>
                  <Counter productId={String(product.id)} />
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
