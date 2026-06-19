import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';
import { Heart, Target, Users, Shield, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Sobre Nosotros — Quiénes somos en SAC',
  description: 'SAC nació para ser el partner tecnológico que los comercios mexicanos merecen. Conoce nuestra historia, valores y el equipo detrás de la plataforma.',
};

const VALUES = [
  { icon: Shield, title: 'Confiabilidad', body: 'No prometemos lo que no podemos cumplir. Cada palabra que decimos es un compromiso que honramos.' },
  { icon: Heart, title: 'Empatía', body: 'Entendemos los miedos y los retos de digitalizar un negocio que has construido con esfuerzo.' },
  { icon: Target, title: 'Claridad', body: 'Sin tecnicismos, sin letra pequeña, sin costos ocultos. Lo que ves es lo que obtienes.' },
  { icon: Users, title: 'Acompañamiento', body: 'No desaparecemos después de la venta. Estamos contigo el día 1 y el día 1,000.' },
];

const TEAM = [
  { name: 'Alejandro Ríos', role: 'CEO & Cofundador', initials: 'AR', color: 'bg-blue-600' },
  { name: 'Sandra Morales', role: 'CTO & Cofundadora', initials: 'SM', color: 'bg-green-500' },
  { name: 'Carlos Vega', role: 'Director de Producto', initials: 'CV', color: 'bg-orange-500' },
  { name: 'Luisa Peña', role: 'Directora de Soporte', initials: 'LP', color: 'bg-blue-700' },
];

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="sac-hero-gradient py-20 md:py-28" aria-labelledby="about-heading">
        <div className="sac-container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="sac-overline mb-4 block">Sobre nosotros</span>
            <h1 id="about-heading" className="font-display font-bold text-4xl md:text-5xl text-blue-900 text-balance">
              Somos el amigo tecnológico que tu negocio necesitaba
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              SAC nació de una pregunta simple: ¿por qué los comercios pequeños tienen que conformarse con tecnología complicada, soporte deficiente y contratos abusivos?
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Fundamos SAC en 2019 con la convicción de que la digitalización debería ser accesible, confiable y humana —sin importar el tamaño del negocio.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['2019', 'Año de fundación'], ['+2,400', 'Comercios activos'], ['32', 'Estados atendidos'], ['4.8/5', 'Satisfacción']].map(([v, l]) => (
              <div key={l} className="bg-white rounded-lg border border-gray-200 shadow-xs p-5 text-center">
                <div className="font-mono font-bold text-2xl text-blue-700">{v}</div>
                <div className="text-xs text-gray-500 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-white py-20" aria-labelledby="values-heading">
        <div className="sac-container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="sac-overline mb-3 block">Nuestros valores</span>
            <h2 id="values-heading" className="font-display font-bold text-3xl text-blue-900">Lo que guía cada decisión que tomamos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-6 rounded-lg bg-gray-50 border border-gray-200">
                <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section style={{ backgroundColor: '#00296f' }} className="py-20 text-white" aria-labelledby="story-heading">
        <div className="sac-container max-w-3xl mx-auto text-center">
          <h2 id="story-heading" className="font-display font-bold text-3xl text-white mb-6">Nuestra historia</h2>
          <p className="text-white/75 text-lg leading-relaxed mb-5">
            Los dos cofundadores de SAC venimos del mundo del retail. Vimos de cerca cómo los dueños de comercios perdían horas con sistemas que no funcionaban, soporte que nunca llegaba y facturas que el SAT rechazaba.
          </p>
          <p className="text-white/75 leading-relaxed">
            Empezamos con 3 clientes en la colonia Doctores de la Ciudad de México. Hoy servimos a más de 2,400 comercios en 32 estados. El tamaño cambió; la filosofía no: <em className="text-white not-italic font-medium">nosotros nos encargamos.</em>
          </p>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-gray-50 py-20" aria-labelledby="team-heading">
        <div className="sac-container">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="sac-overline mb-3 block">El equipo</span>
            <h2 id="team-heading" className="font-display font-bold text-3xl text-blue-900">
              Personas reales detrás de cada interacción
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TEAM.map(({ name, role, initials, color }) => (
              <div key={name} className="bg-white rounded-lg border border-gray-200 shadow-xs p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center text-white font-bold text-lg mx-auto mb-3`}>
                  {initials}
                </div>
                <div className="font-semibold text-gray-900 text-sm">{name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{role}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            Y un equipo de +40 personas en soporte, desarrollo e implementación en todo México.
          </p>
        </div>
      </section>

      <CTASection variant="compact" />
    </>
  );
}
