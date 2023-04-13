export default function Time({ time }: { time: Date }) {
  const date = new Date(time);
  const timezoneOffsetInMinutes = date.getTimezoneOffset();
  const utcTimestamp = date.getTime() - timezoneOffsetInMinutes * 60 * 1000;
  const utcDate = new Date(utcTimestamp);
  const localDateTime = utcDate
    .toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    })
    .replace(",", "");
  return <span className="text-xs text-neutral-400">{localDateTime}</span>;
}
