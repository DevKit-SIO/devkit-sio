'use client';

import { useState } from 'react';
import { MapPin, Mail, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 lg:p-16">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <span className="inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
                Contact Us
              </span>
              <h2 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
                Have a Project
                <span className="text-teal-600"> in Mind?</span>
              </h2>
              <p className="text-lg text-slate-600">
                The right move at the right time saves your investment. Live the
                dream of expanding your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">DevKit SIO</h4>
                    <p className="text-slate-600">Agadir, Morocco</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <a
                      href="mailto:contact@devkitsio.com"
                      className="font-medium text-teal-600 hover:text-teal-700"
                    >
                      contact@devkitsio.com
                    </a>
                    <p className="font-medium text-teal-600 hover:text-teal-700">
                      +212 600 000 000
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="hidden lg:block">
                <svg
                  className="h-32 w-32 text-teal-100"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <polygon points="50 0 100 25 100 75 50 100 0 75 0 25" />
                </svg>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50">
              <form onSubmit={handleSubmit}>
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 px-4 py-3 placeholder-slate-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (optional)"
                    value={formData.company}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 px-4 py-3 placeholder-slate-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="mb-4 grid gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 px-4 py-3 placeholder-slate-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl border border-slate-200 px-4 py-3 placeholder-slate-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mb-4 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 placeholder-slate-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white shadow-lg shadow-slate-900/20 transition-all hover:bg-slate-800"
                >
                  Send Message
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
              <p className="mt-4 text-center text-xs text-slate-500">
                By clicking send message, you agree to our terms and privacy
                policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
