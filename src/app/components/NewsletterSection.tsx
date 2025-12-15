'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            Newsletter
          </span>
          <h2 className="mb-6 mt-4 text-3xl font-extrabold text-white lg:text-4xl">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-8 text-slate-400">
            Stay updated with the latest tech trends, tips, and company news.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:w-80"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-teal-500/30 transition-all hover:bg-teal-600"
            >
              Subscribe
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
