import Link from 'next/link';

const blogPosts = [
  {
    category: 'AI & Technology',
    title: 'Building Custom LLMs: A Complete Guide for Businesses',
    image: '🤖',
    date: 'Dec 5, 2024',
    slug: 'building-custom-llms',
  },
  {
    category: 'Web Development',
    title: 'Next.js 15 Features You Should Be Using Today',
    image: '⚡',
    date: 'Dec 3, 2024',
    slug: 'nextjs-15-features',
  },
  {
    category: 'Digital Marketing',
    title: 'SEO Strategies That Actually Work in 2025',
    image: '📈',
    date: 'Dec 1, 2024',
    slug: 'seo-strategies-2025',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between lg:flex-row lg:items-center">
          <div>
            <h2 className="mb-2 text-4xl font-extrabold text-slate-900">
              Latest News
            </h2>
            <p className="text-slate-600">From our blog and tech insights</p>
          </div>
          <Link
            href="/blog"
            className="mt-4 rounded-full bg-teal-50 px-6 py-3 font-semibold text-teal-600 transition-colors hover:bg-teal-100 lg:mt-0"
          >
            View More →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="blog-card group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="blog-image flex aspect-video items-center justify-center bg-gradient-to-br from-slate-100 to-slate-50 text-6xl transition-transform">
                {post.image}
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                  {post.category}
                </span>
                <h3 className="mb-3 mt-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-teal-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-sm text-slate-500">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
