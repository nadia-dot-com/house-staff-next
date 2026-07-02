import { AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import classes from "./layout.module.scss";
import { redirect } from "next/navigation";
import { routes } from "@/constants/navigation/routes";
import { fetchUser } from "@/lib/api/user.api";
import { PageTransition } from "@/components/transitions/PageTransition";
import { NavAccount } from "@/components/loyouts/user/NavAccount/NavAccount";

export default async function UserLayout({ children }: { children: ReactNode }) {
  const user = await fetchUser();

  if (!user) {
    redirect(routes.login);
  }

  const displayName = user.name ? Array.from(new Set(user.name.split(" "))).join(" ") : "";

  return (
    <PageTransition>
      <div className={classes.userWrapper}>
        <h1 className={classes.helloUser}>Hello, {displayName} ;)</h1>

        <NavAccount />

        <section className={classes.content}>
          <AnimatePresence>{children}</AnimatePresence>
        </section>
      </div>
    </PageTransition>
  );
}
