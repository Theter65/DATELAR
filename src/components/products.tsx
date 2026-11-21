import { APP_LINKS } from "@/config/links";
import { BackgroundSlideshow } from "./background-slideshow";
import {
  MapPin,
  AlertTriangle,
  Wrench,
  Gauge,
  ScanFace,
  Fingerprint,
  QrCode,
  CreditCard,
  Cpu,
  Activity,
  Layers,
} from "lucide-react";

// Imágenes dinámicas para Sentinel Drive (buses, flotas, autos y telemetría)
const SENTINEL_IMAGES = [
  "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=2000&q=80",
];

// Imágenes dinámicas para Datelar Access (eventos, instituciones, discotecas y accesos)
const ACCESS_IMAGES = [
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=2000&q=80",
];

export function Products() {
  return (
    <div className="w-full">
      {/* 1. SENTINEL DRIVE */}
      <section
        id="sentnldrive"
        className="relative flex min-h-[90vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t overflow-hidden"
      >
        {/* Fondo dinámico adaptable a modo claro y modo oscuro */}
        <BackgroundSlideshow
          images={SENTINEL_IMAGES}
          intervalMs={6000}
          overlayClassName="bg-white/90 dark:bg-black/85 backdrop-blur-[2px]"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center relative z-10">
          <div className="space-y-6 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 dark:text-neutral-400 uppercase">
                01 &middot; Telemetría Vehicular
              </span>
              <span className="border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 px-2 py-0.5 text-[10px] font-mono tracking-wider text-neutral-800 dark:text-white">
                FASE BETA
              </span>
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
              SENTNLDRIVE
            </h2>

            {/* Capacidades reales de SENTNLDRIVE (sin texto excesivo) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
              <div className="border border-neutral-200 dark:border-white/15 p-4 bg-white/95 dark:bg-neutral-950/90 shadow-sm flex items-center gap-3.5">
                <MapPin className="h-5 w-5 text-neutral-900 dark:text-white shrink-0" />
                <span className="text-xs font-semibold text-neutral-900 dark:text-white tracking-wide uppercase">
                  Monitoreo GPS en tiempo real
                </span>
              </div>

              <div className="border border-neutral-200 dark:border-white/15 p-4 bg-white/95 dark:bg-neutral-950/90 shadow-sm flex items-center gap-3.5">
                <AlertTriangle className="h-5 w-5 text-neutral-900 dark:text-white shrink-0" />
                <span className="text-xs font-semibold text-neutral-900 dark:text-white tracking-wide uppercase">
                  Detección de eventos de riesgo
                </span>
              </div>

              <div className="border border-neutral-200 dark:border-white/15 p-4 bg-white/95 dark:bg-neutral-950/90 shadow-sm flex items-center gap-3.5">
                <Wrench className="h-5 w-5 text-neutral-900 dark:text-white shrink-0" />
                <span className="text-xs font-semibold text-neutral-900 dark:text-white tracking-wide uppercase">
                  Gestión de flotas & mantenimiento
                </span>
              </div>

              <div className="border border-neutral-200 dark:border-white/15 p-4 bg-white/95 dark:bg-neutral-950/90 shadow-sm flex items-center gap-3.5">
                <Gauge className="h-5 w-5 text-neutral-900 dark:text-white shrink-0" />
                <span className="text-xs font-semibold text-neutral-900 dark:text-white tracking-wide uppercase">
                  Alertas de velocidad en ruta
                </span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={APP_LINKS.sentnldrive}
                className="inline-block border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 px-7 py-3 text-xs font-semibold tracking-[0.18em] transition uppercase"
              >
                INGRESAR A SENTNLDRIVE &rarr;
              </a>
              <a
                href="#contacto"
                className="inline-block border border-neutral-300 dark:border-white/30 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-neutral-900 dark:text-white transition hover:bg-neutral-100 dark:hover:bg-white/10 uppercase"
              >
                SOLICITAR ACCESO BETA
              </a>
            </div>
          </div>

          {/* Right: Operational Status Console Compact */}
          <div className="lg:col-span-5">
            <div className="border border-neutral-200 dark:border-white/15 bg-white/95 dark:bg-neutral-950/90 p-6 font-mono text-xs shadow-sm">
              <div className="flex items-center justify-between border-b border-neutral-200 dark:border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white animate-pulse" />
                  <span className="text-neutral-900 dark:text-white font-semibold tracking-wider">VEHÍCULO MONITOREADO</span>
                </div>
                <span className="text-neutral-600 dark:text-neutral-400 text-[10px] tracking-widest border border-neutral-200 dark:border-white/10 px-2 py-0.5">
                  EN RUTA
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 border-b border-neutral-200 dark:border-white/10">
                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">VELOCIDAD</div>
                  <div className="text-2xl font-normal text-neutral-900 dark:text-white mt-1">45.0 <span className="text-xs text-neutral-500">KM/H</span></div>
                </div>

                <div>
                  <div className="text-neutral-500 text-[10px] tracking-widest uppercase">EVENTOS DE RIESGO</div>
                  <div className="text-2xl font-normal text-neutral-900 dark:text-white mt-1">0 <span className="text-xs text-neutral-500">NORMAL</span></div>
                </div>
              </div>

              <div className="pt-3 text-neutral-600 dark:text-neutral-400 text-[11px] space-y-1">
                <div>&gt; RASTREO SATELITAL: EN LÍNEA</div>
                <div>&gt; TELEMETRÍA: TRANSMITIENDO POR MQTT</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DATELAR ACCESS */}
      <section
        id="accesos-qr"
        className="relative flex min-h-[90vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t overflow-hidden"
      >
        {/* Fondo dinámico adaptable a modo claro y modo oscuro */}
        <BackgroundSlideshow
          images={ACCESS_IMAGES}
          intervalMs={6000}
          overlayClassName="bg-white/90 dark:bg-black/85 backdrop-blur-[2px]"
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center relative z-10">
          <div className="space-y-6 lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 dark:text-neutral-400 uppercase">
                02 &middot; Control de Accesos
              </span>
              <span className="border border-neutral-300 dark:border-white/20 bg-neutral-100 dark:bg-white/5 px-2 py-0.5 text-[10px] font-mono tracking-wider text-neutral-800 dark:text-white">
                PRODUCTO DE DATELAR LABS
              </span>
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
              DATELAR ACCESS
            </h2>

            {/* Beneficios directos de Datelar Access */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl font-mono text-xs">
              <div className="border border-neutral-200 dark:border-white/10 bg-white/95 dark:bg-neutral-950/90 p-3.5 shadow-sm">
                <div className="text-neutral-900 dark:text-white font-sans font-semibold mb-0.5">CERO COLAS EN PUERTA</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-[11px]">Validación inmediata en menos de 1 segundo.</div>
              </div>

              <div className="border border-neutral-200 dark:border-white/10 bg-white/95 dark:bg-neutral-950/90 p-3.5 shadow-sm">
                <div className="text-neutral-900 dark:text-white font-sans font-semibold mb-0.5">BOLETOS INFALSIFICABLES</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-[11px]">Códigos únicos con bloqueo anti-reventa.</div>
              </div>

              <div className="border border-neutral-200 dark:border-white/10 bg-white/95 dark:bg-neutral-950/90 p-3.5 shadow-sm">
                <div className="text-neutral-900 dark:text-white font-sans font-semibold mb-0.5">100% OPERATIVO OFFLINE</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-[11px]">Funciona sin señal ni conexión a internet.</div>
              </div>

              <div className="border border-neutral-200 dark:border-white/10 bg-white/95 dark:bg-neutral-950/90 p-3.5 shadow-sm">
                <div className="text-neutral-900 dark:text-white font-sans font-semibold mb-0.5">AFORO EN TIEMPO REAL</div>
                <div className="text-neutral-600 dark:text-neutral-400 text-[11px]">Conteo exacto de asistentes al instante.</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={APP_LINKS.access}
                className="inline-block border-2 border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 px-7 py-3 text-xs font-semibold tracking-[0.18em] transition uppercase"
              >
                INGRESAR A DATELAR ACCESS &rarr;
              </a>
              <a
                href="#contacto"
                className="inline-block border border-neutral-300 dark:border-white/40 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-neutral-900 dark:text-white transition hover:bg-neutral-100 dark:hover:bg-white/10 uppercase"
              >
                COTIZAR SERVICIO
              </a>
            </div>
          </div>

          {/* Right: Métodos de ingreso (Detección facial, huella digital, QR y tarjeta) */}
          <div className="lg:col-span-5">
            <div className="border border-neutral-200 dark:border-white/15 bg-white/95 dark:bg-neutral-950/90 p-6 space-y-4 shadow-sm">
              <div className="text-[11px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase border-b border-neutral-200 dark:border-white/10 pb-3">
                MÉTODOS DE INGRESO SOPORTADOS
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-black/60 p-4 flex flex-col items-center justify-center text-center gap-2.5">
                  <ScanFace className="h-7 w-7 text-neutral-900 dark:text-white" />
                  <span className="text-xs font-medium text-neutral-900 dark:text-white tracking-wider uppercase">
                    Detección Facial
                  </span>
                </div>

                <div className="border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-black/60 p-4 flex flex-col items-center justify-center text-center gap-2.5">
                  <Fingerprint className="h-7 w-7 text-neutral-900 dark:text-white" />
                  <span className="text-xs font-medium text-neutral-900 dark:text-white tracking-wider uppercase">
                    Huella Digital
                  </span>
                </div>

                <div className="border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-black/60 p-4 flex flex-col items-center justify-center text-center gap-2.5">
                  <QrCode className="h-7 w-7 text-neutral-900 dark:text-white" />
                  <span className="text-xs font-medium text-neutral-900 dark:text-white tracking-wider uppercase">
                    Código QR
                  </span>
                </div>

                <div className="border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-black/60 p-4 flex flex-col items-center justify-center text-center gap-2.5">
                  <CreditCard className="h-7 w-7 text-neutral-900 dark:text-white" />
                  <span className="text-xs font-medium text-neutral-900 dark:text-white tracking-wider uppercase">
                    Tarjeta / NFC
                  </span>
                </div>
              </div>

              <div className="text-[10px] font-mono text-neutral-500 text-center pt-2">
                APTO PARA EVENTOS &middot; INSTITUCIONES &middot; DISCOTECAS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HARDWARE & IOT (Texto conciso y directo) */}
      <section
        id="hardware-iot"
        className="relative flex min-h-[75vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t"
      >
        <div className="max-w-3xl space-y-4">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            03 &middot; Dispositivos a Medida
          </span>

          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl">
            HARDWARE & IOT
          </h2>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            Diseño e integración de equipos electrónicos dedicados para la industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
          <div className="border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950 p-5 space-y-2">
            <Cpu className="h-5 w-5 text-neutral-900 dark:text-white" />
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Supervisión Remota</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Lectura y transmisión de sensores en maquinaria e instalaciones de campo.
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950 p-5 space-y-2">
            <Activity className="h-5 w-5 text-neutral-900 dark:text-white" />
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Alertas Tempranas</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Detección anticipada de anomalías operativas para prevenir paradas críticas.
            </p>
          </div>

          <div className="border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-neutral-950 p-5 space-y-2">
            <Layers className="h-5 w-5 text-neutral-900 dark:text-white" />
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">Equipos Autónomos</h3>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Dispositivos resistentes a ambientes severos con consumo optimizado.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <a
            href="#contacto"
            className="inline-block border border-neutral-300 dark:border-white/40 bg-transparent px-7 py-3 text-xs font-semibold tracking-[0.18em] text-neutral-900 dark:text-white transition hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black uppercase"
          >
            SOLICITAR EQUIPO A MEDIDA
          </a>
        </div>
      </section>
    </div>
  );
}
