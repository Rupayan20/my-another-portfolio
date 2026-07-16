import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Experience Column */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-3 mb-12"
            >
              <Briefcase className="text-primary" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            </motion.div>

            <div className="relative pl-8 border-l border-foreground/10 space-y-12">
              <motion.div 
                className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-primary origin-top"
                style={{ scaleY }}
              />
              {portfolioData.experience.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-primary/50 group-hover:border-primary group-hover:bg-primary/20 transition-colors" />
                  
                  <div className="glass-card p-6 md:p-7 rounded-2xl border border-foreground/5 group-hover:border-foreground/10 transition-colors text-left">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground leading-tight">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-foreground/5 border border-foreground/5 w-fit">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-7 text-left">{exp.description}</p>
                    
                    <ul className="list-disc pl-5 text-sm text-muted-foreground mb-6 space-y-2">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j}>{resp}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4 justify-start">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="text-xs px-3 py-1 rounded-md bg-foreground/5 text-foreground/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex-1" id="education">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center gap-3 mb-12"
            >
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
              <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
            </motion.div>

            <div className="relative pl-8 border-l border-foreground/10 space-y-12">
              <motion.div 
                className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-blue-600 dark:bg-blue-400 origin-top"
                style={{ scaleY }}
              />
              {portfolioData.education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-background border-2 border-blue-500/50 group-hover:border-blue-500 group-hover:bg-blue-500/20 transition-colors" />
                  
                  <div className="glass-card p-6 md:p-7 rounded-2xl border border-foreground/5 group-hover:border-foreground/10 transition-colors text-left">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground leading-tight">{edu.degree}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-muted-foreground px-3 py-1 rounded-full bg-foreground/5 border border-foreground/5 w-fit">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
