# CLAUDE.md — Projet Site Vitrine AGCE

> Ce fichier est la source de vérité unique pour Claude Code sur ce projet.
> Lire en entier avant toute action. Ne jamais modifier l'architecture sans valider ici d'abord.

---

## 1. Contexte Projet

**Client** : Joël [NOM_A_RENSEIGNER], Expert-Comptable Junior  
**Cabinet** : AGCE — Assistance de Gestion Comptable des Entreprises  
**Localisation** : Lomé, Togo  
**Téléphones** : +228 97 55 09 77 / +228 91 55 59 79  
**Email contact** : [EMAIL_A_RENSEIGNER]  
**LinkedIn** : [URL_A_RENSEIGNER]

**Objectif** : Site vitrine professionnel pour accroître la visibilité locale et nationale,
générer des leads qualifiés (dirigeants/entrepreneurs togolais), et asseoir la crédibilité du cabinet.

**Public cible** : TPE/PME togolaises, entrepreneurs, dirigeants cherchant à externaliser
leur comptabilité ou créer leur entreprise en toute sérénité.

---

## 2. Stack Technique

```
Framework   : Next.js 16 (App Router)
Language    : TypeScript strict
Styling     : Tailwind CSS v4
Animation   : Framer Motion
Fonts       : Google Fonts (Cormorant Garamond + DM Sans)
Deployment  : Vercel (free tier)
Forms       : React Hook Form + Zod
Contact     : WhatsApp wa.me link + (optionnel) Resend pour email
SEO         : next/metadata API, JSON-LD, sitemap, robots
i18n        : next-intl (FR default, EN, Ewe)
```

**Aucune base de données.** Site statique/SSG uniquement. Pas de CMS pour l'instant.

---

## 3. Structure du Projet

```
agce-site/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx      ← RootLayout + metadata globale + JSON-LD LocalBusiness
│   │   └── page.tsx        ← One-page : composition des sections
│   ├── globals.css         ← Variables CSS + reset + fonts
│   ├── sitemap.ts          ← Sitemap auto-généré
│   └── robots.ts           ← robots.txt
├── components/
│   ├── Navbar.tsx          ← Navigation fixe + CTA "1er RDV Offert" + language switcher
│   ├── Hero.tsx            ← Accroche principale + badge + CTA WhatsApp
│   ├── Problems.tsx        ← Pain points des dirigeants (4 items)
│   ├── Services.tsx        ← 4 services : Comptabilité, Création, Social/Paie, Fiscalité
│   ├── About.tsx           ← Présentation Joël + valeurs AGCE
│   ├── Testimonials.tsx    ← (optionnel phase 2) Avis clients
│   ├── ContactCTA.tsx      ← Section finale + boutons WhatsApp + formulaire
│   ├── Footer.tsx          ← Liens légaux + contacts + réseaux
│   └── LanguageSwitcher.tsx ← Sélecteur FR/EN/Ewe
├── i18n/
│   ├── routing.ts          ← Config routing next-intl (locales, defaultLocale)
│   └── request.ts          ← Config serveur next-intl (getRequestConfig)
├── messages/
│   ├── fr.json             ← Traductions françaises (langue par défaut)
│   ├── en.json             ← Traductions anglaises
│   └── ee.json             ← Traductions en Ewe (langue locale togolaise)
├── lib/
│   ├── seo.ts              ← Helpers generateMetadata + JSON-LD schemas
│   └── constants.ts        ← Données statiques (services, contacts, etc.)
├── public/
│   ├── logo-agce.svg       ← Logo AGCE vectoriel
│   ├── og-image.png        ← Image Open Graph (1200x630)
│   └── favicon.ico
├── types/
│   └── index.ts            ← Types TypeScript partagés
├── middleware.ts            ← Middleware next-intl (locale detection + redirect)
├── CLAUDE.md               ← CE FICHIER
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## 4. SEO — Spécifications Complètes

### 4.1 Metadata globale (layout.tsx)

```typescript
export const metadata: Metadata = {
  title: {
    default: "AGCE — Expert-Comptable à Lomé | Gestion Comptable des Entreprises au Togo",
    template: "%s | AGCE Togo"
  },
  description: "Cabinet comptable professionnel à Lomé. Comptabilité, création d'entreprise, fiscalité et gestion de paie pour TPE/PME au Togo. 1er rendez-vous conseil offert.",
  keywords: [
    "expert comptable Togo",
    "expert comptable Lomé",
    "cabinet comptable Lomé",
    "création entreprise Togo",
    "fiscalité Togo",
    "comptabilité TPE PME Togo",
    "gestion paie Togo",
    "AGCE",
    "CNSS Togo",
    "déclaration fiscale Togo"
  ],
  authors: [{ name: "AGCE — Assistance de Gestion Comptable des Entreprises" }],
  openGraph: {
    type: "website",
    locale: "fr_TG",
    url: "https://[DOMAINE_A_RENSEIGNER]",
    siteName: "AGCE",
    title: "AGCE — Expert-Comptable à Lomé, Togo",
    description: "Confiez votre comptabilité à des professionnels. Création d'entreprise, fiscalité, gestion de paie. 1er RDV offert.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AGCE Cabinet Comptable Lomé Togo" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AGCE — Expert-Comptable Lomé Togo",
    description: "Cabinet comptable professionnel. 1er rendez-vous conseil offert.",
    images: ["/og-image.png"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://[DOMAINE_A_RENSEIGNER]" }
}
```

### 4.2 JSON-LD Schema (LocalBusiness)

À injecter dans `layout.tsx` via `<script type="application/ld+json">` :

```json
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "AGCE — Assistance de Gestion Comptable des Entreprises",
  "description": "Cabinet comptable professionnel à Lomé, Togo. Services : comptabilité, création d'entreprise, fiscalité, gestion de paie.",
  "url": "https://[DOMAINE]",
  "telephone": ["+22897550977", "+22891559079"],
  "email": "[EMAIL]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Lomé",
    "addressCountry": "TG"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.1375,
    "longitude": 1.2123
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "sameAs": ["[LINKEDIN_URL]"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services AGCE",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Comptabilité & Gestion" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Création d'Entreprise" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social & Paie" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fiscalité & Optimisation" } }
    ]
  }
}
```

### 4.3 sitemap.ts

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://[DOMAINE]',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    }
  ]
}
```

### 4.4 robots.ts

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://[DOMAINE]/sitemap.xml',
  }
}
```

### 4.5 Règles HTML sémantique

- `<main>` unique par page
- Une seule balise `<h1>` (dans Hero)
- Hiérarchie stricte : h1 → h2 (titres sections) → h3 (sous-titres services)
- Toutes les images avec `alt` descriptif (pas "image1.jpg")
- `<nav>` avec `aria-label="Navigation principale"`
- Liens WhatsApp avec `aria-label` explicite

---

## 5. Design System

### Palette de couleurs

```css
:root {
  --navy:       #0a0f1e;   /* fond principal */
  --navy-mid:   #111829;   /* fond secondaire */
  --navy-light: #1a2540;   /* cards/surfaces */
  --gold:       #c9a84c;   /* accent principal */
  --gold-light: #e8c97a;   /* hover states */
  --gold-pale:  #f5e6c0;   /* texte sur fond sombre */
  --white:      #f8f6f0;   /* texte principal */
  --muted:      #8a9ab5;   /* texte secondaire */
  --border:     rgba(201,168,76,0.15); /* bordures subtiles */
}
```

### Typographie

```
Display/Titres : Cormorant Garamond (serif) — weights: 400, 600, 700
Corps/UI :       DM Sans — weights: 300, 400, 500
```

**Règle** : Jamais Inter, Roboto, Arial. Jamais de gradient purple générique.

### Aesthetic Direction

**Luxury africaine sobre** — dark navy profond, accents or discrets, typographie serif élégante.
Sobre = crédibilité. Crédibilité = conversion pour un cabinet comptable.

### Tailwind Config (extrait)

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      navy: { DEFAULT: '#0a0f1e', mid: '#111829', light: '#1a2540' },
      gold: { DEFAULT: '#c9a84c', light: '#e8c97a', pale: '#f5e6c0' },
    },
    fontFamily: {
      serif: ['Cormorant Garamond', 'serif'],
      sans: ['DM Sans', 'sans-serif'],
    }
  }
}
```

---

## 6. Sections — Spécifications Détaillées

### 6.1 Navbar

- Fixed top, backdrop-blur, border-bottom gold/15%
- Logo : octogone gold + "AGCE" + sous-titre "ASSISTANCE DE GESTION COMPTABLE"
- Links : Services · À propos · Contact (smooth scroll)
- CTA : bouton "1er RDV Offert" → scroll vers #contact
- Mobile : hamburger menu (Framer Motion slide-in)

### 6.2 Hero

- Badge animé : "1er rendez-vous conseil offert"
- H1 : "Développez votre entreprise **en toute sérénité**"  
  (le mot "sérénité" en italic gold — Cormorant Garamond)
- Sous-titre : "Confiez votre comptabilité à des professionnels et concentrez-vous sur votre croissance."
- CTA primaire : "Prendre rendez-vous" → lien WhatsApp wa.me/22897550977
- CTA secondaire : "Découvrir nos services" → scroll #services
- Background : grid subtile gold + radial gradient

### 6.3 Problems (section pain points)

Titre : "Vous êtes entrepreneur ou dirigeant ?"

4 items avec icône + texte :
1. Trop de charges administratives ?
2. Peur des erreurs fiscales ?
3. Difficulté à suivre votre trésorerie ?
4. Manque de visibilité sur vos performances ?

Conclusion : "**AGCE est la solution.**"

### 6.4 Services

4 cards avec icône + titre + liste de bullet points :

| Service | Items |
|---------|-------|
| Comptabilité & Gestion | Tenue comptable rigoureuse, États financiers fiables, Accompagnement stratégique |
| Création d'Entreprise | Formalités complètes, Conseil sur le meilleur statut, Accompagnement stratégique dès le départ |
| Social & Paie | Bulletins de paie conformes, Déclarations CNSS, Gestion administrative du personnel |
| Fiscalité & Optimisation | Déclarations fiscales sécurisées, Réduction légale de la pression fiscale, Assistance en cas de contrôle |

### 6.5 About

- Photo de Joël (placeholder si non fournie)
- Texte : présentation, formation, expertise junior mais sérieux
- Stats : ex. "40+ clients accompagnés", "5 ans d'expérience", etc. (à valider avec Joël)
- LinkedIn CTA

### 6.6 ContactCTA

- Titre : "Votre 1er rendez-vous conseil est offert"
- Sous-titre : "Beaucoup d'entreprises paient des pénalités fiscales sans le savoir. Êtes-vous vraiment à jour ?"
- Bouton principal : WhatsApp +228 97 55 09 77
- Bouton secondaire : WhatsApp +228 91 55 59 79
- Formulaire simple (optionnel) : Nom, Email/WhatsApp, Message → Resend ou wa.me prefill

### 6.7 Footer

- Logo AGCE
- Liens rapides (smooth scroll)
- Contacts (téléphones, email, LinkedIn)
- Mention légale minimale
- Copyright AGCE [ANNÉE]

---

## 7. Performance & Core Web Vitals

- `next/image` obligatoire pour toutes les images (lazy loading + WebP auto)
- `next/font` pour charger Cormorant Garamond + DM Sans (pas de Google Fonts CDN)
- `loading="lazy"` sur sections hors viewport
- Animations Framer Motion avec `viewport={{ once: true }}` (pas de replay)
- Pas de JS inutile : 0 dépendances non essentielles
- Target : LCP < 2.5s, CLS < 0.1, FID < 100ms

---

## 8. Internationalisation (i18n)

### 8.1 Configuration

```
Librairie       : next-intl
Locales         : fr (défaut), en, ee (Ewe)
Stratégie URL   : /fr/... , /en/... , /ee/...
Défaut          : fr (sans préfixe — prefix "as-needed")
Détection       : Accept-Language header via middleware
```

### 8.2 Langues supportées

| Code | Langue   | Contexte                                              |
|------|----------|-------------------------------------------------------|
| `fr` | Français | Langue par défaut. Langue officielle du Togo.         |
| `en` | English  | Pour la diaspora et clients internationaux.           |
| `ee` | Ewe      | Langue locale principale (sud Togo / région Maritime). |

### 8.3 Architecture i18n

- **`i18n/routing.ts`** : Définit les locales, defaultLocale, et le pathnames config
- **`i18n/request.ts`** : `getRequestConfig` pour charger les messages côté serveur
- **`middleware.ts`** : Détection de locale + redirection automatique
- **`messages/{locale}.json`** : Fichiers de traduction par locale
- **`app/[locale]/layout.tsx`** : Layout avec `NextIntlClientProvider`
- **`components/LanguageSwitcher.tsx`** : Sélecteur de langue (client component)

### 8.4 Conventions traductions

```
- Clés organisées par section : navbar, hero, problems, services, about, contact, footer, common
- Clés en camelCase anglais : hero.mainTitle, services.accountingTitle
- Interpolation next-intl : {variable} dans les valeurs
- Pluralisation next-intl si besoin : {count, plural, one {# client} other {# clients}}
- Pas de HTML dans les traductions — utiliser Rich Text markup de next-intl si nécessaire
```

### 8.5 SEO multilingue

- `<html lang={locale}>` dynamique via layout
- `alternates.languages` dans metadata pour hreflang
- Sitemap avec entrées par locale
- Open Graph locale dynamique : `fr_TG`, `en_US`, `ee_GH`

### 8.6 Règles pour les composants

```typescript
// Server Components : utiliser getTranslations()
const t = await getTranslations('hero');

// Client Components : utiliser useTranslations()
const t = useTranslations('hero');

// Navigation : utiliser useRouter/Link de next-intl (pas next/navigation directement)
import { Link, useRouter } from '@/i18n/routing';
```

---

## 9. Workflow Claude Code

### Règle d'or

> **Audit before fix.** Toujours reporter ce qui va être modifié avant de toucher au code.
> Jamais de changement silencieux.

### Séquence de génération recommandée

1. `i18n/routing.ts` + `i18n/request.ts` — config next-intl
2. `middleware.ts` — locale detection
3. `messages/fr.json` + `messages/en.json` + `messages/ee.json` — traductions
4. `constants.ts` — données statiques (services, contacts, textes)
5. `seo.ts` — helpers metadata + JSON-LD
6. `app/[locale]/layout.tsx` — RootLayout + fonts + metadata + NextIntlClientProvider
7. `globals.css` — variables CSS + reset
8. `tailwind.config.ts` — config couleurs/fonts
9. `Navbar.tsx` + `LanguageSwitcher.tsx`
10. `Hero.tsx`
11. `Problems.tsx`
12. `Services.tsx`
13. `About.tsx`
14. `ContactCTA.tsx`
15. `Footer.tsx`
16. `app/[locale]/page.tsx` — assemblage final
17. `sitemap.ts` + `robots.ts`

### Conventions de code

```typescript
// Toujours TypeScript strict
// Props typées explicitement, jamais de `any`
// Composants fonctionnels uniquement (pas de class components)
// Framer Motion : variants définis en dehors du JSX
// Tailwind : pas de style inline sauf Framer Motion values
// Images : toujours next/image avec width/height explicites
```

---

## 10. Variables à Renseigner

Avant de builder, remplir ces valeurs dans `lib/constants.ts` :

```typescript
export const AGCE_CONFIG = {
  fullName: "Joël ADJAKPLEY",
  phone1: "+22897550977",
  phone2: "+22891559079",
  whatsapp1: "https://wa.me/22897550977",
  whatsapp2: "https://wa.me/22891559079",
  email: "madjakpley@gmail.com",
  linkedin: "linkedin.com/in/joël-mawulé-adjakpley-74141a221",
  domain: "[DOMAINE_FINAL]",
  address: "Lomé, Togo",
  foundedYear: "[ANNEE]",
}
```

---

## 11. Déploiement Vercel

```bash
# Init projet
npx create-next-app@latest agce-site --typescript --tailwind --app --src-dir false

# Install dépendances
npm install framer-motion react-hook-form zod next-intl

# Dev
npm run dev

# Build check (avant push)
npm run build

# Deploy
vercel --prod
```

**Domaine custom** : Configurer dans Vercel Dashboard → Domains → ajouter [DOMAINE].
DNS : ajouter un A record `76.76.21.21` chez le registrar.

---

## 12. Priorités Phase 1 (MVP)

- [x] Spécifications CLAUDE.md
- [ ] Scaffold Next.js 16 + config
- [ ] constants.ts + seo.ts
- [x] i18n setup (next-intl : FR/EN/Ewe)
- [ ] layout.tsx (metadata + JSON-LD)
- [ ] Tous les composants UI
- [ ] page.tsx assemblé
- [ ] sitemap + robots
- [ ] Google Business Profile (hors code — action manuelle Joël)
- [ ] WhatsApp Business setup (hors code)

## Phase 2 (post-launch)

- [ ] Section témoignages clients
- [ ] Blog/ressources (route /blog avec MDX)
- [ ] Formulaire de diagnostic fiscal (lead magnet)
- [ ] Analytics (Plausible ou Vercel Analytics — RGPD friendly)