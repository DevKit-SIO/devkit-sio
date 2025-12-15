import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const buttonVariants = {
  primary:
    'bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200',
  outline:
    'border-2 border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-600',
  ghost:
    'text-slate-600 hover:text-teal-600 hover:bg-slate-50',
  dark:
    'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5',
  lg: 'px-8 py-4',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'primary', size = 'md', href, children, ...props },
    ref
  ) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
      buttonVariants[variant],
      buttonSizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
