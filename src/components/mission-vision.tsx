export function MissionVision() {
  return (
    <section id="mision" className="w-full px-6 md:px-12 py-24 starlink-border-t">
      <div className="space-y-16">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            05 &middot; Dirección Estratégica
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl mt-3">
            MISIÓN & VISIÓN
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Misión */}
          <div className="border border-white/10 bg-neutral-950 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              PROPÓSITO // MISIÓN
            </span>
            <p className="text-2xl sm:text-3xl font-light text-white leading-snug">
              “Diseñar, integrar y desplegar soluciones de <span className="font-medium text-white">hardware IoT y software</span> que transformen datos en decisiones operativas eficientes.”
            </p>
            <div className="pt-4 text-xs font-mono text-neutral-400">
              FOCO: SEGURIDAD OPERATIVA &bull; CONECTIVIDAD TOTAL &bull; CONTROL EN TIEMPO REAL
            </div>
          </div>

          {/* Visión */}
          <div className="border border-white/10 bg-neutral-950 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              PROYECCIÓN // VISIÓN
            </span>
            <p className="text-2xl sm:text-3xl font-light text-white leading-snug">
              “Consolidarnos como el referente en soluciones de seguridad, rastreo y control de accesos, reconocidos por la confiabilidad de nuestros servicios y la satisfacción de nuestros clientes.”
            </p>
            <div className="pt-4 text-xs font-mono text-neutral-400">
              FOCO: CONFIABILIDAD &bull; FACILIDAD DE USO &bull; RESULTADOS PRÁCTICOS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
