import { invitation } from "@/data/invitation";
import { whatsappUrl } from "@/lib/contact";
import { Frame, Icon } from "./Art";

const rsvpMessage = `السلام عليكم، يسعدني أأكد حضوري فرح ${invitation.couple.groom} و${invitation.couple.bride} إن شاء الله`;

export default function DetailsCard() {
  const { evening, venue } = invitation;
  return (
    <aside className="details-card paper">
      <Frame />
      <h3 className="card-title"><i />سهرة الفرح<i /></h3>
      <ul className="agenda">
        {evening.map((item) => (
          <li key={item.title}>
            <span>{item.time} {item.period}</span>
            <i />
            <b>{item.title}</b>
          </li>
        ))}
      </ul>
      <h3 className="card-title"><i />المكان<i /></h3>
      <p className="venue-line"><strong>{venue.name}</strong><span>{venue.area}</span></p>
      <a className="btn outline wide" href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
        <Icon name="pin" />وصّلني للمكان
      </a>
      <h3 className="card-title"><i />تأكيد الحضور<i /></h3>
      <p className="venue-line"><span className="lead">هنفرح أوي لو كنتوا معانا.</span></p>
      <a className="btn dark wide" href={whatsappUrl(rsvpMessage)} target="_blank" rel="noopener noreferrer">
        <Icon name="whatsapp" />أكّد على واتساب
      </a>
    </aside>
  );
}