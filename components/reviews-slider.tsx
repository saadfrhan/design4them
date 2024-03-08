import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa6";

export default function ReviewsSlider() {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2">
            <div className="p-1">
              <Card className="border-primary">
                <CardContent className="flex flex-col p-6">
                  <h4 className="font-bold">
                    We were guided through the process with great care and focus
                    to detail and felt supported throughout the whole process by
                    Arnold & the team We really annreriated.
                  </h4>
                  <h5 className="text-primary font-bold mt-10">
                    Alex Adams - Action FGM
                  </h5>
                  <div className="flex gap-2 text-yellow-400 mt-3">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
