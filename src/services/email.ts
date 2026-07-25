import emailjs from "@emailjs/browser";

export interface ContactFormData extends Record<string, unknown> {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE,
    data,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );

  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_REPLY_TEMPLATE,
    data,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}