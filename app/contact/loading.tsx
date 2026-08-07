export default function Loading() {
  return (
    <div className="pt-20">
      <div className="h-[50vh] animate-pulse bg-white/5" />
      <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div className="space-y-4">
            <div className="h-4 w-24 animate-pulse bg-white/10" />
            <div className="h-12 w-2/3 animate-pulse bg-white/10" />
            <div className="h-6 w-full animate-pulse bg-white/5" />
          </div>
          <div className="h-[400px] animate-pulse border border-white/10 bg-white/5" />
        </div>
      </div>
    </div>
  );
}
