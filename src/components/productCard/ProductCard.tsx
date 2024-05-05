import useFetchData, { Product } from "@/lib/useFetchData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SkeletonCard } from "./skeleton/Skeleton";
import { stickyIds } from "@/lib/data";
import Counter from "../components/counter/Counter";
import { AppDispatch, RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "@/redux/counterSlicer";

const ProductCard: React.FC = () => {
  const apiUrl = "https://662f30d943b6a7dce30ea23b.mockapi.io/Products";
  const { data, loading, error } = useFetchData(apiUrl);
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const count = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  const [addedProducts, setAddedProducts] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      setInnerWidth(width);
    }
  }, []);

  useEffect(() => {
    // Reset addedProducts when count is reset to 0
    const resetAddedProducts = () => {
      const newAddedProducts = addedProducts.filter(
        (productId) => count[productId] > 0
      );
      setAddedProducts(newAddedProducts);
    };
    resetAddedProducts();
  }, [count]);

  const addProduct = (productId: string) => {
    dispatch(increment(productId));
    setAddedProducts((prev) => [...prev, productId]);
  };

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
    <div className="container">
      {stickyIds.map((category) => (
        <div
          key={category.id}
          id={category.href.slice(1)}
          className="pt-1 md:pt-4 lg:pt-5"
        >
          <h1 className="font-bold text-xl md:text-2xl lg:text-[42px] my-14 mb-8">
            {category.name}
          </h1>
          <div className="flex items-center  flex-wrap lg:gap-5 gap-3 md:gap-7 gap-y-4">
            {data
              .slice(category.from - 1, category.to)
              .map((item: Product, index) => (
                <div
                  key={item.id}
                  className="max-w-[170px] md:max-w-56 lg:max-w-72 w-full h-[310px] lg:h-[410px] rounded-xl shadow-navbarShadow flex flex-col justify-between items-center gap-[10px] lg:gap-3"
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
                      {!addedProducts.includes(item.id) ? (
                        <button
                          onClick={() => addProduct(item.id)}
                          className="w-full lg:w-28 bg-brandColor py-1 lg:py-2 px-6 rounded-full text-white cursor-pointer"
                        >
                          Add
                        </button>
                      ) : (
                        <Counter productId={item.id} />
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
