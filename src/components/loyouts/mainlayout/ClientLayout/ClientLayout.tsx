"use client";

import { LoginModal } from "@/components/modals/LoginModal/LoginModal";
import { OrderModal } from "@/components/modals/OrderModal/OrderModal";
import { RootState } from "@/store/store";
import { AnimatePresence } from "motion/react";
import { useSelector } from "react-redux";
import {motion} from 'motion/react'

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const isCartOpen = useSelector((state: RootState) => state.cartUi.isCartOpen);
  const isLoginModalOpen = useSelector((state: RootState) => state.userUi.isLoginOpen);

  return (
    <>
      <AnimatePresence mode="wait">{isCartOpen && <OrderModal />}</AnimatePresence>
      <AnimatePresence mode="wait">{isLoginModalOpen && <LoginModal />}</AnimatePresence>

      <main aria-hidden={isCartOpen || isLoginModalOpen}>{children}</main>
    </>
  );
}
