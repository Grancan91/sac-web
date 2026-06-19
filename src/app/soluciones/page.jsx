import SolutionCards from '@/components/sections/SolutionCards';
import ProductFeatures from '@/components/sections/ProductFeatures';
import VerifactuSection from '@/components/sections/VerifactuSection';
import Integrations from '@/components/sections/Integrations';
import CTASection from '@/components/sections/CTASection';
import { ArrowRight, ShoppingCart, Receipt, Package, BarChart3, Shield, Headphones } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Soluciones TPV y Facturación Electrónica',
  description:
    'Descubre todas las soluciones SAC: TPV táctil, facturación CFDI 4.0, VeriFactu, inventario y reportes en tiempo real para tu comercio.',
};

const SEGMENTS = [
  {
    icon: ShoppingCart,
    name: 'Abarrotes y Misceláneas',
    desc: 'Control de existencias, precios actualizables en segundos y cierre de caja automático.',
    href: '#tpv',
  },
  {
    icon: Receipt,
    name: 'Restaurantes y Taquerías',
    desc: 'Gestión de mesas, comanda a cocina, división de cuenta y cobro rápido en hora pico.',
    href: '#tpv',
  },
  {
    icon: Package,
    name: 'Farmacias y Boticas',
    desc: 'Facturación de recetas, control de caducidades y reportes para el distribuidor.',
    href: '#facturacion',
  },
  {
    icon: BarChart3,
    name: 'Tiendas de Ropa y Calzado',
    desc: 'Variantes de producto (talla, color), inventario por temporada y promociones.',
    href: '#inventario',
  },
];

export default function SolucionesPage() {
  return (
    <>
      {/* Hero */}
      <section className="sac-hero-gradient py-20 md:py-28" aria-labelledby="sol-heading">
        <div className="sac-container text-center max-w-3xl mx-auto">
          <span className="sac-overline mb-4 block">Soluciones</span>
          <h1 id="sol-heading" className="font-display font-bold text-4xl md:text-5xl text-blue-900 text-balance">
            Todo lo que tu comercio necesita para crecer
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Desde el cobro en mostrador hasta el cumplimiento fiscal, SAC conecta todas las piezas para que tú no tengas que hacerlo.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contacto#demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white shadow-sm" style={{ backgroundColor: '#00296f' }}>
              Ver una demo <ArrowRight size={15} />
            </Link>
            <Link href="/precios" className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-blue-700 border border-blue-200 bg-white hover:bg-blue-50 transition-colors">
              Ver precios
            </Link>
          </div>
        </div>
      </section>

      {/* Segmentos */}
      <section className="bg-white py-16" aria-labelledby="segments-heading">
        <div className="sac-container">
          <h2 id="segments-heading" className="font-display font-bold text-2xl text-blue-900 text-center mb-10">
            Adaptado a tu tipo de negocio
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SEGMENTS.map(({ icon: Icon, name, desc, href }) => (
              <a key={name} href={href} className="block p-6 rounded-lg border border-gray-200 bg-gray-50 hover:shadow-sm hover:border-blue-200 transition-all group">
                <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                  <Icon size={20} className="text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <SolutionCards />
      <ProductFeatures />
      <VerifactuSection />
      <Integrations />
      <CTASection variant="compact" />
    </>
  );
}
