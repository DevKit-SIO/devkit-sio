import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FeatureSection() {
    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    <div className="relative">
                        <div className="relative z-10 w-full rounded-3xl overflow-hidden aspect-4/3 bg-slate-200">
                            <img src="/assets/images/team-meeting.png" alt="DevKit SIO Meeting"/>
                        </div>
                        <div className="absolute -top-10 -left-10 -z-10 h-72 w-72 rounded-full bg-teal-100 blur-3xl opacity-50" />
                    </div>

                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5">
                            <span className="font-bold text-blue-800 text-xs uppercase tracking-wide">
                                Why Choose DevKit SIO
                            </span>
                        </div>

                        <h2 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
                            Exceptional Solutions for Your Digital Transformation
                        </h2>

                        <p className="text-lg text-slate-500 leading-relaxed">
                            We combine cutting-edge technology with strategic thinking to deliver solutions that drive real business growth and efficiency.
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                "AI-Powered Automation",
                                "Custom Web & Mobile Apps",
                                "SEO & Performance",
                                "Secure Cloud Infrastructure"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="h-4 w-4 text-teal-600" />
                                    </div>
                                    <span className="font-semibold text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4">
                            {/* No button in image, but maybe good to add or keep clean.
                         The image shows checkmarks but no main CTA button visible in the crop.
                         I'll leave it without button to match image or add if standard practice.
                         The image shows logos of "Agon", "Retina", "Flyer", "Figma", "Box" below this section possibly?

                         Let's keep it clean.
                     */}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
