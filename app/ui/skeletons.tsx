import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function CardSkeleton() {
  return (
    <div className="flex gap-[13px] sm:gap-[19px] p-4 sm:px-[19px]">
      <Skeleton
        circle
        height="100%"
        containerClassName="w-[39px] h-[39px] sm:w-[45px] sm:h-[45px]"
      />
      <div className="flex-1 text-sm sm:text-base">
        <Skeleton count={2} />
        <Skeleton width={100} />
      </div>
    </div>
  );
}

export function CardListSkeleton({ count }: { count: number }) {
  return Array(count)
    .fill(0)
    .map((_, i) => <CardSkeleton key={i} />);
}
