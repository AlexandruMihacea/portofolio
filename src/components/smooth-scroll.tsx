"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (reduceMotion.matches || coarsePointer.matches) {
      return;
    }

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let frameId = 0;

    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;

    const stopAnimation = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const tick = () => {
      currentY += (targetY - currentY) * 0.13;

      if (Math.abs(targetY - currentY) < 0.5) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        frameId = 0;
        return;
      }

      window.scrollTo(0, currentY);
      frameId = requestAnimationFrame(tick);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (target?.closest("textarea, select, input, [data-native-scroll]")) {
        return;
      }

      event.preventDefault();
      targetY = Math.max(0, Math.min(maxScroll(), targetY + event.deltaY * 0.95));

      if (!frameId) {
        currentY = window.scrollY;
        frameId = requestAnimationFrame(tick);
      }
    };

    const syncScrollPosition = () => {
      stopAnimation();
      targetY = window.scrollY;
      currentY = window.scrollY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", syncScrollPosition);
    window.addEventListener("resize", syncScrollPosition);

    return () => {
      stopAnimation();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", syncScrollPosition);
      window.removeEventListener("resize", syncScrollPosition);
    };
  }, []);

  return null;
}
