import { ArrowRight, Cpu, Radio, ShieldCheck, Sparkles, Navigation } from "lucide-react";

export function Hero() {
  const highlights = [
    {
      icon: Navigation,
      title: "Sentinel Drive",
      desc: "Telemetría vehicular y gestión de flotas en tiempo real",
    },
    {
      icon: ShieldCheck,
      title: "Accesos QR",
      desc: "Gestión inteligente de aforo y entradas dinámicas",
    },
    {
      icon: Cpu,
      title: "Hardware & IoT",
      desc: "Diseño embebido y nodos de sensado a medida",
    },
    {
      icon: Radio,
      title: "Datelar Labs",
      desc: "Aplicaciones especializadas de código abierto",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-datelar-cyan/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-60 right-0 -z-10 h-[400px] w-[500px] rounded-full bg-datelar-amber/10 blur-[140px]" />

      <div className="space-y-8">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-datelar-cyan/30 bg-datelar-navy/80 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-datelar-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-datelar-cyan" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-datelar-cyan">
            Ecosistema Tecnológico &middot; Hardware & Software
          </span>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="space-y-6">
          <h1 className="max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Soluciones integrales de{" "}
            <span className="text-gradient-cyan">Hardware IoT</span> y{" "}
            <span className="text-gradient-amber">Software</span> que transforman datos.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            En <strong>Datelar</strong> diseñamos y desplegamos ingeniería de precisión para el mundo real: 
            desde telemetría vehicular avanzada con <strong>Sentinel Drive</strong> y control de accesos QR, 
            hasta dispositivos embebidos a medida y software especializado de código abierto.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#sentinel-drive"
            className="flex items-center gap-2.5 rounded-xl bg-datelar-cyan px-7 py-3.5 text-sm font-bold text-[#060a12] shadow-glow transition hover:bg-datelar-cyan-hover hover:scale-[1.02] active:scale-95"
          >
            <span>Explorar Soluciones</span>
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#datelar-labs"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-datelar-amber/50 hover:bg-white/10"
          >
            <Sparkles className="h-4 w-4 text-datelar-amber" />
            <span>Descubrir Datelar Labs</span>
          </a>
          <a
            href="#contacto"
            className="text-sm font-semibold text-slate-300 underline-offset-4 hover:text-datelar-cyan hover:underline"
          >
            Hablar con los ingenieros &rarr;
          </a>
        </div>

        {/* Technical Highlights Bar */}
        <div className="grid gap-3 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel flex items-start gap-3.5 rounded-xl p-4 transition"
              >
                <div className="rounded-lg bg-datelar-cyan/10 p-2.5 text-datelar-cyan border border-datelar-cyan/20">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">{item.title}</h2>
                  <p className="mt-1 text-xs text-slate-300 leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
