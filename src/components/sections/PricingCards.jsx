'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';

const PLANS = [
  {
    name: 'Esencial',
    price: { monthly: 499, annual: 399 },
    desc: 'Para comercios que empiezan su digitalización.',
    features: [
      'TPV táctil en 1 terminal',
      'Hasta 500 productos',
      'Facturación CFDI 4.0 (50 folios/mes)',
      'Reportes básicos de venta',
      'Soporte vía WhatsApp en horario hábil',
      'Actualizaciones incluidas',
    ],
    cta: 'Empezar con Esencial',
    highlight: false,
  },
  {
    name: 'Profesional',
    price: { monthly: 999, annual: 799 },
    desc: 'El plan más elegido por comercios en crecimiento.',
    features: [
      'TPV táctil en hasta 3 terminales',
      'Productos ilimitados',
      'Facturación CFDI 4.0 ilimitada + VeriFactu',
      'Inventario con alertas de mínimos',
      'Reportes avanzados y exportación',
      'Soporte prioritario 7 días / 14h',
      'App móvil para reportes',
      'Integraciones Clip y Mercado Pago',
    ],
    cta: 'Empezar con Profesional',
    highlight: true,
    badge: 'Más popular',
  },
  {
    name: 'Empresa',
    price: { monthly: null, annual: null },
    desc: 'Para cadenas con varias sucursales y necesidades específicas.',
    features: [
      'Terminales ilimitadas',
      'Multi-sucursal con panel centralizado',
      'Integraciones CONTPAQi / ERP',
      'Facturación masiva y complementos',
      'SLA garantizado y gerente de cuenta',
      'Capacitación y onboarding personalizado',
      'API para desarrolladores',
      'Precios por volumen',
    ],
    cta: 'Hablar con un asesor',
    highlight: false,
    custom: true,
  },
];

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="bg-gray-50 py-20 md:py-28" aria-labelledby="pricing-heading">
      <div className="sac-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="sac-overline mb-3 block">Precios</span>
          <h2 id="pricing-heading" className="font-display font-bold text-3xl md:text-4xl text-blue-900 text-balance">
            Planes claros, sin letra pequeña
          </h2>
          <p className="mt-4 text-gray-600">
            Sin permanencia mínima. Sin costos de instalación. Cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div className="mt-7 inline-flex items-center gap-3 bg-white border border-gray-200 rounded-pill px-4 py-2">
            <span className={`text-sm font-medium ${!annual ? 'text-blue-700' : 'text-gray-500'}`}>Mensual</span>
            <button
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual(!annual)}
              className={`relative w-10 h-6 rounded-pill transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 ${
                annual ? 'bg-blue-700' : 'bg-gray-300'
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
                  annual ? 'translate-x-5' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-blue-700' : 'text-gray-500'}`}>
              Anual
              <span className="ml-1.5 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-pill font-semibold">
                −20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map(({ name, price, desc, features, cta, highlight, badge, custom }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`rounded-xl border p-7 flex flex-col relative ${
                highlight
                  ? 'bg-blue-700 border-blue-600 shadow-xl text-white'
                  : 'bg-white border-gray-200 shadow-sm text-gray-900'
              }`}
            >
              {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-pill shadow-sm">
                    <Star size={10} className="fill-white" /> {badge}
                  </span>
                </div>
              )}

              <div className="mb-5">
                <div className={`font-display font-bold text-lg mb-1 ${highlight ? 'text-white' : 'text-blue-900'}`}>
                  {name}
                </div>
                <p className={`text-sm ${highlight ? 'text-white/70' : 'text-gray-500'}`}>{desc}</p>
              </div>

              <div className="mb-6">
                {custom ? (
                  <div className={`font-display font-bold text-3xl ${highlight ? 'text-white' : 'text-blue-900'}`}>
                    A medida
                  </div>
                ) : (
                  <>
                    <span className={`font-mono font-bold text-4xl ${highlight ? 'text-white' : 'text-blue-900'}`}>
                      ${annual ? price.annual : price.monthly}
                    </span>
                    <span className={`text-sm ml-1 ${highlight ? 'text-white/60' : 'text-gray-500'}`}>
                      MXN/mes
                    </span>
                    {annual && (
                      <div className={`text-xs mt-1 ${highlight ? 'text-green-300' : 'text-green-600'}`}>
                        Facturado anualmente · ahorras ${(price.monthly - price.annual) * 12}/año
                      </div>
                    )}
                  </>
                )}
              </div>

              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${highlight ? 'text-white/85' : 'text-gray-700'}`}>
                    <Check
                      size={15}
                      className={`shrink-0 mt-0.5 ${highlight ? 'text-green-300' : 'text-green-500'}`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={custom ? '/contacto#demo' : `/contacto?plan=${name.toLowerCase()}`}
                className={`w-full text-center py-3 rounded-md text-sm font-semibold transition-all duration-150 hover:-translate-y-px inline-flex items-center justify-center gap-2 ${
                  highlight
                    ? 'bg-white text-blue-900 hover:bg-blue-50 shadow-sm'
                    : 'bg-blue-700 text-white hover:bg-blue-800 shadow-sm'
                }`}
              >
                {cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          ¿Tienes dudas sobre qué plan te conviene?{' '}
          <Link href="/contacto" className="text-blue-700 font-medium hover:underline">
            Escríbenos y te asesoramos sin compromiso.
          </Link>
        </p>
      </div>
    </section>
  );
}
