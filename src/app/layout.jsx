import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  metadataBase: new URL('https://sac.mx'),
  title: {
    default: 'SAC — Soluciones Avanzadas Comerciales | TPV y Facturación Electrónica',
    template: '%s | SAC',
  },
  description:
    'Moderniza tu negocio con el TPV más confiable de México. Facturación electrónica, cumplimiento VeriFactu y soporte humano incluido. Sin permanencia.',
  keywords: [
    'TPV', 'terminal punto de venta', 'facturación electrónica', 'VeriFactu',
    'software TPV México', 'factura electrónica', 'digitalización comercios',
    'software restaurante', 'software farmacia', 'cobro digital',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    siteName: 'SAC — Soluciones Avanzadas Comerciales',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-MX">
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
