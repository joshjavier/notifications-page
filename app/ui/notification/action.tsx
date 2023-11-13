import { Item } from '@/app/lib/definitions';

export default function Action({ type, item }: { type: string; item?: Item }) {
  let content;
  if (!item) {
    content = 'followed you';
  } else {
    switch (type) {
      case 'reaction':
        content = `reacted to your ${item.recent ? 'recent ' : ''}${item.type}`;
        break;

      case 'join':
        content = 'has joined your group';
        break;

      case 'message':
        content = 'sent you a private message';
        break;

      case 'comment':
        content = `commented on your ${item.recent ? 'recent ' : ''}${
          item.type
        }`;
        break;

      case 'left':
        content = 'left the group';
        break;
    }
  }

  return <span>{content}</span>;
}
