import Link from 'next/link';
import CTASection from '@/components/sections/CTASection';
import { ArrowRight, Clock } from 'lucide-react';

export const metadata = {
  title: 'Blog — Consejos para tu negocio',
  description: 'Artículos prácticos sobre TPV, facturación electrónica, VeriFactu, digitalización y gestión de comercios en México.',
};

const POSTS = [
  {
    slug: 'que-es-verifactu-y-como-afecta-a-tu-negocio',
    category: 'Fiscal',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: '¿Qué es VeriFactu y cómo afecta a tu negocio?',
    excerpt: 'El SAT implementó VeriFactu para verificar facturas en tiempo real. Te explicamos qué significa para ti y cómo SAC te mantiene al día sin complicaciones.',
    readTime: '5 min',
    date: '12 jun 2026',
  },
  {
    slug: 'como-reducir-tiempos-de-espera-en-tu-restaurante',
    category: 'Operación',
    categoryColor: 'bg-orange-100 text-orange-700',
    title: 'Cómo reducir los tiempos de espera en tu restaurante sin contratar más personal',
    excerpt: 'Un sistema de cobro rápido puede duplicar la rotación de mesas. Te mostramos las estrategias que usan restaurantes exitosos para atender más con el mismo equipo.',
    readTime: '7 min',
    date: '5 jun 2026',
  },
  {
    slug: 'inventario-cero-errores-guia-practica',
    category: 'Inventario',
    categoryColor: 'bg-green-100 text-green-700',
    title: 'Inventario con cero errores: la guía práctica para comercios',
    excerpt: 'Merma, robo hormiga y diferencias de inventario son los tres enemigos silenciosos de tu rentabilidad. Cómo identificarlos y eliminarlos.',
    readTime: '8 min',
    date: '28 may 2026',
  },
  {
    slug: 'facturacion-electronica-cfdi-4-guia-comercios',
    category: 'Fiscal',
    categoryColor: 'bg-blue-100 text-blue-700',
    title: 'CFDI 4.0: todo lo que necesitas saber si tienes un comercio',
    excerpt: 'RFC, complementos de pago, cancelaciones y el nuevo campo de uso de CFDI. Una guía sin tecnicismos para que cumplas sin estrés.',
    readTime: '10 min',
    date: '20 may 2026',
  },
  {
    slug: 'como-elegir-el-mejor-tpv-para-tu-negocio',
    category: 'Guías',
    categoryColor: 'bg-gray-100 text-gray-700',
    title: 'Cómo elegir el mejor TPV para tu negocio en 2026',
    excerpt: 'No todos los sistemas de punto de venta son iguales. Te damos un checklist de 10 puntos para tomar la mejor decisión sin arrepentirte después.',
    readTime: '6 min',
    date: '14 may 2026',
  },
  {
    slug: 'digitalizar-negocio-tradicional-miedo',
    category: 'Historias',
    categoryColor: 'bg-purple-100 text-purple-700',
    title: '"Le tenía mucho miedo a la tecnología." La historia de Doña Carmen',
    excerpt: 'Llevar 28 años con un cuaderno de ventas no es un problema. El problema es no querer cambiar cuando existe una solución más sencilla. La historia de Farmacia Santa Elena.',
    readTime: '4 min',
    date: '8 may 2026',
  },
];

const CATEGORIES = ['Todos', 'Fiscal', 'Operación', 'Inventario', 'Guías', 'Historias'];

export default function BlogPage() {
  return (
    <>
      <section className="sac-hero-gradient py-20 md:py-24" aria-labelledby="blog-heading">
        <div className="sac-container text-center max-w-2xl mx-auto">
          <span className="sac-overline mb-4 block">Blog</span>
          <h1 id="blog-heading" className="font-display font-bold text-4xl md:text-5xl text-blue-900 text-balance">
            Consejos prácticos para tu negocio
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Artículos sobre digitalización, cumplimiento fiscal y operación de comercios. Sin jerga técnica.
          </p>
        </div>
      </section>

      <section className="bg-white py-16" aria-labelledby="blog-posts">
        <div className="sac-container">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10" role="list" aria-label="Categorías">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="listitem"
                className={`px-4 py-1.5 rounded-pill text-sm font-medium border transition-colors ${
                  cat === 'Todos'
                    ? 'bg-blue-700 text-white border-blue-700'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${POSTS[0].slug}`}
            className="block mb-8 p-8 rounded-xl border border-gray-200 bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all group"
            aria-label={`Leer: ${POSTS[0].title}`}
          >
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-pill ${POSTS[0].categoryColor}`}>
              {POSTS[0].category}
            </span>
            <h2 className="font-display font-bold text-2xl text-blue-900 mt-3 mb-2 group-hover:text-blue-700 transition-colors">
              {POSTS[0].title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{POSTS[0].excerpt}</p>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock size={12} /> {POSTS[0].readTime} de lectura</span>
              <span>{POSTS[0].date}</span>
              <span className="inline-flex items-center gap-1 text-blue-700 font-medium ml-auto">
                Leer artículo <ArrowRight size={12} />
              </span>
            </div>
          </Link>

          {/* Post grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all group"
                aria-label={`Leer: ${post.title}`}
              >
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-pill ${post.categoryColor}`}>
                  {post.category}
                </span>
                <h3 className="font-display font-bold text-base text-blue-900 mt-3 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="compact" />
    </>
  );
}
