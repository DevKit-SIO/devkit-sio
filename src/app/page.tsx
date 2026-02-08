import HeroSection from '@/src/app/components/HeroSection';
import StatsSection from '@/src/app/components/StatsSection';
import IntroSection from '@/src/app/components/IntroSection';
import VideoStepsSection from '@/src/app/components/VideoStepsSection';
import FeatureSection from '@/src/app/components/FeatureSection';
import ServicesSection from '@/src/app/components/ServicesSection';
import ClientsSection from '@/src/app/components/ClientsSection';
import TestimonialsSection from '@/src/app/components/TestimonialsSection';
import ContactSection from '@/src/app/components/ContactSection';
import BlogSection from '@/src/app/components/BlogSection';
import { preloadQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export default async function HomePage() {
  const preloadedPosts = await preloadQuery(api.blog.getLatestPosts, { limit: 6 });

  return (
    <>
      <HeroSection />
      <StatsSection />
      <IntroSection />
      <VideoStepsSection />
      <FeatureSection />
      <ServicesSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
      <BlogSection preloadedPosts={preloadedPosts} />
    </>
  );
}
