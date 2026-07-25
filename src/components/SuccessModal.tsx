import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

interface SuccessModalProps {
  open: boolean;
  success: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

export default function SuccessModal({
  open,
  success,
  title,
  message,
  onClose,
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-[92%] max-w-md rounded-3xl border border-white/10 bg-[#111827] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,.45)]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 220,
              }}
              className={`mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full ${
                success
                  ? "bg-green-500/15"
                  : "bg-red-500/15"
              }`}
            >
              {success ? (
                <CheckCircle2 className="h-14 w-14 text-green-500" />
              ) : (
                <XCircle className="h-14 w-14 text-red-500" />
              )}
            </motion.div>

            <h2 className="mb-3 text-3xl font-bold">
              {title}
            </h2>

            <p className="text-gray-400 leading-7">
              {message}
            </p>

            <button
              onClick={onClose}
              className="mt-8 w-full rounded-xl bg-[#0049C1] py-3 font-semibold text-white transition hover:opacity-90"
            >
              Continue
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}