import Link from 'next/link';
import {
  Monitor,
  Smartphone,
  Lightbulb,
  PieChart,
  RefreshCw,
  Users,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description:
      'Custom websites and web applications using React, Next.js, Laravel, Symfony, and more.',
    href: '/services/web',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description:
      'Native and cross-platform apps with Flutter, React Native, Kotlin, and Swift.',
    href: '/services/mobile',
  },
  {
    icon: Lightbulb,
    title: 'AI Solutions',
    description:
      'Custom LLMs, AI integrations with GPT, Qwen, DeepSeek, and Hugging Face models.',
    href: '/services/ai',
  },
  {
    icon: PieChart,
    title: 'Digital Marketing',
    description:
      'SEO, Facebook Ads, Google Ads, TikTok campaigns, and community management.',
    href: '/services/marketing',
  },
  {
    icon: RefreshCw,
    title: 'Automation',
    description:
      'Workflow automation with n8n, custom integrations, and process optimization.',
    href: '/services/automation',
  },
  {
    icon: Users,
    title: 'Talent Rental',
    description:
      'Access skilled developers, designers, and IT professionals for your projects.',
    href: '/services/talent',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            What We Offer
          </span>
          <h2 className="mb-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Exceptional Solutions for
            <span className="block text-teal-600">Digital Business</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            From concept to deployment, we provide end-to-end IT services that
            drive growth and innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group rounded-2xl border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-100/50"
            >
              <div className="service-icon mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 text-teal-600 transition-transform">
                <service.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="mt-4 inline-flex items-center gap-2 font-semibold text-teal-600 opacity-0 transition-opacity group-hover:opacity-100"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
