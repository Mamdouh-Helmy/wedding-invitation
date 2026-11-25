"use client";
import { useState, type FormEvent } from "react";
import { invitation } from "@/data/invitation";
import { whatsappUrl } from "@/lib/contact";
import Reveal from "./Reveal";
import { Icon } from "./Art";

const MAX_GUESTS = 4;

export default function Rsvp() {
  const { couple, rsvpDeadline, whatsapp } = invitation;
  const [name, setName] = useState("");
  const [attending, setAttending] = useState(true);
  const [guests, setGuests] = useState(2);
  const [note, setNote] = useState("");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const answer = attending
      ? `إن شاء الله هحضر فرح ${couple.groom} و${couple.bride}، واحنا ${guests}.`
      : `للأسف مش هقدر أحضر، ألف مبروك وربنا يتمم لكم على خير.`;
    const message = [`السلام عليكم، أنا ${name}.`, answer, note].filter(Boolean).join(" ");
    window.open(whatsappUrl(message), "_blank", "noopener");
  };

  return (
    <section className="section" id="rsvp">
      <div className="rsvp-grid">
        <div>
          <Reveal>
            <p className="kicker"><b>٠٥</b><i />تأكيد الحضور</p>
            <h2 className="headline">هنفرح أوي لما <em>تشاركونا</em></h2>
            <p className="body-text">وجودكم جنبنا بيخلّي يومنا أحلى وليه معنى.</p>
            <p className="script">ياريت تردوا علينا قبل {rsvpDeadline}.</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="prefer">
              <small>تحبوا تبعتوا رسالة؟</small>
              <p dir="ltr" className="phone">{whatsapp.display}</p>
              <a className="link" href={whatsappUrl("السلام عليكم")} target="_blank" rel="noopener noreferrer">ابعتلنا على واتساب <Icon name="arrow" /></a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <form className="rsvp-card paper" onSubmit={submit}>
            <header><span className="script">ياريت تقولولنا</span><small>كارت رقم ٠١٤٧</small></header>
            <label className="field">
              <small>الاسم بالكامل</small>
              <input value={name} onChange={(event) => setName(event.target.value)} placeholder="اكتب اسمك هنا" required />
            </label>
            <fieldset className="choices">
              <legend>هتيجي ولا لأ؟</legend>
              <label className={attending ? "choice on" : "choice"}>
                <input type="radio" name="attending" checked={attending} onChange={() => setAttending(true)} />
                <span><b>إن شاء الله جاي</b><small>مش هنفوّتها</small></span>
              </label>
              <label className={attending ? "choice" : "choice on"}>
                <input type="radio" name="attending" checked={!attending} onChange={() => setAttending(false)} />
                <span><b>للأسف مش هقدر</b><small>ومعاكم بقلبي</small></span>
              </label>
            </fieldset>
            <div className="stepper-row">
              <span><small>عدد الحضور</small><small className="faint">معاك أنت، لحد {new Intl.NumberFormat("ar-EG").format(MAX_GUESTS)}</small></span>
              <div className="stepper">
                <button type="button" aria-label="نقّص" onClick={() => setGuests((n) => Math.max(1, n - 1))}>−</button>
                <output>{new Intl.NumberFormat("ar-EG").format(guests)}</output>
                <button type="button" aria-label="زوّد" onClick={() => setGuests((n) => Math.min(MAX_GUESTS, n + 1))}>+</button>
              </div>
            </div>
            <label className="field">
              <small>كلمة للعروسين (اختياري)</small>
              <input value={note} onChange={(event) => setNote(event.target.value)} placeholder="دعوة حلوة، أو أغنية نفسك نسمعها" />
            </label>
            <button className="btn dark wide" type="submit">ابعت ردّي <Icon name="arrow" /></button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}