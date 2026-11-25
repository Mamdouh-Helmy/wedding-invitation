import { invitation } from "@/data/invitation";
import { FeluccaArt, RingsArt } from "./Art";
import Reveal from "./Reveal";

export default function Story() {
  const { story, couple } = invitation;
  const [lead, accent, tail] = story.headline;
  const [bigImage, smallImage] = story.images;

  return (
    <section className="section story" id="story">
      <div className="section-head">
        <p className="kicker"><b>٠١</b><i />حكايتنا</p>
      </div>

      <div className="story-grid">
        <Reveal>
          <div className="collage">
            <div className="frame big">
              <FeluccaArt />
              <div className="photo" style={{ backgroundImage: `url(${bigImage})` }} />
            </div>
            <div className="frame small">
              <RingsArt />
              <div className="photo" style={{ backgroundImage: `url(${smallImage})` }} />
            </div>
          </div>
        </Reveal>

        <div className="story-text">
          <Reveal delay={100}>
            <h2 className="headline">{lead} <em>{accent}</em> {tail}</h2>
          </Reveal>
          <Reveal delay={200}>
            {story.paragraphs.map((text) => <p className="body-text" key={text}>{text}</p>)}
          </Reveal>
          <Reveal delay={300}>
            <p className="signature">— {couple.groom} و{couple.bride}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}