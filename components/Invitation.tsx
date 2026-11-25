"use client";
import { useEffect, useRef, useState } from "react";
import { invitation } from "@/data/invitation";
import { useAudio } from "@/hooks/useAudio";
import { useScrollState } from "@/hooks/useScrollState";
import { ArtDefs } from "./Art";
import Countdown from "./Countdown";
import Details from "./Details";
import Evening from "./Evening";
import FloatingActions from "./FloatingActions";
import Footer from "./Footer";
import Hero from "./Hero";
import Nav from "./Nav";
import Rsvp from "./Rsvp";
import Stage, { type Phase } from "./Stage";
import Story from "./Story";

const OPEN_DELAY_MS = 2300;

export default function Invitation() {
  const [phase, setPhase] = useState<Phase>("closed");
  const openTimer = useRef<number | undefined>(undefined);
  const { playing, play, toggle } = useAudio(invitation.music);
  useScrollState(phase === "open");

  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("locked", phase !== "open");
    return () => root.classList.remove("locked");
  }, [phase]);

  useEffect(() => () => window.clearTimeout(openTimer.current), []);

  const openInvitation = () => {
    if (phase !== "closed") return;
    setPhase("opening");
    play();
    openTimer.current = window.setTimeout(() => setPhase("open"), OPEN_DELAY_MS);
  };

  return (
    <main className={`app ${phase}`}>
      <ArtDefs />
      <Nav />
      <Stage phase={phase} onOpen={openInvitation} />
      <Hero />
      <Story />
      <Countdown />
      <Details />
      <Evening />
      <Rsvp />
      <Footer />
      <FloatingActions playing={playing} onToggle={toggle} />
    </main>
  );
}
