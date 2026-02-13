import type { Metadata } from 'next';
import { ThemeModeScript } from 'flowbite-react';
import '@/public/app.min.css';
import './globals.css'
import TopBar from "@/src/components/layout/TopBar";
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import BackToTop from '@/src/components/ui/BackToTop';
import StickyHeaderWrapper from '@/src/components/ui/StickyHeaderWrapper';
import ConvexClientProvider from '@/src/components/providers/ConvexClientProvider';

export const metadata: Metadata = {
    title: {
        default: 'DevKit SIO - Digital Innovation Agency',
        template: '%s - DevKit SIO',
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
    authors: [{ name: 'DevKit SIO' }],
    creator: 'DevKit SIO',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.devkitsio.com',
        siteName: 'DevKit SIO',
        title: 'DevKit SIO - Digital Innovation Agency',
        description:
            'Transform your business with cutting-edge technology solutions. Web, Mobile, AI, Marketing & More.',
        images: [
            {
                url: '/assets/images/team-meeting.png',
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
        images: ['/assets/images/team-meeting.png'],
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
        google: 'lLpS02mqKrX_yPb_8DgHH1j2oPsZsRoVch1rC3nSQfo',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Chivo:wght@400;700;900&amp;family=Noto+Sans:wght@400;500;600;700;800&amp;display=swap" />
                <ThemeModeScript />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" href="/android-chrome-192x192.png" type="image/png" sizes="192x192"/>
                <link rel="icon" href="/android-chrome-512x512.png" type="image/png" sizes="512x512"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" type="image/png"/>
            </head>
            <body className="overflow-x-hidden w-screen relative">
                <ConvexClientProvider>
                    <TopBar />
                    <StickyHeaderWrapper>
                        <Header />
                    </StickyHeaderWrapper>
                    <div className="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">
                        {children}
                        <BackToTop />
                        <Footer />
                    </div>
                </ConvexClientProvider>
            </body>
        </html>
    );
}

