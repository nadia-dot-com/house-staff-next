import { useCallback, useEffect, useRef } from "react";

export function useClickOutside(callback: () => void) {
  const elementRef = useRef<HTMLElement | null>(null);
  const isReady = useRef(false);

  const handleClick = useCallback(
    (event: MouseEvent) => {
      const el = elementRef.current;
      if (!el || !isReady.current) return;

      const path = event.composedPath?.() || [event.target];
      if (!path.includes(el)) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      isReady.current = true;
    }, 0);

    window.addEventListener("click", handleClick);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);
}
