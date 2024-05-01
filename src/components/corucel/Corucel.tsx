"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselComponent() {
  type CarouselItemType = {
    id: number;
    image: string;
  };

  const carouselArr: CarouselItemType[] = [
    {
      id: 1,
      image: "/maxwayCorucel1.png",
    },
    {
      id: 2,
      image: "/maxwayCorucel2.png",
    },
  ];

  return (
    <div className="container px-3">
      <Carousel
        className="rounded-xl w-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className=" w-full h-[180px] md:h-[300px] lg:h-[450px] flex gap-4">
          {carouselArr.map((item) => (
            <CarouselItem key={item.id} className="w-full h-full rounded-xl ">
              <Image
                src={item.image}
                alt={`Carousel ${item.id}`}
                width={0}
                height={0}
                className="relative z-0 transition-all hover:scale-110  duration-300  rounded-xl"
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                priority={true}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:block absulute -left-4 bg-white w-10 h-10 pl-[6px]" />
        <CarouselNext className="hidden lg:block absolute -right-4 bg-white w-10 h-10 pl-[6px]" />
      </Carousel>
    </div>
  );
}
