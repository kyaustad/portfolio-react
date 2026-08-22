import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Public-folder path as-is (never `/_next/image`). Encodes spaces in filenames. */
export function originalImageSrc(src: string) {
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  return encodeURI(src);
}
