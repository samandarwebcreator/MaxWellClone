import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

export default function ContactMain() {
  return (
    <div className="container">
      <div className="flex  flex-col items-start justify-start gap-6 md:gap-24 lg:gap-10">
        <h1 className="font-bold text-4xl ">Contacts</h1>
        <div className="max-w-full w-full md:max-w-96 bg-contactCard rounded-xl h-auto p-5">
          <div className="p-2 bg-white rounded-xl w-24 mt-0 lg:my-4">
            <Image
              src="/svgContact.png"
              alt="contact via QR"
              width={80}
              height={80}
              priority={true}
            />
          </div>
          <p className="text-white font-semibold text-lg my-4">
            Leave a review or <br /> ask a question in Telegram
          </p>
          <div className="flex items-center justify-start gap-1">
            <span className="font-bold text-xl text-white">
              <FaTelegramPlane />
            </span>
            <Link
              className="text-md text-white border-b-[1px] border-white"
              href="https://t.me/maxwaymasterfood_bot"
            >
              &#64;maxwaymasterfood_bot
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-5">Single call center</h3>
          <Link href="tel:+998712005400" className="text-brandColor mt-4">
            +998712005400
          </Link>
        </div>
      </div>
    </div>
  );
}
