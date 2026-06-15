import { useRef, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useScrollUp() {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const lastYRef = useRef(window.scrollY);
  const isThrottled = useRef(false);

  useWindowEvent("scroll", () => {
    if(isThrottled.current) return;
    isThrottled.current = true;

    const currentY = window.scrollY;

    setIsScrollingUp(currentY < lastYRef.current || currentY < 50);

    lastYRef.current = currentY;

    setTimeout(() => {
      isThrottled.current = false;
    }, 100)
  });

  return { isScrollingUp };
}
