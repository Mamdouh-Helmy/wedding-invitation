"use client";
import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { invitation } from "@/data/invitation";
import { shortDate } from "@/lib/format";
import { EnvFlora, Icon, Monogram, WaxSeal } from "./Art";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import DetailsCard from "./DetailsCard";
import LightBranches from "./LightBranches";

export type Phase = "closed" | "opening" | "open";

type Petal = { id: number; alt: boolean; style: CSSProperties };
type Burst = { key: number; petals: Petal[] };

const MOBILE_QUERY = "(max-width: 899px)";
const PETALS = { mobile: 14, desktop: 28 } as const;
const FALLBACK_CARD_WIDTH = 300;
const FLIP_MS = 1100;
const BURST_MS = 4200;
const DETAILS_SCROLL_DELAY_MS = 700;

const toPx = (ratio: number, base: number) => `${Math.round(ratio * base)}px`;

const makePetals = (count: number, base: number): Petal[] =>
  Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.5;
    const dist = 0.55 + Math.random() * 0.6;
    return {
      id: i,
      alt: i % 3 === 0,
      style: {
        "--mx": toPx(Math.cos(angle) * dist * 0.7, base),
        "--my": toPx(Math.sin(angle) * dist * 0.7 - 0.15, base),
        "--dx": toPx(Math.cos(angle) * dist * 1.1 + (Math.random() - 0.5) * 0.3, base),
        "--dy": toPx(Math.sin(angle) * dist * 0.5 + 0.9 + Math.random() * 0.5, base),
        "--r": `${Math.round((Math.random() - 0.5) * 900)}deg`,
        "--s": `${10 + Math.random() * 10}px`,
        "--d": `${(Math.random() * 0.25).toFixed(2)}s`,
        "--t": `${(1.9 + Math.random() * 1.2).toFixed(2)}s`,
      } as CSSProperties,
    };
  });

export default function Stage({ phase, onOpen }: { phase: Phase; onOpen: () => void }) {
  const [turned, setTurned] = useState(false);
  const [busy, setBusy] = useState(false);
  const [burst, setBurst] = useState<Burst | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const slotRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const flipTimer = useRef<number | undefined>(undefined);
  const { letters, groom, bride } = invitation.couple;

  const flipCard = () => {
    if (phase !== "open" || busy) return;
    const base = slotRef.current?.offsetWidth ?? FALLBACK_CARD_WIDTH;
    const count = window.matchMedia(MOBILE_QUERY).matches ? PETALS.mobile : PETALS.desktop;
    setBusy(true);
    setTurned((value) => !value);
    setBurst({ key: Date.now(), petals: makePetals(count, base) });
    flipTimer.current = window.setTimeout(() => setBusy(false), FLIP_MS);
  };

  const onCardKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    flipCard();
  };

  useEffect(() => () => window.clearTimeout(flipTimer.current), []);

  useEffect(() => {
    if (!burst) return;
    const id = window.setTimeout(() => setBurst(null), BURST_MS);
    return () => window.clearTimeout(id);
  }, [burst]);

  useEffect(() => {
    if (!detailsOpen || !window.matchMedia(MOBILE_QUERY).matches) return;
    const id = window.setTimeout(
      () => detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
      DETAILS_SCROLL_DELAY_MS,
    );
    return () => window.clearTimeout(id);
  }, [detailsOpen]);

  return (
    <section className={`invite ${phase}`} id="invitation">
      <header className="masthead">
        <span>دعوة</span>
        <em>العدد {shortDate(" · ")}</em>
        <span>من قلب القاهرة</span>
      </header>

      <div className="invite-body">
        <div className="invite-heading">
          <p className="kicker"><i />عزومة خاصة<i /></p>
          <p className="script">شرفونا إنتو وأحبابكم</p>
        </div>

        <div className={`deck ${detailsOpen ? "with-details" : ""}`}>
          <div className="slot" ref={slotRef}>
            <div className="card-scale">
              <div
                className={`card3d ${turned ? "turned" : ""} ${busy ? "lifting" : ""}`}
                role="button"
                tabIndex={phase === "open" ? 0 : -1}
                aria-label="اقلب كارت الدعوة"
                aria-pressed={turned}
                onClick={flipCard}
                onKeyDown={onCardKey}
              >
                <div className="flip">
                  <CardFront />
                  <CardBack />
                </div>
              </div>
            </div>

            <div className="env">
              <div className="env-back" />
              <div className="env-front">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                  <path d="M0 100L50 57L100 100" />
                  <path className="gold" d="M3 96V9L50 61L97 9V96Z" />
                </svg>
                <EnvFlora />
              </div>
              <div className="env-flap"><i className="face-out" /><i className="face-in" /></div>
              <span className="emboss"><Monogram letters={letters} /></span>
              <span className="env-names" aria-hidden>
                <small>دعوة فرح</small>
                <b>{groom} <em>و</em> {bride}</b>
              </span>
              <button className="seal" onClick={onOpen} aria-label="افتح الدعوة" tabIndex={phase === "closed" ? 0 : -1}>
                <WaxSeal letters={letters} />
              </button>
            </div>

            {burst && (
              <div className="fx" key={burst.key} aria-hidden>
                <i className="halo" />
                <i className="glint" />
                {burst.petals.map((petal) => (
                  <i key={petal.id} className={`petal ${petal.alt ? "alt" : ""}`} style={petal.style} />
                ))}
              </div>
            )}
          </div>
          <div className="details-wrap" ref={detailsRef}><DetailsCard /></div>
        </div>

        <div className="invite-foot">
          <div className="hint">
            <p className="kicker"><i />افتح دعوتك<i /></p>
            <p className="small">دوس على الختم عشان تبدأ</p>
          </div>
          <div className="controls">
            <p className="tap-hint">دوس على الكارت وشوف الحلاوة</p>
            <div className="buttons">
              <button className="btn outline" onClick={flipCard}>
                <Icon name="flip" />{turned ? "ارجع للوش" : "اقلب الكارت"}
              </button>
              <button className="btn dark" onClick={() => setDetailsOpen((value) => !value)} aria-expanded={detailsOpen}>
                <Icon name="clock" />{detailsOpen ? "اقفل التفاصيل" : "التفاصيل"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {phase === "open" && <LightBranches />}
    </section>
  );
}