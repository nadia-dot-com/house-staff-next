"use client";

import { sendContactForm } from "@/app/actions";
import classes from "./ContactForm.module.scss";
import { Button } from "@/components/ui/Button/Button";
import { CONTACT_FORM_STATE } from "@/constants/contactForm";
import { cn } from "@/utils/cn";
import { useActionState, useEffect, useRef, useState } from "react";
import { ContactFormState } from "../../types";
import { AnimatePresence, motion } from "motion/react";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [message, setMessage] = useState<ContactFormState | null>(null);

  const [state, formAction, pending] = useActionState<ContactFormState | null, FormData>(
    sendContactForm,
    null
  );

  useEffect(() => {
    if (!state) return;

    if (state?.success) {
      formRef.current?.reset();
    }

    setMessage(state);

    const timer = setTimeout(() => {
      setMessage(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [state]);

  return (
    <section className={classes.formWrapper}>
      <form className={classes.form} action={formAction} ref={formRef} autoComplete="on">
        <h2 className={classes.title}>Enquiry Form</h2>
        <p className={classes.desc}>
          Contact our Customer Services team by completing the form. We will endeavour to respond
          within 24 hours.
        </p>
        <div className={classes.inputBox}>
          <label className={classes.screenReadersOnly} htmlFor="email">
            Email
          </label>
          <input
            autoComplete="email"
            id="email"
            type="email"
            name="email"
            className={classes.field}
            placeholder="Email"
            required
          />
          <label className={classes.screenReadersOnly} htmlFor="name">
            Name
          </label>
          <input
            autoComplete="name"
            id="name"
            type="text"
            name="name"
            className={classes.field}
            placeholder="Your name"
            required
          />
          <label className={classes.screenReadersOnly} htmlFor="phone">
            Phone
          </label>
          <input
            autoComplete="tel"
            id="phone"
            type="tel"
            pattern="[0-9]{9,15}"
            name="phone"
            className={classes.field}
            placeholder="Enter a valid phone number"
            required
          />
          <label className={classes.screenReadersOnly} htmlFor="order">
            Order number
          </label>
          <input
            id="order"
            type="text"
            name="order"
            className={classes.field}
            placeholder="Order number"
            required
          />
          <label htmlFor="message" className={classes.messageTitle}>
            Your message
          </label>
          <textarea
            id="message"
            name="message"
            className={cn(classes.field, classes.textarea)}
            placeholder="Write your message here"
            required
          />
        </div>
        <Button
          bgColor="white"
          textColor="black"
          text={"• SEND ENQUIRY"}
          ariaLabel="send enquiry"
        />
        <AnimatePresence mode="wait">
            <motion.p
              key={pending ? "pending" : message?.message}
              role="status"
              aria-live="polite"
              className={cn(
                classes.result,
                message?.success && classes.success,
                message && !message.success && classes.error
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {pending ? CONTACT_FORM_STATE.pending : message?.message}
            </motion.p>
        </AnimatePresence>
      </form>
    </section>
  );
}
