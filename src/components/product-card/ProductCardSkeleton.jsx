const ProductCardSkeleton = () => {
  return (
    <div
      className="relative flex flex-col items-center gap-1
                 h-[390px] w-[240px] shrink-0
                 rounded-3xl bg-white border border-gray-300/30
                 overflow-hidden"
    >
      {/* image skeleton */}
      <div className="h-[320px] w-[240px] bg-gray-300 animate-pulse relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
      </div>

      {/* footer skeleton */}
      <div className="flex flex-col gap-2 px-4 w-full mt-2">
        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse self-end" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
