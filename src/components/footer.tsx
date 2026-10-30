import { BrandLogo } from "./brand-logo";
import { Heart, Shield } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./social-icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#04070d] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <BrandLogo size={42} />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Soluciones integrales de hardware IoT, telemetría vehicular avanzada y desarrollo de software orientadas a la optimización de procesos operativos e industriales.
            </p>
            <div className="text-xs text-slate-500">
              Fundada por <span className="text-slate-300 font-semibold">Elio Romero</span> y{" "}
              <span className="text-slate-300 font-semibold">Gerardo Gonza</span>.
            </div>
          </div>

          {/* Soluciones B2B */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-datelar-cyan">
              Soluciones
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#sentinel-drive" className="hover:text-white transition">
                  Sentinel Drive
                </a>
              </li>
              <li>
                <a href="#accesos-qr" className="hover:text-white transition">
                  Gestión de Entradas QR
                </a>
              </li>
              <li>
                <a href="#hardware-iot" className="hover:text-white transition">
                  Hardware & IoT a Medida
                </a>
              </li>
              <li>
                <a href="#sentinel-drive" className="hover:text-white transition">
                  Diagnóstico OBD-II / CAN
                </a>
              </li>
            </ul>
          </div>

          {/* Datelar Labs */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-datelar-amber">
              Datelar Labs
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#datelar-labs" className="hover:text-white transition">
                  Music Muv (Audio Player)
                </a>
              </li>
              <li>
                <a href="#datelar-labs" className="hover:text-white transition">
                  Telecom Tools Suite
                </a>
              </li>
              <li>
                <a href="#datelar-labs" className="hover:text-white transition">
                  Calculadoras RF & Subredes
                </a>
              </li>
              <li>
                <a href="#datelar-labs" className="hover:text-white transition">
                  Utilidades Open Source
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Empresa
            </h5>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#mision-vision" className="hover:text-white transition">
                  Misión y Visión
                </a>
              </li>
              <li>
                <a href="#fundadores" className="hover:text-white transition">
                  Equipo Fundador
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition">
                  Contacto & Cotización
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with specific personal note as requested */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-400 md:flex-row">
          <div>
            &copy; {new Date().getFullYear()} Datelar. Todos los derechos reservados.
          </div>

          <div className="rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-1.5 text-center text-[11px] text-slate-400">
            * Datelar Labs y la aplicación <strong className="text-slate-300">Music Muv</strong> son proyectos de autoría y propiedad independiente de{" "}
            <strong className="text-datelar-amber">Gerardo Gonza</strong>.
          </div>
        </div>
      </div>
    </footer>
  );
}
