import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { DatelarLabs } from "@/components/datelar-labs";
import { MissionVision } from "@/components/mission-vision";
import { Founders } from "@/components/founders";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black text-neutral-900 dark:text-white selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-200">
      {/* Top Starlink-style Minimalist Navbar */}
      <Navbar />

      {/* Main Full-Width Content */}
      <main className="w-full flex flex-col">
        {/* 1. Full-Screen Immersive Hero */}
        <Hero />

        {/* 2. Core Chapter Products (Sentinel Drive, Accesos QR, Hardware IoT) */}
        <Products />

        {/* 3. Datelar Labs (Music Muv, Telecom Suite, Open Source por Gerardo Gonza) */}
        <DatelarLabs />

        {/* 4. Misión & Visión */}
        <MissionVision />

        {/* 5. Equipo Fundador (Elio Romero & Gerardo Gonza) */}
        <Founders />

        {/* 6. Formulario de Contacto & Cotizaciones */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
