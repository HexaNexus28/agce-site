export const AGCE_CONFIG = {
  fullName: "Joël ADJAKPLEY",
  cabinetName: "AGCE — Assistance de Gestion Comptable des Entreprises",
  phone1: "+228 97 55 09 77",
  phone2: "+228 91 55 59 79",
  whatsapp1: "https://wa.me/22897550977",
  whatsapp2: "https://wa.me/22891559079",
  email: "madjakpley@gmail.com",
  linkedin: "https://linkedin.com/in/joël-mawulé-adjakpley-74141a221",
  domain: "https://agce.tg",
  address: "Lomé, Togo",
} as const;

export const NAV_LINKS = [
  { href: "#services", key: "services" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" },
] as const;

export const SERVICES = [
  {
    key: "accounting",
    icon: "BookOpen",
    items: ["accountingItem1", "accountingItem2", "accountingItem3"],
  },
  {
    key: "creation",
    icon: "Rocket",
    items: ["creationItem1", "creationItem2", "creationItem3"],
  },
  {
    key: "social",
    icon: "Users",
    items: ["socialItem1", "socialItem2", "socialItem3"],
  },
  {
    key: "tax",
    icon: "Shield",
    items: ["taxItem1", "taxItem2", "taxItem3"],
  },
] as const;

export const PROBLEMS = ["item1", "item2", "item3", "item4"] as const;
