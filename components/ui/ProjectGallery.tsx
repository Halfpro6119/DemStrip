'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize, Loader as Loader2 } from 'lucide-react';

interface ProjectGalleryProps {
  images: string[];
  gridClassName?: string;
}

const ZOOM_LEVELS = [1, 1.5];

export function ProjectGallery({ images, gridClassName }: ProjectGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [zoomIndex, setZoomIndex] = useState(0);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const zoom = ZOOM_LEVELS[zoomIndex];

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() => {
    setSelected(i => (i === null || i === 0 ? images.length - 1 : i - 1));
    setZoomIndex(0);
  }, [images.length]);
  const next = useCallback(() => {
    setSelected(i => (i === null ? 0 : (i + 1) % images.length));
    setZoomIndex(0);
  }, [images.length]);

  const zoomIn = useCallback(() => setZoomIndex(i => Math.min(i + 1, ZOOM_LEVELS.length - 1)), []);
  const zoomOut = useCallback(() => setZoomIndex(i => Math.max(i - 1, 0)), []);

  // Preload adjacent images for instant navigation
  useEffect(() => {
    if (selected === null) return;
    const indices = [selected, (selected + 1) % images.length, (selected - 1 + images.length) % images.length];
    indices.forEach(i => {
      if (!loaded.has(i)) {
        const img = new window.Image();
        img.src = images[i];
        img.onload = () => setLoaded(prev => new Set(prev).add(i));
      }
    });
  }, [selected, images, loaded]);

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === '+' || e.key === '=') zoomIn();
      else if (e.key === '-' || e.key === '_') zoomOut();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selected, close, prev, next, zoomIn, zoomOut]);

  // Lock scroll while the lightbox is open. Using overflow:hidden (not the
  // fixed-position trick) keeps the page scrolled in place naturally, so
  // closing the lightbox doesn't teleport or jump — the exit animation
  // just fades out over the page exactly where it already was.
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.documentElement.style.overflow;
    const prevPaddingRight = document.documentElement.style.paddingRight;

    document.documentElement.style.overflow = 'hidden';
    if (scrollbarWidth > 0) document.documentElement.style.paddingRight = `${scrollbarWidth}px`;

    closeBtnRef.current?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const container = containerRef.current;
      if (!container) return;
      const focusable = container.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', trap);
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      document.documentElement.style.paddingRight = prevPaddingRight;
      window.removeEventListener('keydown', trap);
    };
  }, [isOpen]);

  const onImageClick = () => {
    setZoomIndex(index => index === 0 ? 1 : 0);
  };

  const grid = gridClassName ?? 'grid grid-cols-2 gap-3 lg:grid-cols-4';

  return (
    <>
      <div className={grid}>
        {images.map((src, index) => (
          <motion.button
            key={src}
            onClick={() => setSelected(index)}
            aria-label={`View image ${index + 1}`}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden border border-white/10 transition-colors duration-300 hover:border-amber/50 hover:shadow-[0_0_24px_-4px_rgba(245,158,11,0.4)] focus-ring"
          >
            <Image
              src={src}
              alt={`DemStrip project photograph ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
            <span className="absolute inset-0 animate-pulse bg-white/5 [img-loaded_~_&]:hidden" />
            <span className="absolute inset-0 flex items-center justify-center bg-coal/0 transition-colors duration-300 group-hover:bg-coal/35">
              <span className="flex items-center gap-2 text-[10px] font-bold tracking-[.2em] uppercase text-white/90 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <Maximize size={14} /> View
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox — rendered via portal on document.body so it escapes any
          ancestor stacking context (e.g. section { isolation: isolate }) and
          always sits above the navbar and every other element. */}
      {mounted && createPortal(
        <AnimatePresence>
          {selected !== null && (
            <motion.div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 overscroll-contain sm:p-6"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              ref={containerRef}
              className="relative flex h-[min(78vh,720px)] w-full max-w-[1080px] items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[#171a1d] p-3 shadow-2xl shadow-black/50 sm:p-5"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected}
                  className="relative h-full w-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <button
                    type="button"
                    className="relative h-full w-full overflow-hidden rounded-xl bg-black/20 focus-ring"
                    onClick={e => { e.stopPropagation(); onImageClick(); }}
                    aria-label={zoom === 1 ? 'Zoom image in' : 'Zoom image out'}
                    style={{ cursor: zoom === 1 ? 'zoom-in' : 'zoom-out' }}
                  >
                    <Image
                      src={images[selected]}
                      alt={`DemStrip project photograph ${selected + 1}`}
                      fill
                      sizes="(max-width: 1080px) 92vw, 1080px"
                      quality={92}
                      className="select-none object-contain transition-transform duration-300 ease-out"
                      style={{ transform: `scale(${zoom})` }}
                      priority
                    />
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* Loading spinner */}
              {!loaded.has(selected) && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <Loader2 className="animate-spin text-white/40" size={32} />
                </div>
              )}

              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold tracking-[.2em] uppercase text-white/50">
                {selected + 1} / {images.length} · {zoom}x
              </p>

              {images.length > 1 && (
                <>
                  <button
                    onClick={e => { e.stopPropagation(); prev(); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2.5 text-white/60 backdrop-blur-sm transition hover:border-amber/40 hover:text-amber focus-ring sm:left-4"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); next(); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/40 p-2.5 text-white/60 backdrop-blur-sm transition hover:border-amber/40 hover:text-amber focus-ring sm:right-4"
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            <div className="pointer-events-none absolute inset-0 flex flex-col items-stretch justify-between p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="pointer-events-auto flex gap-2">
                  <button
                    onClick={e => { e.stopPropagation(); zoomOut(); }}
                    disabled={zoomIndex === 0}
                    className="rounded-full border border-white/10 bg-black/40 p-2.5 text-white/60 backdrop-blur-sm transition hover:border-amber/40 hover:text-amber focus-ring disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Zoom out"
                  >
                    <ZoomOut size={20} />
                  </button>
                  <button
                    onClick={e => { e.stopPropagation(); zoomIn(); }}
                    disabled={zoomIndex === ZOOM_LEVELS.length - 1}
                    className="rounded-full border border-white/10 bg-black/40 p-2.5 text-white/60 backdrop-blur-sm transition hover:border-amber/40 hover:text-amber focus-ring disabled:cursor-not-allowed disabled:opacity-30"
                    aria-label="Zoom in"
                  >
                    <ZoomIn size={20} />
                  </button>
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={close}
                  className="pointer-events-auto rounded-full border border-white/10 bg-black/40 p-2.5 text-white/60 backdrop-blur-sm transition hover:border-amber/40 hover:text-amber focus-ring"
                  aria-label="Close image viewer"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="flex-1" />
            </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
