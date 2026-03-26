"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { AGCE_CONFIG } from "@/lib/constants";

export default function ContactCTA() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0d1428] to-navy-mid" />
      {/* Central warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[radial-gradient(ellipse,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
      {/* Subtle border-like top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-muted text-lg mb-10">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href={AGCE_CONFIG.whatsapp1}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter via WhatsApp ligne principale"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 bg-[#25D366] text-white font-medium rounded hover:bg-[#20bd5a] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            {t("whatsappPrimary")}
          </a>
          <a
            href={AGCE_CONFIG.whatsapp2}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter via WhatsApp ligne secondaire"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3.5 border border-gold/30 text-gold rounded hover:bg-gold/10 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
            </svg>
            {t("whatsappSecondary")}
          </a>
        </motion.div>

        {/* Simple contact form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-md mx-auto space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const name = (form.elements.namedItem("name") as HTMLInputElement).value;
            const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
            const text = `Bonjour, je suis ${name}. ${message}`;
            window.open(
              `${AGCE_CONFIG.whatsapp1}?text=${encodeURIComponent(text)}`,
              "_blank"
            );
          }}
        >
          <input
            name="name"
            type="text"
            required
            placeholder={t("formName")}
            className="w-full px-4 py-3 bg-navy-light/50 border border-border-gold rounded text-white-warm placeholder:text-muted/50 focus:border-gold/50 focus:outline-none transition-colors"
          />
          <input
            name="contact"
            type="text"
            placeholder={t("formEmail")}
            className="w-full px-4 py-3 bg-navy-light/50 border border-border-gold rounded text-white-warm placeholder:text-muted/50 focus:border-gold/50 focus:outline-none transition-colors"
          />
          <textarea
            name="message"
            rows={3}
            required
            placeholder={t("formMessage")}
            className="w-full px-4 py-3 bg-navy-light/50 border border-border-gold rounded text-white-warm placeholder:text-muted/50 focus:border-gold/50 focus:outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gold text-navy font-medium rounded hover:bg-gold-light transition-colors"
          >
            {t("formSubmit")}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
