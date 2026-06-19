'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: '¿Necesito experiencia técnica para instalar SAC?',
    a: 'No. Nosotros llevamos el equipo, lo instalamos y configuramos en tu negocio. Tu único trabajo es decirnos cómo funciona tu comercio. La instalación promedio tarda menos de 3 horas y el mismo día ya estás operando.',
  },
  {
    q: '¿Qué pasa si se va la luz o el internet?',
    a: 'SAC funciona en modo offline: puedes seguir cobrando y registrando ventas sin internet. En cuanto se restablezca la conexión, todo se sincroniza automáticamente con la nube. Para la facturación electrónica, necesitarás internet, pero puedes generar los CFDI cuando vuelva.',
  },
  {
    q: '¿SAC cumple con VeriFactu y CFDI 4.0?',
    a: 'Sí. SAC está actualizado con los últimos lineamientos del SAT, incluyendo el esquema VeriFactu para verificación de autenticidad en tiempo real. Cuando el SAT actualiza sus reglas o catálogos, tu sistema se actualiza automáticamente sin que tengas que hacer nada.',
  },
  {
    q: '¿Puedo cancelar mi suscripción cuando quiera?',
    a: 'Sí, sin penalizaciones ni permanencia mínima. Si decides que SAC no es para ti, cancelas en cualquier momento y conservas acceso hasta el fin del período pagado. Nos quedamos con la satisfacción de haber intentado ayudarte, y tú te vas sin deudas.',
  },
  {
    q: '¿El soporte está incluido en el precio?',
    a: 'Sí. El soporte por WhatsApp, correo y teléfono está incluido en todos los planes. En el plan Profesional tienes soporte prioritario los 7 días de la semana en horario extendido. No cobramos por resolver tus dudas —es parte de lo que significa ser tu partner.',
  },
  {
    q: '¿Puedo importar mi catálogo de productos existente?',
    a: 'Sí. Puedes subir tu catálogo desde Excel o CSV. Si ya tienes un sistema anterior, nuestro equipo te ayuda a migrar la información para que no pierdas ningún dato. La migración de catálogos está incluida en la instalación.',
  },
  {
    q: '¿SAC funciona para restaurantes?',
    a: 'Sí. Contamos con módulos específicos para restaurantes: control de mesas, comanda a cocina, división de cuenta y cobros parciales. Clientes como Taquería Don Rober han reducido sus tiempos de atención a la mitad con SAC.',
  },
  {
    q: '¿Cuántas terminales puedo conectar?',
    a: 'El plan Esencial incluye 1 terminal, el Profesional hasta 3, y el plan Empresa soporta terminales ilimitadas. Si tienes varias sucursales, el plan Empresa te da un panel centralizado para verlas todas desde un solo lugar.',
  },
];

function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-base">{q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="sac-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="sac-overline mb-3 block">Preguntas frecuentes</span>
            <h2 id="faq-heading" className="font-display font-bold text-3xl md:text-4xl text-blue-900 text-balance">
              Lo que nos preguntan antes de empezar
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Si no encuentras tu respuesta aquí, escríbenos por WhatsApp o agenda una llamada. Respondemos en menos de dos minutos.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/525512345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-colors w-fit"
              >
                Preguntar por WhatsApp
              </a>
              <a
                href="/contacto"
                className="text-sm text-blue-700 font-medium hover:underline"
              >
                O agenda una llamada →
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {FAQS.map((item, i) => (
              <FAQItem key={item.q} {...item} defaultOpen={i === 0} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
