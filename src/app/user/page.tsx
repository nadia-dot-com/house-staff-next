import { PageTransition } from "@/components/transitions/PageTransition";
import { MakeLogin } from "@/features/user/UserAccount/MakeLogin/MakeLogin";

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