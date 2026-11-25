"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export function useAudio(src: string) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const audio = useCallback(() => {
    if (!ref.current) {
      const element = new Audio(src);
      element.loop = true;
      element.volume = 0.6;
      ref.current = element;
    }
    return ref.current;
  }, [src]);

  const play = useCallback(() => {
    audio().play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  }, [audio]);

  const pause = useCallback(() => {
    ref.current?.pause();
    setPlaying(false);
  }, []);

  const toggle = useCallback(() => (playing ? pause() : play()), [playing, play, pause]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) ref.current?.pause();
      else if (playing) ref.current?.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [playing]);

  useEffect(() => () => ref.current?.pause(), []);

  return { playing, play, toggle };
}
