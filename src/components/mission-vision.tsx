import { Target, Eye, Zap, Layers, Cpu, ShieldCheck } from "lucide-react";

export function MissionVision() {
  const stats = [
    { value: "100%", label: "Hardware & Software Propios", detail: "Sin intermediarios de terceros" },
    { value: "< 2s", label: "Latencia de Telemetría", detail: "Procesamiento de eventos en tiempo real" },
    { value: "99.9%", label: "Disponibilidad de Plataforma", detail: "Infraestructura robusta y resiliente" },
    { value: "Open", label: "Filosofía Open Source", detail: "Apps libres lideradas por fundadores" },
  ];

  return (
    <section id="mision-vision" className="scroll-mt-28 border-t border-white/10 py-16 lg:py-24">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-datelar-cyan">
            Propósito & Dirección Estratégica
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Nuestra Misión y Visión
          </h2>
          <p className="max-w-2xl text-base text-slate-300">
            En Datelar unimos la ingeniería electrónica con el desarrollo de software de alta disponibilidad 
            para resolver desafíos operativos tangibles.
          </p>
        </div>

        {/* Mission and Vision Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Misión */}
          <div className="glass-panel relative overflow-hidden rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-datelar-cyan/15 border border-datelar-cyan/30 text-datelar-cyan">
                <Target className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-datelar-cyan">
                  Propósito Fundamental
                </span>
                <h3 className="text-2xl font-bold text-white">Misión</h3>
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              “Diseñar, integrar y desplegar soluciones de <strong>hardware IoT</strong> y <strong>software</strong> que transformen datos en decisiones operativas eficientes.”
            </p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <Zap className="h-4 w-4 text-datelar-cyan shrink-0" />
                <span>Transformación de datos telemétricos en métricas accionables.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Cpu className="h-4 w-4 text-datelar-cyan shrink-0" />
                <span>Diseño de hardware robusto capaz de operar en condiciones industriales severas.</span>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="glass-panel-amber relative overflow-hidden rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-datelar-amber/15 border border-datelar-amber/30 text-datelar-amber">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-datelar-amber">
                  Proyección a Futuro
                </span>
                <h3 className="text-2xl font-bold text-white">Visión</h3>
              </div>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              “Consolidarnos como el ecosistema tecnológico referente en <strong>innovación aplicada, telemetría e Internet de las Cosas (IoT)</strong>, reconocidos por la solidez de nuestras soluciones para la industria, la calidad de nuestra ingeniería de campo y el aporte continuo al desarrollo de software accesible y de código abierto.”
            </p>

            <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="h-4 w-4 text-datelar-amber shrink-0" />
                <span>Excelencia en ingeniería de campo y confiabilidad operativa certificada.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Layers className="h-4 w-4 text-datelar-amber shrink-0" />
                <span>Ecosistema modular que crece junto a las necesidades de cada cliente.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-[#0c1421]/60 p-5 backdrop-blur-sm"
            >
              <div className="text-3xl font-extrabold text-datelar-cyan">{s.value}</div>
              <div className="mt-1 text-sm font-semibold text-white">{s.label}</div>
              <div className="mt-1 text-xs text-slate-300">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
