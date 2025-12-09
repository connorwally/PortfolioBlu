import { useRef } from "react";

import { useEffect } from "react";

import bg1 from "@/assets/background/1.png";
import bg2 from "@/assets/background/2.png";
import bg3 from "@/assets/background/3.png";
import bg4 from "@/assets/background/4.png";
import bg5 from "@/assets/background/5.png";
import bg6 from "@/assets/background/6.png";

export type ParallaxLayerProps = {
  className: string;
  image: string;
  speed: number; // pixels per second
};

export function ParallaxLayer({ className, image, speed }: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const tileWidthRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;

      const el = layerRef.current;
      const parentRect = el?.parentElement?.getBoundingClientRect();

      const targetWidth = parentRect?.width || window.innerWidth || 1;
      const targetHeight = parentRect?.height || window.innerHeight || 1;

      // Scale so the layer covers the viewport/container in both
      // dimensions without over-zooming beyond what's needed.
      // Use a floating-point scale (no integer snapping) so 4K and 1080p
      // both get a "just big enough" image without large jumps.
      const scaleForHeight = targetHeight / img.naturalHeight;
      const scaleForWidth = targetWidth / img.naturalWidth;
      const minScale = Math.max(scaleForHeight, scaleForWidth);

      const tileWidth = img.naturalWidth * minScale;
      const scaledHeight = img.naturalHeight * minScale;

      tileWidthRef.current = tileWidth;

      if (el) {
        el.style.backgroundSize = `${tileWidth}px ${scaledHeight}px`;
        // Align bottom of the image with the bottom of the container
        const offsetY = targetHeight - scaledHeight;
        el.style.backgroundPositionY = `${offsetY}px`;
      }
    };

    let frameId: number;

    const step = (time: number) => {
      if (lastTimeRef.current == null) {
        lastTimeRef.current = time;
      }
      const deltaSeconds = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      offsetRef.current -= speed * deltaSeconds;

      const tileWidth = tileWidthRef.current;
      if (tileWidth && offsetRef.current <= -tileWidth) {
        offsetRef.current += tileWidth;
      }

      const el = layerRef.current;
      if (el) {
        const snappedX = Math.round(offsetRef.current);
        el.style.backgroundPositionX = `${snappedX}px`;
      }

      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [image, speed]);

  return (
    <div
      ref={layerRef}
      className={className}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "repeat-x",
      }}
    />
  );
}

export const layers = [
  { className: "bg-1", image: bg1, speed: 0 },
  { className: "bg-2", image: bg2, speed: 0 },
  { className: "bg-3", image: bg3, speed: 5 },
  { className: "bg-4", image: bg4, speed: 10 },
  { className: "bg-5", image: bg5, speed: 15 },
  { className: "bg-6", image: bg6, speed: 20 },
] satisfies ParallaxLayerProps[];
