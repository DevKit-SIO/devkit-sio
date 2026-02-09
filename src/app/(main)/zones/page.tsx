
import type { Metadata } from 'next';
import Link from 'next/link';
import { Globe, MapPin, ArrowRight, TrendingUp, ShieldCheck, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: "Global Presence | DevKit SIO",
    description: "DevKit SIO operates globally with specialized hubs in France, Europe, USA/UK, and the Middle East.",
};

const zones = [
    {
        name: "France",
        slug: "france",
        tagline: "Our Roots, Your Local Partner",
        description: "Headquartered in Paris, we provide elite engineering teams to French enterprises, adhering to strict GDPR standards and local business culture.",
        image: "/assets/images/zones/france-hero.jpg",
        stats: ["HQ Location", "100+ Clients", "GDPR Expert"]
    },
    {
        name: "Europe",
        slug: "europe",
        tagline: "Nearshore Excellence",
        description: "Serving the broader European market (DACH, Nordics, Benelux) with high-availability nearshore teams, synchronized time zones, and cultural alignment.",
        image: "/assets/images/zones/europe-hero.jpg",
        stats: ["EU Compliant", "UTC+1 Teams", "Multi-lingual"]
    },
    {
        name: "USA & UK",
        slug: "usa-uk",
        tagline: "Speed & Scalability",
        description: "Empowering startups and scale-ups in high-velocity anglophone markets. We provide scalable pods that integrate directly with your onshore workflows.",
        image: "/assets/images/zones/usa-uk-hero.jpg",
        stats: ["24/7 Ops", "Agile Native", "Scale-ready"]
    },
    {
        name: "Middle East",
        slug: "moyen-orient",
        tagline: "Visionary Tech",
        description: "Partnering with governments and enterprises in the GCC to build Smart Cities and digital infrastructure for Vision 2030 and beyond.",
        image: "/assets/images/zones/middle-east-card.jpg",
        stats: ["GovTech", "Smart City", "AI Focus"]
    }
];

export default function Zones() {
    return (
        <>
            {/* Hero Section */}
            <div className="full-width bg-gray-900 py-[100px] lg:py-[150px] relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/assets/images/zones/hero-bg.jpg')] bg-cover bg-center"></div>
                <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] text-center relative z-10">
                    <span className="font-chivo inline-block bg-green-500/20 text-green-300 border border-green-500/50 py-[8px] px-[20px] rounded-[50px] text-[14px] font-bold mb-[30px] uppercase tracking-wider backdrop-blur-md">
                        Global Reach, Local Impact
                    </span>
                    <h1 className="font-chivo font-bold text-white text-[48px] md:text-[72px] mb-8 leading-tight">
                        Innovation knows <span className="text-green-400">no borders</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-2xl max-w-[900px] mx-auto leading-relaxed">
                        In a hyper-connected world, talent is distributed but opportunity is everywhere.
                        DevKit SIO bridges the gap, delivering world-class technology solutions tailored to the specific regulatory, cultural, and business needs of your region.
                    </p>
                </div>
            </div>

            {/* Global Stats */}
            <div className="full-width bg-white py-[80px] border-b border-gray-100">
                <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="p-4 bg-green-50 rounded-full mb-4">
                                <Globe className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="font-chivo font-bold text-2xl mb-2">4 Major Regions</h3>
                            <p className="text-gray-500">Dedicated operational hubs ensuring local compliance and support.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="p-4 bg-blue-50 rounded-full mb-4">
                                <TrendingUp className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-chivo font-bold text-2xl mb-2">24/7 Development</h3>
                            <p className="text-gray-500">Distributed teams across time zones allow for continuous delivery cycles.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <div className="p-4 bg-purple-50 rounded-full mb-4">
                                <ShieldCheck className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="font-chivo font-bold text-2xl mb-2">Standardized Quality</h3>
                            <p className="text-gray-500">A unified engineering playbook ensures the same high standards globally.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zones Grid */}
            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] py-[100px] lg:py-[150px]">
                <div className="text-center mb-16">
                    <h2 className="font-chivo font-bold text-[32px] md:text-[48px] mb-6 text-gray-900">Explore Our Zones</h2>
                    <p className="text-gray-600 text-xl max-w-[700px] mx-auto">Click on a region to discover how we tailor our technological expertise to your local market.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] lg:gap-[60px]">
                    {zones.map((zone) => (
                        <Link key={zone.slug} href={`/zones/${zone.slug}`} className="group block h-full">
                            <div className="relative h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="h-[300px] overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                                    <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-sm">
                                        <ArrowRight className="w-6 h-6 text-gray-900 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                    <img
                                        src={zone.image}
                                        alt={zone.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-linear-to-t from-black/80 to-transparent">
                                        <h3 className="font-chivo font-bold text-3xl text-white mb-1">{zone.name}</h3>
                                        <p className="text-green-300 font-medium tracking-wide text-sm uppercase">{zone.tagline}</p>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                        {zone.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {zone.stats.map((stat, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-semibold border border-gray-200">
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
