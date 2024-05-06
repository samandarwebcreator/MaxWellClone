import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  const numberOfCards = 12;

  const cardNumbers = Array.from(
    { length: numberOfCards },
    (_, index) => index + 1
  );

  return (
    <div className="w-full flex items-center justify-between flex-wrap lg:gap-5 gap-y-10 -z-50">
      {cardNumbers.map((cardNumber) => (
        <div key={cardNumber} className="flex flex-col space-y-3">
          <Skeleton className="h-[225px] lg:h-[175px] w-[165px] md:w-[200px] lg:w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[160px] lg:w-[250px]" />
            <Skeleton className="h-4 w-[100px] lg:w-[200px]" />
          </div>

          <div className="flex items-center justify-between gap-5 w-full">
            <Skeleton className="hidden lg:block h-4 w-[120px]  " />
            <Skeleton className="h-10 w-full lg:w-[120px] rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
