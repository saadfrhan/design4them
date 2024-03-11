"use client";

import Image from "next/image";
import { useState } from "react";
import { FaArrowCircleRight as ArrowCircleRight } from "react-icons/fa";
import { Button } from "./ui/button";

export default function TabsWithFlexGrid2({
  labels,
}: {
  labels: {
    label: string;
    items: {
      name: string;
      price: number;
      tagline: string;
      was: number;
      contains: string[];
    }[];
  }[];
}) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="space-y-6">
      <div className="flex max-lg:max-w-[90vw] lg:max-w-full max-lg:overflow-x-auto mx-auto px-3 justify-center items-center">
        {labels.map(({ label }, index) => (
          <p
            key={index}
            onClick={() => setActiveTab(index)}
            className={`pb-2 text-xs font-bold border-b-2 px-6 whitespace-nowrap py-8 ${
              activeTab === index ? "border-b-primary" : "border-b-secondary"
            }`}
          >
            {label}
          </p>
        ))}
      </div>
      <div className="mx-auto grid gap-x-32 gap-y-12 md:grid-cols-3 max-md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1 justify-center items-center w-full">
        {labels[labels.findIndex((_, index) => index === activeTab)].items.map(
          (item, index) => (
            <div
              key={index}
              className="w-full p-[25px_15px] border border-[#01B1AE] rounded-[1.5rem] div-gradient flex justify-center font-semibold items-center md:hover:bg-black md:hover:scale-110 transition duration-300 flex-col space-y-6"
            >
              <div className="space-y-3 flex flex-col w-full">
                <div className="flex w-full items-center justify-between">
                  <p className="text-xs">{item.name}</p>
                  <Image
                    src="/images/bark.webp"
                    alt="Bark"
                    width={80}
                    className="brightness-[8.5]"
                    height={80}
                  />
                </div>
                <p className="self-start text-xs text-left">
                  <span className="text-primary">20%</span> Off for bark clients
                  only
                </p>
                <div className="flex w-full justify-around items-end">
                  <div>
                    <h2 className="scroll-m-20 font-semibold tracking-tight text-5xl">
                      ${item.price}
                    </h2>
                  </div>
                  <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    <p>was</p>
                    <p className="text-muted-foreground line-through decoration-primary">
                      ${item.was}
                    </p>
                  </h4>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs">{item.tagline}</p>
                <div className="bg-blueline w-[85%] content-[''] bottom-[-10px] h-1 left-[7.5%] bg-no-repeat bg-contain" />
              </div>
              <div className="self-start flex gap-y-2 flex-col overflow-y-auto h-28 w-full">
                {item.contains.map((i, idx) => (
                  <div key={idx} className="text-left flex items-center">
                    <ArrowCircleRight className="text-primary w-4 h-4 mr-2" />{" "}
                    <p className="text-xs">{i}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-x-2">
                <Button
                  variant="outline"
                  className="bg-transparent hover:bg-primary border-white"
                  size="sm"
                >
                  VIEW DETAILS
                </Button>
                <Button
                  variant="secondary"
                  className="text-primary hover:bg-primary hover:text-white"
                  size="sm"
                >
                  LIVE CHAT
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
