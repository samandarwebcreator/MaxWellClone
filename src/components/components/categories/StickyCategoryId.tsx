"use client";

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { StickyIdTypes, stickyIds } from "@/lib/data";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

export default function StickyCategoryId() {
  const [activeLinkId, setActiveLinkId] = useState<number>(stickyIds[0]?.id);

  const handleNext = () => {
    const currentIndex = stickyIds.findIndex(
      (item) => item.id === activeLinkId
    );
    const nextIndex = (currentIndex + 1) % stickyIds.length;
    setActiveLinkId(stickyIds[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = stickyIds.findIndex(
      (item) => item.id === activeLinkId
    );
    const prevIndex = (currentIndex - 1 + stickyIds.length) % stickyIds.length;
    setActiveLinkId(stickyIds[prevIndex].id);
  };

  const handleItemClick = (itemId: number) => {
    setActiveLinkId(itemId);
  };

  return (
    <div className="container px-16">
      <Carousel>
        <CarouselContent className="flex gap-3">
          {stickyIds.map((item: StickyIdTypes) => (
            <CarouselItem
              key={item.id}
              className={`p-2 rounded-4xl basis-42 font-medium ${
                activeLinkId === item.id
                  ? "text-brandColor bg-stickBarBg"
                  : "text-gray-700"
              }`}
              style={{ borderRadius: "8px" }}
            >
              <ScrollLink
                to={item.href.slice(1)}
                className={`smooth-scroll cursor-pointer p-2 py-6 rounded-xl `}
                smooth={true}
                spy={true}
                duration={500}
                onClick={() => handleItemClick(item.id)}
              >
                {item.name}
              </ScrollLink>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrev}>
          <FaChevronLeft />
        </CarouselPrevious>
        <CarouselNext onClick={handleNext}>
          <FaChevronRight />
        </CarouselNext>
      </Carousel>
    </div>
  );
}
