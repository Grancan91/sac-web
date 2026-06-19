'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart, Receipt, BarChart3, Package,
  CreditCard, Smartphone, Cloud, Users,
} from 'lucide-react';

const TABS = [
  {
    id: 'tpv',
    label: 'TPV Táctil',
    icon: ShoppingCart,
    headline: 'Cobra más rápido, sin errores',
    body: 'Pantalla táctil de alta respuesta con catálogo visual configurable. Agrega productos con un toque, aplica descuentos, divide la cuenta y cobra con efectivo, tarjeta o transferencia —todo desde una sola pantalla.',
    features: [
      'Catálogo visual con búsqueda inteligente',
      'Múltiples formas de pago en un cobro',
      'División de cuenta para restaurantes',
      'Funcionamiento sin internet (modo offline)',
      'Impresión de ticket en papel o digital',
      'Apertura de caja con PIN seguro',
    ],
    mockup: 'TPV',
  },
  {
    id: 'facturacion',
    label: 'Facturación CFDI 4.0',
    icon: Receipt,
    headline: 'CFDI 4.0 en segundos, sin errores',
    body: 'Genera facturas electrónicas directamente desde el punto de venta o desde el portal web. Validación automática de RFC, complementos de pago y timbrado inmediato con el SAT.',
    features: [
      'Timbrado instantáneo con el SAT',
      'Validación de RFC en tiempo real',
      'Facturas globales y de mostrador',
      'Complemento de pago automático',
      'Envío por correo y WhatsApp',
      'Cancelación con un clic',
    ],
    mockup: 'CFDI',
  },
  {
    id: 'inventario',
    label: 'Inventario',
    icon: Package,
    headline: 'Nunca más te quedes sin stock',
    body: 'Control de existencias en tiempo real sincronizado con el punto de venta. Alertas de mínimos, entradas y salidas trazables, y reportes de rotación para tomar mejores decisiones de compra.',
    features: [
      'Descuento automático al vender',
      'Alertas de mínimos configurables',
      'Códigos de barras y QR',
      'Múltiples almacenes y ubicaciones',
      'Historial completo de movimientos',
      'Inventario físico con app móvil',
    ],
    mockup: 'INV',
  },
  {
    id: 'reportes',
    label: 'Reportes',
    icon: BarChart3,
    headline: 'Decide con datos, no con intuición',
    body: 'Panel de métricas accesible desde cualquier dispositivo. Ventas por hora, producto más vendido, comparativo de periodos y exportación a Excel —sin necesidad de contadores.',
    features: [
      'Dashboard en tiempo real',
      'Ventas por producto, categoría y vendedor',
      'Comparativo diario, semanal y mensual',
      'Ticket promedio y productos estrella',
      'Exportación a Excel y PDF',
      'Alertas por WhatsApp',
    ],
    mockup: 'REP',
  },
];

function MockupDisplay({ type }) {
  const colors = {
    TPV: { bg: 'from-blue-50 to-blue-100', accent: '#00296f' },
    CFDI: { bg: 'from-green-50 to-green-100', accent: '#339966' },
    INV: { bg: 'from-orange-50 to-orange-100', accent: '#e67e22' },
    REP: { bg: 'from-blue-50 to-blue-100', accent: '#00296f' },
  };
  const c = colors[type];
  return (
    <div
      className={`w-full h-64 md:h-80 rounded-xl bg-gradient-to-br ${c.bg} border border-gray-200 flex items-center justify-center`}
      aria-hidden="true"
    >
      <div className="text-center">
        <div
          className="w-16 h-16 rounded-xl mx-auto mb-3 flex items-center justify-center text-white font-display font-bold text-xl"
          style={{ backgroundColor: c.accent }}
        >
          {type}
        </div>
        <p className="text-sm text-gray-500">Vista previa de módulo</p>
      </div>
    </div>
  );
}

export default function ProductFeatures() {
  const [active, setActive] = useState('tpv');
  const tab = TABS.find((t) => t.id === active);

  return (
    <section className="bg-gray-50 py-20 md:py-28" aria-labelledby="features-heading">
      <div className="sac-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="sac-overline mb-3 block">Funcionalidades</span>
          <h2 id="features-heading" className="font-display font-bold text-3xl md:text-4xl text-blue-900 text-balance">
            Todo lo que tu negocio necesita, en un solo lugar
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Módulos del producto">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={active === id}
              aria-controls={`panel-${id}`}
              onClick={() => setActive(id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-all duration-150 ${
                active === id
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-700'
              }`}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </div>

        {/* Tab panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10"
          >
            {/* Copy */}
            <div>
              <h3 className="font-display font-bold text-2xl text-blue-900 mb-3">{tab.headline}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{tab.body}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tab.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 10 10">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            {/* Mockup */}
            <MockupDisplay type={tab.mockup} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
