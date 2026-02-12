
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Zap, Building, Crown, BarChart3, Globe } from 'lucide-react';

export const metadata: Metadata = {
    title: "DevKit SIO Middle East | Building Vision 2030",
    description: "Partnering with governments and enterprises in Saudi Arabia, UAE, and Qatar to deliver Smart City solutions and specialized AI infrastructure.",
};

export default function MiddleEastZone() {
    return (
        <>
            <div className="full-width relative h-[600px] overflow-hidden">
                <img src="/assets/images/zones/middle-east-hero.jpg" alt="Dubai Architecture" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-yellow-900/70 flex items-center justify-center">
                    <div className="text-center px-4 max-w-[1000px]">
                        <span className="font-chivo inline-block bg-white/10 text-white border border-white/20 py-[8px] px-[20px] rounded-[50px] text-[14px] font-bold mb-[24px] uppercase tracking-wider backdrop-blur-md">
                            Zone: Middle East (GCC)
                        </span>
                        <h1 className="font-chivo font-bold text-white text-[48px] md:text-[72px] mb-6 leading-tight">
                            Building the Future <br /> <span className="text-yellow-400">Today</span>
                        </h1>
                        <p className="text-white/80 text-xl max-w-[800px] mx-auto leading-relaxed">
                            From Riyadh's Vision 2030 to Dubai's Smart City initiatives, we provide the cutting-edge technology foundation for the region's most ambitious projects.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] py-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">

                    {/* Main Content */}
                    <div>
                        <h2 className="font-chivo font-bold text-[32px] md:text-[40px] mb-8 text-gray-900">A Partner in Transformation</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                The Gulf Cooperation Council (GCC) region is undergoing a historic digital transformation. Governments and private sectors are moving beyond oil, investing billions into creating knowledge economies powered by AI, data, and sustainable technology.
                            </p>
                            <p>
                                DevKit SIO is uniquely positioned to support this shift. We understand the scale of ambition here. Whether it's creating a digital twin for a new mega-city or implementing a national AI strategy for healthcare, we bring the deep technical expertise required to turn vision into reality.
                            </p>
                            <p>
                                <strong>Localized Excellence:</strong> We respect local culture and business practices. Our solutions include full Arabic localization (RTL support, cultural nuances) and compliance with local data residency laws (e.g., NDMO in Saudi Arabia).
                            </p>
                        </div>

                        <div className="mt-12 space-y-6">
                            <h3 className="font-bold text-2xl text-gray-900">Regional Expertise</h3>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-yellow-100 rounded-lg shrink-0">
                                    <Crown className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">GovTech & Giga-Projects</h4>
                                    <p className="text-gray-600">Specialized experience in building secure, scalable platforms for public sector services, capable of serving millions of citizens reliably.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-yellow-100 rounded-lg shrink-0">
                                    <Globe className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Arabic-First Design</h4>
                                    <p className="text-gray-600">We don't just translate; we design for right-to-left user experiences from the ground up, ensuring native-feeling applications for the Arab world.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-yellow-100 rounded-lg shrink-0">
                                    <Building className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Smart Infrastructure</h4>
                                    <p className="text-gray-600">IoT and AI integration for real estate and urban management. We build the digital nervous systems for smart buildings and cities.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                            <h3 className="font-bold text-2xl mb-6 flex items-center gap-2 text-gray-900">
                                <Zap className="w-6 h-6 text-yellow-600" /> Key Verticals
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">Government & Public Sector</div>
                                    <p className="text-sm text-gray-500">Digital ID systems, e-visa portals, and automated ministry services.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">Real Estate & PropTech</div>
                                    <p className="text-sm text-gray-500">Virtual tours, property management platforms, and smart home IoT integration.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">Energy & Utilities</div>
                                    <p className="text-sm text-gray-500">AI-driven predictive maintenance for oil, gas, and renewable energy infrastructure.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-yellow-600 rounded-3xl p-8 text-white text-center">
                            <h3 className="font-bold text-2xl mb-4">Partner for Vision 2030</h3>
                            <p className="text-yellow-100 mb-8">
                                Let's build the future together. Contact our specialized MENA team today.
                            </p>
                            <Link href="/contact" className="inline-block w-full bg-white text-yellow-600 py-4 rounded-xl font-bold hover:bg-yellow-50 transition-colors">
                                Talk to an Expert
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
