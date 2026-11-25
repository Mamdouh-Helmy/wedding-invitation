import { invitation } from "@/data/invitation";
import Reveal from "./Reveal";

export default function Evening() {
  return (
    <section className="section night" id="evening">
      <Reveal>
        <p className="kicker light center"><b>٠٤</b><i />برنامج السهرة</p>
        <h2 className="headline light center">سهرة <em>الفرح</em></h2>
      </Reveal>
      <ol className="program">
        {invitation.evening.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 80}>
              <div className="program-row">
                <p className="program-time">{item.time} <em>{item.period}</em></p>
                <span className="node" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.note}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}