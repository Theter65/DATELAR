import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between pt-28 pb-12 px-6 md:px-12 subtle-grid">
      {/* Top spacing */}
      <div className="w-full" />

      {/* Center / Main Hero Block */}
      <div className="max-w-4xl space-y-6">
        <p className="text-[11px] font-semibold tracking-[0.25em] text-neutral-400 uppercase">
          Ecosistema Tecnológico &middot; Hardware & Software
        </p>

        <h1 className="text-4xl font-medium tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.05]">
          Soluciones de hardware IoT y software que transforman datos en decisiones operativas eficientes.
        </h1>

        <p className="max-w-2xl text-base text-neutral-400 font-normal leading-relaxed">
          Diseñamos y desplegamos infraestructura tecnológica de alta precisión: telemetría vehicular con SENTNLDRIVE (actualmente en fase beta), control de accesos QR y hardware industrial a medida.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href="#sentnldrive"
            className="border border-white bg-white px-7 py-3 text-xs font-semibold tracking-[0.18em] text-black transition hover:bg-neutral-200 uppercase"
          >
            EXPLORAR SENTNLDRIVE (BETA)
          </a>
          <a
            href="#contacto"
            className="border border-white/40 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-white transition hover:border-white hover:bg-white/5 uppercase"
          >
            SOLICITAR ASESORÍA
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
            <div className="text-xs text-neutral-400 mt-0.5">Rastreo GPS & Geocercas</div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
              Control de Accesos
            </div>
            <div className="text-xl font-medium text-white mt-1">Datelar Access</div>
            <div className="text-xs text-neutral-400 mt-0.5">QR dinámico & aforo</div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
              Ingeniería
            </div>
            <div className="text-xl font-medium text-white mt-1">IoT & Hardware</div>
            <div className="text-xs text-neutral-400 mt-0.5">Diseño PCB & firmware</div>
          </div>

          <div>
            <div className="text-xs font-medium tracking-[0.15em] text-neutral-500 uppercase">
              Código Abierto
            </div>
            <div className="text-xl font-medium text-white mt-1">Datelar Labs</div>
            <div className="text-xs text-neutral-400 mt-0.5">Music Muv & Telecom</div>
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
