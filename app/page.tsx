import { Suspense } from 'react';
import NotificationList from '@/app/ui/notification/list';
import { CardListSkeleton } from '@/app/ui/skeletons';
import NotificationActions from '@/app/ui/actions';

export default async function Page() {
  return (
    <section
      aria-labelledby="heading"
      className="px-4 py-8 sm:px-[31px] sm:py-[34px] bg-white sm:rounded-[18px]"
    >
      <div className="flex items-center gap-[9px] mb-6 sm:mb-[33px]">
        <h1 id="heading" className="font-extrabold text-xl sm:text-2xl">
          Notifications
        </h1>
        <NotificationActions />
      </div>
      <Suspense fallback={<CardListSkeleton count={7} />}>
        <NotificationList />
      </Suspense>
    </section>
  );
}
