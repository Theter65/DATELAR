import { Music2, Radio, Terminal, Sparkles, ExternalLink, Code2, Headphones, Wrench } from "lucide-react";
import { GithubIcon } from "./social-icons";

export function DatelarLabs() {
  const apps = [
    {
      title: "Music Muv",
      badge: "Open Source Audio Player",
      icon: Music2,
      desc: "Reproductor de música moderno, ligero y centrado en la máxima fidelidad sonora. Diseñado con una interfaz minimalista, gestión fluida de listas de reproducción y bajo consumo de recursos.",
      tags: ["Audio Engine", "Open Source", "Clean UI", "Offline First"],
      highlight: "Enfocado en la experiencia auditiva sin anuncios ni distracciones.",
    },
    {
      title: "Telecom Tools & Field Suite",
      badge: "Ingeniería de Telecomunicaciones",
      icon: Radio,
      desc: "Herramientas especializadas para ingenieros y técnicos en telecomunicaciones: calculadoras de balance de enlace RF, atenuación en fibra óptica, subneteo IPv4/IPv6 y diagnóstico de espectro.",
      tags: ["RF Link Budget", "Subnetting", "Fibra Óptica", "Diagnóstico"],
      highlight: "Utilidades técnicas de campo para optimizar despliegues de red.",
    },
    {
      title: "Embedded & Dev Utilities",
      badge: "Herramientas de Desarrollo",
      icon: Terminal,
      desc: "Scripts, emuladores y librerías abiertas para pruebas rápidas de sensores IoT, visualización de tramas serie/UART y validación de protocolos de comunicación.",
      tags: ["Serial Mon", "IoT Debug", "Firmware Tools", "Scripts"],
      highlight: "Aceleradores de desarrollo para ingenieros de hardware y software.",
    },
  ];

  return (
    <section id="datelar-labs" className="scroll-mt-28 border-t border-white/10 py-16 lg:py-24">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-datelar-cyan/30 bg-datelar-navy px-3.5 py-1 text-xs font-semibold text-datelar-cyan">
              <Sparkles className="h-3.5 w-3.5 text-datelar-amber" />
              <span>División de Software Libre & Aplicaciones</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Datelar Labs
            </h2>
            <p className="max-w-2xl text-base text-slate-300">
              El espacio de innovación y código abierto donde nacen aplicaciones experimentales, 
              herramientas para ingeniería y utilidades creadas para la comunidad técnica.
            </p>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-slate-300">
              <Code2 className="h-4 w-4 text-datelar-cyan" />
              <span>Ecosistema de Código Abierto</span>
            </span>
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.title}
                className="glass-panel flex flex-col justify-between rounded-2xl p-6 lg:p-7"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-datelar-cyan/15 border border-datelar-cyan/25 text-datelar-cyan">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-medium text-slate-300 border border-white/10">
                      {app.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{app.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{app.desc}</p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-xs text-datelar-cyan font-medium">
                    ⚡ {app.highlight}
                  </div>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {app.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-mono text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Authorship & Individual Property Attribution Box */}
        <div className="rounded-2xl border border-datelar-cyan/25 bg-gradient-to-r from-datelar-navy via-[#0d1726] to-[#070c14] p-6 lg:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-datelar-cyan">
                <span>Autoría & Dirección de Datelar Labs</span>
              </div>
              <h4 className="text-xl font-extrabold text-white sm:text-2xl">
                Iniciativa desarrollada por Gerardo Gonza
              </h4>
              <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
                Las aplicaciones y proyectos distribuidos bajo el sello <strong>Datelar Labs</strong> 
                (incluyendo <em>Music Muv</em> y las herramientas de ingeniería en telecomunicaciones) 
                son proyectos concebidos, mantenidos y de propiedad exclusiva de <strong>Gerardo Gonza</strong> 
                (@Theter), publicados bajo licencias abiertas para el beneficio de la comunidad.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://github.com/theter"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white transition hover:bg-white/20 hover:scale-105"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub / Repositorios</span>
              </a>
              <a
                href="#contacto"
                className="flex items-center gap-2 rounded-xl bg-datelar-cyan px-5 py-3 text-xs font-bold text-[#060a12] transition hover:brightness-110"
              >
                <span>Proponer Colaboración</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
