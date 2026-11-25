import { invitation } from "@/data/invitation";
import { formatDate } from "@/lib/format";
import { NightScene } from "./Art";
import Reveal from "./Reveal";

export default function Hero() {
  const { couple, venue, spoken, heroImage } = invitation;

  return (
    <section className="hero" id="hero">
      <NightScene className="scene" />
      <div className="scene hero-photo" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden />
      <div className="hero-shade" />

      <header className="hero-bar">
        <span>دعوة</span>
        <span>العدد الأول · شتا ٢٠٢٦</span>
        <span>القاهرة · مصر</span>
      </header>

      <div className="hero-body">
        <Reveal delay={150}>
          <h1 className="hero-names">
            <span>{couple.groom}</span>
            <em>و</em>
            <span>{couple.bride}</span>
          </h1>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <aside className="hero-date">
          <span>{formatDate({ weekday: "long" })}</span>
          <p>
            <strong>{formatDate({ day: "numeric" })}</strong>
            <em>{formatDate({ month: "long" })}</em>
          </p>
          <span>{formatDate({ year: "numeric" })}</span>
          <hr />
          <span>{spoken.time} · {venue.name}</span>
        </aside>
      </Reveal>
    </section>
  );
}