import { invitation } from "@/data/invitation";
import { shortDate } from "@/lib/format";
import { Monogram } from "./Art";

const LINKS = [
  ["#story", "حكايتنا"], ["#countdown", "فاضل كام يوم"], ["#details", "التفاصيل"], ["#evening", "سهرة الفرح"],
] as const;

export default function Nav() {
  return (
    <nav className="nav" aria-label="التنقل">
      <a className="brand" href="#invitation">
        <Monogram letters={invitation.couple.letters} />
        <small>جريدة الفرح</small>
      </a>
      <div className="links">
        {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </div>
      <div className="nav-end">
        <span>{shortDate(" · ", "2-digit")}</span>
        <a className="btn outline small" href="#rsvp">أكّد حضورك</a>
      </div>
    </nav>
  );
}