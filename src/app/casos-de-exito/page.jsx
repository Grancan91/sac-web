import CaseStudies from '@/components/sections/CaseStudies';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import { TrendingUp, Users, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Casos de Éxito — Comercios que modernizaron con SAC',
  description: 'Conoce cómo abarrotes, restaurantes y farmacias de toda México aumentaron sus ventas y simplificaron su operación con SAC.',
};

const SUMMARY_STATS = [
  { icon: Users, value: '+2,400', label: 'comercios activos' },
  { icon: TrendingUp, value: '38%', label: 'aumento promedio en ventas' },
  { icon: MapPin, value: '32', label: 'estados de la República' },
];

export default function CasosPage() {
  return (
    <>
      <section className="sac-hero-gradient py-20 md:py-28" aria-labelledby="cases-page-heading">
        <div className="sac-container text-center max-w-3xl mx-auto">
          <span className="sac-overline mb-4 block">Casos de éxito</span>
          <h1 id="cases-page-heading" className="font-display font-bold text-4xl md:text-5xl text-blue-900 text-balance">
            Comercios que decidieron modernizarse con SAC
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            No son estudios de caso inventados. Son negocios reales, con nombres y apellidos, que nos dieron su confianza y hoy no se imaginan trabajar sin SAC.
          </p>
        </div>
      </section>

      {/* Stats */}
      <div className="bg-white border-y border-gray-200">
        <div className="sac-container">
          <ul className="grid grid-cols-3 divide-x divide-gray-200">
            {SUMMARY_STATS.map(({ icon: Icon, value, label }) => (
              <li key={label} className="text-center py-10">
                <Icon size={22} className="text-blue-700 mx-auto mb-2" />
                <div className="font-mono font-bold text-3xl text-blue-700">{value}</div>
                <div className="text-sm text-gray-500 mt-1">{label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CaseStudies />
      <Testimonials />
      <CTASection />
    </>
  );
}
