export function Founders() {
  const founders = [
    {
      name: "ELIO ROMERO",
      role: "COFUNDADOR // ESTRATEGIA & OPERACIONES",
      bio: "Dirección operativa y expansión de Datelar. Lidera la implementación de Sentinel Drive en flotas corporativas y la infraestructura de control de accesos a gran escala.",
      discipline: "GESTIÓN TECNOLÓGICA & OPERACIONES B2B",
    },
    {
      name: "GERARDO GONZA",
      role: "COFUNDADOR // ARQUITECTURA & LABS",
      bio: "Conocido en el entorno técnico como Theter. Diseña la arquitectura de sistemas embebidos, protocolos de telemetría y dirige de forma independiente los proyectos de Datelar Labs como Music Muv.",
      discipline: "INGENIERÍA DE SOFTWARE, TELECOM & IOT",
    },
  ];

  return (
    <section id="equipo" className="w-full px-6 md:px-12 py-24 starlink-border-t">
      <div className="space-y-16">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            06 &middot; Liderazgo Técnico
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl mt-3">
            EQUIPO FUNDADOR
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {founders.map((f) => (
            <div
              key={f.name}
              className="border border-white/10 bg-neutral-950 p-8 sm:p-10 space-y-6"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
                  {f.role}
                </span>
                <h3 className="text-2xl font-medium text-white tracking-wide mt-1">
                  {f.name}
                </h3>
              </div>

              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                {f.bio}
              </p>

              <div className="pt-4 border-t border-white/5 font-mono text-[11px] text-neutral-400">
                ESPECIALIDAD: {f.discipline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
