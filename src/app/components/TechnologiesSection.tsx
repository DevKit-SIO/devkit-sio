const technologies = [
  { name: 'React', letter: 'R', gradient: 'from-cyan-400 to-blue-500' },
  { name: 'Next.js', letter: 'N', gradient: 'from-slate-700 to-slate-900' },
  { name: 'Flutter', letter: 'F', gradient: 'from-blue-400 to-cyan-500' },
  { name: 'Python', letter: 'P', gradient: 'from-yellow-400 to-blue-500' },
  { name: 'Laravel', letter: 'L', gradient: 'from-red-400 to-rose-600' },
  { name: 'Node.js', letter: 'N', gradient: 'from-green-500 to-emerald-600' },
  { name: 'Firebase', letter: 'F', gradient: 'from-amber-400 to-orange-500' },
  { name: 'PostgreSQL', letter: 'P', gradient: 'from-blue-500 to-indigo-600' },
  { name: 'TensorFlow', letter: 'T', gradient: 'from-orange-400 to-red-500' },
  { name: 'Java', letter: 'J', gradient: 'from-red-500 to-amber-500' },
  { name: 'Swift', letter: 'S', gradient: 'from-orange-400 to-rose-500' },
  { name: 'Kotlin', letter: 'K', gradient: 'from-violet-500 to-purple-600' },
];

const partners = ['Stripe', 'Shopify', 'Notion', 'Figma', 'Vercel', 'GitHub'];

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            Our Tech Stack
          </span>
          <h2 className="mb-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            Technologies We Master
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            We work with the latest and most powerful technologies to deliver
            exceptional results.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="tech-card group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:border-transparent hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
              />
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tech.gradient} text-lg font-bold text-white`}
              >
                {tech.letter}
              </div>
              <h4 className="font-semibold text-slate-900">{tech.name}</h4>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="border-t border-slate-100 pt-12">
          <p className="mb-8 text-center text-sm font-medium text-slate-500">
            TRUSTED BY LEADING COMPANIES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60 lg:gap-16">
            {partners.map((name, i) => (
              <div
                key={i}
                className="cursor-pointer text-2xl font-bold text-slate-400 transition-colors hover:text-slate-600"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
