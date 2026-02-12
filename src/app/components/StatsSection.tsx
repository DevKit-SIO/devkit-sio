'use client';

import { useEffect, useState, useRef } from 'react';

const stats = [
  { number: 50, suffix: '+', label: 'Projects Delivered', description: 'Successful web, mobile, and AI projects completed.' },
  { number: 30, suffix: '+', label: 'Happy Clients', description: 'Businesses transformed with our digital solutions.' },
  { number: 5, suffix: '+', label: 'Years Experience', description: 'Building cutting-edge technology solutions.' },
  { number: 15, suffix: '+', label: 'Team Members', description: 'Expert developers, designers, and strategists.' },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <p
      ref={ref}
      className="mb-2 text-4xl font-extrabold text-slate-900 lg:text-5xl"
    >
      {count}
      {suffix}
    </p>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-900">
                {stat.label}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
