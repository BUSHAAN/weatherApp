export const convertToTime = (
  unix_timestamp: number,
  timezone_offset: number
) => {
  const utcMillis = (unix_timestamp + timezone_offset) * 1000;

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });

  return formatter.format(new Date(utcMillis));
};
