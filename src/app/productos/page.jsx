import ProductFeatures from '@/components/sections/ProductFeatures';
import Integrations from '@/components/sections/Integrations';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';
import { ArrowRight, Smartphone, Cloud, Lock, RefreshCw } from 'lucide-react';

export const metadata = {
  title: 'Productos — TPV, Facturación y más',
  description: 'Conoce en detalle los módulos SAC: TPV táctil, facturación CFDI 4.0, inventario inteligente, reportes y app móvil.',
};

const PILLARS = [
  { icon: Smartphone, title: 'App móvil para dueños', body: 'Consulta tus ventas, inventario y cierres desde el celular. Disponible para iOS y Android. Siempre actualizada.' },
  { icon: Cloud, title: 'Todo en la nube', body: 'Tus datos están seguros en servidores mexicanos con respaldo automático cada hora. Sin discos duros que fallan.' },
  { icon: Lock, title: 'Seguridad y roles', body: 'Define qué puede hacer cada empleado: cajero, gerente o administrador. Historial de acciones con fecha y hora.' },
  { icon: RefreshCw, title: 'Actualizaciones continuas', body: 'Cada mejora llega automáticamente. Sin instalaciones manuales ni versiones desactualizadas.' },
];

export default function ProductosPage() {
  return (
    <>
      <section className="sac-hero-gradient py-20 md:py-28" aria-labelledby="prod-heading">
        <div className="sac-container text-center max-w-3xl mx-auto">
          <span className="sac-overline mb-4 block">Productos</span>
          <h1 id="prod-heading" className="font-display font-bold text-4xl md:text-5xl text-blue-900 text-balance">
            Herramientas que trabajan mientras tú vendes
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            SAC no es un software más. Es un ecosistema diseñado para comercios mexicanos, desde el mostrador hasta el SAT.
          </p>
        </div>
      </section>

      <ProductFeatures />

      {/* Pillars */}
      <section className="bg-white py-20" aria-labelledby="pillars-heading">
        <div className="sac-container">
          <h2 id="pillars-heading" className="font-display font-bold text-2xl text-blue-900 text-center mb-10">
            La plataforma detrás del producto
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PILLARS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5">{title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Integrations />

      {/* Hardware */}
      <section className="bg-gray-50 py-20" aria-labelledby="hardware-heading">
        <div className="sac-container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="sac-overline mb-3 block">Hardware</span>
            <h2 id="hardware-heading" className="font-display font-bold text-3xl text-blue-900 mb-4">
              Equipo certificado, instalado por nosotros
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              SAC funciona con terminales táctiles robustas, impresoras térmicas de tickets e impresoras fiscales certificadas.
              Todo el hardware es probado y configurado por nuestro equipo antes de la instalación en tu negocio.
            </p>
            <ul className="flex flex-col gap-2 mb-7">
              {['Terminal táctil de 15" o 10" (múltiples modelos)', 'Impresora térmica de tickets 80mm', 'Cajón de dinero electrónico', 'Lector de código de barras 1D/2D', 'Pinpad para tarjeta con chip y NFC'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contacto#demo" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white" style={{ backgroundColor: '#00296f' }}>
              Consultar opciones de hardware <ArrowRight size={14} />
            </Link>
          </div>
          <div className="h-72 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 flex items-center justify-center" aria-hidden="true">
            <span className="text-sm text-gray-400">Foto: terminal SAC en mostrador</span>
          </div>
        </div>
      </section>

      <CTASection variant="compact" />
    </>
  );
}
