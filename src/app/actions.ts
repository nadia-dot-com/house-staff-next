"use server";

import { Resend } from "resend";
import { API_URL, RESEND_API_KEY } from "../config/env";
import { SHOP_EMAIL } from "../config/shop";
import { CONTACT_FORM_STATE } from "../constants/contactForm";
import { ContactFormState } from "../features/contact/types";
import { createContactEmail } from "../lib/emails/createContactEmail";
import { cookies } from "next/headers";
import { UserData } from "@/types/userTypes";

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

export async function logout() {
  (await cookies()).delete("token");
}

export async function updateUserProfile(payload: Partial<UserData>): Promise<UserData> {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const res = await fetch(`${API_URL}/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ?? "Failed to update user. An unexpected Error was received from the server."
    );
  }

  return data;
}
