import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Problems />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
