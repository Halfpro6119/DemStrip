'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  /** When true, the first image spans two rows (used on the home page hero gallery) */
  masonry?: boolean;
  /** Tailwind grid class overrides – defaults to a 2-col / 4-col responsive grid */
  gridClassName?: string;
}

export function ProjectGallery({ images, masonry = false, gridClassName }: ProjectGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() => setSelected(i => (i === null || i === 0 ? images.length - 1 : i - 1)), [images.length]);
  const next = useCallback(() => setSelected(i => (i === null ? 0 : (i + 1) % images.length)), [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selected, close, prev, next]);

  // Prevent body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  const grid = gridClassName ?? 'grid grid-cols-2 gap-3 lg:grid-cols-4';

  return (
    <>
      <div className={grid}>
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelected(index)}
            aria-label={`View image ${index + 1}`}
            className={`group relative overflow-hidden border border-white/10 cursor-zoom-in focus-ring ${
              masonry && index === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
            }`}
          >
            <Image
              src={src}
              alt={`DemStrip project photograph ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay hint */}
            <span className="absolute inset-0 bg-coal/0 transition duration-300 group-hover:bg-coal/20 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition duration-300 text-[10px] font-bold tracking-[.2em] uppercase text-white/80">
                View
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-coal/95 backdrop-blur-md"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Image container – stop propagation so clicking the image itself doesn't close */}
          <div
            className="relative max-h-[90vh] max-w-[90vw] w-full h-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-h-[80vh]">
              <Image
                src={images[selected]}
                alt={`DemStrip project photograph ${selected + 1}`}
                fill
                sizes="90vw"
                quality={92}
                className="object-contain select-none"
                priority
              />
            </div>
          </div>

          {/* Counter */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[.2em] uppercase text-white/50">
            {selected + 1} / {images.length}
          </p>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-5 right-5 p-2 text-white/60 hover:text-amber transition focus-ring"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-amber transition focus-ring border border-white/10 hover:border-amber/40 bg-coal/60 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-amber transition focus-ring border border-white/10 hover:border-amber/40 bg-coal/60 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      )}
    </>
  );
}
