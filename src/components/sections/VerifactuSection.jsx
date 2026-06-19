'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowRight, FileText, Lock, RefreshCw } from 'lucide-react';

const VERIFACTU_FEATURES = [
  {
    icon: FileText,
    title: 'Registro inmutable de cada factura',
    body: 'Cada CFDI queda registrado en el sistema VeriFactu con hash criptográfico, garantizando que no puede ser alterado.',
  },
  {
    icon: Lock,
    title: 'Transmisión directa al SAT',
    body: 'Sin intermediarios adicionales. Tu información fiscal viaja cifrada y de forma directa a los servidores del SAT.',
  },
  {
    icon: RefreshCw,
    title: 'Actualización automática ante cambios fiscales',
    body: 'Cuando el SAT modifica sus reglas o catálogos, tu sistema SAC se actualiza automáticamente. Sin trámites de tu parte.',
  },
  {
    icon: CheckCircle2,
    title: 'Trazabilidad total de tus documentos',
    body: 'Consulta el estado de cualquier factura: vigente, cancelada o con complemento pendiente. Historial completo con fecha y hora.',
  },
];

export default function VerifactuSection() {
  return (
    <section
      style={{ backgroundColor: '#00296f' }}
      className="py-20 md:py-28 text-white"
      aria-labelledby="verifactu-heading"
    >
      <div className="sac-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-pill px-3 py-1.5 mb-6">
              <ShieldCheck size={14} className="text-green-300" />
              <span className="text-xs font-semibold text-green-300 tracking-caps uppercase">Cumplimiento fiscal garantizado</span>
            </div>
            <h2 id="verifactu-heading" className="font-display font-bold text-3xl md:text-4xl text-white text-balance mb-5">
              Listo para VeriFactu desde el primer día
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              VeriFactu es el nuevo estándar del SAT para verificar la autenticidad de facturas en tiempo real.
              SAC implementa este requisito de forma transparente —tú no tienes que hacer nada adicional.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Olvídate de contratar un PAC por separado, de actualizar software manualmente o de preocuparte por auditorías.
              Nosotros nos encargamos del cumplimiento fiscal para que tú te enfoques en vender.
            </p>
            <Link
              href="/soluciones#verifactu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-blue-900 font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Más sobre VeriFactu <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {VERIFACTU_FEATURES.map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/8 border border-white/15 rounded-lg p-5 hover:bg-white/12 transition-colors"
              >
                <div className="w-9 h-9 rounded-md bg-white/12 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-green-300" />
                </div>
                <h3 className="font-display font-semibold text-sm text-white mb-1.5">{title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
