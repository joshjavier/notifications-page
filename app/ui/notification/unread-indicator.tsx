export default function UnreadIndicator() {
  return (
    <svg
      viewBox="0 0 8 8"
      width={8}
      fill="currentColor"
      className="inline text-primary-red relative bottom-[1.5px]"
      aria-label="Unread"
    >
      <circle cx={4} cy={4} r={4} />
    </svg>
  );
}
