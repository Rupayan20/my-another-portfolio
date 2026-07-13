import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import {
  Code2,
  Bot,
  Workflow,
  ClipboardList,
} from "lucide-react";

const categoryIcons = {
  "Project Management": ClipboardList,
  "Website Development": Code2,
  "AI & Automation": Bot,
  "CRM & Architecture": Workflow,
};

export const Skills = () => {
  const projectManagementSkills =
    portfolioData.skills.find(
      (s) => s.category === "Project Management"
    )?.items || [];

  const websiteDevelopmentSkills =
    portfolioData.skills.find(
      (s) => s.category === "Website Development"
    )?.items || [];

  const aiSkills =
    portfolioData.skills.find(
      (s) => s.category === "AI & Automation"
    )?.items || [];

  const crmSkills =
    portfolioData.skills.find(
      (s) => s.category === "CRM & Architecture"
    )?.items || [];

  const rings = [
    {
      radius: 150,
      skills: projectManagementSkills,
      color: "text-blue-400",
      border: "border-blue-500/25",
      bg: "bg-blue-500/10",
      glow: "shadow-blue-500/20",
      startAngle: -90,
    },
    {
      radius: 250,
      skills: websiteDevelopmentSkills,
      color: "text-green-400",
      border: "border-green-500/25",
      bg: "bg-green-500/10",
      glow: "shadow-green-500/20",
      startAngle: -70,
    },
    {
      radius: 350,
      skills: aiSkills,
      color: "text-purple-400",
      border: "border-purple-500/25",
      bg: "bg-purple-500/10",
      glow: "shadow-purple-500/20",
      startAngle: -80,
    },
    {
      radius: 450,
      skills: crmSkills,
      color: "text-yellow-400",
      border: "border-yellow-500/25",
      bg: "bg-yellow-500/10",
      glow: "shadow-yellow-500/20",
      startAngle: -90,
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Tools & Technologies
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            The CRM, AI, automation, integration, and web technologies I use to
            build scalable business systems.
          </motion.p>
        </div>

        {/* Desktop Orbital Visualization */}
        <div className="hidden lg:flex relative w-full h-[1050px] items-center justify-center">
          {/* Center Core */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(var(--primary-rgb), 0.15)",
                "0 0 65px rgba(var(--primary-rgb), 0.35)",
                "0 0 30px rgba(var(--primary-rgb), 0.15)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-50 w-28 h-28 rounded-full bg-background/80 border border-primary/30 backdrop-blur-xl flex items-center justify-center"
          >
            <div className="absolute w-16 h-16 rounded-full border border-primary/30 border-t-primary animate-spin" />

            <span className="font-bold tracking-[0.2em] text-primary text-xs uppercase relative z-10">
              Tech Tools
            </span>
          </motion.div>

          {/* Orbital Rings */}
          {rings.map((ring, ringIdx) => (
            <div
              key={ringIdx}
              className={`absolute rounded-full border border-dashed ${ring.border}`}
              style={{
                width: ring.radius * 2,
                height: ring.radius * 2,
                zIndex: 40 - ringIdx,
              }}
            >
              <div className="absolute inset-0 rounded-full bg-foreground/[0.005]" />

              {ring.skills.map((skill, skillIdx) => {
                const angle =
                  ring.startAngle +
                  (skillIdx / ring.skills.length) * 360;

                const angleInRadians = (angle * Math.PI) / 180;

                const x = Math.cos(angleInRadians) * ring.radius;
                const y = Math.sin(angleInRadians) * ring.radius;

                return (
                  <motion.div
                    key={`${skill}-${skillIdx}`}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: skillIdx * 0.05 + ringIdx * 0.1,
                    }}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x,
                      y,
                    }}
                  >
                    <motion.div
                      animate={{
                        y: [0, -6, 0, 6, 0],
                      }}
                      transition={{
                        duration: 5 + skillIdx * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: skillIdx * 0.2,
                      }}
                      className="-translate-x-1/2 -translate-y-1/2"
                    >
                      <div
                        className={`
                          group
                          px-4
                          py-2
                          rounded-full
                          ${ring.bg}
                          ${ring.color}
                          border
                          border-foreground/10
                          backdrop-blur-xl
                          text-sm
                          font-medium
                          whitespace-nowrap
                          shadow-lg
                          ${ring.glow}
                          cursor-pointer
                          transition-all
                          duration-300
                          hover:scale-110
                          hover:border-primary/50
                          hover:bg-primary/15
                          hover:shadow-[0_0_25px_rgba(var(--primary-rgb),0.3)]
                        `}
                      >
                        {skill}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          ))}

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
        </div>

        {/* Mobile / Tablet */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {portfolioData.skills.map((skillGroup, index) => {
            const Icon =
              categoryIcons[
                skillGroup.category as keyof typeof categoryIcons
              ] || Code2;

            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-foreground/5 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={`${skill}-${i}`}
                      className="bg-foreground/5 hover:bg-primary/20 hover:text-primary transition-colors border border-foreground/5 px-3 py-1.5 text-sm rounded-lg text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};