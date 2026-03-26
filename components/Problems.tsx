"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { PROBLEMS } from "@/lib/constants";

const icons = [
  // Briefcase
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /></svg>,
  // AlertTriangle
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
  // TrendingDown
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6" /><polyline points="17 18 23 18 23 12" /></svg>,
  // EyeOff
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></svg>,
];

export default function Problems() {
  const t = useTranslations("problems");

  return (
    <section className="relative py-20 px-4 bg-navy-mid overflow-hidden">
      {/* Subtle diagonal lines texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(135deg, rgba(201,168,76,0.5) 0px, transparent 1px, transparent 20px)",
        }}
      />
      {/* Soft glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.06)_0%,transparent_70%)]" />
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8 sm:mb-12"
        >
          {t("title")}
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-3 sm:gap-6 mb-8 sm:mb-12">
          {PROBLEMS.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-5 rounded-lg bg-navy-light/50 border border-border-gold text-left"
            >
              <div className="text-gold shrink-0">{icons[i]}</div>
              <p className="text-sm sm:text-base text-muted">{t(key)}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl font-serif font-bold text-gold"
        >
          {t("conclusion")}
        </motion.p>
      </div>
    </section>
  );
}
