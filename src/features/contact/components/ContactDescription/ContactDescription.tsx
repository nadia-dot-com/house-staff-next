import classes from "./ContactDescription.module.scss";

export function ContactDescription() {
  return (
    <section
      className={classes.background}
      style={{ backgroundImage: 'url("/img/contact/contact.webp")' }}
    >
      <h2 className={classes.text}>
        We’re happy to answer questions or help you with returns.
        <br />
        Please fill out the form below if you need assistance.
      </h2>
    </section>
  );
}
