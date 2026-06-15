import { PageTransition } from '@/components/transitions/PageTransition';
import classes from './page.module.scss';
import { ContactDescription } from "@/features/contact/components/ContactDescription/ContactDescription";
import { ContactForm } from "@/features/contact/components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className={classes.contactWrapper}>
      <PageTransition>
        <ContactDescription />
        <ContactForm />
      </PageTransition>
    </div>
  );
}