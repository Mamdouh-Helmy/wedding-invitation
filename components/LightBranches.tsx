import { memo, type CSSProperties } from "react";

type Node = readonly [x: number, y: number, angle: number];
type Point = readonly [x: number, y: number];
type Bloom = readonly [x: number, y: number, scale: number];

const MAIN_STEM = "M0 6C70 14 120 50 160 100S240 190 292 214";
const SIDE_STEM = "M44 15C52 70 44 120 58 168";
const MAIN_NODES: readonly Node[] = [[49, 17, 20], [91, 37, 40], [128, 65, 50], [160, 100, 52], [200, 146, 48], [243, 184, 38]];
const SIDE_NODES: readonly Node[] = [[48, 55, 80], [49, 94, 88], [52, 139, 80]];
const BLOOMS: readonly Bloom[] = [[292, 214, 1.15], [58, 168, 0.7]];
const SPARKS: readonly Point[] = [[20, 10], [40, 80], [60, 120], [70, 26], [112, 50], [180, 124], [226, 166], [270, 200]];
const PETAL_ANGLES = [0, 60, 120, 180, 240, 300] as const;
const LEAF_SPREAD = 52;
const LEAF_PATH = "M0 0C6-8 19-8 28 0C19 8 6 8 0 0Z";
const VEIN_PATH = "M2 0H24";

const buildLeaves = (nodes: readonly Node[], offset: number, scale: number) =>
  nodes.flatMap(([x, y, angle], n) =>
    ([-1, 1] as const).map((side) => ({
      x,
      y,
      angle: angle + side * LEAF_SPREAD,
      size: (1.2 - Math.abs(n - nodes.length / 2 + 0.5) * 0.12) * (side > 0 ? 1 : 0.85) * scale,
      order: offset + n * 2 + (side > 0 ? 1 : 0),
    })),
  );

const LEAVES = [
  ...buildLeaves(MAIN_NODES, 0, 1),
  ...buildLeaves(SIDE_NODES, MAIN_NODES.length * 2, 0.8),
];

const order = (i: number) => ({ "--i": i }) as CSSProperties;

function Defs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <linearGradient id="lbLeaf" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E9D3A6" />
          <stop offset="1" stopColor="#B8976A" />
        </linearGradient>
        <linearGradient id="lbPetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFF6E0" />
          <stop offset="1" stopColor="#E3C792" />
        </linearGradient>
        <radialGradient id="lbGlow">
          <stop offset="0" stopColor="#FFE3A8" stopOpacity=".75" />
          <stop offset="1" stopColor="#FFE3A8" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Branch({ side }: { side: "l" | "r" }) {
  return (
    <svg className={`lb ${side}`} viewBox="0 0 320 236" aria-hidden>
      <path className="lb-stem" d={MAIN_STEM} pathLength="1" fill="none" stroke="#A78458" strokeWidth="2.4" strokeLinecap="round" />
      <path className="lb-stem thin" d={MAIN_STEM} pathLength="1" fill="none" stroke="#F1DDB2" strokeWidth=".6" strokeLinecap="round" />
      <path className="lb-stem" d={SIDE_STEM} pathLength="1" fill="none" stroke="#A78458" strokeWidth="1.8" strokeLinecap="round" />
      {LEAVES.map((leaf, i) => (
        <g key={i} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle}) scale(${leaf.size})`}>
          <g className="lb-leaf" style={order(leaf.order)}>
            <path d={LEAF_PATH} fill="url(#lbLeaf)" stroke="#8F7148" strokeWidth=".5" />
            <path d={VEIN_PATH} fill="none" stroke="#FFF6E0" strokeOpacity=".7" strokeWidth=".6" strokeLinecap="round" />
          </g>
        </g>
      ))}
      {BLOOMS.map(([x, y, scale], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${scale})`}>
          <circle className="lb-glow" r="30" fill="url(#lbGlow)" style={order(i)} />
          <g className="lb-bloom" style={order(i)}>
            {PETAL_ANGLES.map((angle) => (
              <ellipse key={angle} cy="-8" rx="4.2" ry="8.5" transform={`rotate(${angle})`} fill="url(#lbPetal)" stroke="#B8976A" strokeWidth=".5" />
            ))}
            <circle r="3.2" fill="#FFE9B8" stroke="#8F7148" strokeWidth=".5" />
          </g>
        </g>
      ))}
      {SPARKS.map(([x, y], i) => (
        <circle key={i} className="lb-spark" cx={x} cy={y} r="1.8" fill="#FFF3D6" style={order(i)} />
      ))}
    </svg>
  );
}

function LightBranches() {
  return (
    <div className="lights" aria-hidden>
      <Defs />
      <i className="lights-halo" />
      <Branch side="l" />
      <Branch side="r" />
    </div>
  );
}

export default memo(LightBranches);