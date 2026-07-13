import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Code2,
  Database,
  Bot,
  Workflow,
  Layout,
  Globe,
  TrendingUp,
  Cpu,
  Network,
  Zap,
} from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 400 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgX1 = useTransform(smoothMouseX, [-0.5, 0.5], [-30, 30]);
  const bgY1 = useTransform(smoothMouseY, [-0.5, 0.5], [-30, 30]);

  const bgX2 = useTransform(smoothMouseX, [-0.5, 0.5], [40, -40]);
  const bgY2 = useTransform(smoothMouseY, [-0.5, 0.5], [40, -40]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="intro"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ x: bgX1, y: bgY1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen"
        />
        <motion.div
          style={{ x: bgX2, y: bgY2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen"
        />

        {/* Animated Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] text-foreground"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-foreground/10 bg-foreground/5 backdrop-blur-sm text-sm text-muted-foreground mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for GHL & CRM Automation Projects
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
              <span className="block text-foreground">
                GoHighLevel Developer
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                & AI Automation Specialist.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#connect"
                className="px-6 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center gap-2 group"
              >
                Let's Work Together
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#projects"
                className="px-6 py-3 rounded-full border border-foreground/10 bg-foreground/5 text-foreground font-medium hover:bg-foreground/10 transition-colors"
              >
                View My Projects
              </a>
            </div>
          </motion.div>

          {/* Abstract Tech Visual / Narrative Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex justify-center relative w-full h-[600px] items-center"
          >
            <div className="relative w-full max-w-[600px] h-full flex items-center justify-center">
              {/* Central AI Core */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(var(--primary-rgb), 0.3)",
                    "0 0 100px rgba(var(--primary-rgb), 0.8)",
                    "0 0 40px rgba(var(--primary-rgb), 0.3)",
                  ],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-32 h-32 rounded-full bg-primary/10 border border-primary/50 backdrop-blur-xl flex flex-col items-center justify-center z-30"
              >
                <Bot size={40} className="text-primary mb-2 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  AI Core
                </span>

                {/* AI Ripple Effects */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border border-primary/40"
                    animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Panel 1: World Adopts Technology */}
              <motion.div
                initial={{ opacity: 0, x: -60, y: -60 }}
                animate={{ opacity: 1, x: -180, y: -120 }}
                transition={{ duration: 1.2, delay: 0.8, type: "spring" }}
                className="absolute p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-foreground/10 shadow-2xl z-20 w-72 group hover:border-blue-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-600 dark:text-blue-400">
                    <Globe size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-foreground">
                      Global Adoption
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      World Adopts Technology
                    </span>
                  </div>
                </div>

                {/* Animated World Network Visualization */}
                <div className="relative h-28 mt-4 bg-background/80 rounded-xl overflow-hidden border border-foreground/5">
                  {/* Grid background */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(#3b82f6 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  />

                  {/* Flashing Nodes */}
                  {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
                      style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`,
                      }}
                      animate={{
                        scale: [0, 1.5, 0],
                        opacity: [0, 1, 0],
                        boxShadow: [
                          "0 0 0px #3b82f6",
                          "0 0 10px #3b82f6",
                          "0 0 0px #3b82f6",
                        ],
                      }}
                      transition={{
                        duration: 1.5 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  {/* Scanning line effect */}
                  <motion.div
                    animate={{ top: ["0%", "100%", "0%"] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute left-0 right-0 h-[2px] bg-blue-500/50 shadow-[0_0_10px_#3b82f6] opacity-50"
                  />
                </div>
              </motion.div>

              {/* Panel 2: Business Growth */}
              <motion.div
                initial={{ opacity: 0, x: 60, y: 60 }}
                animate={{ opacity: 1, x: 180, y: 120 }}
                transition={{ duration: 1.2, delay: 1.2, type: "spring" }}
                className="absolute p-5 rounded-2xl bg-card/60 backdrop-blur-xl border border-foreground/10 shadow-2xl z-20 w-72 group hover:border-green-500/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-green-500/20 text-green-600 dark:text-green-400">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-foreground">
                      Scale & Revenue
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      Business Grow with Tech
                    </span>
                  </div>
                </div>

                {/* Animated Business Growth Visualization */}
                <div className="relative h-28 mt-4 bg-background/80 rounded-xl overflow-hidden border border-foreground/5 flex items-end justify-between px-3 pb-3 pt-6 gap-1.5">
                  {/* Grid background */}
                  <div
                    className="absolute inset-0 opacity-10 text-foreground"
                    style={{
                      backgroundImage:
                        "linear-gradient(0deg, transparent 24%, currentColor 25%, currentColor 26%, transparent 27%, transparent 74%, currentColor 75%, currentColor 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, currentColor 25%, currentColor 26%, transparent 27%, transparent 74%, currentColor 75%, currentColor 76%, transparent 77%, transparent)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {[25, 35, 30, 50, 45, 70, 60, 90, 85, 100].map(
                    (height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: `${height}%`, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 1.8 + i * 0.1,
                          type: "spring",
                        }}
                        className="w-full bg-gradient-to-t from-green-500/20 to-green-500 rounded-sm relative z-10"
                      >
                        {/* Floating particles above bars */}
                        <motion.div
                          animate={{ y: [-5, -15], opacity: [1, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full"
                        />
                      </motion.div>
                    ),
                  )}

                  {/* Growth Line Chart overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full z-20"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 2.5, ease: "easeOut" }}
                      d="M 5 75 L 15 65 L 25 70 L 35 50 L 45 55 L 55 30 L 65 40 L 75 10 L 85 15 L 95 0"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="2"
                      className="drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Connecting Data Streams (SVG Lines with moving particles) */}
              <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                <defs>
                  <linearGradient
                    id="gradWorldToCore"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop
                      offset="100%"
                      stopColor="var(--primary)"
                      stopOpacity="0.8"
                    />
                  </linearGradient>
                  <linearGradient
                    id="gradCoreToBiz"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      stopColor="var(--primary)"
                      stopOpacity="0.8"
                    />
                    <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Base Line from World to Core */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  d="M 120 180 Q 300 180 300 300"
                  fill="none"
                  stroke="url(#gradWorldToCore)"
                  strokeWidth="2"
                />

                {/* Animated Data Particles from World to Core */}
                <motion.path
                  d="M 120 180 Q 300 180 300 300"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeDasharray="1 25"
                  strokeLinecap="round"
                  animate={{ strokeDashoffset: [26, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="drop-shadow-[0_0_8px_#3b82f6]"
                />

                {/* Base Line from Core to Business */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                  d="M 300 300 Q 300 420 480 420"
                  fill="none"
                  stroke="url(#gradCoreToBiz)"
                  strokeWidth="2"
                />

                {/* Animated Data Particles from Core to Business */}
                <motion.path
                  d="M 300 300 Q 300 420 480 420"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="4"
                  strokeDasharray="1 25"
                  strokeLinecap="round"
                  animate={{ strokeDashoffset: [26, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="drop-shadow-[0_0_8px_#22c55e]"
                />
              </svg>

              {/* Orbiting Tech Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[420px] h-[420px] rounded-full border border-foreground/10 border-dashed z-0"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-2.5 rounded-full bg-card border border-primary/30 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]">
                  <Bot size={18} />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 p-2.5 rounded-full bg-card border border-blue-500/30 text-blue-600 dark:text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  <Database size={18} />
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute w-[540px] h-[540px] rounded-full border border-foreground/5 border-dashed z-0"
              >
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 p-2.5 rounded-full bg-card border border-green-500/30 text-green-600 dark:text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.5)]">
                  <Workflow size={18} />
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 p-2.5 rounded-full bg-card border border-purple-500/30 text-purple-600 dark:text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  <Code2 size={18} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
