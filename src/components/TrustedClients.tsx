import { motion } from "framer-motion";

const logos = [
  "../images/Asphalt_Logo.jpg",
  "../images/Royalty_Renewables_Logo.jpg",
  "../images/Blackwire_Studio_Logo2.jpg",
  "../images/John_Dally_Logo.png",
  "../images/Arrington_Consulting_Logo.png",
  "../images/Truthful_Kernel_Logo.jpeg",
  "../images/FuzeAI_Logo.png",
  "../images/Active_Solutions_Logo.jpg",
  "../images/ConvoGPT_Logo.png",
  "../images/ProTechnical_Genius_Logo.jpg",
  "../images/R_Dynamics_Logo.png",
];

export const TrustedClients = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold uppercase tracking-[0.35em] text-sm mb-3">
            Trusted by Clients
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Companies I've Worked With
          </h2>

          <div className="w-20 h-1 bg-primary rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: .97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="relative rounded-3xl border border-border bg-card/70 backdrop-blur-xl shadow-xl overflow-hidden py-10"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-background via-background/80 to-transparent z-20" />

          <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-background via-background/80 to-transparent z-20" />

          <div className="marquee flex w-max items-center gap-20 px-10">
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.12,
                  y: -8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="group flex h-24 w-44 items-center justify-center rounded-2xl border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <img
                  src={logo}
                  loading="lazy"
                  alt={`Client ${index + 1}`}
                  className="max-h-14 w-auto grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedClients;