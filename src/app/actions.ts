"use server";

import { Resend } from "resend";
import { RESEND_API_KEY } from "../config/env";
import { SHOP_EMAIL } from "../config/shop";
import { CONTACT_FORM_STATE } from "../constants/contactForm";
import { ContactFormState } from "../features/contact/types";
import { createContactEmail } from "../lib/emails/createContactEmail";

const resend = new Resend(RESEND_API_KEY!);

export async function sendContactForm(_: ContactFormState | null, formData: FormData) {
  try {
    const result = await resend.emails.send({
      from: `Contact <onboarding@resend.dev>`,
      to: SHOP_EMAIL,
      subject: `New contact form submission from ${formData.get("name") ?? "Unknown"}`,
      html: createContactEmail(formData),
    });

    if (result.error) {
      throw new Error("Submission failed!");
    }
    console.log(result);

    return {
      success: true,
      message: CONTACT_FORM_STATE.success,
    };
  } catch (error) {
    console.error("Sending form error: ", error);

    return {
      success: false,
      message: CONTACT_FORM_STATE.error,
    };
  }
}
