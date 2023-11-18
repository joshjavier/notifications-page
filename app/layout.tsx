import type { Metadata } from 'next';
import './globals.css';
import { plusJakartaSans } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Frontend Mentor | Notifications page',
  description:
    'A simple notifications page built with Next.js by Josh Javier, a frontend developer from Manila.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} bg-very-light-grayish-blue text-very-dark-blue min-h-screen sm:grid sm:place-items-center`}
      >
        <main className="mx-auto max-w-[730px] w-full sm:p-4">{children}</main>
        <footer hidden>
          <p>
            Challenge by{' '}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{' '}
            <a href="https://joshjavier.com/" rel="author">
              Josh Javier
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
