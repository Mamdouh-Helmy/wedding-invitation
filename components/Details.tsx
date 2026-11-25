import { invitation } from "@/data/invitation";
import { whatsappUrl } from "@/lib/contact";
import Reveal from "./Reveal";
import { Icon, MapArt } from "./Art";

const questionMessage = "السلام عليكم، عندي سؤال بخصوص الفرح";

export default function Details() {
  const { venue, details } = invitation;
  return (
    <section className="section" id="details">
      <div className="section-head">
        <p className="kicker"><b>٠٣</b><i />التفاصيل</p>
      </div>
      <div className="details-top">
        <Reveal><h2 className="headline xl">فين <em>و</em> إمتى</h2></Reveal>
        <Reveal delay={100}>
          <p className="body-text side">سهرة على نور الشموع والموسيقى، وسط الناس اللي بنحبهم، تحت نخيل جنينة القصر القديمة.</p>
        </Reveal>
      </div>
      <div className="details-grid">
        <div className="info">
          <Reveal>
            <div className="info-row">
              <div className="info-cell">
                <span className="badge"><Icon name="ring" /></span>
                <small>كتب الكتاب</small>
                <p className="big-time">{details.ceremony.time} <em>{details.ceremony.period}</em></p>
                <p className="body-text">{details.ceremony.text}</p>
              </div>
              <div className="info-cell">
                <span className="badge"><Icon name="glasses" /></span>
                <small>الفرح</small>
                <p className="script big">{details.celebration.title}</p>
                <p className="body-text">{details.celebration.text}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="venue-block">
              <span className="badge"><Icon name="pin" /></span>
              <div>
                <small>المكان</small>
                <p className="venue-name">{venue.name}</p>
                <p className="body-text">{venue.area}</p>
              </div>
            </div>
            <div className="buttons start">
              <a className="btn dark" href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
                وصّلني للمكان <Icon name="arrow" />
              </a>
              <a className="btn outline" href={whatsappUrl(questionMessage)} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" />عايز أسأل
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <figure className="map">
            <MapArt />
            <figcaption>
              <span><small>الإحداثيات</small>{venue.coordinates}</span>
              <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer" aria-label="افتح الخريطة">
                <Icon name="external" />
              </a>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}