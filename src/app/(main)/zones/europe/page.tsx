
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Landmark, Clock, Globe2, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
    title: "DevKit SIO Europe | Pan-European Tech Solutions",
    description: "DevKit SIO provides nearshore software development services across Europe, offering time-zone alignment and cultural fit for DACH, Benelux, and Nordic markets.",
};

export default function EuropeZone() {
    return (
        <>
            <div className="full-width relative h-[600px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1473951574080-01fe45ec8643?auto=format&fit=crop&w=1600&q=80" alt="Europe" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-indigo-900/70 flex items-center justify-center">
                    <div className="text-center px-4 max-w-[1000px]">
                        <span className="font-chivo inline-block bg-white/10 text-white border border-white/20 py-[8px] px-[20px] rounded-[50px] text-[14px] font-bold mb-[24px] uppercase tracking-wider backdrop-blur-md">
                            Zone: Europe
                        </span>
                        <h1 className="font-chivo font-bold text-white text-[48px] md:text-[72px] mb-6 leading-tight">
                            Nearshore Excellence <br /> <span className="text-indigo-300">Without Compromise</span>
                        </h1>
                        <p className="text-white/80 text-xl max-w-[800px] mx-auto leading-relaxed">
                            Empowering DACH, Benelux, and Nordic enterprises with high-availability engineering teams that operate in your time zone and understand your quality standards.
                        </p>
                    </div>
                </div>
            </div>

            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] py-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">

                    {/* Main Content */}
                    <div>
                        <h2 className="font-chivo font-bold text-[32px] md:text-[40px] mb-8 text-gray-900">The Modern Nearshore Advantage</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                European businesses face a dual challenge: a critical shortage of senior IT talent and an increasing need for rapid digitization.
                                Traditional offshoring often fails due to time zone differences and communication barriers. DevKit SIO solves this with a premium nearshore model.
                            </p>
                            <p>
                                We operate essentially as a next-door neighbor. Our engineering hubs are synchronized with Central European Time (CET/CEST), meaning our teams attend your morning standups, respond to Slack messages instantly, and collaborate in real-time.
                            </p>
                            <p>
                                <strong>Engineering Quality:</strong> We adhere to the precision engineering standards expected in Germany and Switzerland. Our code is documented, tested, and built to last. We don't just ship features; we ship reliability.
                            </p>
                        </div>

                        <div className="mt-12 space-y-6">
                            <h3 className="font-bold text-2xl text-gray-900">Why Europe Chooses Us</h3>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-indigo-100 rounded-lg shrink-0">
                                    <Clock className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Time Zone Synchronization</h4>
                                    <p className="text-gray-600">Full overlap with business hours in London, Berlin, Paris, and Zurich. No more waiting 24 hours for a bug fix.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-indigo-100 rounded-lg shrink-0">
                                    <Globe2 className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Polyglot Teams</h4>
                                    <p className="text-gray-600">Our project leads and account managers are fluent in English, with French and German support options available, preventing requirements from getting lost in translation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-indigo-100 rounded-lg shrink-0">
                                    <Briefcase className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">EU Data Protection & Compliance</h4>
                                    <p className="text-gray-600">We understand the intricacies of EU directives. From GDPR to banking regulations (PSD2), our compliance officers ensure your software meets all legal standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Stats */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                            <h3 className="font-bold text-2xl mb-6 flex items-center gap-2 text-gray-900">
                                <Landmark className="w-6 h-6 text-indigo-600" /> Industries Served
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">Automotive & Mobility</div>
                                    <p className="text-sm text-gray-500">Embedded software interfaces, fleet management systems, and EV charging station networks.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">Logistics & Supply Chain</div>
                                    <p className="text-sm text-gray-500">Real-time tracking dashboards, warehouse automation, and predictive route optimization.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                                    <div className="font-bold text-gray-900 text-lg mb-1">GreenTech & Energy</div>
                                    <p className="text-sm text-gray-500">IoT platforms for energy monitoring, carbon footprint calculators, and sustainability reporting tools.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-600 rounded-3xl p-8 text-white text-center">
                            <h3 className="font-bold text-2xl mb-4">Integrate Our Teams</h3>
                            <p className="text-indigo-100 mb-8">
                                Add senior engineers to your workforce in less than 7 days. Scale up and down as needed.
                            </p>
                            <Link href="/contact" className="inline-block w-full bg-white text-indigo-600 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
                                Request Developer Profiles
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
