'use client';

import { useRef } from 'react';

export default function Message({ content }: { content: string }) {
  const link = useRef<HTMLAnchorElement>(null);

  let down: number, up: number;

  return (
    <div
      className="relative mt-[11px] p-4 border border-light-grayish-blue-2 rounded-[5px] hover:bg-light-grayish-blue-1 cursor-pointer focus-within:ring"
      onMouseDown={() => (down = +new Date())}
      onMouseUp={() => {
        up = +new Date();
        if (up - down < 200) {
          link.current?.click();
        }
      }}
    >
      <p className="line-clamp-5">{content}</p>
      <a href="#" className="sr-only" ref={link}>
        Read more
      </a>
    </div>
  );
}
