import HeroSection from '@/src/app/components/HeroSection';
import StatsSection from '@/src/app/components/StatsSection';
import ServicesSection from '@/src/app/components/ServicesSection';
import AboutSection from '@/src/app/components/AboutSection';
import TechnologiesSection from '@/src/app/components/TechnologiesSection';
import TestimonialsSection from '@/src/app/components/TestimonialsSection';
import ContactSection from '@/src/app/components/ContactSection';
import BlogSection from '@/src/app/components/BlogSection';
import NewsletterSection from '@/src/app/components/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <AboutSection />
      <TechnologiesSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection />
      <NewsletterSection />
    </>
  );
}
