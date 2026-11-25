import { invitation } from "@/data/invitation";

const eventDate = new Date(invitation.date);

export const formatDate = (options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("ar-EG", { timeZone: "Africa/Cairo", ...options }).format(eventDate);

export const shortDate = (separator: string, year: "numeric" | "2-digit" = "numeric") =>
  [formatDate({ day: "2-digit" }), formatDate({ month: "2-digit" }), formatDate({ year })].join(separator);

export const clockTime = () => formatDate({ hour: "numeric", minute: "2-digit", hour12: true });
