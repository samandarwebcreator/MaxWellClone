import Image from "next/image";
import React from "react";

export default function AboutMain() {
  return (
    <div className="container flex flex-col  gap-5 py-10">
      <h1 className="font-semibold text-3xl my-4 ml-2 ">About Company</h1>
      <div className="w-full h-[160px] md:h-[400px] overflow-hidden rounded-xl">
        <Image
          src="/aboutImage.png"
          alt="maxway company building"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          className="rounded-xl cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
        />
      </div>
      <p className="text-sm md:text-lg lg:max-w-[900px]">
        The company was founded in February 2005 in Tashkent. At the moment, the
        company has 18 branches in Tashkent. The menu consists mainly of club
        sandwiches, hot dogs, burgers, pita bread and donars. Our priorities are
        the freshness and quality of ingredients, variety of toppings,
        affordable prices and attention to guests' requests. Every day, a large
        number of different people order from MaxWay. And we try to increase
        both the number of visitors and the number of branches. With each cooked
        dish, we refine the details of original recipes and look for the perfect
        balance of price and continue to be your favorite brand. If suddenly you
        are faced with poor service or low quality of cooked food from our side,
        be sure to write to us at @maxwaymasterfood_bot. We gladly accept both
        positive and negative feedbacks. A guest's complaint is a gift, thanks
        to which we have room to grow.
      </p>
    </div>
  );
}
