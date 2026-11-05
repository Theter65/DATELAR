import { ArrowUpRight, Code2 } from "lucide-react";

export function DatelarLabs() {
  const projects = [
    {
      title: "DATELAR ACCESS",
      category: "PRODUCTO DE DATELAR LABS",
      desc: "Solución completa para control de acceso, venta de entradas digitales y supervisión de aforo en eventos y recintos. Elimina las filas en las puertas, evita el fraude por reventa y funciona sin fallas incluso sin internet.",
      tag: "PLATAFORMA INSIGNIA",
      authorTag: "PRODUCTO DE DATELAR LABS",
    },
    {
      title: "MUSIC MUV",
      category: "DATELAR LABS // REPRODUCTOR DE AUDIO",
      desc: "Reproductor de música ligero, rápido y sin publicidad molesta. Diseñado para disfrutar de tus canciones favoritas con alta calidad de audio, navegación limpia y mínimo consumo de batería.",
      tag: "APLICACIÓN",
      authorTag: "POR GERARDO GONZA",
    },
    {
      title: "TELECOM TOOLS SUITE",
      category: "DATELAR LABS // TELECOMUNICACIONES",
      desc: "Colección práctica de herramientas y calculadoras para ingenieros y técnicos: cálculo de cobertura inalámbrica, estimación de enlaces de fibra óptica y planificación de redes.",
      tag: "UTILIDADES PRÁCTICAS",
      authorTag: "POR GERARDO GONZA",
    },
    {
      title: "EMBEDDED DEV SCRIPTS",
      category: "DATELAR LABS // DISPOSITIVOS & SENSORES",
      desc: "Herramientas de verificación y diagnóstico para asegurar que los sensores y equipos de campo transmitan datos confiables antes de su instalación final.",
      tag: "HERRAMIENTAS",
      authorTag: "POR GERARDO GONZA",
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
            04 &middot; Innovación & Aplicaciones
          </span>

          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            DATELAR LABS
          </h2>

          <p className="text-base text-neutral-300 font-normal leading-relaxed">
            El laboratorio de innovación y software de Datelar. Desarrollamos aplicaciones especializadas y herramientas útiles pensadas para resolver problemas concretos de forma sencilla y eficiente.
          </p>
        </div>

        <div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-5 py-2.5 text-xs font-medium tracking-[0.15em] text-white transition hover:border-white hover:bg-white hover:text-black uppercase"
          >
            <Code2 className="h-4 w-4" />
            <span>SOLICITAR MÁS INFORMACIÓN</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Grid of Projects (2x2 layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item) => (
          <div
            key={item.title}
            className="border border-white/10 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition"
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
              <span className="text-neutral-300">ESTADO: ACTIVO // DISPONIBLE</span>
              <span className="text-[10px] text-neutral-500 uppercase">{item.authorTag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Direct, clean attribution as requested: División de Datelar Labs creada por Gerardo Gonza */}
      <div className="mt-12 border border-white/15 bg-neutral-950 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div>
            <div className="text-white font-medium text-sm tracking-wide uppercase">
              DIVISIÓN DE DATELAR LABS CREADA POR GERARDO GONZA
            </div>
            <div className="text-neutral-400 text-xs mt-1 font-sans">
              Espacio dedicado a la creación de plataformas digitales, aplicaciones y herramientas funcionales dentro de Datelar.
            </div>
          </div>
          <div className="text-neutral-500 text-[10px] tracking-widest uppercase sm:text-right whitespace-nowrap">
            DATELAR LABS // INNOVACIÓN PRÁCTICA
          </div>
        </div>
      </div>
    </section>
  );
}
