'use client';

import Link from 'next/link';
import { ArrowRight, Play, ShieldCheck, Headphones, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const TRUST_BADGES = [
  { icon: ShieldCheck, text: 'Sin permanencia' },
  { icon: Headphones, text: 'Soporte incluido' },
  { icon: TrendingUp, text: 'Instalación en el día' },
];

const STATS = [
  { value: '+2,400', label: 'comercios activos' },
  { value: '99.9%', label: 'tiempo en línea' },
  { value: '<2 min', label: 'respuesta soporte' },
  { value: '4.8/5', label: 'satisfacción' },
];

export default function HeroSection() {
  return (
    <>
      {/* Hero principal */}
      <section
        className="sac-hero-gradient"
        aria-labelledby="hero-heading"
      >
        <div className="sac-container py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="sac-overline mb-3 block">Tu partner tecnológico de confianza</span>
            <h1
              id="hero-heading"
              className="font-display font-bold text-4xl md:text-5xl text-blue-900 leading-tight text-balance"
              style={{ letterSpacing: '-0.02em' }}
            >
              Moderniza tu negocio.
              <br />
              <span style={{ color: '#00296f' }}>Sin riesgos, con soporte.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed max-w-[480px]">
              Llevamos terminal de cobro, inventario y facturación electrónica a tu comercio de forma simple.
              Nosotros nos encargamos del resto —tú sigues vendiendo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contacto#demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-base font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-px active:scale-95 transition-all duration-150"
                style={{ backgroundColor: '#00296f' }}
              >
                Agenda una demo gratis
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-base font-semibold text-blue-700 border border-blue-200 bg-white hover:bg-blue-50 transition-colors"
              >
                <Play size={16} />
                Ver cómo funciona
              </Link>
            </div>

            <ul className="mt-6 flex flex-wrap gap-5">
              {TRUST_BADGES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon size={16} className="text-green-500 shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            {/* Placeholder visual — reemplazar con imagen real */}
            <div
              className="w-full h-[420px] rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-100 shadow-xl flex items-center justify-center"
              aria-hidden="true"
            >
              {/* Mock TPV UI */}
              <div className="bg-white rounded-lg shadow-lg p-5 w-64">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-500">Ticket #0042</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-pill font-semibold">Cobrado</span>
                </div>
                {[
                  { prod: 'Leche 1L', qty: 2, price: '$48.00' },
                  { prod: 'Pan integral', qty: 1, price: '$34.00' },
                  { prod: 'Queso fresco', qty: 1, price: '$62.00' },
                ].map((item) => (
                  <div key={item.prod} className="flex justify-between text-sm py-1.5 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700">{item.prod} ×{item.qty}</span>
                    <span className="font-mono text-gray-900">{item.price}</span>
                  </div>
                ))}
                <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="font-mono font-bold text-blue-700 text-lg">$192.00</span>
                </div>
                <div className="mt-3 flex gap-2">
                  <div className="flex-1 h-10 rounded-md bg-blue-700 flex items-center justify-center text-white text-xs font-semibold">
                    Cobrar
                  </div>
                  <div className="flex-1 h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-semibold">
                    Facturar
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-5 -left-6 bg-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-md bg-green-50 flex items-center justify-center">
                <TrendingUp size={20} className="text-green-600" />
              </div>
              <div>
                <div className="font-mono font-bold text-lg text-blue-800 leading-none">+32%</div>
                <div className="text-xs text-gray-500 mt-0.5">ventas en 3 meses</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-white border-y border-gray-200">
        <div className="sac-container">
          <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {STATS.map(({ value, label }, i) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="text-center py-7 px-4"
              >
                <div className="font-mono font-bold text-2xl text-blue-700 leading-none">{value}</div>
                <div className="mt-1.5 text-sm text-gray-500">{label}</div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
