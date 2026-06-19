'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, CalendarClock } from 'lucide-react';

export default function CTASection({ variant = 'default' }) {
  if (variant === 'compact') {
    return (
      <section
        className="py-16"
        style={{ backgroundColor: '#00296f' }}
        aria-label="Llamada a la acción"
      >
        <div className="sac-container text-center">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white text-balance">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mt-3 text-white/70 text-base">Sin compromiso. La demo es gratuita y dura 30 minutos.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contacto#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-white text-blue-900 font-semibold text-sm hover:bg-blue-50 transition-colors shadow-sm"
            >
              <CalendarClock size={16} /> Agenda una demo
            </Link>
            <a
              href="https://wa.me/525512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={16} /> WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#001f52' }}
      aria-label="Llamada a la acción principal"
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-5"
        style={{ backgroundColor: '#339966' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-5"
        style={{ backgroundColor: '#e67e22' }}
        aria-hidden="true"
      />

      <div className="sac-container relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="sac-overline mb-4 block" style={{ color: '#86c9a7' }}>
            Sin permanencia · Sin costo de instalación
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white text-balance max-w-3xl mx-auto">
            Empieza a modernizar tu negocio hoy
          </h2>
          <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            En 30 minutos te mostramos cómo SAC funciona para tu tipo de negocio. Si no es para ti, sin presión —seguimos siendo amigos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contacto#demo"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-white text-blue-900 font-semibold text-base hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg hover:-translate-y-px active:scale-95"
            >
              <CalendarClock size={18} />
              Agendar demo gratis
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/525512345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-white/25 text-white font-semibold text-base hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} />
              Escribir por WhatsApp
            </a>
          </div>

          <p className="mt-8 text-white/40 text-sm">
            +2,400 comercios ya confían en SAC · Soporte humano en &lt; 2 minutos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
