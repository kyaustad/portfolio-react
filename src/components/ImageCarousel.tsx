import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";
import { ImageIcon } from "lucide-react";

export default function ImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          size="xl"
          className="flex items-center gap-2"
        >
          <ImageIcon className="w-4 h-4" />
          <span>Images</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] h-[85vh] max-w-[95vw] max-h-[85vh] sm:w-[75vw] sm:h-[75vh] flex flex-col overflow-hidden">
        <DialogHeader className="flex-shrink-0 px-4 pt-4 pb-2">
          <DialogTitle className="text-lg sm:text-xl">{title}</DialogTitle>
          <DialogDescription className="text-sm">{`Click the image to view the full size image`}</DialogDescription>
        </DialogHeader>

        <div className="flex-1 flex items-center justify-center relative p-2 sm:p-4">
          <Carousel className="w-full h-full">
            <CarouselContent className="ml-0 h-full">
              {images.map((image) => (
                <CarouselItem
                  key={image}
                  className="pl-0 h-full flex items-center justify-center"
                >
                  <div className="flex items-center justify-center cursor-pointer w-full h-full">
                    <Image
                      src={image}
                      alt={image}
                      width={1000}
                      height={1000}
                      className="object-contain max-h-[50vh] sm:max-h-[60vh] w-auto max-w-full rounded-lg"
                      onClick={() => {
                        window.open(image, "_blank");
                      }}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation buttons positioned within the carousel */}
            <CarouselPrevious
              variant="default"
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 sm:h-10 sm:w-10"
            />
            <CarouselNext
              variant="default"
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 h-8 w-8 sm:h-10 sm:w-10"
            />

            {/* Indicators positioned below the images */}
            <CarouselIndicator className="bottom-4" />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
