'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Receipt } from 'lucide-react';

const CASES = [
  {
    tag: 'Abarrotes',
    tagColor: 'bg-green-100 text-green-700',
    title: 'Abarrotes Villanueva aumentó sus ventas 38% en 6 meses',
    excerpt: 'Con visibilidad de inventario en tiempo real y reportes desde el celular, Jorge identificó los productos de mayor margen y optimizó sus pedidos de compra.',
    metrics: [
      { icon: TrendingUp, value: '+38%', label: 'ventas' },
      { icon: Clock, value: '4 min', label: 'cierre diario' },
      { icon: Receipt, value: '0', label: 'facturas con error' },
    ],
    href: '/casos-de-exito#villanueva',
    accent: 'border-green-200',
  },
  {
    tag: 'Restaurante',
    tagColor: 'bg-orange-100 text-orange-700',
    title: 'Taquería Don Rober eliminó las filas en hora pico',
    excerpt: 'La división de cuenta y el cobro simultáneo desde múltiples terminales redujo el tiempo de atención a la mitad y aumentó la rotación de mesas.',
    metrics: [
      { icon: TrendingUp, value: '-52%', label: 'tiempo de espera' },
      { icon: Clock, value: '2x', label: 'rotación de mesas' },
      { icon: Receipt, value: '+21%', label: 'ticket promedio' },
    ],
    href: '/casos-de-exito#don-rober',
    accent: 'border-orange-200',
  },
  {
    tag: 'Farmacia',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Farmacia Santa Elena digitalizó su proceso de facturación',
    excerpt: 'De generar facturas en 20 minutos con errores frecuentes, a timbrar en 30 segundos directamente desde el cobro. Cero devoluciones de CFDI.',
    metrics: [
      { icon: TrendingUp, value: '97%', label: 'menos tiempo facturando' },
      { icon: Clock, value: '30 seg', label: 'por factura' },
      { icon: Receipt, value: '100%', label: 'timbrado exitoso' },
    ],
    href: '/casos-de-exito#santa-elena',
    accent: 'border-blue-200',
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-gray-50 py-20 md:py-28" aria-labelledby="cases-heading">
      <div className="sac-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="sac-overline mb-3 block">Casos de éxito</span>
            <h2 id="cases-heading" className="font-display font-bold text-3xl md:text-4xl text-blue-900 text-balance">
              Resultados reales de negocios reales
            </h2>
          </div>
          <Link
            href="/casos-de-exito"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:underline"
          >
            Ver todos los casos <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASES.map(({ tag, tagColor, title, excerpt, metrics, href, accent }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className={`bg-white rounded-xl border ${accent} shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col`}
            >
              {/* Placeholder image */}
              <div className="h-44 rounded-t-xl bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                <span className={`text-xs font-semibold px-3 py-1 rounded-pill ${tagColor}`}>{tag}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-bold text-base text-blue-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{excerpt}</p>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-5 border-t border-gray-100 pt-5">
                  {metrics.map(({ icon: Icon, value, label }) => (
                    <div key={label} className="text-center">
                      <Icon size={14} className="text-green-500 mx-auto mb-1" />
                      <div className="font-mono font-bold text-base text-blue-700 leading-none">{value}</div>
                      <div className="text-2xs text-gray-500 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 hover:underline"
                >
                  Leer caso completo <ArrowRight size={13} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
