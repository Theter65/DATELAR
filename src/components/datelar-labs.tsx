import { GithubIcon } from "./social-icons";
import { ArrowUpRight } from "lucide-react";

export function DatelarLabs() {
  const projects = [
    {
      title: "MUSIC MUV",
      category: "AUDIO PLAYER // OPEN SOURCE",
      desc: "Reproductor de audio minimalista de código abierto. Alto rendimiento, renderizado limpio y cero publicidad o consumo innecesario de recursos.",
      tag: "CORE APP",
    },
    {
      title: "TELECOM TOOLS SUITE",
      category: "INGENIERÍA // REDES & RF",
      desc: "Colección de herramientas de cálculo para técnicos e ingenieros de telecomunicaciones: presupuesto de enlace RF, atenuación en fibra óptica y subneteo IPv4/IPv6.",
      tag: "FIELD UTILITIES",
    },
    {
      title: "EMBEDDED DEV SCRIPTS",
      category: "HARDWARE DEBUG // FIRMWARE",
      desc: "Utilidades abiertas para inspección de tramas UART/serie, emulación de sensores y validación de protocolos de telemetría.",
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
            04 &middot; Código Abierto & Aplicaciones
          </span>

          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            DATELAR LABS
          </h2>

          <p className="text-base text-neutral-300 font-normal leading-relaxed">
            El laboratorio de software libre y experimentación técnica donde se desarrollan aplicaciones 
            especializadas y utilidades de ingeniería para la comunidad.
          </p>
        </div>

        <div>
          <a
            href="https://github.com/Theter65"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-5 py-2.5 text-xs font-medium tracking-[0.15em] text-white transition hover:border-white hover:bg-white hover:text-black uppercase"
          >
            <GithubIcon className="h-4 w-4" />
            <span>VER EN GITHUB</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((item) => (
          <div
            key={item.title}
            className="border border-white/10 bg-neutral-950 p-6 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 tracking-wider">
                <span>{item.category}</span>
                <span className="text-neutral-400 border border-white/10 px-1.5 py-0.5">{item.tag}</span>
              </div>
              <h3 className="text-xl font-medium text-white">{item.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">{item.desc}</p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 font-mono text-[11px] text-neutral-400">
              ESTADO: ACTIVO // DISPONIBLE
            </div>
          </div>
        ))}
      </div>

      {/* Direct, clean attribution as requested */}
      <div className="mt-12 border border-white/15 bg-neutral-950 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="text-white font-medium">
            Iniciativa desarrollada por Gerardo Gonza
          </div>
          <div className="text-neutral-500 text-[10px] tracking-widest uppercase">
            CÓDIGO ABIERTO // LABS
          </div>
        </div>
      </div>
    </section>
  );
}
