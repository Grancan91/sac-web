'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, Zap, Handshake, ArrowRight } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: ShieldCheck,
    accent: 'primary',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'bg-blue-700',
    title: 'Confiabilidad ante todo',
    body: 'Equipos certificados, copias automáticas en la nube y continuidad offline. Si algo falla, lo resolvemos antes de que afecte tu negocio.',
    href: '/soluciones#confiabilidad',
  },
  {
    icon: Headphones,
    accent: 'secondary',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'bg-green-500',
    title: 'Soporte especializado incluido',
    body: 'Personas reales que entienden de comercio. Nada de robots ni menús interminables. Estamos a un mensaje de WhatsApp.',
    href: '/soluciones#soporte',
  },
  {
    icon: Zap,
    accent: 'accent',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    border: 'bg-orange-500',
    title: 'Operación simple desde el día 1',
    body: 'Flujos claros, pantalla táctil intuitiva. Tu equipo aprende en minutos y tus clientes no esperan. Sin manuales de 200 páginas.',
    href: '/soluciones#simplicidad',
  },
  {
    icon: Handshake,
    accent: 'primary',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'bg-blue-700',
    title: 'Partnership que crece contigo',
    body: 'Empezamos con lo que necesitas hoy y sumamos funcionalidades a tu ritmo. Nunca te forzamos a pagar por cosas que no usas.',
    href: '/soluciones#partnership',
  },
];

export default function SolutionCards() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="solutions-heading">
      <div className="sac-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="sac-overline mb-3 block">Por qué SAC</span>
          <h2 id="solutions-heading" className="font-display font-bold text-3xl md:text-4xl text-blue-900 text-balance">
            El amigo tecnológico que entiende tu negocio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Modernizar no tiene que ser complicado ni arriesgado. Te acompañamos en cada paso.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOLUTIONS.map(({ icon: Icon, color, bg, border, title, body, href }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-white rounded-lg border border-gray-200 p-6 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden"
            >
              <div className={`absolute inset-x-0 top-0 h-[3px] ${border}`} />
              <div className={`w-12 h-12 rounded-md ${bg} flex items-center justify-center mb-4`}>
                <Icon size={24} className={color} />
              </div>
              <h3 className="font-display font-semibold text-base text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{body}</p>
              <Link
                href={href}
                className={`inline-flex items-center gap-1 text-sm font-medium ${color} hover:underline`}
                aria-label={`Saber más sobre ${title}`}
              >
                Saber más <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
