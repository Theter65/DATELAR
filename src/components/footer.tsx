import { BrandLogo } from "./brand-logo";
import { APP_LINKS } from "@/config/links";

export function Footer() {
  return (
    <footer className="w-full bg-neutral-50 dark:bg-black py-12 px-6 md:px-12 starlink-border-t transition-colors">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-white/10">
        <BrandLogo size={22} />

        <div className="flex flex-wrap gap-6 text-[11px] font-mono tracking-wider text-neutral-600 dark:text-neutral-400">
          <a href={APP_LINKS.sentnldrive} className="hover:text-black dark:hover:text-white transition">SENTNLDRIVE</a>
          <a href={APP_LINKS.access} className="hover:text-black dark:hover:text-white transition">DATELAR ACCESS</a>
          <a href="/#hardware-iot" className="hover:text-black dark:hover:text-white transition">HARDWARE & IOT</a>
          <a href="/#datelar-labs" className="hover:text-black dark:hover:text-white transition">DATELAR LABS</a>
          <a href="/#mision" className="hover:text-black dark:hover:text-white transition">MISIÓN</a>
          <a href="/#equipo" className="hover:text-black dark:hover:text-white transition">EQUIPO</a>
          <a href="/#contacto" className="hover:text-black dark:hover:text-white transition">CONTACTO</a>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] font-mono text-neutral-500">
        <div>
          DATELAR &copy; {new Date().getFullYear()} &middot; FUNDADA POR ELIO ROMERO Y GERARDO GONZA &middot; INGENIEROS EN TELECOMUNICACIONES (UNL) &middot; TODOS LOS DERECHOS RESERVADOS
        </div>

        <div>
          * DATELAR LABS: DIVISIÓN DE DATELAR LABS CREADA POR GERARDO GONZA
        </div>
      </div>
    </footer>
  );
}
