"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const localeLabels: Record<Locale, string> = {
  fr: "FR",
  en: "EN",
  ee: "Ewe",
};

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 text-sm rounded transition-colors ${
            loc === locale
              ? "text-gold font-semibold"
              : "text-muted opacity-60 hover:opacity-100"
          }`}
          aria-label={`Switch to ${localeLabels[loc]}`}
        >
          {localeLabels[loc]}
        </button>
      ))}
    </div>
  );
}
