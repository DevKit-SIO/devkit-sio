
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Rocket, TrendingUp, DollarSign, Puzzle, Laptop } from 'lucide-react';

export const metadata: Metadata = {
    title: "DevKit SIO USA & UK | High-Velocity Engineering",
    description: "Providing scalable, agile engineering teams for US and UK startups and enterprises. We accelerate your roadmap with top-tier talent.",
};

export default function UsaUkZone() {
    return (
        <>
            <div className="full-width relative h-[600px] overflow-hidden">
                <img src="/assets/images/zones/usa-uk-hero.jpg" alt="New York Skyline" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-red-900/70 flex items-center justify-center">
                    <div className="text-center px-4 max-w-[1000px]">
                        <span className="font-chivo inline-block bg-white/10 text-white border border-white/20 py-[8px] px-[20px] rounded-[50px] text-[14px] font-bold mb-[24px] uppercase tracking-wider backdrop-blur-md">
                            Zone: USA & UK
                        </span>
                        <h1 className="font-chivo font-bold text-white text-[48px] md:text-[72px] mb-6 leading-tight">
                            Scale at the Speed of <br /> <span className="text-red-300">Ambition</span>
                        </h1>
                        <p className="text-white/80 text-xl max-w-[800px] mx-auto leading-relaxed">
                            For the fast-paced markets of London, New York, and San Francisco, we provide high-velocity engineering pods that integrate seamlessly and ship daily.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] py-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">

                    {/* Main Content */}
                    <div>
                        <h2 className="font-chivo font-bold text-[32px] md:text-[40px] mb-8 text-gray-900">Accelerating the Anglosphere</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                The US and UK markets are characterized by fierce competition and a relentless need for speed. Startups in Y Combinator or established FTSE 100 enterprises face the same bottleneck: access to high-quality engineering talent that can hit the ground running.
                            </p>
                            <p>
                                DevKit SIO removes this friction. We don't just provide "offshore resources"; we provide <strong>product-minded engineers</strong>. Our teams are fluent in English, culturally aligned with Western work ethics, and trained in the latest Silicon Valley stacks (React, Next.js, Vercel, AWS Serverless).
                            </p>
                            <p>
                                <strong>The "Follow the Sun" Model:</strong> By leveraging time zone differences intelligently, we can offer a 24-hour development cycle. Your US team specifies requirements during their day; our team builds and tests while they sleep; you wake up to a deployed feature.
                            </p>
                        </div>

                        <div className="mt-12 space-y-6">
                            <h3 className="font-bold text-2xl text-gray-900">Our Strategic Fit</h3>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-red-100 rounded-lg shrink-0">
                                    <Laptop className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Tech Stack Alignment</h4>
                                    <p className="text-gray-600">We don't do legacy. Our engineers are experts in the modern JS ecosystem, Python AI/ML pipelines, and Cloud-Native architectures that drive US/UK innovation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-red-100 rounded-lg shrink-0">
                                    <DollarSign className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Cost-Efficiency without Quality Drop</h4>
                                    <p className="text-gray-600">Get senior engineering talent for the cost of a junior hire in London or SF. Reduce burn rate while increasing runway and delivery speed.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-red-100 rounded-lg shrink-0">
                                    <Puzzle className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Seamless Integration</h4>
                                    <p className="text-gray-600">We use your tools (Jira, Slack, GitHub). We join your standups. We adopt your linting rules. To the outside world, we are indistinguishable from your core team.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                            <h3 className="font-bold text-2xl mb-6 flex items-center gap-2 text-gray-900">
                                <Rocket className="w-6 h-6 text-red-600" /> Innovation Hubs
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">FinTech & DeFi</div>
                                    <p className="text-sm text-gray-500">Building next-gen trading platforms, crypto wallets, and secure payment gateways for London's City and Wall Street.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">SaaS & B2B</div>
                                    <p className="text-sm text-gray-500">Multi-tenant architectures, subscription billing engines, and enterprise-grade dashboards.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">Health & BioTech</div>
                                    <p className="text-sm text-gray-500">HIPAA-compliant data pipelines and AI analysis tools for medical research.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-600 rounded-3xl p-8 text-white text-center">
                            <h3 className="font-bold text-2xl mb-4">Accelerate Your Roadmap</h3>
                            <p className="text-red-100 mb-8">
                                Don't let hiring bottlenecks slow you down. Deploys code, not job specs.
                            </p>
                            <Link href="/contact" className="inline-block w-full bg-white text-red-600 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors">
                                Get a Quote
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
