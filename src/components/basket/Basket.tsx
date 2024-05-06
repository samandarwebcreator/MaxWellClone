"use client";

import useFetchData from "@/lib/useFetchData";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Counter from "../components/counter/Counter";
import { Button } from "../ui/button";
import { BasketSkleton } from "../components/basketSkleton/BasketSkleton";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { FcCancel } from "react-icons/fc";

export default function BasketComponent() {
  const apiUrl = "https://662f30d943b6a7dce30ea23b.mockapi.io/Products";
  const { data, loading, error } = useFetchData(apiUrl);
  const [basketProducts, setBasketProducts] = useState<any>([]);
  const count = useSelector((state: RootState) => state.counter);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageData = localStorage.getItem("basket");
      if (localStorageData && data) {
        const localStorageObj = JSON.parse(localStorageData);

        let totalSum = 0;
        for (const key in localStorageObj) {
          if (
            localStorageObj.hasOwnProperty(key) &&
            typeof localStorageObj[key] === "object"
          ) {
            totalSum += localStorageObj[key].total;
          }
        }

        setTotalPrice(totalSum);
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
    }
  }, [data, count]);

  return (
    <div className="w-full">
      {loading ? (
        <div>
          <BasketSkleton />
        </div>
      ) : totalPrice === 0 ? (
        <div className="font-bold flex items-end justify-center gap-1 text-2xl md:text-3xl lg:text-4xl text-center text-footerSocials">
          <h1>Your bag is empty for now</h1>
          <span>
            <FcCancel className="text-2xl md:text-3xl lg:text-4xl" />
          </span>
        </div>
      ) : (
        !loading
      )}
      {error && <p>Error: {error.message}</p>}
      {basketProducts.length > 0 && (
        <div className="w-full">
          <h1 className="text-3xl lg:text-4xl ml-2.5 md:ml-2 mb-5 font-bold">
            Cart
          </h1>
          <div className="flex justify-between w-full gap-5 items-start flex-col lg:flex-row">
            <div className="flex flex-col gap-3 lg:gap-6 justify-center lg:justify-start items-center lg:items-start">
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
                    className="w-full md:min-w-[738px]  lg:w-[810px] flex items-center justify-between rounded-2xl py-6 px-3 shadow-navbarShadow"
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
                      <div className="flex flex-col gap-2">
                        <h3>{product.productName.slice(0, 17)}...</h3>
                        <p className="font-bold block lg:hidden">
                          {product.productPrice} sum
                        </p>
                      </div>
                    </div>

                    <div>
                      <Counter productId={String(product.id)} />
                    </div>

                    <p className="font-bold hidden lg:block">
                      {product.productPrice} sum
                    </p>
                  </div>
                )
              )}
            </div>
            <div className="lg:max-w-[400px] w-full">
              <div className="flex flex-col w-full shadow-navbarShadow rounded-2xl p-3 md:p-5 lg:p-5">
                <h1 className="text-2xl font-bold">Total</h1>
                <div className="flex w-full items-center justify-between my-3">
                  <p>Product</p>
                  <p>{totalPrice} sum</p>
                </div>
                <div className="flex w-full items-center justify-between my-3 pb-3 border-b border-lineColor">
                  <p>Delivery</p>

                  <p>{} sum</p>
                </div>

                <div className="flex w-full items-center justify-between my-3">
                  <p>To pay</p>

                  <p>{} sum</p>
                </div>
                <Button
                  className={`py-1 md:py-2 lg:py-3 w-full ${
                    totalPrice > 10000
                      ? "bg-brandColor cursor-pointer"
                      : "bg-slate-400 cursor-not-allowed "
                  } rounded-full mt-5 md:6 lg:7 text-white`}
                >
                  Go to checkout
                </Button>
              </div>
              <span className="text-red-500 text-sm text-center my-3 w-full block">
                The minimum order price must be 10 000 sums
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
