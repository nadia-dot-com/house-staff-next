'use client'

import classes from "./Header.module.scss";
import { Menu } from "../Menu/Menu";
import { useScrollUp } from "@/hooks/useScrollUp";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { routes } from "@/constants/navigation/routes";

export function Header() {
  const { isScrollingUp } = useScrollUp();

  return (
    <header
      className={cn(classes.header, isScrollingUp ? classes.headerVisible : classes.headerHidden)}
    >
      <Link href={routes.home} className={classes.logo}>
        House Staff
      </Link>
      <Menu />
    </header>
  );
}
