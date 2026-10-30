import { Users, Code, Cpu, Award, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";

export function Founders() {
  const founders = [
    {
      name: "Elio Romero",
      role: "Cofundador de Datelar",
      specialty: "Gestión Tecnológica & Estrategia de Operaciones",
      bio: "Impulsa la visión comercial y operativa de Datelar, liderando la adopción de Sentinel Drive y las soluciones de telemetría y control de accesos para empresas e industrias.",
      focus: ["Telemetría Vehicular", "Gestión de Flotas", "Estrategia Tecnológica", "Operaciones B2B"],
      avatarInitials: "ER",
      accent: "cyan",
    },
    {
      name: "Gerardo Gonza",
      role: "Cofundador de Datelar & Creador de Datelar Labs",
      specialty: "Ingeniería de Software, Telecomunicaciones & IoT",
      bio: "Conocido en el ecosistema técnico como Theter. Diseña la arquitectura de sistemas embebidos, plataformas cloud y dirige de forma independiente los proyectos abiertos de Datelar Labs como Music Muv.",
      focus: ["Sistemas Embebidos / IoT", "Arquitectura Cloud", "Redes & Telecomunicaciones", "Open Source (Music Muv)"],
      avatarInitials: "GG",
      accent: "amber",
    },
  ];

  return (
    <section id="fundadores" className="scroll-mt-28 border-t border-white/10 py-16 lg:py-24">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-datelar-cyan">
            Liderazgo Técnico & Visión
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Equipo Fundador
          </h2>
          <p className="max-w-2xl text-base text-slate-300">
            La sinergia entre hardware robusto, ingeniería de telecomunicaciones y desarrollo 
            de software moderno que da vida a Datelar.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((f) => {
            const isCyan = f.accent === "cyan";
            return (
              <div
                key={f.name}
                className={`relative overflow-hidden rounded-3xl p-8 transition ${
                  isCyan ? "glass-panel" : "glass-panel-amber"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  {/* Initials Avatar badge */}
                  <div
                    className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-extrabold border ${
                      isCyan
                        ? "bg-datelar-cyan/15 text-datelar-cyan border-datelar-cyan/30"
                        : "bg-datelar-amber/15 text-datelar-amber border-datelar-amber/30"
                    }`}
                  >
                    {f.avatarInitials}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">{f.name}</h3>
                    <p
                      className={`text-sm font-semibold ${
                        isCyan ? "text-datelar-cyan" : "text-datelar-amber"
                      }`}
                    >
                      {f.role}
                    </p>
                    <p className="text-xs text-slate-400">{f.specialty}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-slate-300">{f.bio}</p>

                {/* Focus badges */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                    Áreas de Enfoque:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {f.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-white/10 bg-black/40 px-3 py-1 text-xs text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
