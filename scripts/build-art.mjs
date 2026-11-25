import { mkdirSync, writeFileSync } from "node:fs";

const GOLD = "#B8976A";
const ROSE = ["#E9B8AB", "#F2CFC4", "#F9E3DB", "#C9A66F"];
const IVORY = ["#F4E6D3", "#FAEFE0", "#FFFAF1", "#B8976A"];

const ring = (angles, cy, rx, ry, fill, opacity, width) =>
  angles
    .map((a) => `<ellipse cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${a})" fill="${fill}" stroke="${GOLD}" stroke-opacity="${opacity}" stroke-width="${width}"/>`)
    .join("");

const bloom = (id, [outer, mid, inner, core]) =>
  `<symbol id="${id}" viewBox="-50 -50 100 100">${ring([0, 45, 90, 135, 180, 225, 270, 315], -27, 15, 23, outer, ".55", ".8")}${ring([22, 82, 142, 202, 262, 322], -18, 11, 16, mid, ".4", ".7")}${ring([0, 72, 144, 216, 288], -9, 7, 10, inner, ".35", ".6")}<circle r="4.5" fill="${core}"/><circle r="1.8" fill="#FBF3E4"/></symbol>`;

const DEFS = `<defs><symbol id="leaf" viewBox="0 0 40 20"><path d="M0 10C10-2 28-2 40 10 28 22 10 22 0 10z" fill="#9AA583" stroke="#6F7C5A" stroke-width=".8" stroke-opacity=".7"/><path d="M2 10h34" stroke="#6F7C5A" stroke-width=".7" stroke-opacity=".7"/></symbol>${bloom("bloomRose", ROSE)}${bloom("bloomIvory", IVORY)}</defs>`;

const leaf = (x, y, r, s = 30) =>
  `<g transform="translate(${x} ${y}) rotate(${r})"><use href="#leaf" x="0" y="${-s / 4}" width="${s}" height="${s / 2}"/></g>`;

const flower = ([cx, cy, s, id]) =>
  `<use href="#${id}" x="${cx - s / 2}" y="${cy - s / 2}" width="${s}" height="${s}"/>`;

const dot = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${GOLD}" fill-opacity=".8"/>`;

const wrap = (w, h, body) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${DEFS}${body}</svg>`;

const BRANCHES = [[43, 26, 10], [79, 41, 30], [110, 66, 55], [26, 43, 80], [41, 79, 60], [66, 110, 35]];
const SPRAY_BLOOMS = [
  [150, 108, 24, "bloomIvory"], [108, 150, 24, "bloomIvory"],
  [128, 66, 36, "bloomRose"], [66, 128, 36, "bloomRose"],
  [96, 20, 42, "bloomIvory"], [20, 96, 42, "bloomIvory"],
  [36, 36, 76, "bloomRose"],
];
const SPRAY_DOTS = [[136, 100], [100, 136], [162, 120], [120, 162]];

const spray = wrap(
  200,
  200,
  `<g fill="none" stroke="${GOLD}" stroke-width="1.4" stroke-linecap="round"><path d="M-5 20C50 20 100 40 130 95"/><path d="M20 -5C20 50 40 100 95 130"/></g>` +
    BRANCHES.map(([x, y, r]) => leaf(x, y, r - 38) + leaf(x, y, r + 38)).join("") +
    SPRAY_BLOOMS.map(flower).join("") +
    SPRAY_DOTS.map(([x, y]) => dot(x, y, 2.2)).join(""),
);

const GARLAND_LEAVES = [[115, 75, 169], [75, 77, 180], [40, 66, 197]];
const GARLAND_BLOOMS = [
  [28, 58, 24, "bloomIvory"], [292, 58, 24, "bloomIvory"],
  [70, 72, 30, "bloomRose"], [250, 72, 30, "bloomRose"],
  [116, 66, 38, "bloomIvory"], [204, 66, 38, "bloomIvory"],
  [160, 52, 56, "bloomRose"],
];
const GARLAND_DOTS = [[48, 80], [272, 80], [94, 84], [226, 84]];

const garland = wrap(
  320,
  90,
  `<path d="M8 50C70 84 112 82 160 62C208 82 250 84 312 50" fill="none" stroke="${GOLD}" stroke-width="1.4" stroke-linecap="round"/>` +
    GARLAND_LEAVES.map(([x, y, a]) =>
      leaf(x, y, a - 35, 26) + leaf(x, y, a + 35, 26) + leaf(320 - x, y, 180 - a + 35, 26) + leaf(320 - x, y, 180 - a - 35, 26),
    ).join("") +
    GARLAND_BLOOMS.map(flower).join("") +
    GARLAND_DOTS.map(([x, y]) => dot(x, y, 2)).join(""),
);

mkdirSync("public/art", { recursive: true });
writeFileSync("public/art/spray.svg", spray);
writeFileSync("public/art/garland.svg", garland);
