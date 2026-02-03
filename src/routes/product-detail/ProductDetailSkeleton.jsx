const ProductDetailSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">

        {/* image skeleton */}
<div className="w-full md:w-[360px] h-[420px] rounded-3xl overflow-hidden border border-gray-300/30 flex flex-col">

  {/* main image skeleton */}
  <div className="flex-1 bg-gray-200 animate-pulse relative">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
  </div>

  {/* thumbnails skeleton */}
  <div className="h-20 flex items-center justify-center gap-2 px-4">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="w-14 h-14 rounded-lg bg-gray-200 animate-pulse"
      />
    ))}
  </div>

</div>

        {/* content skeleton */}
        <div className="flex flex-col flex-1 gap-4">
          <div className="h-6 w-2/3 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-1/4 bg-gray-200 rounded animate-pulse" />

          <div className="mt-4 space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="mt-6 h-10 w-40 bg-gray-300 rounded-xl animate-pulse" />
        </div>

      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
