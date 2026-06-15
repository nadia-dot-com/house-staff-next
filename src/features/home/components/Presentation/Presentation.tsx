"use client";

import classes from "./Presentation.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { PRESENTATION } from "./data/presentation";
import { PresentationItem } from "./PresentationItem/PresentationItem";
import { useHover } from "@/hooks/useHover";
import { AnimatePresence } from "motion/react";

const DELAY = 3000;

export function Presentation() {
  const [activeSlideIndex, setctiveSlideIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) return;

    intervalRef.current = window.setInterval(() => {
      setctiveSlideIndex((prev) => (prev + 1) % PRESENTATION.length);
    }, DELAY);
  }, [PRESENTATION.length]);

  const stop = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    start();
    return () => stop();
  }, [start, stop]);

  const refCallback = useHover(stop, start);

  return (
    <section ref={refCallback} className={classes.presentation}>
      <AnimatePresence mode="popLayout">
        <PresentationItem key={activeSlideIndex} item={PRESENTATION[activeSlideIndex]} />
      </AnimatePresence>
    </section>
  );
}
