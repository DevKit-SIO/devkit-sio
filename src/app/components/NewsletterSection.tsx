'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function NewsletterSection() {
  console.log('NewsletterSection render. API:', api, 'Newsletter API:', api.newsletter);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const subscribe = useMutation(api.newsletter.subscribe);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter form submitted', { email, status });
    if (status === 'loading' || status === 'success') return;

    setStatus('loading');
    setMessage('');

    try {
      const result = await subscribe({ email });
      if (result.status === 'success' || result.status === 'already_subscribed') {
        setStatus('success');
        setMessage(result.message);
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage('Failed to subscribe. Please try again later.');
    }
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

          {status === 'success' ? (
            <div className="rounded-2xl bg-teal-500/20 p-6 text-teal-300 border border-teal-500/30">
              <p className="font-semibold text-lg">{message}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 sm:w-80 disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 rounded-full bg-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-teal-500/30 transition-all hover:bg-teal-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                {!status && <ArrowRight className="h-5 w-5" />}
              </button>
            </form>
          )}
          {status === 'error' && (
            <p className="mt-4 text-red-400 font-medium animate-pulse">{message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
