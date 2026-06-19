import ContactForm from '@/components/sections/ContactForm';
import FAQ from '@/components/sections/FAQ';
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contacto — Agenda tu demo gratuita',
  description: 'Contáctanos para agendar una demo de SAC. Te respondemos en menos de 2 horas hábiles. Sin compromiso, sin permanencia.',
};

const CONTACT_CHANNELS = [
  {
    icon: MessageCircle,
    title: 'WhatsApp directo',
    desc: 'Para respuestas inmediatas',
    value: 'Escribir ahora',
    href: 'https://wa.me/525512345678',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    desc: 'Lun–Vie · 9am–7pm',
    value: '+52 55 1234 5678',
    href: 'tel:+525512345678',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: Mail,
    title: 'Correo electrónico',
    desc: 'Respuesta en menos de 2h hábiles',
    value: 'hola@sac.mx',
    href: 'mailto:hola@sac.mx',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Horario de soporte',
    desc: 'Plan Profesional y Empresa',
    value: 'Lun–Dom · 7am–9pm',
    href: null,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
];

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="sac-hero-gradient py-16 md:py-20" aria-labelledby="contact-heading">
        <div className="sac-container text-center max-w-2xl mx-auto">
          <span className="sac-overline mb-4 block">Contacto</span>
          <h1 id="contact-heading" className="font-display font-bold text-4xl md:text-5xl text-blue-900 text-balance">
            Estamos a un mensaje de distancia
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Cuéntanos sobre tu negocio. En 30 minutos te mostramos si SAC es para ti —sin presión y sin compromiso.
          </p>
        </div>
      </section>

      {/* Channels */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="sac-container grid grid-cols-2 md:grid-cols-4 gap-4">
          {CONTACT_CHANNELS.map(({ icon: Icon, title, desc, value, href, color, bg }) => (
            <div key={title} className={`p-4 rounded-lg ${bg} flex flex-col gap-1`}>
              <div className="flex items-center gap-2 mb-1">
                <Icon size={16} className={color} />
                <span className="text-xs font-semibold text-gray-700">{title}</span>
              </div>
              <span className="text-xs text-gray-500">{desc}</span>
              {href ? (
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className={`text-sm font-semibold ${color} hover:underline mt-1`}>
                  {value}
                </a>
              ) : (
                <span className={`text-sm font-semibold ${color} mt-1`}>{value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="sac-container grid lg:grid-cols-5 gap-12 items-start">
          {/* Form — wider */}
          <div className="lg:col-span-3">
            <ContactForm id="demo" />
          </div>

          {/* Sidebar info */}
          <aside className="lg:col-span-2 flex flex-col gap-6">
            {/* What to expect */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-xs p-6">
              <h2 className="font-display font-semibold text-base text-blue-900 mb-4">Qué pasa después de solicitar tu demo</h2>
              <ol className="flex flex-col gap-4">
                {[
                  ['Recibimos tu solicitud', 'Un asesor la revisa y confirma tu demo dentro de 2 horas hábiles.'],
                  ['Te enviamos una invitación', 'Recibes el enlace de videollamada (o coordinamos visita presencial si prefieres).'],
                  ['Demo personalizada 30 min', 'Te mostramos SAC funcionando en tu tipo de negocio, con tus casos de uso.'],
                  ['Sin presión de venta', 'Si no es para ti, no hay problema. Te vamos sin deudas ni llamadas molestas.'],
                ].map(([title, desc], i) => (
                  <li key={title} className="flex gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5" style={{ backgroundColor: '#00296f' }}>
                      {i + 1}
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{title}</div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-xs p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-blue-700" />
                <h3 className="font-semibold text-sm text-gray-900">Oficinas</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ciudad de México · Guadalajara · Monterrey<br />
                <span className="text-xs text-gray-400 mt-1 block">Atendemos toda la República Mexicana de forma remota y presencial.</span>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <FAQ />
    </>
  );
}
