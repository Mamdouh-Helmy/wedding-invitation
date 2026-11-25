const ICONS = {
  whatsapp: "M4 20l1.2-4.1A8 8 0 1 1 8 18.9L4 20zM9.2 8.6c.4 2.3 2.5 4.6 5 5.2l1.1-1.3-1.8-.9-.8.7c-.9-.4-1.7-1.2-2.1-2.1l.7-.8-.9-1.8z",
  music: "M9 18V6l10-2v12M9 18a2.5 2.5 0 1 1-2.5-2.5A2.5 2.5 0 0 1 9 18zm10-2a2.5 2.5 0 1 1-2.5-2.5A2.5 2.5 0 0 1 19 16z",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  pin: "M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  arrow: "M20 12H4m6-6-6 6 6 6",
  external: "M14 4h6v6M20 4l-9 9M18 14v6H4V6h6",
  flip: "M4 12a8 8 0 0 1 14-5l2 2M20 4v5h-5M20 12a8 8 0 0 1-14 5l-2-2M4 20v-5h5",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2",
  ring: "M9 4h6l2 3-5 3-5-3zM12 21a6 6 0 1 0 0-12 6 6 0 0 0 0 12z",
  glasses: "M7 4h4l-.5 6a2.5 2.5 0 0 1-5 0L7 4zM14 6h4l-.5 4a2.5 2.5 0 0 1-5 0zM8.5 13v6M15.5 11v8M6 19h5M13 19h5",
} as const;

export type IconName = keyof typeof ICONS;

export const Icon = ({ name }: { name: IconName }) => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden>
    <path d={ICONS[name]} />
  </svg>
);
