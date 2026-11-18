"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface BackgroundSlideshowProps {
  images: string[];
  intervalMs?: number;
  overlayClassName?: string;
}

export function BackgroundSlideshow({
  images,
  intervalMs = 6000,
  overlayClassName = "bg-neutral-950/80 dark:bg-black/85 backdrop-blur-[2px]",
}: BackgroundSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Usamos img para máxima compatibilidad con URLs externas e internas */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover scale-105 motion-safe:animate-pulse-slow"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Capa de contraste para asegurar 100% de legibilidad de los textos */}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
