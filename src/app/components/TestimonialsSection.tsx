'use client';

import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "DevKit SIO transformed our digital presence completely. Their team delivered a stunning e-commerce platform that exceeded our expectations.",
    author: 'Sarah Johnson',
    role: 'CEO, TechStart',
    avatar: 'SJ',
  },
  {
    text: 'The AI automation solutions they built saved us 40 hours per week. Absolutely game-changing for our operations.',
    author: 'Michael Chen',
    role: 'CTO, DataFlow Inc',
    avatar: 'MC',
  },
  {
    text: 'Professional, responsive, and incredibly skilled. DevKit SIO is our go-to partner for all IT projects.',
    author: 'Emma Williams',
    role: 'Director, GrowthLab',
    avatar: 'EW',
  },
];

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            Testimonials
          </span>
          <h2 className="mb-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Testimonial Card */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 lg:p-12 ${
                  index === activeSlide
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none absolute inset-0 translate-y-4 opacity-0'
                }`}
              >
                <Quote className="mb-6 h-12 w-12 text-teal-500" />
                <p className="mb-8 text-xl leading-relaxed text-slate-700 lg:text-2xl">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-lg font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeSlide
                    ? 'w-8 bg-teal-500'
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
