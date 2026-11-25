import type { Metadata, Viewport } from "next";
import { Aref_Ruqaa, Tajawal } from "next/font/google";
import "./globals.css";
import "./effects.css";
import "./hero.css";
import "./story.css";

const display = Aref_Ruqaa({ subsets: ["arabic"], weight: ["400", "700"], variable: "--font-display", display: "swap" });
const body = Tajawal({ subsets: ["arabic"], weight: ["300", "400", "500", "700"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "دعوة فرح آدم وليلى",
  description: "عزومة فرح إلكترونية من القلب",
};
export const viewport: Viewport = { themeColor: "#F4F1EB" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}