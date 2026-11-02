import { BrandLogo } from "./brand-logo";

export function Footer() {
  return (
    <footer className="w-full bg-black py-12 px-6 md:px-12 starlink-border-t">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
        <BrandLogo size={22} />

        <div className="flex flex-wrap gap-6 text-[11px] font-mono tracking-wider text-neutral-400">
          <a href="#sentnldrive" className="hover:text-white transition">SENTNLDRIVE</a>
          <a href="#accesos-qr" className="hover:text-white transition">ACCESOS QR</a>
          <a href="#hardware-iot" className="hover:text-white transition">HARDWARE & IOT</a>
          <a href="#datelar-labs" className="hover:text-white transition">DATELAR LABS</a>
          <a href="#mision" className="hover:text-white transition">MISIÓN</a>
          <a href="#equipo" className="hover:text-white transition">EQUIPO</a>
          <a href="#contacto" className="hover:text-white transition">CONTACTO</a>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] font-mono text-neutral-500">
        <div>
          DATELAR &copy; {new Date().getFullYear()} &middot; FUNDADA POR ELIO ROMERO Y GERARDO GONZA (THETER) &middot; INGENIEROS EN TELECOMUNICACIONES (UNL) &middot; TODOS LOS DERECHOS RESERVADOS
        </div>

        <div>
          * DATELAR LABS: INICIATIVA DESARROLLADA POR GERARDO GONZA
        </div>
      </div>
    </footer>
  );
}
