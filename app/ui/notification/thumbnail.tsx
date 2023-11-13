import { Item } from '@/app/lib/definitions';
import Image from 'next/image';

export default function Thumbnail({ item }: { item: Item }) {
  return (
    <Image
      src={item.body}
      alt=""
      width={39}
      height={39}
      className="sm:w-[45px]"
    />
  );
}
