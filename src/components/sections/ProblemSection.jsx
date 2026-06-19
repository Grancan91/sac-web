'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Clock, FileX, TrendingDown } from 'lucide-react';

const PROBLEMS = [
  {
    icon: AlertCircle,
    title: 'Cierres cuadrados que nunca cuadran',
    body: 'Pasar horas conciliando ventas a mano, con discrepancias que nadie puede explicar al final del día.',
  },
  {
    icon: FileX,
    title: 'Facturas que llegan tarde o mal',
    body: 'Clientes que piden su CFDI y no puedes generarlo en el momento. Errores de RFC que te generan devoluciones.',
  },
  {
    icon: Clock,
    title: 'Colas que alejan a tus clientes',
    body: 'Un proceso de cobro lento o que depende de una sola persona hace que pierdas ventas en hora pico.',
  },
  {
    icon: TrendingDown,
    title: 'Sin visibilidad de tu inventario',
    body: 'Te quedas sin producto sin saberlo, o tienes dinero dormido en mercancía que no rota.',
  },
];

export default function ProblemSection() {
  return (
    <section
      className="bg-gray-50 py-20 md:py-28"
      aria-labelledby="problem-heading"
    >
      <div className="sac-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="sac-overline mb-3 block">El problema real</span>
          <h2 id="problem-heading" className="font-display font-bold text-3xl md:text-4xl text-blue-900 text-balance">
            Gestionar un comercio no debería ser tan complicado
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Conocemos de cerca los dolores que enfrentan abarrotes, restaurantes y farmacias cada día.
            Y sabemos que la tecnología mal implementada solo añade más problemas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMS.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-6 shadow-xs relative overflow-hidden"
            >
              {/* Accent top bar */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-orange-200" />
              <div className="w-10 h-10 rounded-md bg-orange-50 flex items-center justify-center mb-4">
                <Icon size={20} className="text-orange-500" />
              </div>
              <h3 className="font-display font-semibold text-base text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10 text-gray-500 text-sm"
        >
          Si te identificas con alguno de estos escenarios, SAC fue diseñado para ti.
        </motion.p>
      </div>
    </section>
  );
}
