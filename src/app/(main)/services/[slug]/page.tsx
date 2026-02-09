import { Facebook, Linkedin, Twitter, MessageCircle, ChevronRight, CheckCircle2 } from "lucide-react";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from 'next';
import Link from 'next/link';

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = await fetchQuery(api.services.getServiceBySlug, { slug });

    if (!service) {
        return {};
    }

    return {
        title: service.metaTitle || service.title,
        description: service.metaDescription,
        keywords: service.metaKeywords?.split(',').map(k => k.trim()),
        authors: [{ name: service.author || 'DevKit SIO Team' }],
        alternates: {
            canonical: service.canonicalUrl || `https://www.devkit-sio.com/services/${slug}`,
        },
        openGraph: {
            title: service.metaTitle || service.title,
            description: service.metaDescription,
            type: 'website',
            url: `https://www.devkit-sio.com/services/${slug}`,
            images: [
                {
                    url: service.image,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: service.metaTitle || service.title,
            description: service.metaDescription,
            images: [service.image],
        },
    };
}

export default async function ServicePage({ params }: PageProps) {
    const { slug } = await params;

    const service = await fetchQuery(api.services.getServiceBySlug, { slug });

    if (!service) {
        notFound();
    }

    // JSON-LD Structured Data for Service (GEO)
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.title,
        provider: {
            '@type': 'Organization',
            name: 'DevKit SIO',
            url: 'https://www.devkit-sio.com',
            logo: 'https://www.devkit-sio.com/assets/images/logo.png'
        },
        areaServed: {
            '@type': 'Country',
            name: 'Global' // Or lists of countries/regions
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: service.category,
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: service.title
                    }
                }
            ]
        },
        description: service.metaDescription,
        url: service.canonicalUrl || `https://www.devkit-sio.com/services/${slug}`,
        image: service.image
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="full-width relative bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img className="h-full w-full object-cover" src={service.image} alt={service.title} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>

                <div className="relative z-10 px-[12px] md:px-[36px] xl:px-0 py-[100px] lg:py-[150px] mx-auto max-w-[1320px]">
                    <div className="max-w-[800px]">
                        <span className="font-chivo inline-block bg-green-900 text-white py-[6px] px-[16px] rounded-[50px] text-[14px] font-bold mb-[24px] uppercase tracking-wider">
                            {service.category}
                        </span>
                        <h1 className="font-chivo text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] lg:text-[64px] lg:leading-[72px] font-bold text-white mb-[32px]">
                            {service.title}
                        </h1>
                        <p className="text-gray-300 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[32px] mb-[40px] max-w-[600px]">
                            {service.metaDescription}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1">
                                Get Started
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link href="#details" className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full font-bold transition-all duration-300 backdrop-blur-sm">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div id="details" className="px-[12px] md:px-[36px] xl:px-0 py-[80px] lg:py-[120px] mx-auto max-w-[1320px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] lg:gap-[100px]">
                    {/* Sidebar / Quick Info */}
                    <div className="lg:col-span-4 order-2 lg:order-1">
                        <div className="bg-gray-50 rounded-2xl p-8 sticky top-[100px]">
                            <h3 className="font-chivo font-bold text-[24px] mb-6">Why Choose Us?</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600">Expert Team of Senior Engineers</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600">Agile & Transparent Process</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600">Scalable & Secure Solutions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                    <span className="text-gray-600">Data-Driven Results</span>
                                </li>
                            </ul>

                            <div className="w-full h-px bg-gray-200 my-8"></div>

                            <h4 className="font-bold text-[18px] mb-4">Have questions?</h4>
                            <p className="text-gray-500 mb-6 text-sm">
                                Not sure if this is the right fit? Schedule a free 30-minute consultation with our experts.
                            </p>
                            <Link href="/contact" className="block w-full text-center py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold transition-colors">
                                Book Consultation
                            </Link>
                        </div>
                    </div>

                    {/* Body Content */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <div
                            className="prose prose-lg max-w-none text-gray-600 
                                      prose-headings:font-chivo prose-headings:font-bold prose-headings:text-gray-900 
                                      prose-a:text-green-600 prose-a:no-underline hover:prose-a:text-green-700
                                      prose-strong:text-gray-900
                                      prose-ul:list-disc prose-ul:pl-4
                                      prose-img:rounded-2xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: service.body }}
                        />

                        {/* Bottom CTA */}
                        <div className="mt-16 bg-green-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/images/pattern.png')] bg-cover"></div>
                            <div className="relative z-10">
                                <h2 className="font-chivo text-[32px] md:text-[40px] font-bold mb-6">Ready to Transform Your Business?</h2>
                                <p className="text-green-100 text-lg mb-8 max-w-[600px] mx-auto">
                                    Let's build something amazing together. Contact us today to discuss your project requirements.
                                </p>
                                <Link href="/contact" className="inline-block bg-white text-green-900 px-10 py-4 rounded-full font-bold hover:bg-green-50 transition-colors">
                                    Start Your Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
