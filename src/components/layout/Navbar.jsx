'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  {
    label: 'Soluciones',
    href: '/soluciones',
    children: [
      { label: 'TPV para Comercios', href: '/soluciones#tpv', desc: 'Terminal de cobro táctil' },
      { label: 'Facturación Electrónica', href: '/soluciones#facturacion', desc: 'CFDI 4.0 y VeriFactu' },
      { label: 'Inventario', href: '/soluciones#inventario', desc: 'Control de existencias en tiempo real' },
      { label: 'Reportes', href: '/soluciones#reportes', desc: 'Métricas de venta desde el celular' },
    ],
  },
  { label: 'Productos', href: '/productos' },
  { label: 'Precios', href: '/precios' },
  { label: 'Casos de Éxito', href: '/casos-de-exito' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setActiveDropdown(null); }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'
          : 'bg-white/90 backdrop-blur-sm border-b border-transparent',
      )}
      role="banner"
    >
      <div className="sac-container flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="SAC — Inicio">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-md flex items-center justify-center text-white font-display font-black text-lg"
              style={{ backgroundColor: '#00296f' }}
            >
              S
            </div>
            <div>
              <span className="font-display font-bold text-[15px] text-blue-900 leading-none block">SAC</span>
              <span className="text-2xs text-gray-500 leading-none font-body hidden sm:block">
                Soluciones Avanzadas Comerciales
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    pathname.startsWith(link.href)
                      ? 'text-blue-700 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50',
                  )}
                  aria-expanded={activeDropdown === link.label}
                  aria-haspopup="true"
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={cn(
                      'transition-transform duration-150',
                      activeDropdown === link.label && 'rotate-180',
                    )}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex flex-col gap-0.5 px-3 py-2.5 rounded-md hover:bg-blue-50 transition-colors group"
                        >
                          <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                            {child.label}
                          </span>
                          <span className="text-xs text-gray-500">{child.desc}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50',
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contacto"
            className="text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
          >
            Contacto
          </Link>
          <Link
            href="/contacto#demo"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-px hover:shadow-md active:scale-95"
            style={{ backgroundColor: '#00296f' }}
          >
            Agenda una demo
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <nav className="sac-container py-4 flex flex-col gap-1" aria-label="Menú móvil">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-3 py-3 rounded-md text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'text-blue-700 bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50',
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="mt-3 pt-3 border-t border-gray-200 flex flex-col gap-2">
                <Link
                  href="/contacto"
                  className="block px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  Contacto
                </Link>
                <Link
                  href="/contacto#demo"
                  className="block text-center px-4 py-3 rounded-md text-sm font-semibold text-white"
                  style={{ backgroundColor: '#00296f' }}
                >
                  Agenda una demo
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
