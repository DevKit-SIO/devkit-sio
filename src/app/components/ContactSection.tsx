'use client'

import { useState } from 'react';
import { ArrowRight, Loader2, CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function ContactSection() {
  const submitContact = useMutation(api.contact.submit);
  const [formData, setFormData] = useState({
    fullname: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    try {
      await submitContact(formData);
      setStatus('success');
      setFormData({ fullname: '', company: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Contact submission error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="mb-12 text-center lg:text-left lg:mb-0">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                Let's Build Together
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 lg:text-4xl mt-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto lg:mx-0">
                Turn your vision into reality with our expert team. From concept to launch, we're here to help you succeed.
              </p>

              <div className="mt-12 space-y-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Visit Us</h3>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Résidence Al amira 3, 4ème étage, Bureau 42<br />
                      Av. Yacoub El Mansour, 40000<br />
                      Marrakech - Maroc
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Call Us</h3>
                    <p className="text-slate-600 mt-1">
                      (+212) 6 61 333 946
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 text-teal-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                    <p className="text-slate-600 mt-1">
                      contact@devkit-sio.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center p-8 text-center bg-teal-50 rounded-2xl border border-teal-100">
                  <CheckCircle2 className="w-16 h-16 text-teal-600 mb-4" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thanks for reaching out. We'll be in touch shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-teal-600 font-semibold hover:text-teal-700 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="fullname"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.fullname}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                    <input
                      name="company"
                      type="text"
                      placeholder="Company (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-lg bg-teal-600 py-4 font-bold text-white transition-all hover:bg-teal-700 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  {status === 'error' && (
                    <p className="text-red-500 text-sm text-center">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

