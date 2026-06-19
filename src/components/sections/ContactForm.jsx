'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, MessageCircle, CalendarClock } from 'lucide-react';

const BUSINESS_TYPES = [
  'Abarrotes / Miscelánea',
  'Restaurante / Taquería / Cafetería',
  'Farmacia / Botica',
  'Papelería / Librería',
  'Ferretería / Materiales',
  'Ropa / Calzado',
  'Otro tipo de comercio',
];

const CONTACT_REASONS = [
  { value: 'demo', label: 'Quiero agendar una demo' },
  { value: 'info', label: 'Necesito más información' },
  { value: 'pricing', label: 'Consulta de precios' },
  { value: 'support', label: 'Soporte técnico' },
  { value: 'other', label: 'Otro motivo' },
];

export default function ContactForm({ id = 'demo' }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', business: '', type: '', reason: 'demo', message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Tu nombre es necesario';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Ingresa un correo válido';
    if (!form.phone.trim()) e.phone = 'Tu teléfono nos ayuda a contactarte';
    if (!form.business.trim()) e.business = 'Cuéntanos el nombre de tu negocio';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => { const n = { ...er }; delete n[name]; return n; });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSending(true);
    // Simulated send — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl border border-gray-200 shadow-sm p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={32} className="text-green-500" />
        </div>
        <h3 className="font-display font-bold text-xl text-blue-900 mb-2">¡Gracias, {form.name.split(' ')[0]}!</h3>
        <p className="text-gray-600 text-base">
          Recibimos tu solicitud. Alguien de nuestro equipo te contactará en menos de 2 horas hábiles para confirmar tu demo.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          ¿Necesitas algo urgente? Escríbenos por{' '}
          <a href="https://wa.me/525512345678" className="text-green-600 font-medium hover:underline" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>{' '}
          o llámanos al{' '}
          <a href="tel:+525512345678" className="text-blue-700 font-medium hover:underline">+52 55 1234 5678</a>.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-xl border border-gray-200 shadow-sm p-7 md:p-9"
      aria-label="Formulario de contacto"
    >
      <h3 className="font-display font-bold text-xl text-blue-900 mb-1">
        Agenda tu demo gratuita
      </h3>
      <p className="text-sm text-gray-500 mb-7">
        30 minutos. Sin compromiso. Te mostramos SAC adaptado a tu tipo de negocio.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div className="sm:col-span-2 md:col-span-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Tu nombre <span className="text-orange-500">*</span>
          </label>
          <input
            id="name" name="name" type="text" autoComplete="name"
            value={form.name} onChange={handleChange}
            placeholder="María González"
            className={`w-full px-3.5 py-3 rounded-md border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && <p id="name-error" role="alert" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Correo electrónico <span className="text-orange-500">*</span>
          </label>
          <input
            id="email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={handleChange}
            placeholder="maria@minegocio.mx"
            className={`w-full px-3.5 py-3 rounded-md border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Teléfono / WhatsApp <span className="text-orange-500">*</span>
          </label>
          <input
            id="phone" name="phone" type="tel" autoComplete="tel"
            value={form.phone} onChange={handleChange}
            placeholder="+52 55 1234 5678"
            className={`w-full px-3.5 py-3 rounded-md border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && <p id="phone-error" role="alert" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>

        {/* Business name */}
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1.5">
            Nombre de tu negocio <span className="text-orange-500">*</span>
          </label>
          <input
            id="business" name="business" type="text"
            value={form.business} onChange={handleChange}
            placeholder="Abarrotes La Esquina"
            className={`w-full px-3.5 py-3 rounded-md border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.business ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            aria-describedby={errors.business ? 'business-error' : undefined}
          />
          {errors.business && <p id="business-error" role="alert" className="mt-1 text-xs text-red-600">{errors.business}</p>}
        </div>

        {/* Business type */}
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de negocio</label>
          <select
            id="type" name="type"
            value={form.type} onChange={handleChange}
            className="w-full px-3.5 py-3 rounded-md border border-gray-300 hover:border-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Selecciona una opción</option>
            {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Reason */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1.5">Motivo del contacto</label>
          <select
            id="reason" name="reason"
            value={form.reason} onChange={handleChange}
            className="w-full px-3.5 py-3 rounded-md border border-gray-300 hover:border-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {CONTACT_REASONS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
            ¿Algo que quieras contarnos? <span className="text-gray-400 font-normal">(opcional)</span>
          </label>
          <textarea
            id="message" name="message" rows={3}
            value={form.message} onChange={handleChange}
            placeholder="Por ejemplo: tengo 2 empleados, manejo 300 productos y quiero facturar electrónicamente..."
            className="w-full px-3.5 py-3 rounded-md border border-gray-300 hover:border-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:shadow-md active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: '#00296f' }}
        >
          {sending ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <CalendarClock size={15} />
              Solicitar mi demo
              <Send size={13} />
            </>
          )}
        </button>
        <p className="text-xs text-gray-500 leading-relaxed mt-1 sm:mt-2.5">
          Al enviar aceptas nuestro{' '}
          <a href="/privacidad" className="text-blue-700 hover:underline">aviso de privacidad</a>.
          No compartimos tu información con terceros.
        </p>
      </div>
    </form>
  );
}
