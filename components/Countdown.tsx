"use client";
import { invitation } from "@/data/invitation";
import { useCountdown } from "@/hooks/useCountdown";
import { calendarHref } from "@/lib/contact";
import { clockTime, formatDate } from "@/lib/format";
import { Icon } from "./Art";
import Reveal from "./Reveal";

const CELLS = [
  { key: "days", label: "يوم", size: 3 },
  { key: "hours", label: "ساعة", size: 2 },
  { key: "minutes", label: "دقيقة", size: 2 },
  { key: "seconds", label: "ثانية", size: 2 },
] as const;

const digits = (value: number, size: number) =>
  new Intl.NumberFormat("ar-EG", { minimumIntegerDigits: size, useGrouping: false }).format(value);

export default function Countdown() {
  const left = useCountdown(invitation.date);

  const dateLine = [
    formatDate({ weekday: "long" }),
    formatDate({ day: "numeric" }),
    formatDate({ month: "long" }),
    formatDate({ year: "numeric" }),
  ].join(" ");

  return (
    <section className="section sand countdown" id="countdown">
      <Reveal>
        <p className="kicker center"><i />العد التنازلي بدأ<i /></p>
      </Reveal>

      <Reveal delay={100}>
        <p className="script big">وفاضل على فرحتنا</p>
      </Reveal>

      <Reveal delay={200}>
        <div className="counter" role="timer" aria-live="off">
          {CELLS.map(({ key, label, size }) => (
            <div key={key} className={`cell ${key}`}>
              <b key={left ? left[key] : key}>{digits(left ? left[key] : 0, size)}</b>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="when-line">
          <span>{dateLine} · {clockTime()}</span>
          <i className="sep" />
          <a href={calendarHref()} download="faraH-adam-w-layla.ics">
            <Icon name="calendar" />ضيفها على التقويم
          </a>
        </div>
      </Reveal>
    </section>
  );
}