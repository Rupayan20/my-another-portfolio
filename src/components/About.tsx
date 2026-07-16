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
      className="flex flex-col items-center justify-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group shadow-sm"
    >
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {displayValue}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium text-center">
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
                    src={
                      "/images/profile.jpeg"
                    }
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 border-2 border-primary/20 rounded-xl z-10 pointer-events-none" />
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-card rounded-full border border-border flex items-center justify-center shadow-xl z-20"
              >
                <div className="text-primary font-bold text-xl tracking-tighter">
                  AI
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
