"use client";

import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "SENTNLDRIVE",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="w-full px-6 md:px-12 py-24 starlink-border-t">
      <div className="grid gap-12 lg:grid-cols-12">
        {/* Left Column: Direct Info */}
        <div className="space-y-6 lg:col-span-5">
          <span className="text-[11px] font-semibold tracking-[0.25em] text-neutral-500 uppercase">
            07 &middot; Consulta Directa
          </span>

          <h2 className="text-3xl font-medium tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            CONTACTO & COTIZACIONES
          </h2>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-md">
            Consulta sobre el despliegue de <strong>SENTNLDRIVE</strong> (telemetría vehicular), 
            la implementación de <strong>Datelar Access</strong> para tu evento o el desarrollo de 
            hardware y soluciones a medida.
          </p>

          <div className="pt-6 font-mono text-xs text-neutral-600 dark:text-neutral-400 space-y-2 border-t border-neutral-200 dark:border-white/10">
            <div>&bull; EMAIL: contacto@datelar.com</div>
            <div>&bull; LÍNEA CORPORATIVA: Próximamente (En proceso de habilitación)</div>
            <div>&bull; SEDE: Ecuador &middot; Operación Regional</div>
            <div>&bull; TIEMPO ESTIMADO DE RESPUESTA: &lt; 24 HORAS</div>
          </div>
        </div>

        {/* Right Column: Clean Industrial Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="border border-neutral-200 dark:border-white/20 bg-neutral-50 dark:bg-neutral-950 p-12 text-center space-y-4 shadow-sm">
              <div className="text-xs font-mono tracking-widest text-neutral-900 dark:text-white uppercase">
                SOLICITUD REGISTRADA // ESTADO: RECIBIDO
              </div>
              <h3 className="text-2xl font-medium text-neutral-900 dark:text-white">Gracias por comunicarte</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                Tu mensaje ha sido remitido al equipo de ingeniería de Datelar. Nos pondremos en contacto a la brevedad.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 border border-neutral-300 dark:border-white/30 bg-transparent px-6 py-2.5 text-xs font-medium tracking-[0.15em] text-neutral-900 dark:text-white transition hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black uppercase"
              >
                ENVIAR OTRA CONSULTA
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-neutral-200 dark:border-white/15 bg-neutral-50 dark:bg-neutral-950 p-8 space-y-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-wider text-neutral-600 dark:text-neutral-400 uppercase">
                    NOMBRE O EMPRESA *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Identificación"
                    className="w-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-black px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-black dark:focus:border-white focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-wider text-neutral-600 dark:text-neutral-400 uppercase">
                    CORREO ELECTRÓNICO *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="nombre@empresa.com"
                    className="w-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-black px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-black dark:focus:border-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-wider text-neutral-600 dark:text-neutral-400 uppercase">
                    TELÉFONO // WHATSAPP
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+593 ..."
                    className="w-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-black px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-black dark:focus:border-white focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-wider text-neutral-600 dark:text-neutral-400 uppercase">
                    SERVICIO DE INTERÉS
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-black px-4 py-3 text-sm text-neutral-900 dark:text-white focus:border-black dark:focus:border-white focus:outline-none"
                  >
                    <option value="SENTNLDRIVE" className="bg-white dark:bg-black text-neutral-900 dark:text-white">SENTNLDRIVE (TELEMETRÍA VEHICULAR)</option>
                    <option value="DATELAR ACCESS" className="bg-white dark:bg-black text-neutral-900 dark:text-white">DATELAR ACCESS (CONTROL DE ACCESO)</option>
                    <option value="HARDWARE & IOT" className="bg-white dark:bg-black text-neutral-900 dark:text-white">HARDWARE & IOT A MEDIDA</option>
                    <option value="DATELAR LABS" className="bg-white dark:bg-black text-neutral-900 dark:text-white">DATELAR LABS (INNOVACIÓN & SOFTWARE)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-wider text-neutral-600 dark:text-neutral-400 uppercase">
                  DETALLE DE LA CONSULTA *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Especifica número de vehículos, requerimientos de aforo o alcance del hardware..."
                  className="w-full border border-neutral-300 dark:border-white/20 bg-white dark:bg-black px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 focus:border-black dark:focus:border-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-neutral-900 bg-neutral-900 dark:border-white dark:bg-white py-3.5 text-xs font-semibold tracking-[0.2em] text-white dark:text-black transition hover:bg-neutral-800 dark:hover:bg-neutral-200 uppercase"
              >
                ENVIAR MENSAJE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
