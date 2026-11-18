"use client";

import { useState } from "react";
import { ArrowUpRight, Code2, X, ExternalLink, ShieldCheck, Music, Radio, Terminal } from "lucide-react";
import { APP_LINKS } from "@/config/links";

interface LabProject {
  id: string;
  title: string;
  category: string;
  desc: string;
  tag: string;
  authorTag: string;
  icon: any;
  details: {
    subtitle: string;
    description: string;
    features: string[];
    link?: string;
    linkText?: string;
  };
}

export function DatelarLabs() {
  const [selectedProject, setSelectedProject] = useState<LabProject | null>(null);

  const projects: LabProject[] = [
    {
      id: "access",
      title: "DATELAR ACCESS",
      category: "PRODUCTO DE DATELAR LABS",
      desc: "Control de acceso digital y boletería infalsificable para eventos e instituciones.",
      tag: "PLATAFORMA",
      authorTag: "PRODUCTO DE DATELAR LABS",
      icon: ShieldCheck,
      details: {
        subtitle: "Sistema de Control de Accesos y Aforo en Tiempo Real",
        description:
          "Plataforma completa de emisión de entradas digitales con código QR único, validación instantánea en puertas y funcionamiento offline garantizado.",
        features: [
          "Validación instantánea en menos de 1 segundo",
          "Boletos infalsificables con bloqueo anti-reventa",
          "Modo offline para eventos en zonas sin internet",
          "Soporte para QR, reconocimiento facial, huella y NFC",
        ],
        link: APP_LINKS.access,
        linkText: "Ingresar al Portal de Datelar Access",
      },
    },
    {
      id: "music-muv",
      title: "MUSIC MUV",
      category: "DATELAR LABS // AUDIO",
      desc: "Reproductor de música nativo de alto rendimiento, sin publicidad y mínimo consumo de batería.",
      tag: "APLICACIÓN MÓVIL",
      authorTag: "POR GERARDO GONZA",
      icon: Music,
      details: {
        subtitle: "Reproductor de Audio Ligero y de Alta Fidelidad",
        description:
          "Aplicación desarrollada en Flutter orientada a la experiencia de usuario: reproducción de audio local en alta resolución, interfaz moderna y cero anuncios comerciales.",
        features: [
          "Sin publicidad ni interrupciones",
          "Ecualizador avanzado y soporte multiformato (FLAC, MP3, WAV)",
          "Bajo consumo de batería y memoria",
          "Diseño minimalista y navegación fluida",
        ],
        link: "https://github.com/Theter65/MusicMuv",
        linkText: "Ver Proyecto en GitHub",
      },
    },
    {
      id: "telecom-suite",
      title: "TELECOM TOOLS SUITE",
      category: "DATELAR LABS // TELECOMUNICACIONES",
      desc: "Calculadoras y utilidades prácticas para diseño y validación de radioenlaces y fibra óptica.",
      tag: "INGENIERÍA",
      authorTag: "POR GERARDO GONZA",
      icon: Radio,
      details: {
        subtitle: "Herramientas de Cálculo y Planificación de Redes",
        description:
          "Suite técnica para ingenieros de telecomunicaciones diseñada para acelerar el cálculo de parámetros de enlace en campo y diseño de infraestructura.",
        features: [
          "Cálculo de zonas de Fresnel y despeje de obstáculos",
          "Pérdidas de propagación en espacio libre (FSPL) y balance de potencias",
          "Atenuación óptica y balance de enlaces de fibra",
          "Estimación de cobertura y dimensionamiento de antenas",
        ],
      },
    },
    {
      id: "embedded-scripts",
      title: "EMBEDDED DEV SCRIPTS",
      category: "DATELAR LABS // DISPOSITIVOS & SENSORES",
      desc: "Scripts de diagnóstico y verificación de sensores para hardware antes de despliegue en campo.",
      tag: "HERRAMIENTAS",
      authorTag: "POR GERARDO GONZA",
      icon: Terminal,
      details: {
        subtitle: "Automatización & Testing para Hardware Embebido",
        description:
          "Colección de utilidades en Python y C++ para diagnóstico de comunicación serial, sensores I2C/SPI y telemetría por MQTT en Raspberry Pi y ESP32.",
        features: [
          "Verificación automática de lectura de sensores",
          "Clientes de prueba para brokers MQTT y WebSockets",
          "Simulación de condiciones de fallo y watchdog",
          "Base de pruebas para dispositivos Sentinel Drive",
        ],
      },
    },
  ];

  return (
    <section
      id="datelar-labs"
      className="relative flex min-h-[85vh] w-full flex-col justify-center px-6 md:px-12 py-24 starlink-border-t"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
        <div className="space-y-4 max-w-2xl">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            04 &middot; Innovación & Software
          </span>

          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            DATELAR LABS
          </h2>

          <p className="text-base text-neutral-300 font-normal leading-relaxed">
            Laboratorio de innovación tecnológica de Datelar. Desarrollamos plataformas y utilidades digitales orientadas a resolver necesidades operativas.
          </p>
        </div>

        <div>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 border border-white/30 bg-transparent px-5 py-2.5 text-xs font-medium tracking-[0.15em] text-white transition hover:border-white hover:bg-white hover:text-black uppercase"
          >
            <Code2 className="h-4 w-4" />
            <span>SOLICITAR INFORMACIÓN</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* Grid de Proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="border border-white/10 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between hover:border-white/20 transition group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-500 tracking-wider">
                  <span>{item.category}</span>
                  <span className="text-neutral-400 border border-white/10 px-1.5 py-0.5">{item.tag}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-white/70 group-hover:text-white transition" />
                  <h3 className="text-2xl font-medium text-white tracking-wide">{item.title}</h3>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed font-sans">{item.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-neutral-400">
                <span className="text-neutral-500 text-[10px] uppercase">{item.authorTag}</span>

                {item.id === "access" ? (
                  <a
                    href={APP_LINKS.access}
                    className="text-white hover:underline transition flex items-center gap-1 font-sans text-xs font-semibold"
                  >
                    <span>Abrir Portal</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="text-white hover:underline transition flex items-center gap-1 font-sans text-xs font-semibold"
                  >
                    <span>Abrir Portal</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Attribution oficial requerida */}
      <div className="mt-12 border border-white/15 bg-neutral-950 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div>
            <div className="text-white font-medium text-sm tracking-wide uppercase">
              DIVISIÓN DE DATELAR LABS CREADA POR GERARDO GONZA
            </div>
            <div className="text-neutral-400 text-xs mt-1 font-sans">
              Espacio dedicado a la creación y desarrollo de plataformas digitales y aplicaciones prácticas dentro de Datelar.
            </div>
          </div>
          <div className="text-neutral-500 text-[10px] tracking-widest uppercase sm:text-right whitespace-nowrap">
            DATELAR LABS // INNOVACIÓN
          </div>
        </div>
      </div>

      {/* Modal Interactivo de Información del Portal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl border border-white/20 bg-neutral-950 p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-neutral-400 hover:text-white transition"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="space-y-2">
              <div className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                {selectedProject.category} &middot; {selectedProject.tag}
              </div>
              <h3 className="text-2xl font-medium text-white">{selectedProject.title}</h3>
              <p className="text-xs font-mono text-neutral-400">{selectedProject.details.subtitle}</p>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              {selectedProject.details.description}
            </p>

            <div className="border border-white/10 bg-black/60 p-4 space-y-2">
              <div className="text-[11px] font-mono tracking-wider text-white uppercase">
                CARACTERÍSTICAS DEL SISTEMA
              </div>
              <ul className="space-y-1.5 text-xs text-neutral-400 font-sans">
                {selectedProject.details.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white font-mono">&gt;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono text-neutral-500 uppercase">
                {selectedProject.authorTag}
              </span>

              <div className="flex items-center gap-3">
                {selectedProject.details.link && (
                  <a
                    href={selectedProject.details.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-white bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-neutral-200 transition uppercase"
                  >
                    <span>{selectedProject.details.linkText || "Ver Proyecto"}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="border border-white/20 px-4 py-2 text-xs text-neutral-300 hover:text-white hover:border-white transition uppercase font-mono"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
