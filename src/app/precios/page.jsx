import PricingCards from '@/components/sections/PricingCards';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Precios — Planes sin letra pequeña',
  description: 'Planes SAC claros y sin permanencia. Esencial desde $499/mes, Profesional desde $799/mes. Sin costo de instalación.',
};

const INCLUDED = [
  'Instalación y configuración sin costo',
  'Capacitación de tu equipo incluida',
  'Migración de catálogo desde Excel',
  'Actualizaciones automáticas siempre',
  'Sin permanencia mínima',
  'Soporte humano en todos los planes',
];

export default function PreciosPage() {
  return (
    <>
      <section className="sac-hero-gradient py-20 md:py-24" aria-labelledby="pricing-page-heading">
        <div className="sac-container text-center max-w-2xl mx-auto">
          <span className="sac-overline mb-4 block">Precios</span>
          <h1 id="pricing-page-heading" className="font-display font-bold text-4xl md:text-5xl text-blue-900 text-balance">
            Planes claros, sin sorpresas
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            Lo que ves es lo que pagas. Nada más.
          </p>
        </div>
      </section>

      {/* Always included */}
      <div className="bg-green-50 border-y border-green-100 py-6">
        <div className="sac-container">
          <p className="text-center text-sm font-semibold text-green-700 mb-4 uppercase tracking-wide">
            Siempre incluido en todos los planes
          </p>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-green-800">
                <Check size={14} className="text-green-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PricingCards />
      <FAQ />
      <CTASection />
    </>
  );
}
