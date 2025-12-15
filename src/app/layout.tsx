import type {Metadata} from 'next';
import {Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css'
import '@/public/app.min.css';
import TopBar from "@/src/components/layout/TopBar";
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';

export const metadata: Metadata = {
    title: {
        default: 'DevKit SIO - Digital Innovation Agency',
        template: '%s | DevKit SIO',
    },
    description:
        'DevKit SIO is your trusted IT partner for web development, mobile apps, AI solutions, digital marketing, automation, and talent rental services. Transform your business with cutting-edge technology.',
    keywords: [
        'web development',
        'mobile apps',
        'AI solutions',
        'digital marketing',
        'SEO',
        'automation',
        'n8n',
        'React',
        'Next.js',
        'Flutter',
        'Laravel',
        'Python',
        'IT services',
        'Morocco',
        'Agadir',
    ],
    authors: [{name: 'DevKit SIO'}],
    creator: 'DevKit SIO',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://devkitsio.com',
        siteName: 'DevKit SIO',
        title: 'DevKit SIO - Digital Innovation Agency',
        description:
            'Transform your business with cutting-edge technology solutions. Web, Mobile, AI, Marketing & More.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'DevKit SIO - Digital Innovation Agency',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DevKit SIO - Digital Innovation Agency',
        description:
            'Transform your business with cutting-edge technology solutions.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code',
    },
};

export default function RootLayout({children}: { children: React.ReactNode; }) {
    return (
        <html lang="en">
        <body className="overflow-x-hidden w-screen relative">
        <TopBar/>
        <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
            <a name="top"> </a>
            <Header/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    );
}
