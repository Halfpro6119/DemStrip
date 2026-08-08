export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <span className="heading text-2xl tracking-[-.09em]">DEM<span className="text-amber">STRIP</span></span>
        <span className="h-px w-24 overflow-hidden bg-white/10">
          <span className="block h-full w-full origin-left animate-[shimmer_1.1s_ease-in-out_infinite] bg-amber" />
        </span>
      </div>
      <style>{`@keyframes shimmer{0%{transform:scaleX(0)}50%{transform:scaleX(1)}100%{transform:scaleX(0);transform-origin:right}}`}</style>
    </div>
  );
}
