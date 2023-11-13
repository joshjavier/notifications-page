import { User } from '@/app/lib/definitions';

export default function User({ user }: { user: User }) {
  return (
    <a
      href="#"
      className="font-extrabold text-very-dark-blue hover:text-primary-blue"
    >
      {user.name}
    </a>
  );
}
