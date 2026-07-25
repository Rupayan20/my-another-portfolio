// ContactPopup.tsx
// NOTE: This starter compiles and is designed to plug into the Index.tsx
// logic discussed earlier. Replace the TODO in handleSubmit with your
// EmailJS service call from src/services/email.ts.

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { sendContactEmail } from "@/services/email";
import SuccessModal from "./SuccessModal";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [loading, setLoading] = useState(false);

  const [resultOpen, setResultOpen] = useState(false);

  const [result, setResult] = useState({
    success: true,
    title: "",
    message: "",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);
  useEffect(() => {
    if (!resultOpen || !result.success) return;

    const timer = setTimeout(() => {
      setResultOpen(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [resultOpen, result.success, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    let newValue = value;

    // Allow only numbers and + in phone
    if (name === "phone") {
      newValue = value.replace(/[^\d+]/g, "").slice(0, 15);
    }

    // Remove spaces from email
    if (name === "email") {
      newValue = value.trim();
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      phone: "",
      message: "",
    };

    let valid = true;

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Phone Validation (Optional)
    if (form.phone.trim() !== "") {
      const phone = form.phone.replace(/\D/g, "");

      if (phone.length < 10 || phone.length > 15) {
        newErrors.phone = "Phone number must contain 10 to 15 digits.";
        valid = false;
      }
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const validateForm = () => {
      const newErrors = {
        email: "",
        phone: "",
        message: "",
      };

      let valid = true;

      // Email Validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(form.email)) {
        newErrors.email = "Please enter a valid email address.";
        valid = false;
      }

      // Phone Validation (Optional)
      if (form.phone.trim() !== "") {
        const phone = form.phone.replace(/\D/g, "");

        if (phone.length < 10 || phone.length > 15) {
          newErrors.phone = "Phone number must contain 10 digits.";
          valid = false;
        }
      }

      // Message Validation
      if (form.message.trim().length < 20) {
        newErrors.message =
          "Please describe your project in at least 20 characters.";
        valid = false;
      }

      // Your Query Validation
      if (form.message.length > 1000) {
        newErrors.message = "Your message cannot exceed 1000 characters.";
        valid = false;
      }

      setErrors(newErrors);

      return valid;
    };

    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      await sendContactEmail(form);

      setResult({
        success: true,
        title: "Message Sent!",
        message: "Thank you! I'll get back to you within 24 hours.",
      });

      setResultOpen(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setResult({
        success: false,
        title: "Oops!",
        message: "Something went wrong. Please try again.",
      });

      setResultOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-background/90 p-8 shadow-2xl"
            >
              <button
                type="button"
                onClick={onClose}
                className="absolute right-5 top-5 rounded-full p-2 hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>

              <h2 className="mb-2 text-3xl font-bold">Let's Work Together</h2>

              <p className="mb-6 text-muted-foreground font-bold">
                Tell me about your project and I'll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  className="w-full rounded-xl border bg-background p-3"
                  placeholder="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <input
                  className={`w-full rounded-xl border bg-background p-3 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-background p-3 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  maxLength={1000}
                  className={`w-full rounded-xl border bg-background p-3 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}

                <div className="mt-2 flex justify-end text-xs text-muted-foreground">
                  {form.message.length}/1000
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-primary px-6 py-3 text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SuccessModal
        open={resultOpen}
        success={result.success}
        title={result.title}
        message={result.message}
        onClose={() => {
          setResultOpen(false);

          if (result.success) {
            onClose();
          }
        }}
      />
    </>
  );
}
