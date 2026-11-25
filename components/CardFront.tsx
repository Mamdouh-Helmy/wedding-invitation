import { invitation } from "@/data/invitation";
import { Flora, Frame, Monogram, Ornament } from "./Art";

export default function CardFront() {
  const { couple, spoken, venue, copy } = invitation;
  return (
    <article className="face front paper">
      <Frame />
      <Flora />
      <p className="eyebrow">{copy.bismillah}</p>
      <Ornament />
      <h2 className="names">
        <span>{couple.groom}</span>
        <em>و</em>
        <span>{couple.bride}</span>
      </h2>
      <p className="request">{copy.request[0]}<br />{copy.request[1]}</p>
      <p className="when">
        <span>{spoken.weekday}</span>
        <strong>{spoken.day}</strong>
        <span>{spoken.year}</span>
      </p>
      <p className="time">{spoken.time}</p>
      <p className="where">
        <strong>{venue.name}</strong>
        <span>{venue.short}</span>
      </p>
      <div className="signoff"><i /><Monogram letters={couple.letters} /><i /></div>
    </article>
  );
}