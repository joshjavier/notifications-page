export default function MarkAllAsReadButton({
  callback,
}: {
  callback: () => void;
}) {
  return (
    <button
      onClick={callback}
      className="text-dark-grayish-blue text-sm sm:text-base ml-auto hover:text-primary-blue"
    >
      Mark all as read
    </button>
  );
}
