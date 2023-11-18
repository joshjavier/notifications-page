import { Notification } from '@/app/lib/definitions';
import clsx from 'clsx';
import Image from 'next/image';
import User from './user';
import Action from './action';
import Item from './item';
import UnreadIndicator from './unread-indicator';
import Thumbnail from './thumbnail';
import Message from './message';

export default function Card({ notification }: { notification: Notification }) {
  return (
    <div
      className={clsx(
        'card flex items-start p-4 sm:px-[19px] rounded-[10px] gap-[13px] sm:gap-[19px]',
        {
          'bg-very-light-grayish-blue': !notification.read,
        },
      )}
    >
      <Image
        src={notification.from.avatar}
        alt=""
        width={39}
        height={39}
        className="sm:w-[45px] overflow-hidden flex-shrink-0"
      />
      <div
        className={clsx('text-sm sm:text-base text-dark-grayish-blue grow', {
          'flex items-start gap-[13px] justify-between':
            notification.item?.type === 'picture',
        })}
      >
        <div>
          <p className="space-x-1.5">
            <User user={notification.from} />
            <Action type={notification.type} item={notification.item} />
            {notification.item && <Item item={notification.item} />}
            {!notification.read && <UnreadIndicator />}
          </p>
          <time className="text-grayish-blue">{notification.time}</time>
        </div>

        {notification.item?.type === 'picture' && (
          <Thumbnail item={notification.item} />
        )}

        {notification.item?.type === 'message' && (
          <Message content={notification.item.body} />
        )}
      </div>
    </div>
  );
}
