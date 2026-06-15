import { useRef, useEffect, useCallback } from "react";

export function useHover(onEnter: () => void, onLeave: () => void) {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleMouseOver = (e: MouseEvent) => {
      if (!el.contains(e.relatedTarget as Node)) onEnter();
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (!el.contains(e.relatedTarget as Node)) onLeave();
    };

    el.addEventListener("mouseover", handleMouseOver);
    el.addEventListener("mouseout", handleMouseOut);

    return () => {
      el.removeEventListener("mouseover", handleMouseOver);
      el.removeEventListener("mouseout", handleMouseOut);
    };
  }, [onEnter, onLeave]);

  return useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);
}
