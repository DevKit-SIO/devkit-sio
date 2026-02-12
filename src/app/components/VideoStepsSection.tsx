import {Code, Play, Rocket, Search} from 'lucide-react';

export default function VideoStepsSection() {
    return (
        <section className="pb-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Video Placeholder */}
                <div
                    className="relative w-full rounded-3xl overflow-hidden aspect-video bg-slate-200 group cursor-pointer mb-12 bg-cover"
                    style={{backgroundImage: 'url(/assets/images/devkit-sio-community-management.jpg)',}}>
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-black/10 transition-all group-hover:bg-black/20">
                        <div
                            className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-xl transition-transform group-hover:scale-110">
                            <Play className="h-8 w-8 text-teal-600 fill-teal-600 ml-1"/>
                        </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <span className="text-gray-400 text-xl font-bold">See How We Work</span>
                    </div>
                </div>

                {/*<div className="relative mx-auto max-w-[1190px] -translate-y-[50%] md:-translate-y-[30%] mb-[-50px]">
                    <img className="h-full w-full object-cover rounded-2xl" src="/assets/images/devkit-sio-community-management.jpg"
                         alt="DevKit SIO"/>
                    <button
                        className="rounded-full bg-white grid place-items-center absolute play-video w-[100px] h-[100px] lg:w-[138px] lg:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Play width="26"/></button>
                </div>*/}

                {/* Steps Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Step 1 */}
                    <div
                        className="rounded-2xl bg-orange-50 p-8 border border-orange-100 hover:shadow-lg transition-all">
                        <div
                            className="mb-6 h-12 w-12 rounded-lg bg-white flex items-center justify-center shadow-sm text-orange-500">
                            <Search className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">1. Discovery</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            We analyze your business needs, goals, and challenges to design the perfect digital strategy
                            tailored to your success.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="rounded-2xl bg-blue-50 p-8 border border-blue-100 hover:shadow-lg transition-all">
                        <div
                            className="mb-6 h-12 w-12 rounded-lg bg-white flex items-center justify-center shadow-sm text-blue-500">
                            <Code className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">2. Design & Build</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Our expert team crafts custom solutions using cutting-edge technologies like React, Flutter,
                            AI, and cloud infrastructure.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div
                        className="rounded-2xl bg-emerald-50 p-8 border border-emerald-100 hover:shadow-lg transition-all">
                        <div
                            className="mb-6 h-12 w-12 rounded-lg bg-white flex items-center justify-center shadow-sm text-emerald-500">
                            <Rocket className="h-6 w-6"/>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">3. Launch & Scale</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            We deploy your solution, provide ongoing support, and help you scale with SEO, marketing,
                            and continuous optimization.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
