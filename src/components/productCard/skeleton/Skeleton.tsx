import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  const numberOfCards = 12;

  const cardNumbers = Array.from(
    { length: numberOfCards },
    (_, index) => index + 1
  );

  return (
    <div className="w-full flex items-center justify-between flex-wrap lg:gap-5 gap-y-8">
      {cardNumbers.map((cardNumber) => (
        <div key={cardNumber} className="flex flex-col space-y-3">
          <Skeleton className="h-[225px] lg:h-[125px] w-[165px] lg:w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[160px] lg:w-[250px]" />
            <Skeleton className="h-4 w-[100px] lg:w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
