import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
      <motion.a
        href="#connect"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        className="group inline-flex items-center gap-4 rounded-full bg-white dark:bg-[#071C36] text-slate-900 dark:text-white border border-[#0049C1]/20 dark:border-[#0049C1]/40 px-2 py-2 pr-7 shadow-lg transition-all duration-500 hover:bg-[#0049C1] hover:text-white hover:shadow-[0_15px_40px_rgba(0,73,193,0.35)]"
      >
        <motion.span
          variants={{
            hover: {
              rotate: 360,
              backgroundColor: "#ffffff",
              color: "#0049C1",
            },
          }}
          transition={{ duration: 0.6 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0049C1] text-white"
        >
          <ArrowRight size={20} />
        </motion.span>
        <span className="font-semibold text-lg">Let's Work Together</span>
      </motion.a>

      <a
        href="#projects"
        className="inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold border border-[#0049C1]/30 bg-white/70 dark:bg-white/5 backdrop-blur-xl text-slate-900 dark:text-white shadow-md transition-all duration-300 hover:border-[#0049C1] hover:bg-[#0049C1]/10 hover:shadow-[0_10px_30px_rgba(0,73,193,0.20)]"
      >
        View My Projects
      </a>
    </div>
  );
}
