import { Skeleton } from "@/components/ui/skeleton";

export function BasketSkleton() {
  return (
    <div className="">
      <Skeleton className="h-[45px]  w-[80px] rounded-xl mb-5" />

      <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0">
        <div className="flex flex-col w-full lg:w-2/3 gap-1 md:gap-2 lg:gap-3">
          <Skeleton className="h-[95px] lg:h-[105px] w-full lg:w-[810px] rounded-xl" />
          <Skeleton className="h-[95px] lg:h-[105px] w-full lg:w-[810px] rounded-xl" />
          <Skeleton className="h-[95px] lg:h-[105px] w-full lg:w-[810px] rounded-xl" />
          <Skeleton className="h-[95px] lg:h-[105px] w-full lg:w-[810px] rounded-xl" />
        </div>
        <div className="w-full lg:w-1/3">
          <Skeleton className="h-[300px] w-full lg:w-[400px] rounded-xl " />
        </div>
      </div>
    </div>
  );
}
