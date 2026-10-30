"use client";

import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin, MessageSquare } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Sentinel Drive (Telemetría)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="scroll-mt-28 border-t border-white/10 py-16 lg:py-24">
      <div className="glass-panel relative overflow-hidden rounded-3xl p-8 lg:p-14">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left info column */}
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-datelar-cyan/30 bg-datelar-navy px-3.5 py-1 text-xs font-semibold text-datelar-cyan">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Canal Directo con Ingeniería</span>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Iniciemos tu próximo proyecto tecnológico
              </h2>
              <p className="text-sm leading-relaxed text-slate-300">
                ¿Buscas optimizar una flota vehicular con <strong>Sentinel Drive</strong>, 
                implementar control de accesos QR para un evento, diseñar un dispositivo IoT 
                a medida o colaborar con <strong>Datelar Labs</strong>?
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-datelar-cyan">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Correo Electrónico</div>
                  <div className="font-semibold text-white">contacto@datelar.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-datelar-cyan">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Atención Directa & WhatsApp</div>
                  <div className="font-semibold text-white">+593 (Ecuador) / Soporte Técnico</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-datelar-cyan">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Sede Principal</div>
                  <div className="font-semibold text-white">Ecuador &middot; Operación Regional</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center rounded-2xl border border-datelar-cyan/40 bg-datelar-navy/80 p-8 text-center backdrop-blur-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-datelar-cyan/20 text-datelar-cyan">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-white">¡Mensaje Recibido!</h3>
                <p className="mt-2 max-w-md text-sm text-slate-300">
                  Gracias por comunicarte con Datelar. Uno de nuestros fundadores o ingenieros se pondrá en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Nombre o Empresa *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre o empresa"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-datelar-cyan focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Correo Electrónico *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-datelar-cyan focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Teléfono / WhatsApp</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+593 9..."
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-datelar-cyan focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Servicio de Interés</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white focus:border-datelar-cyan focus:outline-none"
                    >
                      <option className="bg-[#09121f] text-white">Sentinel Drive (Telemetría)</option>
                      <option className="bg-[#09121f] text-white">Datelar Access (Control QR & Entradas)</option>
                      <option className="bg-[#09121f] text-white">Hardware & Sensores IoT a Medida</option>
                      <option className="bg-[#09121f] text-white">Datelar Labs / Colaboración Software</option>
                      <option className="bg-[#09121f] text-white">Otros Proyectos Tecnológicos</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Cuéntanos sobre tu requerimiento *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe cuántos vehículos, cantidad de accesos o las características del hardware/software que necesitas..."
                    className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-datelar-cyan focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-datelar-cyan px-6 py-3.5 text-sm font-bold text-[#060a12] shadow-glow transition hover:brightness-110 active:scale-98"
                >
                  <Send className="h-4 w-4" />
                  <span>Enviar Consulta a Datelar</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
