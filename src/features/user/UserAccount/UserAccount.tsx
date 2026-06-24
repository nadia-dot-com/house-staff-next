import classes from "./UserAccount.module.scss";
import { NavAccount } from "./NavAccount/NavAccount";
import { useUserContext } from "@/context/UserContext";
import { MakeLogin } from "./MakeLogin/MakeLogin";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/ErrorFallback/ErrorFallback";
import { PageTransition } from "@/components/PageTransition/PageTransition";

export default function UserAccount() {
  const { user, isLoading, error } = useUserContext();

  const displayName = user?.name
    ? Array.from(new Set(user.name.split(" "))).join(" ")
    : "";

  return (
    <PageTransition>
      <div className={classes.userWrapper}>
        {user ? (
            <>
              <h1 className={classes.helloUser}>Hello, {displayName} ;)</h1>

              <NavAccount />

              <section className={classes.content}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <PageTransition key={location.pathname}>
                    <Outlet />
                  </PageTransition>
                </ErrorBoundary>
              </section>
            </>
        ) : (
          <MakeLogin />
        )}
      </div>
    </PageTransition>
  );
}
