"use client";

import { useTranslations } from "next-intl";
import { AGCE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("navbar");

  return (
    <footer className="relative py-12 px-4 bg-gradient-to-b from-navy-mid to-[#080c18] border-t border-border-gold">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10">
        {/* Logo / Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 border-2 border-gold rotate-45 flex items-center justify-center">
              <span className="text-gold font-serif font-bold text-xs -rotate-45">A</span>
            </div>
            <span className="font-serif font-bold text-lg text-white-warm">AGCE</span>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Assistance de Gestion Comptable des Entreprises
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-gold-pale mb-4 uppercase tracking-wider">
            {t("quickLinks")}
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-white-warm transition-colors"
                >
                  {tNav(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-gold-pale mb-4 uppercase tracking-wider">
            {t("contactUs")}
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href={`tel:${AGCE_CONFIG.phone1.replace(/\s/g, "")}`} className="hover:text-white-warm transition-colors">
                {AGCE_CONFIG.phone1}
              </a>
            </li>
            <li>
              <a href={`tel:${AGCE_CONFIG.phone2.replace(/\s/g, "")}`} className="hover:text-white-warm transition-colors">
                {AGCE_CONFIG.phone2}
              </a>
            </li>
            <li>
              <a href={`mailto:${AGCE_CONFIG.email}`} className="hover:text-white-warm transition-colors">
                {AGCE_CONFIG.email}
              </a>
            </li>
            <li>{AGCE_CONFIG.address}</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-border-gold text-center text-sm text-muted">
        {t("copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
