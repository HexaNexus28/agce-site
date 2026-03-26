"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("navbar");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-navy/80 border-b border-border-gold"
      aria-label="Navigation principale"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-9 h-9 border-2 border-gold rotate-45 flex items-center justify-center">
            <span className="text-gold font-serif font-bold text-sm -rotate-45">A</span>
          </div>
          <div className="leading-tight">
            <span className="text-white-warm font-serif font-bold text-lg tracking-wide">
              AGCE
            </span>
            <span className="hidden sm:block text-muted text-[10px] tracking-widest uppercase">
              Assistance de Gestion Comptable
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-muted hover:text-white-warm transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="#contact"
            className="px-4 py-2 bg-gold text-navy text-sm font-medium rounded hover:bg-gold-light transition-colors"
          >
            {t("cta")}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white-warm p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-mid border-b border-border-gold overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted hover:text-white-warm transition-colors"
                >
                  {t(link.key)}
                </a>
              ))}
              <LanguageSwitcher />
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-block text-center px-4 py-2 bg-gold text-navy font-medium rounded hover:bg-gold-light transition-colors"
              >
                {t("cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
