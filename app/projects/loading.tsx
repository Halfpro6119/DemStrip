export default function Loading() {
  return (
    <div className="pt-20">
      <div className="h-[50vh] animate-pulse bg-white/5" />
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="h-[360px] animate-pulse border border-white/10 bg-white/5" />
          ))}
        </div>
      </div>
    </div>
  );
}
