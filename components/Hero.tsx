"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AGCE_CONFIG } from "@/lib/constants";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient base — warm navy to deep navy */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1428] via-navy to-[#080c18]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Central gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_400px_at_50%_40%,rgba(201,168,76,0.12)_0%,transparent_70%)]" />

      {/* Top-left accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_10%_20%,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

      {/* Bottom-right accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_300px_at_85%_75%,rgba(26,37,64,0.8)_0%,transparent_60%)]" />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-mid to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24 pb-12 sm:pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 sm:mb-8"
        >
          <span className="px-3 py-1 sm:px-4 sm:py-1.5 border border-gold/30 rounded-full text-gold text-xs sm:text-sm tracking-wide">
            {t("badge")}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight"
        >
          {t("title")}{" "}
          <em className="text-gold not-italic font-serif italic">{t("titleHighlight")}</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-muted max-w-xl mx-auto"
        >
          {t("subtitle")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href={AGCE_CONFIG.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prendre rendez-vous via WhatsApp"
            className="w-full sm:w-auto px-6 py-3 bg-gold text-navy text-sm sm:text-base font-medium rounded hover:bg-gold-light transition-colors text-center"
          >
            {t("ctaPrimary")}
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-6 py-3 border border-gold/30 text-gold text-sm sm:text-base rounded hover:bg-gold/10 transition-colors text-center"
          >
            {t("ctaSecondary")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
