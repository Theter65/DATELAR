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
              FOCO: CONFIABILIDAD DE CAMPO &bull; INTEGRACIÓN HARDWARE-NUBE &bull; TELEMETRÍA
            </div>
          </div>

          {/* Visión */}
          <div className="border border-white/10 bg-neutral-950 p-8 sm:p-12 space-y-4">
            <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">
              PROYECCIÓN // VISIÓN
            </span>
            <p className="text-2xl sm:text-3xl font-light text-white leading-snug">
              “Consolidarnos como el ecosistema referente en <span className="font-medium text-white">innovación aplicada, telemetría e IoT</span>, reconocidos por la solidez técnica de nuestras plataformas y el impacto de nuestro software.”
            </p>
            <div className="pt-4 text-xs font-mono text-neutral-400">
              FOCO: ESCALABILIDAD &bull; PRECISIÓN INDUSTRIAL &bull; CÓDIGO ABIERTO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
