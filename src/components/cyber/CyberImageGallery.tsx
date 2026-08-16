"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Images } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

function resolveGalleryImages(images: string[], featuredImage?: string) {
  if (featuredImage && !images.includes(featuredImage)) {
    return [featuredImage, ...images];
  }
  return images;
}

export function CyberImageLightbox({
  images,
  title,
  open,
  onOpenChange,
  activeIndex,
  onActiveIndexChange,
  accentClass = "border-cyber-orange/50",
  accentTextClass = "text-cyber-orange",
}: {
  images: string[];
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
  accentClass?: string;
  accentTextClass?: string;
}) {
  const reduceMotion = useReducedMotion();

  const previous = useCallback(() => {
    onActiveIndexChange(
      activeIndex === 0 ? images.length - 1 : activeIndex - 1
    );
  }, [activeIndex, images.length, onActiveIndexChange]);

  const next = useCallback(() => {
    onActiveIndexChange(
      activeIndex === images.length - 1 ? 0 : activeIndex + 1
    );
  }, [activeIndex, images.length, onActiveIndexChange]);

  useEffect(() => {
    if (!open || images.length < 2) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, open, previous, images.length]);

  if (!images.length) return null;

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className={cn(
          "flex h-[96dvh] w-[calc(100vw-0.75rem)] flex-col gap-0 overflow-hidden rounded-sm border bg-[#03050a]/98 p-0 shadow-2xl sm:h-[96vh] sm:w-[98vw]",
          // DialogContent defaults include sm:max-w-lg — force full viewport width at every breakpoint.
          "!max-w-[98vw] sm:!max-w-[98vw] md:!max-w-[98vw] lg:!max-w-[98vw] xl:!max-w-[98vw] 2xl:!max-w-[98vw]",
          accentClass
        )}
      >
        <div className="flex shrink-0 flex-col items-start gap-2 border-b border-cyber-line px-3 py-3 pr-12 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-4 sm:pr-14">
          <div className="min-w-0">
            <DialogTitle
              className={cn(
                "break-words font-cyber-display text-base tracking-wide sm:text-lg",
                accentTextClass
              )}
            >
              {title}
            </DialogTitle>
            <DialogDescription className="mt-1 font-cyber-mono text-[10px] tracking-[0.18em] text-cyber-muted">
              PHOTO {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
              <span className="hidden sm:inline"> · USE ARROW KEYS TO NAVIGATE</span>
            </DialogDescription>
          </div>
          <a
            href={activeImage}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex shrink-0 items-center gap-2 font-cyber-mono text-[10px] tracking-[0.16em] text-cyber-muted transition-colors hover:opacity-100",
              accentTextClass
            )}
          >
            FULL RES
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="relative min-h-0 flex-1 bg-black/40">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeImage}
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 p-1.5 sm:p-3 md:p-6"
            >
              <div className="relative h-full w-full">
                <Image
                  src={activeImage}
                  alt={`${title} photo ${activeIndex + 1}`}
                  fill
                  unoptimized
                  priority
                  className="object-contain"
                  sizes="98vw"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={previous}
                className={cn(
                  "absolute left-1.5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border bg-black/70 backdrop-blur transition sm:left-3 md:left-5",
                  accentClass,
                  accentTextClass,
                  "hover:bg-white/5"
                )}
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={next}
                className={cn(
                  "absolute right-1.5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border bg-black/70 backdrop-blur transition sm:right-3 md:right-5",
                  accentClass,
                  accentTextClass,
                  "hover:bg-white/5"
                )}
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-cyber-line bg-cyber-elevated/80 p-3">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => onActiveIndexChange(index)}
                className={cn(
                  "relative h-14 w-20 shrink-0 overflow-hidden border transition",
                  index === activeIndex
                    ? cn(accentClass, "opacity-100")
                    : "border-cyber-line opacity-50 hover:opacity-90"
                )}
                aria-label={`View photo ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function CyberImageGallery({
  images,
  title,
  accentClass = "border-cyber-orange/50",
  accentTextClass = "text-cyber-orange",
  variant = "thumbs",
  featuredImage,
}: {
  images: string[];
  title: string;
  accentClass?: string;
  accentTextClass?: string;
  variant?: "thumbs" | "featured";
  featuredImage?: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const galleryImages = resolveGalleryImages(images, featuredImage);
  const heroImage = featuredImage ?? galleryImages[0];
  const heroIndex = Math.max(0, galleryImages.indexOf(heroImage));

  const showImage = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  if (!galleryImages.length) return null;

  const ringClass = accentTextClass.includes("cyan")
    ? "focus-visible:ring-cyber-cyan"
    : accentTextClass.includes("yellow")
      ? "focus-visible:ring-cyber-yellow"
      : accentTextClass.includes("lime")
        ? "focus-visible:ring-cyber-lime"
        : accentTextClass.includes("purple")
          ? "focus-visible:ring-cyber-purple"
          : "focus-visible:ring-cyber-orange";

  return (
    <>
      {variant === "featured" ? (
        <div className="space-y-3">
          <motion.button
            type="button"
            whileHover={reduceMotion ? undefined : { y: -2 }}
            whileTap={reduceMotion ? undefined : { scale: 0.995 }}
            onClick={() => showImage(heroIndex)}
            className={cn(
              "group relative block w-full overflow-hidden border bg-cyber-elevated text-left",
              "aspect-video focus-visible:outline-none focus-visible:ring-2",
              accentClass,
              ringClass
            )}
            aria-label={`Open ${title} gallery`}
          >
            <Image
              src={heroImage}
              alt={`${title} featured screenshot`}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
              sizes="(max-width:768px) 100vw, 50vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
              <div>
                <div className="font-cyber-mono text-[10px] tracking-[0.2em] text-white/70">
                  SCREENSHOTS
                </div>
                <div
                  className={cn(
                    "mt-1 inline-flex items-center gap-2 font-cyber-mono text-[10px] tracking-[0.1em] sm:text-xs sm:tracking-[0.16em]",
                    accentTextClass
                  )}
                >
                  <Images className="h-3.5 w-3.5" />
                  VIEW GALLERY · {galleryImages.length}
                </div>
              </div>
              <span className="hidden border border-white/20 bg-black/50 px-2 py-1 font-cyber-mono text-[10px] tracking-wider text-white/80 backdrop-blur sm:inline">
                CLICK TO EXPAND
              </span>
            </div>
          </motion.button>

          {galleryImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-1">
              {galleryImages.map((src, index) => (
                <motion.button
                  key={src}
                  type="button"
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                  whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                  onClick={() => showImage(index)}
                  className={cn(
                    "group relative h-16 w-24 shrink-0 overflow-hidden border bg-cyber-elevated",
                    "focus-visible:outline-none focus-visible:ring-2",
                    accentClass,
                    ringClass
                  )}
                  aria-label={`Open ${title} screenshot ${index + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-110"
                    sizes="96px"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-black/70 px-1 py-0.5 text-right font-cyber-mono text-[9px] tracking-wider text-white/75">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {galleryImages.map((src, index) => (
            <motion.button
              key={src}
              type="button"
              whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              onClick={() => showImage(index)}
              className={cn(
                "group relative h-24 w-24 overflow-hidden border bg-cyber-elevated",
                "focus-visible:outline-none focus-visible:ring-2",
                accentClass,
                ringClass
              )}
              aria-label={`Open ${title} photo ${index + 1} of ${galleryImages.length}`}
            >
              <Image
                src={src}
                alt={`${title} photo ${index + 1}`}
                fill
                className="object-cover transition duration-300 group-hover:scale-110 group-hover:brightness-110"
                sizes="96px"
              />
              <span className="absolute inset-x-0 bottom-0 bg-black/75 px-1.5 py-1 text-right font-cyber-mono text-[9px] tracking-wider text-white/80">
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.button>
          ))}
        </div>
      )}

      <CyberImageLightbox
        images={galleryImages}
        title={title}
        open={open}
        onOpenChange={setOpen}
        activeIndex={activeIndex}
        onActiveIndexChange={setActiveIndex}
        accentClass={accentClass}
        accentTextClass={accentTextClass}
      />
    </>
  );
}
