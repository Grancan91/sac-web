import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const FOOTER_LINKS = {
  Soluciones: [
    { label: 'TPV para Comercios', href: '/soluciones#tpv' },
    { label: 'Facturación Electrónica', href: '/soluciones#facturacion' },
    { label: 'Inventario', href: '/soluciones#inventario' },
    { label: 'Reportes y Analytics', href: '/soluciones#reportes' },
    { label: 'VeriFactu', href: '/soluciones#verifactu' },
  ],
  Empresa: [
    { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { label: 'Casos de Éxito', href: '/casos-de-exito' },
    { label: 'Blog', href: '/blog' },
    { label: 'Integraciones', href: '/productos#integraciones' },
    { label: 'Partners', href: '/sobre-nosotros#partners' },
  ],
  Soporte: [
    { label: 'Centro de Ayuda', href: '/soporte' },
    { label: 'Documentación', href: '/docs' },
    { label: 'Estado del sistema', href: '/status' },
    { label: 'Contacto', href: '/contacto' },
    { label: 'WhatsApp directo', href: 'https://wa.me/525512345678' },
  ],
  Legal: [
    { label: 'Aviso de Privacidad', href: '/privacidad' },
    { label: 'Términos de Servicio', href: '/terminos' },
    { label: 'Cookies', href: '/cookies' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#001738' }} className="text-white" aria-label="Pie de página">
      {/* CTA band */}
      <div style={{ backgroundColor: '#00296f' }} className="border-b border-white/10">
        <div className="sac-container py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="sac-overline mb-1" style={{ color: '#86c9a7' }}>¿Listo para modernizar tu negocio?</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-balance">
              Agenda una demo sin compromiso
            </h2>
            <p className="mt-2 text-white/70 text-sm">
              En 30 minutos te mostramos cómo SAC puede funcionar para tu tipo de negocio.
            </p>
          </div>
          <Link
            href="/contacto#demo"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-blue-900 bg-white hover:bg-blue-50 transition-colors"
          >
            Quiero una demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main links */}
      <div className="sac-container py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Brand column */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center font-display font-black text-blue-700 bg-white text-base"
            >
              S
            </div>
            <span className="font-display font-bold text-white text-[15px]">SAC</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            El partner tecnológico que moderniza comercios tradicionales. Sin riesgos, con soporte real.
          </p>
          <ul className="flex flex-col gap-2 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <Phone size={14} className="shrink-0 text-green-400" />
              <a href="tel:+525512345678" className="hover:text-white transition-colors">
                +52 55 1234 5678
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="shrink-0 text-green-400" />
              <a href="mailto:hola@sac.mx" className="hover:text-white transition-colors">
                hola@sac.mx
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="shrink-0 text-green-400 mt-0.5" />
              <span>Ciudad de México, México</span>
            </li>
          </ul>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([section, links]) => (
          <div key={section}>
            <h3 className="text-white font-semibold text-sm mb-4">{section}</h3>
            <ul className="flex flex-col gap-2">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="sac-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© {new Date().getFullYear()} SAC — Soluciones Avanzadas Comerciales. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacidad" className="hover:text-white/70 transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white/70 transition-colors">Términos</Link>
            <Link href="/cookies" className="hover:text-white/70 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
