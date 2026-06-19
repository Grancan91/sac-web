import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionCards from '@/components/sections/SolutionCards';
import ProductFeatures from '@/components/sections/ProductFeatures';
import VerifactuSection from '@/components/sections/VerifactuSection';
import Testimonials from '@/components/sections/Testimonials';
import CaseStudies from '@/components/sections/CaseStudies';
import Integrations from '@/components/sections/Integrations';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'SAC — TPV y Facturación Electrónica para tu negocio',
  description:
    'Moderniza tu comercio con el sistema TPV más confiable de México. Facturación CFDI 4.0, VeriFactu, inventario y soporte humano incluido. Sin permanencia.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionCards />
      <ProductFeatures />
      <VerifactuSection />
      <Testimonials />
      <CaseStudies />
      <Integrations />
      <CTASection />
    </>
  );
}
