import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Datelar | Telemetría Vehicular, IoT & Soluciones Tecnológicas",
  description:
    "Diseñar, integrar y desplegar soluciones de hardware IoT y software que transformen datos en decisiones operativas eficientes. Creadores de SENTNLDRIVE y Datelar Labs.",
  icons: {
    icon: [
      { url: "/brand/06-Iconos-app-y-redes/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/06-Iconos-app-y-redes/favicon-32px.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/brand/06-Iconos-app-y-redes/apple-touch-icon.png",
  },
  openGraph: {
    title: "Datelar | Hardware IoT, Telemetría y Software",
    description:
      "Plataforma integral de ingeniería: SENTNLDRIVE (telemetría vehicular en fase beta), gestión de accesos QR y Datelar Labs.",
    siteName: "Datelar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/brand/06-Iconos-app-y-redes/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen antialiased transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
