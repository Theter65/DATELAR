/**
 * Configuración centralizada de enlaces y subdominios de Datelar.
 * Permite cambiar fácilmente entre desarrollo local y producción en Cloudflare.
 */
const isProd = process.env.NODE_ENV === "production";

export const APP_LINKS = {
  // Dominio raíz principal
  home: isProd ? "https://datelar.com" : "/",
  
  // Subdominios de productos Datelar
  access: isProd
    ? "https://access.datelar.com"
    : "/access", // En local puedes usar la ruta interna /access o http://localhost:3001
    
  sentnldrive: isProd
    ? "https://sentnl.datelar.com"
    : "#sentnldrive",
    
  labs: isProd
    ? "https://labs.datelar.com"
    : "#datelar-labs",
    
  contact: "#contacto",
};
