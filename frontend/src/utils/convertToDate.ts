export const convertToDateTime = (
  unix_timestamp: number,
  timezone_offset: number
) => {
  const utcMillis = (unix_timestamp + timezone_offset) * 1000;

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });

  const dateString = formatter.format(new Date(utcMillis));

  const datecomponents = dateString.split(",");
  const date_section = datecomponents[0].trim();
  const time = datecomponents[1]
    .trim()
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(":", ".");
  const formatted_time = "" + time + ", " + date_section;

  return formatted_time;
};
