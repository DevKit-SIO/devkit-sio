import Link from 'next/link';
import { Play, Star, Rocket, Wrench, Sparkles, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: '🚀',
    title: 'Boost Your Growth',
    description: 'Accelerate business outcomes',
  },
  {
    icon: '🛠️',
    title: 'Smart Solutions',
    description: 'Custom-built technology',
  },
  {
    icon: '✨',
    title: 'Latest Tech Stack',
    description: 'Modern frameworks & tools',
  },
  {
    icon: '📊',
    title: 'Data-Driven',
    description: 'Analytics & insights',
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Video/Image Section */}
          <div className="relative">
            <div className="group relative aspect-video overflow-hidden rounded-3xl bg-slate-800">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8 opacity-30">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square w-full rounded-xl bg-slate-700"
                    />
                  ))}
                </div>
              </div>
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-2xl transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-8 w-8 text-teal-600" fill="currentColor" />
                </div>
              </button>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500">
                  <Star className="h-6 w-6 text-white" fill="currentColor" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">4.9</p>
                  <p className="text-xs text-slate-500">Client Rating</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <span className="inline-block rounded-full bg-teal-500/20 px-4 py-2 text-sm font-semibold text-teal-400">
              Built Exclusively For You
            </span>

            <h2 className="text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              From the Big Picture to Every Tiny Detail,
              <span className="gradient-text"> We Got You Covered.</span>
            </h2>

            <p className="text-lg leading-relaxed text-slate-400">
              We deliver white-glove, fully managed solutions that surpass
              industry benchmarks. Our team combines technical expertise with
              creative thinking to build products that stand out.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700 text-xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                    <p className="text-sm text-slate-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block rounded-full bg-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-teal-500/30 transition-all hover:bg-teal-600 hover:shadow-xl hover:shadow-teal-500/40"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
