import Link from 'next/link';
import { ArrowRight, Play, Check, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-gradient relative overflow-hidden pb-20 pt-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-teal-50 opacity-60 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-50 opacity-60 blur-3xl" />
        <div className="dot-pattern absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-500" />
              <span className="text-sm font-semibold text-teal-700">
                Digital Innovation Agency
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
              The Fastest Way to
              <span className="gradient-text block">Achieve Success</span>
            </h1>

            <p className="max-w-lg text-lg leading-relaxed text-slate-600">
              We transform businesses through cutting-edge technology solutions.
              From web and mobile development to AI integration and digital
              marketing.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-primary-hover group flex items-center gap-2 rounded-full bg-teal-600 px-8 py-4 font-semibold text-white shadow-lg shadow-teal-600/30 transition-all hover:bg-teal-700"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="group flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition-all hover:border-teal-300 hover:text-teal-600">
                <Play className="h-5 w-5" />
                How It Works
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {['AK', 'SR', 'MT', 'JD'].map((initials, i) => (
                  <div
                    key={i}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white ${
                      [
                        'bg-gradient-to-br from-rose-400 to-rose-500',
                        'bg-gradient-to-br from-blue-400 to-blue-500',
                        'bg-gradient-to-br from-amber-400 to-amber-500',
                        'bg-gradient-to-br from-emerald-400 to-emerald-500',
                      ][i]
                    }`}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold text-slate-900">500+</span>
                <span className="text-slate-500"> Happy clients worldwide</span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="animate-slide-in relative">
            {/* Main Dashboard Card */}
            <div className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl shadow-slate-200/50">
              {/* Browser Header */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex h-8 flex-1 items-center rounded-lg bg-slate-50 px-3">
                  <span className="text-xs text-slate-400">
                    devkit-dashboard.app
                  </span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="space-y-4">
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 p-4">
                    <p className="mb-1 text-xs text-slate-500">Revenue</p>
                    <p className="text-xl font-bold text-slate-900">$84.2K</p>
                    <span className="text-xs text-emerald-600">↑ 12.5%</span>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 p-4">
                    <p className="mb-1 text-xs text-slate-500">Users</p>
                    <p className="text-xl font-bold text-slate-900">2,847</p>
                    <span className="text-xs text-emerald-600">↑ 8.2%</span>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 p-4">
                    <p className="mb-1 text-xs text-slate-500">Projects</p>
                    <p className="text-xl font-bold text-slate-900">156</p>
                    <span className="text-xs text-emerald-600">↑ 24%</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex h-40 items-end justify-around gap-2 rounded-xl bg-slate-50 p-4">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 82].map(
                    (height, i) => (
                      <div
                        key={i}
                        className="w-full rounded-t-sm bg-gradient-to-t from-teal-500 to-cyan-400 transition-all hover:from-teal-600 hover:to-cyan-500"
                        style={{ height: `${height}%` }}
                      />
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="animate-float absolute -left-8 top-1/4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Project Complete
                  </p>
                  <p className="text-xs text-slate-500">E-commerce App</p>
                </div>
              </div>
            </div>

            <div className="animate-float-delayed absolute -right-4 bottom-1/4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl shadow-slate-200/50">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Real-time Data
                  </p>
                  <p className="text-xs text-slate-500">Analytics Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
