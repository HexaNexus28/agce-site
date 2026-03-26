import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AGCE_CONFIG } from "@/lib/constants";
import "../globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(AGCE_CONFIG.domain),
    title: t("title"),
    description: t("description"),
    keywords: [
      "expert comptable Togo",
      "expert comptable Lomé",
      "cabinet comptable Lomé",
      "création entreprise Togo",
      "fiscalité Togo",
      "comptabilité TPE PME Togo",
      "gestion paie Togo",
      "AGCE",
    ],
    authors: [{ name: AGCE_CONFIG.cabinetName }],
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_TG" : locale === "en" ? "en_US" : "ee_GH",
      siteName: "AGCE",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: { index: true, follow: true },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: AGCE_CONFIG.cabinetName,
  description:
    "Cabinet comptable professionnel à Lomé, Togo. Services : comptabilité, création d'entreprise, fiscalité, gestion de paie.",
  telephone: ["+22897550977", "+22891559079"],
  email: AGCE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lomé",
    addressCountry: "TG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.1375,
    longitude: 1.2123,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
  sameAs: [AGCE_CONFIG.linkedin],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services AGCE",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Comptabilité & Gestion" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création d'Entreprise" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social & Paie" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fiscalité & Optimisation" } },
    ],
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
