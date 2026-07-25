import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const AnimatedNumber = ({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = 20;
      const totalSteps = duration / incrementTime;
      const stepValue = end / totalSteps;

      const timer = setInterval(() => {
        start += stepValue;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-card to-card/80 p-7 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_15px_35px_rgba(0,73,193,0.18)]"
    >
    <div className="absolute inset-0 rounded-2xl bg-[#0049C1]/5 opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
    <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#0049C1] transition-all duration-500 group-hover:w-full" />
      <div className="mb-2 text-5xl md:text-6xl font-black tracking-tight text-foreground transition-all duration-500 group-hover:text-[#4D8DFF]">
        {displayValue}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium text-center">
        {label}
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-2xl opacity-50" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border bg-card p-2 shadow-xl">
                <div className="w-full h-full rounded-xl overflow-hidden bg-muted relative">
                  <img
                    src={"/images/profile.jpeg"}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-xl z-10 pointer-events-none" />
                </div>
              </div>

              {/* Decorative Logo */}
<motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -bottom-5 -right-5 z-20"
>
  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#081426] border border-[#0049C1]/20 shadow-[0_12px_30px_rgba(0,73,193,0.35)]">
    <img
      src="../images/rdLogo.png"
      alt="RD Logo"
      className="h-11 w-11 object-contain"
      draggable={false}
    />
  </div>
</motion.div>
 </div>
 </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Building <span className="text-primary">Smarter CRM Systems</span>{" "}
              That Actually Work
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I'm Rupayan Dutta, a Senior GoHighLevel Developer and CRM
              Automation Engineer with 2+ years of experience building,
              integrating, and testing production-ready CRM systems.
              <br />
              <br />I specialize in GoHighLevel automation, AI-powered
              workflows, Voice AI, Conversation AI, CRM integrations,
              conversion-focused funnels, and custom websites. My QA engineering
              background gives me a different approach—I don't just build
              systems. I test the complete user journey, workflow logic, and
              integrations before they go live.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <AnimatedNumber value={2} label="Years Experience" suffix="+" />
              <AnimatedNumber value={50} label="Total Projects" suffix="+" />
              <AnimatedNumber value={250} label="AI Automations" suffix="+" />
              <AnimatedNumber value={90} label="Happy Clients" suffix="%" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
