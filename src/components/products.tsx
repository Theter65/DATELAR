export function Products() {
  return (
    <div className="w-full">
      {/* 1. SENTNLDRIVE */}
      <section
        id="sentnldrive"
        className="relative flex min-h-[90vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t"
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-6 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
                01 &middot; Seguridad & Rastreo Vehicular
              </span>
              <span className="border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] font-mono tracking-wider text-white">
                FASE BETA
              </span>
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
              SENTNLDRIVE
            </h2>

            <p className="text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
              Plataforma inteligente de protección y control de vehículos para particulares y flotas comerciales. Monitorea en vivo la ubicación de tus unidades, recibe avisos inmediatos ante movimientos sospechosos y recupera el control total de tus activos.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 max-w-xl text-xs text-neutral-400 font-mono">
              <div className="border border-white/10 p-4 bg-neutral-950">
                <div className="text-white font-sans font-medium mb-1">LOCALIZACIÓN EN TIEMPO REAL</div>
                <div>Visualiza la posición exacta de cada vehículo, sus trayectorias y paradas en cualquier momento.</div>
              </div>

              <div className="border border-white/10 p-4 bg-neutral-950">
                <div className="text-white font-sans font-medium mb-1">ZONAS SEGURAS (GEOCERCAS)</div>
                <div>Recibe alertas instantáneas en tu celular si un vehículo entra o sale de un perímetro autorizado.</div>
              </div>

              <div className="border border-white/10 p-4 bg-neutral-950">
                <div className="text-white font-sans font-medium mb-1">APAGADO REMOTO DEL MOTOR</div>
                <div>Inmoviliza el vehículo a distancia de forma segura desde la aplicación en caso de robo o emergencia.</div>
              </div>

              <div className="border border-white/10 p-4 bg-neutral-950">
                <div className="text-white font-sans font-medium mb-1">ALERTAS DE VELOCIDAD & USO</div>
                <div>Notificaciones inmediatas por exceso de velocidad, horarios no autorizados y reportes detallados.</div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contacto"
                className="inline-block border border-white bg-white px-7 py-3 text-xs font-semibold tracking-[0.18em] text-black transition hover:bg-neutral-200 uppercase"
              >
                PROBAR BETA DE SENTNLDRIVE
              </a>
            </div>
          </div>

          {/* Right: Operational Status Console */}
          <div className="lg:col-span-6">
            <div className="border border-white/15 bg-neutral-950 p-6 sm:p-8 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-semibold tracking-wider">VEHÍCULO MONITOREADO // EN LÍNEA</span>
                </div>
                <span className="text-neutral-400 text-[10px] tracking-widest border border-white/10 px-2 py-0.5">
                  ESTADO: PROTEGIDO
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-6 border-b border-white/10">
                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">VELOCIDAD ACTUAL</div>
                  <div className="text-2xl font-normal text-white mt-1">45.0 <span className="text-xs text-neutral-400">KM/H</span></div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Dentro del límite seguro</div>
                </div>

                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">BATERÍA DE RESPALDO</div>
                  <div className="text-2xl font-normal text-white mt-1">100 <span className="text-xs text-neutral-400">%</span></div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Protección activa 24/7</div>
                </div>

                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">PERÍMETRO ASIGNADO</div>
                  <div className="text-2xl font-normal text-white mt-1">ZONA <span className="text-xs text-neutral-400">CENTRO</span></div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Sin desvíos de ruta</div>
                </div>

                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">ESTADO DE SEGURIDAD</div>
                  <div className="text-2xl font-normal text-white mt-1">NORMAL <span className="text-xs text-neutral-400">OK</span></div>
                  <div className="text-[10px] text-neutral-500 mt-0.5">Motor operativo</div>
                </div>
              </div>

              <div className="pt-4 text-neutral-400 text-[11px] space-y-1">
                <div>&gt; MONITOREO: RASTREO SATELITAL ACTIVO EN TIEMPO REAL</div>
                <div>&gt; SEGURIDAD: NOTIFICACIONES AUTOMÁTICAS ACTIVADAS</div>
                <div>&gt; HISTORIAL: RECORRIDO REGISTRADO EXITOSAMENTE</div>
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
                  <span>ENTRADA DIGITAL:</span>
                  <span className="text-white">PASE AUTORIZADO</span>
                </div>
                <div className="flex justify-between">
                  <span>TIEMPO DE INGRESO:</span>
                  <span className="text-white">INMEDIATO (SIN FILAS)</span>
                </div>
                <div className="flex justify-between">
                  <span>ESTADO:</span>
                  <span className="text-white">CERO DUPLICACIÓN // VÁLIDO</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
                02 &middot; Control de Accesos & Boletería
              </span>
              <span className="border border-white/20 bg-white/5 px-2 py-0.5 text-[10px] font-mono tracking-wider text-white">
                PRODUCTO DE DATELAR LABS
              </span>
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
              DATELAR ACCESS
            </h2>

            <p className="text-base text-neutral-300 font-normal leading-relaxed max-w-xl">
              Producto de <strong>Datelar Labs</strong>. Solución moderna de venta y validación de entradas digitales que agiliza el ingreso a tus eventos, evita colas en las puertas y elimina completamente el fraude por reventa o boletos clonados.
            </p>

            <div className="space-y-3 text-xs text-neutral-400 font-mono max-w-xl">
              <div className="border-l-2 border-white pl-3 py-1">
                <strong className="text-white font-sans block">Entradas Infalsificables:</strong>
                Cada boleto es único y solo puede ser utilizado una vez. Bloquea de inmediato capturas de pantalla o reventas fraudulentas.
              </div>

              <div className="border-l-2 border-white pl-3 py-1">
                <strong className="text-white font-sans block">Ingreso Rápido en Puerta:</strong>
                Escaneo instantáneo desde cualquier celular para que los asistentes ingresen fluidamente sin esperas ni demoras.
              </div>

              <div className="border-l-2 border-white pl-3 py-1">
                <strong className="text-white font-sans block">Funciona Siempre, Incluso sin Internet:</strong>
                Validación garantizada en recintos cerrados, estadios o festivales de campo donde la señal móvil suele fallar.
              </div>

              <div className="border-l-2 border-white pl-3 py-1">
                <strong className="text-white font-sans block">Aforo y Asistencia en Vivo:</strong>
                Monitorea en tiempo real cuántas personas han ingresado al evento y el porcentaje de ocupación del recinto.
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
            03 &middot; Dispositivos & Automatización
          </span>

          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            HARDWARE & IOT A MEDIDA
          </h2>

          <p className="text-base text-neutral-300 font-normal leading-relaxed max-w-2xl">
            Creamos equipos electrónicos personalizados para resolver necesidades específicas de tu empresa: medición remota de variables, automatización de procesos y protección de maquinaria industrial en campo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="border border-white/10 bg-neutral-950 p-6 space-y-3">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">01 // SUPERVISIÓN</div>
            <h3 className="text-lg font-medium text-white">Monitoreo Remoto de Activos</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Supervisa maquinaria, niveles de tanques, cadenas de frío o equipos en zonas aisladas sin necesidad de enviar personal a inspeccionar.
            </p>
          </div>

          <div className="border border-white/10 bg-neutral-950 p-6 space-y-3">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">02 // PREVENCIÓN</div>
            <h3 className="text-lg font-medium text-white">Alertas Tempranas de Fallas</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Detección anticipada de anomalías de temperatura, presión o vibraciones para evitar daños costosos y paradas imprevistas en la operación.
            </p>
          </div>

          <div className="border border-white/10 bg-neutral-950 p-6 space-y-3">
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">03 // AUTONOMÍA</div>
            <h3 className="text-lg font-medium text-white">Equipos Resistentes & Autónomos</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Dispositivos de larga duración diseñados para soportar intemperie, lluvia, polvo y ambientes industriales severos sin mantenimiento constante.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <a
            href="#contacto"
            className="inline-block border border-white/40 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-white transition hover:border-white hover:bg-white hover:text-black uppercase"
          >
            SOLICITAR SOLUCIÓN A MEDIDA
          </a>
        </div>
      </section>
    </div>
  );
}
