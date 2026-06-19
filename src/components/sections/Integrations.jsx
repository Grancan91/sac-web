'use client';

import { motion } from 'framer-motion';

const INTEGRATIONS = [
  { name: 'SAT / PAC', desc: 'Timbrado directo', color: '#00296f' },
  { name: 'Clip', desc: 'Terminal bancaria', color: '#339966' },
  { name: 'Mercado Pago', desc: 'QR y link de pago', color: '#e67e22' },
  { name: 'WhatsApp', desc: 'Envío de tickets', color: '#339966' },
  { name: 'Contpaqi', desc: 'Contabilidad', color: '#00296f' },
  { name: 'Excel / CSV', desc: 'Exportación de datos', color: '#2a8055' },
  { name: 'DIOT', desc: 'Declaración fiscal', color: '#0a3a87' },
  { name: 'Correo', desc: 'CFDI automático', color: '#e67e22' },
];

export default function Integrations() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="integrations-heading">
      <div className="sac-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="sac-overline mb-3 block">Integraciones</span>
          <h2 id="integrations-heading" className="font-display font-bold text-3xl text-blue-900 text-balance">
            Se conecta con las herramientas que ya usas
          </h2>
          <p className="mt-3 text-gray-600">
            SAC se integra sin fricción con los servicios fiscales, bancarios y de contabilidad más usados en México.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {INTEGRATIONS.map(({ name, desc, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="flex flex-col items-center justify-center gap-3 p-5 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm hover:border-gray-300 transition-all"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xs font-display"
                style={{ backgroundColor: color }}
              >
                {name.slice(0, 2).toUpperCase()}
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm text-gray-900">{name}</div>
                <div className="text-xs text-gray-500">{desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
