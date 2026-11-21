import { ArrowDown } from "lucide-react";
import { APP_LINKS } from "@/config/links";
import { BackgroundSlideshow } from "./background-slideshow";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=80",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden">
      {/* Fondo dinámico de imágenes de tecnología y soluciones */}
      <BackgroundSlideshow
        images={HERO_IMAGES}
        intervalMs={6000}
        overlayClassName="bg-white/85 dark:bg-black/85 backdrop-blur-[1px]"
      />

      {/* Top spacing */}
      <div className="w-full" />

      {/* Center / Main Hero Block */}
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white sm:text-6xl lg:text-7xl leading-[1.05]">
          Hardware y plataformas digitales de alta confiabilidad.
        </h1>

        <p className="max-w-xl text-base text-neutral-700 dark:text-neutral-300 font-normal leading-relaxed">
          Telemetría vehicular satelital, validación de accesos sin colas y automatización industrial a medida.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={APP_LINKS.sentnldrive}
            className="border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 px-7 py-3 text-xs font-semibold tracking-[0.18em] transition uppercase"
          >
            INGRESAR A SENTNLDRIVE &rarr;
          </a>
          <a
            href="#contacto"
            className="border border-neutral-300 dark:border-white/40 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] transition uppercase"
          >
            CONTACTO
          </a>
        </div>
      </div>

      {/* Bottom Minimal Specs / Status Bar (Starlink style) */}
      <div className="w-full pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 starlink-border-t pt-8">
          <a href={APP_LINKS.sentnldrive} className="block group transition">
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase group-hover:text-black dark:group-hover:text-neutral-300 transition">
              Telemetría [BETA] &rarr;
            </div>
            <div className="text-xl font-medium text-neutral-900 dark:text-white mt-1 group-hover:text-black dark:group-hover:text-neutral-300 transition">SENTNLDRIVE</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Monitoreo GPS & eventos de riesgo</div>
          </a>

          <a href={APP_LINKS.access} className="block group transition">
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase group-hover:text-black dark:group-hover:text-neutral-300 transition">
              Control de Accesos &rarr;
            </div>
            <div className="text-xl font-medium text-neutral-900 dark:text-white mt-1 group-hover:text-black dark:group-hover:text-neutral-300 transition">Datelar Access</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Entradas seguras sin colas</div>
          </a>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
              Dispositivos
            </div>
            <div className="text-xl font-medium text-neutral-900 dark:text-white mt-1">Equipos a Medida</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Monitoreo & automatización</div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
              Innovación
            </div>
            <div className="text-xl font-medium text-neutral-900 dark:text-white mt-1">Datelar Labs</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Software & utilidades prácticas</div>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <a
            href="#sentnldrive"
            className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-neutral-500 hover:text-white uppercase transition"
          >
            <span>DESPLAZAR</span>
            <ArrowDown className="h-3 w-3 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
