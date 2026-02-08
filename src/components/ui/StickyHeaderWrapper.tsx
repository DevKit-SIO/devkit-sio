'use client';

import { useState, useEffect, ReactNode } from 'react';

interface StickyHeaderWrapperProps {
    children: ReactNode;
}

export default function StickyHeaderWrapper({ children }: StickyHeaderWrapperProps) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Get hero section height (approximately 700px or use viewport height)
            const heroHeight = window.innerHeight * 0.8; // 80% of viewport height

            if (window.scrollY > heroHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full transition-all duration-300 ${isSticky
                    ? 'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg'
                    : 'relative'
                }`}
        >
            <div className="mx-auto max-w-[1320px]">
                {children}
            </div>
        </div>
    );
}
