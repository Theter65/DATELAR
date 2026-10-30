import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MissionVision } from "@/components/mission-vision";
import { Products } from "@/components/products";
import { DatelarLabs } from "@/components/datelar-labs";
import { Founders } from "@/components/founders";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060a12] text-[#f3f1ea] tech-grid-bg">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="mx-auto flex w-full max-w-7xl flex-col px-6 lg:px-10">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Misión, Visión & Métricas */}
        <MissionVision />

        {/* 3. Productos Principales (Sentinel Drive, Accesos QR, Hardware IoT) */}
        <Products />

        {/* 4. Datelar Labs (Music Muv, Telecom Tools, Open Source por Gerardo Gonza) */}
        <DatelarLabs />

        {/* 5. Equipo Fundador (Elio Romero & Gerardo Gonza) */}
        <Founders />

        {/* 6. Formulario de Contacto & Cotizador */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
