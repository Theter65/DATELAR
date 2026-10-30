export function Products() {
  return (
    <div className="w-full">
      {/* 1. SENTINEL DRIVE */}
      <section
        id="sentinel-drive"
        className="relative flex min-h-[90vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-6">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              01 &middot; Telemetría Vehicular
            </span>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
              SENTINEL DRIVE
            </h2>

            <p className="text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
              Plataforma de telemetría de alta sensibilidad y gestión operativa de flotas. 
              Monitoreo continuo de ubicación satelital, análisis de patrones de conducción 
              y diagnóstico mecánico directo mediante puerto OBD-II y red CAN.
            </p>

            {/* Technical Specs List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-xl text-xs text-neutral-400 font-mono">
              <div className="border border-white/10 p-3 bg-neutral-950">
                <div className="text-white font-sans font-medium mb-1">RASTREO GPS EN VIVO</div>
                <div>Actualización continua &lt;2s con búfer de memoria sin cobertura.</div>
              </div>

              <div className="border border-white/10 p-3 bg-neutral-950">
                <div className="text-white font-sans font-medium mb-1">DIAGNÓSTICO CAN / OBD-II</div>
                <div>Lectura de RPM, temperatura, velocidad real y códigos DTC.</div>
              </div>

              <div className="border border-white/10 p-3 bg-neutral-950">
                <div className="text-white font-sans font-medium mb-1">CORTE DE MOTOR REMOTO</div>
                <div>Inmovilización preventiva segura activada vía plataforma web/móvil.</div>
              </div>

              <div className="border border-white/10 p-3 bg-neutral-950">
                <div className="text-white font-sans font-medium mb-1">GEOCERCAS INTELIGENTES</div>
                <div>Alertas instantáneas por desvío de ruta o uso no autorizado.</div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-block border border-white bg-white px-7 py-3 text-xs font-semibold tracking-[0.18em] text-black transition hover:bg-neutral-200 uppercase"
              >
                SOLICITAR DEMO DE SENTINEL DRIVE
              </a>
            </div>
          </div>

          {/* Right: Technical Telemetry Console (Starlink style) */}
          <div className="lg:col-span-6">
            <div className="border border-white/15 bg-neutral-950 p-6 sm:p-8 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white" />
                  <span className="text-white font-semibold tracking-wider">UNIT #SD-8820 // ACTIVE</span>
                </div>
                <span className="text-neutral-500 text-[10px] tracking-widest">4G LTE DUAL-BAND</span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-b border-white/10">
                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">VELOCIDAD</div>
                  <div className="text-2xl font-normal text-white mt-1">74.2 <span className="text-xs text-neutral-400">KM/H</span></div>
                </div>

                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">NIVEL COMBUSTIBLE</div>
                  <div className="text-2xl font-normal text-white mt-1">82 <span className="text-xs text-neutral-400">%</span></div>
                </div>

                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">TEMPERATURA MOTOR</div>
                  <div className="text-2xl font-normal text-white mt-1">88 <span className="text-xs text-neutral-400">°C</span></div>
                </div>

                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">ENLACE SATELITAL</div>
                  <div className="text-2xl font-normal text-white mt-1">16 <span className="text-xs text-neutral-400">SATS FIXED</span></div>
                </div>
              </div>

              <div className="pt-4 text-neutral-400 text-[11px] space-y-1">
                <div>&gt; OBD2_STATUS: NOMINAL (NO ACTIVE DTC CODES)</div>
                <div>&gt; GEOFENCE_CHECK: WITHIN_DESIGNATED_SECTOR</div>
                <div>&gt; LAST_PACKET_LATENCY: 140MS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACCESOS QR */}
      <section
        id="accesos-qr"
        className="relative flex min-h-[90vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Visual QR card */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="border border-white/15 bg-neutral-950 p-8 flex flex-col items-center justify-center text-center">
              <div className="border border-white/20 p-6 bg-black mb-6">
                <svg
                  className="w-40 h-40 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="6" y="6" width="1" height="1" fill="currentColor" />
                  <rect x="17" y="6" width="1" height="1" fill="currentColor" />
                  <rect x="6" y="17" width="1" height="1" fill="currentColor" />
                  <path d="M14 14h3v3h-3zM17 17h4v4h-4zM14 20h3v1h-3z" />
                </svg>
              </div>

              <div className="font-mono text-xs text-neutral-400 space-y-1 w-full text-left starlink-border-t pt-4">
                <div className="flex justify-between">
                  <span>TOKEN_ID:</span>
                  <span className="text-white">DTL-QR-99042</span>
                </div>
                <div className="flex justify-between">
                  <span>TIEMPO_VALIDACIÓN:</span>
                  <span className="text-white">&lt; 200 MS</span>
                </div>
                <div className="flex justify-between">
                  <span>ESTADO:</span>
                  <span className="text-white">VALIDADO // ACCESO PERMITIDO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 lg:col-span-7">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
              02 &middot; Control de Acceso
            </span>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
              DATELAR ACCESS
            </h2>

            <p className="text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
              Gestión inteligente de boletería digital y control de aforo masivo mediante 
              códigos QR dinámicos. Diseñado para recintos, eventos y accesos corporativos que requieren 
              máxima velocidad y cero fraude.
            </p>

            <div className="space-y-3 text-xs text-neutral-400 font-mono max-w-xl">
              <div className="border-l-2 border-white pl-3 py-1">
                <strong className="text-white font-sans block">Algoritmo Anti-Duplicación:</strong>
                Códigos dinámicos que impiden la reventa fraudulenta o captura de pantalla.
              </div>

              <div className="border-l-2 border-white pl-3 py-1">
                <strong className="text-white font-sans block">Modo Offline Resiliente:</strong>
                Validación continua sin interrupción en recintos o festivales sin señal móvil.
              </div>

              <div className="border-l-2 border-white pl-3 py-1">
                <strong className="text-white font-sans block">Aforo & Auditoría en Vivo:</strong>
                Monitoreo exacto de ingresos, salidas y porcentajes de ocupación por zona.
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-block border border-white/40 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black uppercase"
              >
                COTIZAR CONTROL DE ACCESOS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HARDWARE & IOT */}
      <section
        id="hardware-iot"
        className="relative flex min-h-[90vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t"
      >
        <div className="max-w-4xl space-y-6">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            03 &middot; Ingeniería Embebida
          </span>

          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            HARDWARE & IOT A MEDIDA
          </h2>

          <p className="text-base text-neutral-300 font-normal leading-relaxed max-w-2xl">
            Desarrollo integral de electrónica desde la concepción del esquemático hasta 
            la fabricación de PCB, ensamblaje y programación de firmware industrial de ultra bajo consumo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="border border-white/10 bg-neutral-950 p-6 space-y-3">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">01 // CONECTIVIDAD</div>
            <h3 className="text-lg font-medium text-white">4G LTE, NB-IoT & LoRaWAN</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Módulos de comunicación de largo alcance optimizados para ambientes remotos e industriales.
            </p>
          </div>

          <div className="border border-white/10 bg-neutral-950 p-6 space-y-3">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">02 // SENSORES</div>
            <h3 className="text-lg font-medium text-white">Nodos de Monitoreo Industrial</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Captura precisa de variables mecánicas, térmicas y eléctricas con almacenamiento local.
            </p>
          </div>

          <div className="border border-white/10 bg-neutral-950 p-6 space-y-3">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">03 // FIRMWARE</div>
            <h3 className="text-lg font-medium text-white">Arquitectura Embebida Segura</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Código en C/C++ optimizado para eficiencia energética extrema y actualización remota OTA.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <a
            href="#contacto"
            className="inline-block border border-white/40 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black uppercase"
          >
            CONSULTAR PROYECTO DE HARDWARE
          </a>
        </div>
      </section>
    </div>
  );
}
