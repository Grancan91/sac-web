'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Antes anotaba todo en un cuaderno y al final del día nunca me cuadraba el dinero. Ahora veo mis ventas desde el celular y el cierre me tarda tres minutos. SAC me quitó el miedo a la tecnología.',
    name: 'Carmen Ríos',
    role: 'Propietaria',
    business: 'Farmacia Santa Elena, Guadalajara',
    initials: 'CR',
    color: 'bg-green-500',
    rating: 5,
  },
  {
    quote: 'Lo que más valoro es el soporte. Cuando se me traba algo, les mando un WhatsApp y en menos de dos minutos me llaman. No necesito ser experto en tecnología, ellos siempre me acompañan.',
    name: 'Roberto Estrada',
    role: 'Administrador',
    business: 'Taquería Don Rober, CDMX',
    initials: 'RE',
    color: 'bg-blue-600',
    rating: 5,
  },
  {
    quote: 'Las facturas que antes me tardaban 20 minutos porque tenía errores de RFC, ahora las genero en 30 segundos y llegan directo al correo del cliente. Mis clientes de empresa ya no me regresan documentos.',
    name: 'Patricia Mendoza',
    role: 'Dueña',
    business: 'Papelería y Copiado Mendoza, Monterrey',
    initials: 'PM',
    color: 'bg-orange-500',
    rating: 5,
  },
  {
    quote: 'Tengo tres sucursales y antes necesitaba estar físicamente en cada una para saber cómo iban las ventas. Con SAC veo todo desde mi teléfono, comparo sucursales y tomo decisiones al momento.',
    name: 'Jorge Villanueva',
    role: 'Director',
    business: 'Abarrotes Villanueva (3 sucursales), Puebla',
    initials: 'JV',
    color: 'bg-green-600',
    rating: 5,
  },
];

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const prev = () => { setDir(-1); setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length); };
  const next = () => { setDir(1);  setIndex((i) => (i + 1) % TESTIMONIALS.length); };

  const t = TESTIMONIALS[index];

  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="testimonials-heading">
      <div className="sac-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="sac-overline mb-3 block">Lo que dicen nuestros clientes</span>
          <h2 id="testimonials-heading" className="font-display font-bold text-3xl md:text-4xl text-blue-900 text-balance">
            Comercios que ya modernizaron con SAC
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={{
                enter: (d) => ({ opacity: 0, x: d * 40 }),
                center: { opacity: 1, x: 0 },
                exit:  (d) => ({ opacity: 0, x: -d * 40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="bg-gray-50 rounded-xl border border-gray-200 p-8 md:p-10 text-center"
            >
              <Stars count={t.rating} />
              <blockquote className="mt-5 font-body text-xl md:text-2xl text-blue-900 font-medium leading-snug text-balance">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role} · {t.business}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-7">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={18} className="text-gray-600" />
            </button>
            <div className="flex gap-2" role="tablist">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  className={`rounded-full transition-all duration-200 ${
                    i === index ? 'w-6 h-2 bg-blue-700' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ver testimonio ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
