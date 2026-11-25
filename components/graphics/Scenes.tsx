const PALMS = [
  { x: 90, h: 520 },
  { x: 250, h: 430 },
  { x: 430, h: 340 },
  { x: 940, h: 480 },
  { x: 1100, h: 570 },
];
const FRONDS = [200, 230, 260, 290, 320, 350, 20, 150];
const LAMPS = [[300, 560], [380, 590], [470, 575], [700, 585], [790, 565], [880, 590], [990, 570], [200, 585]];
const WINDOWS = [572, 592, 612];

export function NightScene({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="nightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1B1814" />
          <stop offset=".6" stopColor="#3A2E24" />
          <stop offset="1" stopColor="#7A5A3A" />
        </linearGradient>
        <radialGradient id="lampGlow">
          <stop offset="0" stopColor="#FFD9A0" stopOpacity=".85" />
          <stop offset="1" stopColor="#FFD9A0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#nightSky)" />
      <path d="M540 520V430C540 390 570 365 600 350C630 365 660 390 660 430V520zM596 350v-26h8v26z" fill="#15120E" />
      {WINDOWS.map((x) => (
        <rect key={x} x={x} y="440" width="10" height="26" rx="5" fill="#FFC878" />
      ))}
      {PALMS.map((palm) => (
        <g key={palm.x}>
          <path
            d={`M${palm.x} 700Q${palm.x + 14} ${700 - palm.h / 2} ${palm.x + 6} ${700 - palm.h}`}
            fill="none"
            stroke="#0F0D0A"
            strokeWidth="11"
          />
          {FRONDS.map((angle) => (
            <path
              key={angle}
              d="M0 0Q55-48 120-6"
              fill="none"
              stroke="#0F0D0A"
              strokeWidth="6"
              strokeLinecap="round"
              transform={`translate(${palm.x + 6} ${700 - palm.h}) rotate(${angle})`}
            />
          ))}
        </g>
      ))}
      {LAMPS.map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r="30" fill="url(#lampGlow)" />
          <circle cx={x} cy={y} r="3" fill="#FFE2B0" />
        </g>
      ))}
      <rect y="610" width="1200" height="90" fill="#0F0D0A" opacity=".85" />
    </svg>
  );
}

export function FeluccaArt() {
  return (
    <svg viewBox="0 0 300 380" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EBD3B0" />
          <stop offset=".6" stopColor="#E7B98B" />
          <stop offset="1" stopColor="#D79C6E" />
        </linearGradient>
        <linearGradient id="nile" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B88C68" />
          <stop offset="1" stopColor="#6F533C" />
        </linearGradient>
      </defs>
      <rect width="300" height="380" fill="url(#dusk)" />
      <circle cx="215" cy="196" r="34" fill="#FBEBD0" />
      <path d="M0 236h300v144H0z" fill="url(#nile)" />
      <path d="M0 236c40-8 70-4 110 0s90 6 190-2v8H0z" fill="#3F3025" opacity=".55" />
      <path d="M170 262h70M120 278h120M140 296h90M90 316h140" stroke="#FBEBD0" strokeOpacity=".35" strokeWidth="1.5" />
      <path d="M92 308c24 9 94 9 128-4l-14 14c-28 9-88 9-114 0z" fill="#2A1F18" />
      <path d="M150 306V170" stroke="#2A1F18" strokeWidth="3" />
      <path d="M153 176c32 24 54 58 66 122h-66z" fill="#FBF3E4" />
      <path d="M147 192c-18 28-30 58-34 106h34z" fill="#EFE0C6" />
      <path d="M20 236c4-30 6-50 4-70M20 168c-14 0-22 8-26 16M20 168c12-2 22 4 30 14" fill="none" stroke="#3F3025" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function RingsArt() {
  return (
    <svg viewBox="0 0 220 160" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="220" height="160" fill="#F1E8DA" />
      <g fill="none" stroke="#B8976A" strokeWidth="5">
        <circle cx="92" cy="86" r="34" />
        <circle cx="128" cy="86" r="34" />
      </g>
      <path d="M128 34l9 10-9 10-9-10z" fill="#FBF3E4" stroke="#B8976A" strokeWidth="2" />
      <svg x="8" y="76" width="44" height="64" viewBox="0 0 60 80" color="#B8976A">
        <use href="#sprig" />
      </svg>
    </svg>
  );
}

export function MapArt() {
  return (
    <svg viewBox="0 0 400 420" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="420" fill="#EFE6D8" />
      <g fill="#E5D9C6">
        <rect x="20" y="20" width="110" height="90" />
        <rect x="150" y="30" width="90" height="80" />
        <rect x="260" y="150" width="110" height="130" />
        <rect x="30" y="300" width="100" height="90" />
        <rect x="160" y="320" width="110" height="80" />
      </g>
      <g stroke="#FAF7F0" strokeWidth="14" fill="none" strokeLinecap="round">
        <path d="M0 126C120 112 260 138 400 118" />
        <path d="M0 296C120 288 260 304 400 290" />
        <path d="M140 0C146 130 134 290 142 420" />
        <path d="M250 0C246 130 256 290 248 420" />
      </g>
      <g stroke="#D3C5AD" strokeWidth=".8" opacity=".7">
        <path d="M0 80h400M0 210h400M0 350h400M70 0v420M330 0v420" />
      </g>
      <g transform="translate(300 214)">
        <circle r="20" fill="#B8976A" opacity=".3" />
        <circle r="7" fill="#26221E" stroke="#fff" strokeWidth="2" />
        <rect x="-62" y="-46" width="124" height="24" fill="#26221E" />
        <path d="M-6 -22h12l-6 8z" fill="#26221E" />
        <text y="-29" textAnchor="middle" fontSize="11" fill="#FBF8F2" style={{ fontFamily: "var(--font-body)" }}>
          قصر الحديقة الملكية
        </text>
      </g>
      <g transform="translate(350 50)" fill="none" stroke="#8C8378" strokeWidth="1">
        <circle r="18" />
        <path d="M0 -12l4 12-4 12-4-12z" fill="#B8976A" stroke="none" />
      </g>
    </svg>
  );
}
