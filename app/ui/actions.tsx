'use client';

import { useEffect, useState } from 'react';
import UnreadCount from '@/app/ui/unread-count';
import MarkAllAsReadButton from '@/app/ui/mark-all-as-read';

export default function NotificationActions() {
  const [count, setCount] = useState(3);
  const [readAll, setReadAll] = useState(false);

  useEffect(() => {
    const unread = document.querySelectorAll(
      '.card.bg-very-light-grayish-blue',
    );

    if (unread.length && readAll) {
      unread.forEach((card) => {
        card.classList.remove('bg-very-light-grayish-blue');
        card.querySelector('.unread-indicator')?.classList.add('hidden');
      });

      setCount(0);
    }
  }, [readAll]);

  return (
    <>
      {count !== 0 && <UnreadCount count={count} />}
      {!readAll && <MarkAllAsReadButton callback={() => setReadAll(true)} />}
    </>
  );
}
