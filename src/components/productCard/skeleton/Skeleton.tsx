import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  const numberOfCards = 12;

  const cardNumbers = Array.from(
    { length: numberOfCards },
    (_, index) => index + 1
  );

  return (
    <div className="lg:mt-14">
      <Skeleton className="h-[25px] lg:h-[45px] w-[200px] md:w-[250px] lg:w-[300px] mb-6 rounded-xl" />

      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-6 md:justify-between flex-wrap lg:gap-16 gap-y-10 -z-50">
        {cardNumbers.map((cardNumber) => (
          <div key={cardNumber} className="flex flex-col space-y-3 ">
            <Skeleton className="h-[225px] lg:h-[175px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[160px] md:w-[200px] lg:w-[250px]" />
              <Skeleton className="h-4 w-[100px] md:w-[150px] lg:w-[200px]" />
            </div>

            <div className="flex items-center justify-between gap-5 w-full">
              <Skeleton className="hidden lg:block h-4 w-[120px]  " />
              <Skeleton className="h-10 w-full lg:w-[120px] rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
