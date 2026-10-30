export function Founders() {
  const founders = [
    {
      name: "ELIO ROMERO",
      role: "COFUNDADOR // ESTRATEGIA, IOT & DESARROLLO DE HARDWARE",
      bio: "Especializado en el desarrollo de hardware embebido, diseño electrónico, integración de sensores IoT y despliegue de infraestructura tecnológica de campo para Datelar.",
      discipline: "INGENIERÍA DE HARDWARE, IOT & ESTRATEGIA OPERATIVA",
    },
    {
      name: "GERARDO GONZA",
      role: "COFUNDADOR // SOFTWARE, TELECOM & DATELAR LABS",
      bio: "Conocido en el entorno técnico como Theter. Diseña la arquitectura de software, plataformas cloud, protocolos de telecomunicaciones y dirige la división Datelar Labs.",
      discipline: "INGENIERÍA DE SOFTWARE, REDES & DATELAR LABS",
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
