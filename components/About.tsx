"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AGCE_CONFIG } from "@/lib/constants";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="relative py-20 px-4 bg-navy-mid overflow-hidden">
      {/* Side accent glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(26,37,64,0.6)_0%,transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3">
            {t("title")}
          </h2>
          <p className="text-gold text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-[4/5] rounded-lg bg-navy-light border border-border-gold flex items-center justify-center"
          >
            <div className="text-center text-muted">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full border-2 border-gold/30 flex items-center justify-center">
                <span className="text-gold font-serif text-2xl font-bold">JA</span>
              </div>
              <p className="font-serif text-lg text-white-warm">{AGCE_CONFIG.fullName}</p>
              <p className="text-sm">Comptable</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-muted leading-relaxed mb-8">{t("description")}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-4 rounded-lg bg-navy-light/50 border border-border-gold text-center">
                <p className="text-2xl font-serif font-bold text-gold">40+</p>
                <p className="text-sm text-muted">{t("stats.clients")}</p>
              </div>
              <div className="p-4 rounded-lg bg-navy-light/50 border border-border-gold text-center">
                <p className="text-2xl font-serif font-bold text-gold">5+</p>
                <p className="text-sm text-muted">{t("stats.experience")}</p>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href={AGCE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir le profil LinkedIn de Joël ADJAKPLEY"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
