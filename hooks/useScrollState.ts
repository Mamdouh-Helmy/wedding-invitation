"use client";
import { useEffect } from "react";

export function useScrollState(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrolled = String(window.scrollY > window.innerHeight * 0.7);
      if (root.dataset.scrolled !== scrolled) root.dataset.scrolled = scrolled;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);
}