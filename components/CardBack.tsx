import { invitation } from "@/data/invitation";
import { shortDate } from "@/lib/format";
import { Flora, Frame, Monogram } from "./Art";

export default function CardBack() {
  const { couple, copy } = invitation;
  return (
    <article className="face back paper">
      <Frame />
      <Flora />
      <div className="medallion"><Monogram letters={couple.letters} /></div>
      <div className="laurel" aria-hidden>
        <svg viewBox="0 0 60 80"><use href="#sprig" /></svg>
        <svg viewBox="0 0 60 80"><use href="#sprig" /></svg>
      </div>
      <p className="back-date">{shortDate(" · ")}</p>
      <i className="rule" />
      <p className="message">{copy.backMessage[0]}<br />{copy.backMessage[1]}</p>
    </article>
  );
}