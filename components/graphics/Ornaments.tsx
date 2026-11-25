import Image from "next/image";

type Letters = readonly [string, string];
type Asset = { readonly src: string; readonly width: number; readonly height: number };

const SPRAY: Asset = { src: "/art/spray.svg", width: 200, height: 200 };
const GARLAND: Asset = { src: "/art/garland.svg", width: 320, height: 90 };

const Sprite = ({ asset, className }: { asset: Asset; className: string }) => (
  <Image {...asset} className={className} alt="" aria-hidden unoptimized loading="eager" draggable={false} />
);

const SEAL_POINTS = 120;

const SEAL_EDGE = (() => {
  const points = Array.from({ length: SEAL_POINTS }, (_, i) => {
    const t = (i / SEAL_POINTS) * 2 * Math.PI;
    const r = 44 + 2.2 * Math.sin(5 * t + 0.6) + 1.4 * Math.sin(9 * t + 2) + 0.9 * Math.sin(17 * t);
    return `${(50 + r * Math.cos(t)).toFixed(1)} ${(50 + r * Math.sin(t)).toFixed(1)}`;
  });
  return `M${points.join("L")}Z`;
})();

export function ArtDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <radialGradient id="wax" cx=".35" cy=".3" r=".85">
          <stop offset="0" stopColor="#8E4D3C" />
          <stop offset=".6" stopColor="#6B3A2E" />
          <stop offset="1" stopColor="#4A261D" />
        </radialGradient>
        <symbol id="sprig" viewBox="0 0 60 80">
          <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M30 78C28 56 27 34 35 6" />
            <path d="M29 62c-9-1-14-7-14-14 9 0 14 6 14 14zM28 48c-8-2-12-8-11-15 8 1 13 7 11 15zM30 34c-7-3-9-9-7-15 7 2 10 8 7 15z" />
            <path d="M30 56c8-1 13-6 14-13-8 0-14 5-14 13zM31 42c7-2 11-7 11-13-7 1-12 5-11 13zM33 28c6-3 8-8 7-13-6 2-9 6-7 13z" />
          </g>
        </symbol>
      </defs>
    </svg>
  );
}

export const Flora = () => (
  <>
    <Sprite asset={SPRAY} className="flora tr" />
    <Sprite asset={SPRAY} className="flora tl" />
    <Sprite asset={GARLAND} className="flora bottom" />
  </>
);

export const EnvFlora = () => (
  <>
    <Sprite asset={SPRAY} className="env-flora bl" />
    <Sprite asset={SPRAY} className="env-flora br" />
  </>
);

export function WaxSeal({ letters }: { letters: Letters }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden>
      <path d={SEAL_EDGE} fill="url(#wax)" />
      <circle cx="50" cy="50" r="31" fill="none" stroke="#3E1D15" strokeOpacity=".55" strokeWidth="2.2" />
      <circle cx="50" cy="50" r="31" fill="none" stroke="#E7BE9A" strokeOpacity=".3" strokeWidth=".8" transform="translate(.8 .8)" />
      <g fill="#E3C19A" fontSize="21" textAnchor="middle" style={{ fontFamily: "var(--font-display)" }}>
        <text x="63" y="58">{letters[0]}</text>
        <text x="37" y="58">{letters[1]}</text>
      </g>
      <path d="M50 45l3 5-3 5-3-5z" fill="#E3C19A" />
      <ellipse cx="34" cy="27" rx="13" ry="6" fill="#fff" opacity=".13" transform="rotate(-32 34 27)" />
    </svg>
  );
}

export const Ornament = () => (
  <div className="orn" aria-hidden>
    <i />
    <b />
    <i />
  </div>
);

export const Monogram = ({ letters }: { letters: Letters }) => (
  <span className="mono">
    <span>{letters[0]}</span>
    <i />
    <span>{letters[1]}</span>
  </span>
);

const CORNERS = ["tl", "tr", "bl", "br"] as const;

export const Frame = () => (
  <>
    {CORNERS.map((corner) => (
      <span key={corner} className={`gem ${corner}`} />
    ))}
  </>
);
