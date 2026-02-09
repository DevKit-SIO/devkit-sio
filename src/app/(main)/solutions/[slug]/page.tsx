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
    const solution = await fetchQuery(api.services.getServiceBySlug, { slug });

    if (!solution) {
        return {};
    }

    return {
        title: solution.metaTitle || solution.title,
        description: solution.metaDescription,
        keywords: solution.metaKeywords?.split(',').map(k => k.trim()),
        authors: [{ name: solution.author || 'DevKit SIO Solutions Team' }],
        alternates: {
            canonical: solution.canonicalUrl || `https://www.devkit-sio.com/solutions/${slug}`,
        },
        openGraph: {
            title: solution.metaTitle || solution.title,
            description: solution.metaDescription,
            type: 'website',
            url: `https://www.devkit-sio.com/solutions/${slug}`,
            images: [
                {
                    url: solution.image,
                    width: 1200,
                    height: 630,
                    alt: solution.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: solution.metaTitle || solution.title,
            description: solution.metaDescription,
            images: [solution.image],
        },
    };
}

export default async function SolutionPage({ params }: PageProps) {
    const { slug } = await params;

    const solution = await fetchQuery(api.services.getServiceBySlug, { slug });

    if (!solution) {
        notFound();
    }

    // JSON-LD Structured Data for Service (GEO) - Using Service schema for Solutions as well, or Product if simplified.
    // 'Service' is generally appropriate for B2B solutions.
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: solution.title,
        provider: {
            '@type': 'Organization',
            name: 'DevKit SIO',
            url: 'https://www.devkit-sio.com',
            logo: 'https://www.devkit-sio.com/assets/images/logo.png'
        },
        areaServed: {
            '@type': 'Country',
            name: 'Global'
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: solution.category,
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: solution.title
                    }
                }
            ]
        },
        description: solution.metaDescription,
        url: solution.canonicalUrl || `https://www.devkit-sio.com/solutions/${slug}`,
        image: solution.image
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero Section */}
            <div className="full-width relative bg-indigo-900 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img className="h-full w-full object-cover" src={solution.image} alt={solution.title} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/90 to-transparent"></div>

                <div className="relative z-10 px-[12px] md:px-[36px] xl:px-0 py-[100px] lg:py-[150px] mx-auto max-w-[1320px]">
                    <div className="max-w-[800px]">
                        <span className="font-chivo inline-block bg-indigo-700 text-white py-[6px] px-[16px] rounded-[50px] text-[14px] font-bold mb-[24px] uppercase tracking-wider">
                            {solution.category}
                        </span>
                        <h1 className="font-chivo text-[40px] leading-[48px] sm:text-[52px] sm:leading-[60px] lg:text-[64px] lg:leading-[72px] font-bold text-white mb-[32px]">
                            {solution.title}
                        </h1>
                        <p className="text-indigo-200 text-[18px] leading-[28px] lg:text-[20px] lg:leading-[32px] mb-[40px] max-w-[600px]">
                            {solution.metaDescription}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 hover:bg-indigo-50 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1">
                                Request Demo
                                <ChevronRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link href="#details" className="inline-flex items-center px-8 py-4 bg-indigo-800/50 hover:bg-indigo-800/70 text-white border border-indigo-500/30 rounded-full font-bold transition-all duration-300 backdrop-blur-sm">
                                Explore Solution
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
                        <div className="bg-indigo-50 rounded-2xl p-8 sticky top-[100px]">
                            <h3 className="font-chivo font-bold text-[24px] mb-6 text-indigo-900">Key Benefits</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Rapid Implementation & Value</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Enterprise-Grade Security</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Dedicated Support Team</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                                    <span className="text-gray-700">Proven ROI Framework</span>
                                </li>
                            </ul>

                            <div className="w-full h-px bg-indigo-200 my-8"></div>

                            <h4 className="font-bold text-[18px] mb-4 text-indigo-900">Need a custom approach?</h4>
                            <p className="text-gray-600 mb-6 text-sm">
                                Every business is unique. Let's discuss how we can tailor this solution to your specific needs.
                            </p>
                            <Link href="/contact" className="block w-full text-center py-4 bg-indigo-900 hover:bg-indigo-800 text-white rounded-xl font-bold transition-colors">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>

                    {/* Body Content */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <div
                            className="prose prose-lg max-w-none text-gray-600 
                                      prose-headings:font-chivo prose-headings:font-bold prose-headings:text-gray-900 
                                      prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:text-indigo-700
                                      prose-strong:text-gray-900
                                      prose-ul:list-disc prose-ul:pl-4
                                      prose-img:rounded-2xl prose-img:shadow-lg"
                            dangerouslySetInnerHTML={{ __html: solution.body }}
                        />

                        {/* Bottom CTA */}
                        <div className="mt-16 bg-gray-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/assets/images/pattern.png')] bg-cover"></div>
                            <div className="relative z-10">
                                <h2 className="font-chivo text-[32px] md:text-[40px] font-bold mb-6">Solve Your Challenge Today</h2>
                                <p className="text-gray-300 text-lg mb-8 max-w-[600px] mx-auto">
                                    Don't let technical hurdles hold you back. Implement our {solution.title} solution and drive growth.
                                </p>
                                <Link href="/contact" className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-full font-bold hover:bg-indigo-500 transition-colors">
                                    Get Started Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
