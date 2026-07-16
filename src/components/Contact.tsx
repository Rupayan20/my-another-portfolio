import { useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Download, ArrowRight, Mail, Linkedin, Github } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Contact = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="connect" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Resume Section */}
        <motion.div
          id="resume"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 mb-24 border border-foreground/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <FileText className="text-primary" />
                Complete Resume
              </h2>
              <p className="text-muted-foreground max-w-md">
                Want the complete overview of my experience, technical background, and project history?
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href={portfolioData.personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground font-medium hover:bg-foreground/10 transition-colors text-center"
              >
                View Resume
              </a>
              <a
                href={portfolioData.personal.resumeUrl}
                download
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:sticky lg:top-32 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8 mx-auto lg:mx-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-semibold tracking-wide uppercase">AVAILABLE FOR NEW PROJECTS</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-5 leading-tight">
              Let's Build a CRM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">That Works Smarter.</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Need a GoHighLevel expert for CRM automation, AI-powered workflows, integrations, or a custom website? Let's build a reliable system designed around your business and built to scale.
            </p>
            
            <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-3 p-4 sm:p-6 rounded-2xl glass-card border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-foreground group-hover:text-primary transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">Email Me</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm break-all">{portfolioData.personal.email}</p>
                </div>
                <ArrowRight className="ml-auto text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
              
              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 sm:p-6 rounded-2xl glass-card border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="text-foreground group-hover:text-primary transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm">Let's connect professionally</p>
                </div>
                <ArrowRight className="ml-auto text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
              
              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 sm:p-6 rounded-2xl glass-card border border-white/10 hover:border-primary/50 transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="text-foreground group-hover:text-primary transition-colors" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">GitHub</h3>
                  <p className="text-muted-foreground text-sm">Explore my code and contributions</p>
                </div>
                <ArrowRight className="ml-auto text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-2 md:p-4 rounded-3xl border border-foreground/10 relative mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50 rounded-3xl pointer-events-none" />
            <div 
              className="calendly-inline-widget w-full h-[520px] md:h-[700px] rounded-2xl overflow-hidden relative z-10 bg-background/50" 
              data-url="https://calendly.com/duttarupayan?hide_gdpr_banner=1&background_color=0f0f11&text_color=ffffff&primary_color=7c3aed"
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
