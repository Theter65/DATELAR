import { ArrowUpRight, Code2 } from "lucide-react";

export function DatelarLabs() {
  const projects = [
    {
      title: "MUSIC MUV",
      category: "DATELAR LABS // AUDIO ENGINE",
      desc: "Reproductor de audio minimalista de código abierto concebido y desarrollado por Gerardo Gonza. Enfoque en ultra-bajo consumo de memoria, decodificación limpia y fidelidad acústica sin dependencias invasivas.",
      tag: "CORE APP",
    },
    {
      title: "TELECOM TOOLS SUITE",
      category: "DATELAR LABS // TELECOM & RF",
      desc: "Colección integral de herramientas de cálculo de ingeniería desarrollada por Gerardo Gonza: balance de enlace satelital y terrestre, presupuesto de potencia óptica (FTTH) y subneteo IP.",
      tag: "FIELD UTILITIES",
    },
    {
      title: "EMBEDDED DEV SCRIPTS",
      category: "DATELAR LABS // HARDWARE & IOT",
      desc: "Suite de utilidades para análisis de protocolos seriales (UART/SPI/I2C), emulación de sensores industriales y validación de tramas de telemetría, creada por Gerardo Gonza.",
      tag: "OPEN SCRIPTS",
    },
  ];

  return (
    <section
      id="datelar-labs"
      className="relative flex min-h-[85vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div className="space-y-4 max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            04 &middot; División de Software & Innovación
          </span>

          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            DATELAR LABS
          </h2>

          <p className="text-base text-neutral-300 font-normal leading-relaxed">
            División de software, experimentación técnica y utilidades de ingeniería creadas por <strong>Gerardo Gonza</strong> dentro del ecosistema Datelar. Un laboratorio dedicado al desarrollo de aplicaciones especializadas y código de alto rendimiento.
          </p>
        </div>

        <div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-5 py-2.5 text-xs font-medium tracking-[0.15em] text-white transition hover:border-white hover:bg-white hover:text-black uppercase"
          >
            <Code2 className="h-4 w-4" />
            <span>SOLICITAR ACCESO AL CÓDIGO</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((item) => (
          <div
            key={item.title}
            className="border border-white/10 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 tracking-wider">
                <span>{item.category}</span>
                <span className="text-neutral-400 border border-white/10 px-1.5 py-0.5">{item.tag}</span>
              </div>
              <h3 className="text-2xl font-medium text-white tracking-wide">{item.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">{item.desc}</p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-400">
              <span>ESTADO: ACTIVO // DISPONIBLE</span>
              <span className="text-[10px] text-neutral-500">POR GERARDO GONZA</span>
            </div>
          </div>
        ))}
      </div>

      {/* Direct, clean attribution as requested */}
      <div className="mt-12 border border-white/15 bg-neutral-950 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div>
            <div className="text-white font-medium text-sm tracking-wide">
              DATELAR LABS &middot; DIVISIÓN CREADA Y DESARROLLADA POR GERARDO GONZA
            </div>
            <div className="text-neutral-400 text-xs mt-1 font-sans">
              Todos los proyectos, utilidades y aplicaciones de este laboratorio han sido desarrollados por Gerardo Gonza como parte del portafolio tecnológico de Datelar.
            </div>
          </div>
          <div className="text-neutral-500 text-[10px] tracking-widest uppercase sm:text-right whitespace-nowrap">
            DATELAR LABS // UNL INGENIERÍA
          </div>
        </div>
      </div>
    </section>
  );
}
