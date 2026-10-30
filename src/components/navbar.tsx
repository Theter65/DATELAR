"use client";

import { useState } from "react";
import { BrandLogo } from "./brand-logo";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Sentinel Drive", href: "#sentinel-drive" },
    { label: "Accesos QR", href: "#accesos-qr" },
    { label: "Hardware & IoT", href: "#hardware-iot" },
    { label: "Datelar Labs", href: "#datelar-labs", badge: "Apps" },
    { label: "Misión & Visión", href: "#mision-vision" },
    { label: "Equipo", href: "#fundadores" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-datelar-cyan/15 bg-[#060a12]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="transition hover:opacity-95">
          <BrandLogo size={40} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative flex items-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="rounded-full bg-datelar-cyan/15 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-datelar-cyan border border-datelar-cyan/30">
                  {link.badge}
                </span>
              )}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-datelar-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contacto"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-datelar-cyan to-[#2ea9bc] px-5 py-2.5 text-sm font-semibold text-[#060a12] shadow-glow transition hover:brightness-110 active:scale-95"
          >
            <span>Cotizar Proyecto</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 hover:text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#060a12] px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-slate-200 hover:text-datelar-cyan"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="rounded-full bg-datelar-cyan/15 px-2 py-0.5 text-xs text-datelar-cyan">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-datelar-cyan px-5 py-3 text-sm font-semibold text-[#060a12]"
            >
              <span>Contactar a Datelar</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
