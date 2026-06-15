import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { WEB3FORMS_KEY } from "@/api/config";
import { CONTACT_FORM_URL } from "@/config";

export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const mutation = useMutation({
    mutationFn: async (formElement: HTMLFormElement) => {
      const formData = new FormData(formElement);
      formData.append("access_key", WEB3FORMS_KEY);

      const response = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data.success) throw new Error("Submission failed!");

      return data;
    },
    onSuccess: () => formRef.current?.reset(),
  });

  return { ...mutation, formRef };
};