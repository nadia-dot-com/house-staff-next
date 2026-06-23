import classes from "./Modal.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

type Modal = {
  ariaLabel: string;
  children: ReactNode;
  toggle: () => void;
  className: string;
  isOpen: boolean;
};

export function Modal({ ariaLabel, children, toggle, className, isOpen }: Modal) {
  const refModal = useRef<HTMLDivElement | null>(null);
  const refCallback = useClickOutside(toggle);

  useEffect(() => {
    refModal.current?.focus();

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.code === "Escape" && isOpen) {
        toggle();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen, toggle]);

  return (
    <motion.div
      ref={refCallback}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      className={cn(classes.modal, className)}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
    >
      <div role="dialog" aria-modal="true" tabIndex={-1} ref={refModal} aria-label={ariaLabel}>
        {children}
      </div>
    </motion.div>
  );
}
