import { invitation } from "@/data/invitation";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${invitation.whatsapp.phone}?text=${encodeURIComponent(message)}`;

const stamp = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

export const calendarHref = () => {
  const start = new Date(invitation.date);
  const end = new Date(start.getTime() + 4 * 60 * 60 * 1000);
  const { couple, venue } = invitation;
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:فرح ${couple.groom} و${couple.bride}`,
    `LOCATION:${venue.name}، ${venue.area}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
};