export function createContactEmail(formData: FormData) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${formData.get("name")}</p>
    <p><strong>Email:</strong> ${formData.get("email")}</p>
    <p><strong>Phone:</strong> ${formData.get("phone")}</p>
    <p><strong>Order:</strong> ${formData.get("order")}</p>
    <p><strong>Message:</strong> ${formData.get("message")}</p>
  `;
}
