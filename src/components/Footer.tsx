import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-background py-12 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tighter text-foreground mb-1">
            {portfolioData.personal.name}
          </span>
          <span className="text-sm text-muted-foreground">
            {portfolioData.personal.headline}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a href={portfolioData.personal.socials.linkedin} className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded-full">
            <Linkedin size={20} />
          </a>
          <a href={portfolioData.personal.socials.github} className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded-full">
            <Github size={20} />
          </a>
          <a href={`mailto:${portfolioData.personal.email}`} className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded-full">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-muted-foreground flex flex-col items-center md:items-end">
          <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          <span className="text-xs text-primary/60 mt-1">Built with logic. Automated for scale.</span>
        </div>
      </div>
    </footer>
  );
};
