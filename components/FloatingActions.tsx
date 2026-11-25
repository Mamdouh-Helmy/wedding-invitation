import { whatsappUrl } from "@/lib/contact";
import { Icon } from "./Art";

export default function FloatingActions({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  return (
    <div className="float">
      <a className="fab light" href={whatsappUrl("السلام عليكم")} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">
        <Icon name="whatsapp" />
      </a>
      <button className={`fab dark ${playing ? "on" : ""}`} onClick={onToggle} aria-pressed={playing}
        aria-label={playing ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}>
        <Icon name="music" />
      </button>
    </div>
  );
}
