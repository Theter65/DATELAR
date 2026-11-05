import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between pt-28 pb-12 px-6 md:px-12 subtle-grid">
      {/* Top spacing */}
      <div className="w-full" />

      {/* Center / Main Hero Block */}
      <div className="max-w-4xl space-y-6">
        <p className="text-[11px] font-semibold tracking-[0.25em] text-neutral-400 uppercase">
          Ecosistema Tecnológico &middot; Seguridad, Control & Eficiencia
        </p>

        <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
          Soluciones de hardware y plataformas digitales que impulsan la seguridad y el control de tus operaciones.
        </h1>

        <p className="max-w-2xl text-base text-neutral-400 font-normal leading-relaxed">
          Protege tus vehículos con telemetría en tiempo real, agiliza el acceso a eventos sin filas ni fraudes y automatiza tus equipos con tecnología confiable y fácil de usar.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#sentnldrive"
            className="border border-white bg-white px-7 py-3 text-xs font-semibold tracking-[0.18em] text-black transition hover:bg-neutral-200 uppercase"
          >
            CONOCER SENTNLDRIVE (BETA)
          </a>
          <a
            href="#contacto"
            className="border border-white/40 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-white transition hover:border-white hover:bg-white/5 uppercase"
          >
            SOLICITAR INFORMACIÓN
          </a>
        </div>
      </div>

      {/* Bottom Minimal Specs / Status Bar (Starlink style) */}
      <div className="w-full pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 starlink-border-t pt-8">
          <div>
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
              Telemetría [BETA]
            </div>
            <div className="text-xl font-medium text-white mt-1">SENTNLDRIVE</div>
            <div className="text-xs text-neutral-400 mt-0.5">Seguridad vehicular & geocercas</div>
          </div>

          <a href="/access" className="block group transition">
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase group-hover:text-cyan-400 transition">
              Control de Accesos &rarr;
            </div>
            <div className="text-xl font-medium text-white mt-1 group-hover:text-cyan-400 transition">Datelar Access</div>
            <div className="text-xs text-neutral-400 mt-0.5">Entradas seguras sin colas</div>
          </a>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
              Dispositivos
            </div>
            <div className="text-xl font-medium text-white mt-1">Equipos a Medida</div>
            <div className="text-xs text-neutral-400 mt-0.5">Monitoreo & automatización</div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
              Innovación
            </div>
            <div className="text-xl font-medium text-white mt-1">Datelar Labs</div>
            <div className="text-xs text-neutral-400 mt-0.5">Software & utilidades prácticas</div>
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
