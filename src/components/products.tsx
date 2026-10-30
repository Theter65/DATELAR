import { 
  Navigation, 
  QrCode, 
  Cpu, 
  Activity, 
  MapPin, 
  Gauge, 
  ShieldAlert, 
  CheckCircle2, 
  Smartphone, 
  Server, 
  Radio, 
  BatteryCharging 
} from "lucide-react";

export function Products() {
  return (
    <section className="space-y-24 py-8 lg:py-16">
      {/* 1. Sentinel Drive */}
      <div id="sentinel-drive" className="scroll-mt-28">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 lg:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-datelar-cyan/15 blur-3xl" />
          
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Info */}
            <div className="space-y-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-lg bg-datelar-cyan/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-datelar-cyan border border-datelar-cyan/20">
                <Navigation className="h-4 w-4" />
                <span>Producto Insignia &middot; Telemetría Vehicular</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                  Sentinel Drive
                </h3>
                <p className="text-base font-medium text-datelar-cyan">
                  Monitoreo de flotas, control predictivo y seguridad vehicular en tiempo real.
                </p>
                <p className="text-base leading-relaxed text-slate-300">
                  <strong>Sentinel Drive</strong> es la solución integral de telemetría desarrollada por Datelar. 
                  Combina hardware rastreador de alta sensibilidad con una plataforma analítica en la nube 
                  para brindarte visibilidad absoluta sobre cada kilómetro recorrido, comportamiento de manejo 
                  y salud mecánica del vehículo.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: MapPin,
                    title: "Rastreo GPS de Precisión",
                    desc: "Ubicación en vivo con actualización continua y almacenamiento offline de rutas.",
                  },
                  {
                    icon: Gauge,
                    title: "Diagnóstico OBD-II / CAN",
                    desc: "Lectura de velocidad, RPM, temperatura de motor y códigos de falla.",
                  },
                  {
                    icon: ShieldAlert,
                    title: "Geocercas & Alertas",
                    desc: "Notificaciones instantáneas por salidas de zona, excesos de velocidad o impactos.",
                  },
                  {
                    icon: BatteryCharging,
                    title: "Corte Remoto & Batería",
                    desc: "Inmovilización remota ante emergencias y respaldo de energía autónomo.",
                  },
                ].map((feat) => {
                  const Icon = feat.icon;
                  return (
                    <div key={feat.title} className="rounded-xl border border-white/5 bg-black/40 p-4">
                      <div className="flex items-center gap-2 text-white">
                        <Icon className="h-4 w-4 text-datelar-cyan" />
                        <span className="text-sm font-bold">{feat.title}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-xl bg-datelar-cyan px-6 py-3 text-sm font-bold text-[#060a12] transition hover:brightness-110"
                >
                  <span>Solicitar Demo de Sentinel Drive</span>
                  <Navigation className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Telemetry UI Card Mockup */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-datelar-cyan/30 bg-[#09121f] p-6 shadow-glow">
                {/* Mock header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <div className="text-xs font-bold text-white">Unidad Sentinel #SD-041</div>
                      <div className="text-[10px] text-slate-300">En ruta &middot; Conectado 4G LTE</div>
                    </div>
                  </div>
                  <span className="rounded bg-datelar-cyan/20 px-2 py-0.5 text-[11px] font-mono font-bold text-datelar-cyan">
                    TELEMETRY ON
                  </span>
                </div>

                {/* Telemetry Metrics display */}
                <div className="mt-5 grid grid-cols-2 gap-3 font-mono">
                  <div className="rounded-xl bg-[#060a12] p-3 border border-white/5">
                    <div className="text-[11px] text-slate-300 uppercase">Velocidad Actual</div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      68.4 <span className="text-xs text-datelar-cyan">km/h</span>
                    </div>
                    <div className="mt-1 text-[10px] text-emerald-400 font-sans">✓ Límite regular</div>
                  </div>

                  <div className="rounded-xl bg-[#060a12] p-3 border border-white/5">
                    <div className="text-[11px] text-slate-300 uppercase">Combustible</div>
                    <div className="mt-1 text-2xl font-bold text-datelar-amber">
                      78 <span className="text-xs text-slate-300">%</span>
                    </div>
                    <div className="mt-1 text-[10px] text-slate-300 font-sans">Consumo: 8.2 L/100km</div>
                  </div>

                  <div className="rounded-xl bg-[#060a12] p-3 border border-white/5">
                    <div className="text-[11px] text-slate-300 uppercase">Temp. Motor</div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      89 <span className="text-xs text-datelar-cyan">°C</span>
                    </div>
                    <div className="mt-1 text-[10px] text-slate-300 font-sans">Óptimo normal</div>
                  </div>

                  <div className="rounded-xl bg-[#060a12] p-3 border border-white/5">
                    <div className="text-[11px] text-slate-300 uppercase">Satélites GPS</div>
                    <div className="mt-1 text-2xl font-bold text-white">
                      14 <span className="text-xs text-datelar-cyan">LOCK</span>
                    </div>
                    <div className="mt-1 text-[10px] text-slate-300 font-sans">Precisión: &plusmn; 1.5m</div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-5 rounded-lg bg-black/40 p-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 text-slate-200">
                      <Activity className="h-3.5 w-3.5 text-datelar-cyan" />
                      Protocolo CAN / OBD-II
                    </span>
                    <span className="text-emerald-400 font-semibold">Sin fallas mecánicas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Datelar Access (Gestión de Entradas QR) */}
      <div id="accesos-qr" className="scroll-mt-28">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Visual preview */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <div className="relative rounded-2xl border border-white/10 bg-[#09121f] p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold text-white">Acceso Digital Verificado</span>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                    VÁLIDO
                  </span>
                </div>

                {/* QR visual element */}
                <div className="my-6 flex flex-col items-center justify-center rounded-xl bg-white p-6">
                  {/* Dynamic QR symbol graphic */}
                  <div className="h-44 w-44 rounded-lg bg-[#060a12] p-3.5 flex items-center justify-center relative">
                    <QrCode className="h-full w-full text-datelar-cyan" />
                  </div>
                  <span className="mt-3 text-xs font-mono font-semibold text-slate-700">
                    PASS-DTL-892147-SECURE
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Aforo en Tiempo Real:</span>
                    <strong className="text-white">412 / 500 personas (82%)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Tiempo de Validación:</span>
                    <strong className="text-datelar-cyan">&lt; 250 ms por entrada</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Seguridad:</span>
                    <strong className="text-emerald-400">QR Criptográfico Anti-Copia</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Text description */}
            <div className="order-1 space-y-6 lg:order-2 lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                <QrCode className="h-4 w-4" />
                <span>Control & Ticketing Inteligente</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Datelar Access &middot; Gestión de Entradas QR
                </h3>
                <p className="text-base leading-relaxed text-slate-300">
                  Digitaliza y asegura el acceso a eventos masivos, recintos, discotecas, conferencias 
                  o empresas. Nuestro sistema genera códigos QR dinámicos e infalsificables que garantizan 
                  el ingreso rápido, eliminan la reventa fraudulenta y ofrecen analíticas de asistencia en vivo.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Validación ultrarrápida mediante smartphones o lectores ópticos de hardware dedicados.",
                  "Modo Offline Seguro: Opera sin interrupciones incluso en zonas con baja o nula cobertura celular.",
                  "Panel administrativo con monitoreo de aforo en vivo, horas pico de ingreso y reportes inmediatos.",
                  "Generación masiva y envío automático de accesos mediante WhatsApp y correo electrónico.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-datelar-cyan shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-200">{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <span>Cotizar Sistema de Accesos QR</span>
                  <QrCode className="h-4 w-4 text-emerald-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Hardware & IoT Solutions */}
      <div id="hardware-iot" className="scroll-mt-28">
        <div className="glass-panel relative overflow-hidden rounded-3xl p-8 lg:p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg bg-datelar-amber/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-datelar-amber border border-datelar-amber/20">
              <Cpu className="h-4 w-4" />
              <span>Ingeniería Electrónica & Telecomunicaciones</span>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Soluciones Tecnológicas de Hardware e IoT
                </h3>
                <p className="text-base leading-relaxed text-slate-300">
                  En Datelar no dependemos de módulos prefabricados de terceros. Diseñamos 
                  desde cero circuitos impresos (PCB), seleccionamos microcontroladores industriales 
                  y desarrollamos firmware embebido adaptado a los requerimientos de tu operación.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <Radio className="h-5 w-5 text-datelar-amber" />
                  <h4 className="mt-2 text-sm font-bold text-white">Conectividad Avanzada</h4>
                  <p className="mt-1 text-xs text-slate-300">
                    Redes 4G LTE, NB-IoT, LoRaWAN y RF diseñadas para cobertura de largo alcance.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <Server className="h-5 w-5 text-datelar-amber" />
                  <h4 className="mt-2 text-sm font-bold text-white">Nodos Sensores a Medida</h4>
                  <p className="mt-1 text-xs text-slate-300">
                    Medición de variables físicas, telemetría ambiental y automatización industrial.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <Cpu className="h-5 w-5 text-datelar-amber" />
                  <h4 className="mt-2 text-sm font-bold text-white">Firmware Optimizado</h4>
                  <p className="mt-1 text-xs text-slate-300">
                    Algoritmos de ultrabajo consumo energético para operación ininterrumpida con batería.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                  <Smartphone className="h-5 w-5 text-datelar-amber" />
                  <h4 className="mt-2 text-sm font-bold text-white">Integración Cloud</h4>
                  <p className="mt-1 text-xs text-slate-300">
                    APIs REST, MQTT y sockets para conectar cualquier dispositivo a dashboards web y móviles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
