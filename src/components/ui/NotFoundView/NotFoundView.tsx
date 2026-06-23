import { PageTransition } from "@/components/transitions/PageTransition";
import classes from "./NotFoundView.module.scss";

export function NotFoundView() {
  return (
    <section className={classes.container}>
      <PageTransition>
        <div className={classes.text}>
          <p className={classes.error}>404</p>
          <p>Sorry, the page was not found.</p>
        </div>
        Looks like this page has been moved or deleted.
      </PageTransition>
    </section>
  );
}
