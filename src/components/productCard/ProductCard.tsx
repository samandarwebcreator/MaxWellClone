import useFetchData, { Product } from "@/lib/useFetchData";
import Image from "next/image";

const ProductCard: React.FC = () => {
  const apiUrl = "https://662f30d943b6a7dce30ea23b.mockapi.io/Products";

  const { data, loading, error } = useFetchData(apiUrl);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No product data available</div>;
  }

  return (
    <div className="flex items-center justify-between flex-wrap md:gap-5 gap-y-4 container">
      {data.map((item: Product) => (
        <div
          key={item.id}
          className="product-card max-w-40 md:max-w-72 w-full h-[320px] md:h-[300px] rounded-xl shadow-navbarShadow flex flex-col items-center gap-1 md:gap-10"
        >
          <div className="w-full h-[120px] md:[190px]">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-tl-xl  rounded-tr-xl"
              style={{ width: "100%", height: "100%" }}
              src={item.productImage}
              alt={item.productName}
            />
          </div>
          <div className="px-3 py-2">
            <div className="flex items-start flex-col gap-1 md:gap-2">
              <h2 className="text-lg md:text-2xl font-semibold md:font-bold">
                {item.productName.slice(0, 10)}...
              </h2>
              <p className="text-sm">{item.productDesc.slice(0, 40)}...</p>
            </div>
            <div className="flex items-start md:items-center w-full justify-between flex-col md:flex-row">
              <p>{item.productPrice} so&apos;m</p>
              <button className="w-full md:w-28 bg-brandColor py-1 md:py-2 px-6 rounded-full text-white cursor-pointer">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
