
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Factory, Building2, Shield, Euro } from 'lucide-react';

export const metadata: Metadata = {
    title: "DevKit SIO France | Strategic Digital Partner",
    description: "DevKit SIO France offers high-end software engineering, GDPR-compliant cloud solutions, and digital transformation for the French market.",
};

export default function FranceZone() {
    return (
        <>
            <div className="full-width relative h-[600px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80" alt="Paris" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
                    <div className="text-center px-4 max-w-[1000px]">
                        <span className="font-chivo inline-block bg-white/10 text-white border border-white/20 py-[8px] px-[20px] rounded-[50px] text-[14px] font-bold mb-[24px] uppercase tracking-wider backdrop-blur-md">
                            Zone: France
                        </span>
                        <h1 className="font-chivo font-bold text-white text-[48px] md:text-[72px] mb-6 leading-tight">
                            Excellence Numérique <br /> <span className="text-blue-300">Made for France</span>
                        </h1>
                        <p className="text-white/80 text-xl max-w-[800px] mx-auto leading-relaxed">
                            Serving the French ecosystem with a deep understanding of local business culture, regulatory frameworks, and the high standards of French engineering.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] py-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">

                    {/* Main Content */}
                    <div>
                        <h2 className="font-chivo font-bold text-[32px] md:text-[40px] mb-8 text-gray-900">Why French Leaders Choose DevKit SIO</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                France is distinct. It is a market that values not just innovation, but stability, security, and long-term partnership.
                                Operating in France requires more than just technical skills; it requires an adherence to stringent data protection laws (RGPD) and a level of professional rigour that is standard in the Hexagon.
                            </p>
                            <p>
                                DevKit SIO has established itself as a premier partner for French CAC 40 companies and high-growth scale-ups by bridging the gap between flexible, agile development and the structured needs of French enterprise.
                            </p>
                            <p>
                                <strong>Our French Focus:</strong> We offer a hybrid model. Our local project managers in Paris ensure seamless communication and accountability, while our distributed engineering teams provide the scalability and specialized skills needed to execute rapidly.
                            </p>
                        </div>

                        <div className="mt-12 space-y-6">
                            <h3 className="font-bold text-2xl text-gray-900">Strategic Advantages</h3>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">RGPD & Souveraineté Numérique</h4>
                                    <p className="text-gray-600">We architect systems that are strictly GDPR compliant by design. We have partnerships with sovereign cloud providers (OVHcloud, Scaleway) for clients requiring data sovereignty within French borders.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                                    <Euro className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Crédit Impôt Recherche (CIR) Eligible</h4>
                                    <p className="text-gray-600">Our R&D projects often qualify for CIR/CII, helping French companies optimize their innovation budgets while accessing top-tier talent.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                                    <Building2 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Cultural Alignment</h4>
                                    <p className="text-gray-600">We speak your language—literally and professionally. From technical specifications to legal contracts, everything is managed with French business standards in mind.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                            <h3 className="font-bold text-2xl mb-6 flex items-center gap-2 text-gray-900">
                                <Factory className="w-6 h-6 text-blue-600" /> Key Sectors
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">Luxury & Retail</div>
                                    <p className="text-sm text-gray-500">Omchnichannel e-commerce platforms and immersive digital experiences for heritage brands.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">FinTech & AssurTech</div>
                                    <p className="text-sm text-gray-500">Secure, high-transaction banking modules and automated claims processing systems.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">HealthTech</div>
                                    <p className="text-sm text-gray-500">HDS-compliant applications connecting patients and practitioners.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-600 rounded-3xl p-8 text-white text-center">
                            <h3 className="font-bold text-2xl mb-4">Lançons votre projet</h3>
                            <p className="text-blue-100 mb-8">
                                Discutez avec nos experts basés à Paris pour une évaluation gratuite de vos besoins.
                            </p>
                            <Link href="/contact" className="inline-block w-full bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                                Prendre Rendez-vous
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
