"use client";

import { useState } from "react";
import { BrandLogo } from "./brand-logo";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "SENTNLDRIVE", href: "#sentnldrive" },
    { label: "ACCESOS QR", href: "#accesos-qr" },
    { label: "HARDWARE & IOT", href: "#hardware-iot" },
    { label: "DATELAR LABS", href: "#datelar-labs" },
    { label: "MISIÓN", href: "#mision" },
    { label: "EQUIPO", href: "#equipo" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-md starlink-border-b">
      <div className="flex h-16 w-full items-center justify-between px-6 md:px-12">
        <a href="#" className="transition opacity-90 hover:opacity-100">
          <BrandLogo size={24} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.18em] text-neutral-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Minimal Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contacto"
            className="rounded-none border border-white/30 bg-transparent px-4 py-2 text-[11px] font-medium tracking-[0.15em] text-white transition hover:border-white hover:bg-white hover:text-black uppercase"
          >
            CONTACTO
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white lg:hidden"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="h-screen w-full bg-black px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium tracking-[0.2em] text-neutral-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-block text-center border border-white bg-white py-3 text-xs font-semibold tracking-[0.2em] text-black uppercase"
            >
              CONTACTO DIRECTO
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
