import { invitation } from "@/data/invitation";
import { shortDate } from "@/lib/format";
import Reveal from "./Reveal";
import { Monogram, NightScene } from "./Art";

export default function Footer() {
  const { couple, venue, whatsapp, footerImage } = invitation;
  return (
    <footer className="closing">
      <NightScene className="scene" />
      <div className="scene hero-photo" style={{ backgroundImage: `url(${footerImage})` }} aria-hidden />
      <div className="hero-shade" />
      <Reveal>
        <div className="closing-body">
          <p className="kicker light center">ومن هنا بتبدأ حكايتنا للأبد</p>
          <h2 className="hero-names small"><span>{couple.groom}</span><em>و</em><span>{couple.bride}</span></h2>
          <p className="closing-date">{shortDate(" · ")}</p>
          <p className="script light">شكرًا إنكم جزء من حكايتنا.</p>
        </div>
      </Reveal>
      <div className="closing-bar">
        <Monogram letters={couple.letters} />
        <span>{venue.name} · القاهرة الجديدة</span>
        <span>للتواصل <bdi dir="ltr">{whatsapp.display}</bdi></span>
      </div>
    </footer>
  );
}