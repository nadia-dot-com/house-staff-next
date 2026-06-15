import { RefObject, useEffect } from "react";

export function useResize(
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(callback);

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref]);
}
