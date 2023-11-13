'use client';

import { useEffect, useState } from 'react';
import UnreadCount from '@/app/ui/unread-count';
import Card from '@/app/ui/notification/card';
import { Notification } from './lib/definitions';

export default function Page() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const count = notifications.filter(({ read }) => !read).length;

  const handleMarkAllAsRead = () => {
    setNotifications((notifications) => {
      return notifications.map((notification) => {
        return notification.read
          ? notification
          : {
              ...notification,
              read: true,
            };
      });
    });
  };

  useEffect(() => {
    fetch('http://localhost:3000/notifications')
      .then((response) => response.json())
      .then((data) => setNotifications(data));
  }, []);

  return (
    <section
      aria-labelledby="heading"
      className="px-4 py-8 sm:px-[31px] sm:py-[34px] bg-white sm:rounded-[18px]"
    >
      <div className="flex items-center gap-[9px]">
        <h1 id="heading" className="font-extrabold text-xl sm:text-2xl">
          Notifications
        </h1>
        {count !== 0 && <UnreadCount count={count} />}
        <button
          onClick={handleMarkAllAsRead}
          className="text-dark-grayish-blue text-sm sm:text-base ml-auto hover:text-primary-blue"
        >
          Mark all as read
        </button>
      </div>
      <ul className="mt-6 sm:mt-[33px] space-y-[11px]">
        {notifications.map((notification) => (
          <li key={`${notification.from.name}${notification.time}`}>
            <Card notification={notification} />
          </li>
        ))}
      </ul>
    </section>
  );
}
