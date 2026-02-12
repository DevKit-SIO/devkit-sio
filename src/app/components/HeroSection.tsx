import { ArrowRight, Play, BrainCircuit, Globe, Smartphone, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
    return (
        <>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] items-center lg:flex">
                <div className="lg:w-[70%] mb-[80px]">
                    <span
                        className="font-chivo inline-block bg-green-900 text-white py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">
                        AI-Powered Digital Agency
                    </span>
                    <h1 className="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[54px]">
                        Transform Your Business with Digital Innovation
                    </h1>
                    <p className="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[150px] mb-[44px]">
                        From custom web and mobile apps to AI automation and digital marketing. We build solutions that drive growth and efficiency.
                    </p>
                    <div className="flex items-center justify-start mb-[50px]">
                        <button type="button">
                            <a
                                className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]"
                                href="/contact">
                                <span
                                    className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                    Start Your Project
                                </span>
                                <ArrowRight className="ml-[7px] w-[24px] text-white group-hover:text-black" />
                            </a>
                        </button>
                        <div className="flex items-center gap-3">
                            <Play size={36} className="text-[#158E99]" />
                            <a
                                className="text-base flex items-center font-chivo font-medium text-[18px] leading-[18px] gap-[5px]"
                                href="/services">
                                Explore Services
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden relative lg:block">
                    <img className="relative z-10 animate-hero-thumb-sm-animation" src="/assets/images/hero-6.png"
                        alt="DevKit SIO Digital Solutions" />
                    <img className="absolute z-0 animate-float -right-1/4 top-[15%]" src="/assets/images/chart-1.png"
                        alt="Growth Analytics Chart" />
                    <img className="absolute animate-float top-1/2" src="/assets/images/icons/line-chart.svg"
                        alt="Performance Metrics" />
                </div>
            </div>
            <div className="full-width bg-[#bee1e6] z-50">
                <div
                    className="px-[12px] md:px-[36px] xl:px-0 mt-0 mx-auto hidden max-w-[1320px] lg:flex gap-[30px] -translate-y-[30%]">
                    <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">
                        <a className="flex flex-col justify-between h-full" href="/services/intelligence-artificielle">
                            <div className="flex items-center gap-4 mb-5">
                                <div
                                    className="rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F33] group-hover:bg-[#158E99]">
                                    <BrainCircuit size={60} className="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] text-[#158E99] group-hover:text-white" />
                                </div>
                                <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                    AI Solutions & Automation
                                </h4>
                            </div>
                            <p className="text-gray-500 text-[14px] xl:text-lead-lg mb-4">
                                Chatbots, RPA, predictive analytics, and custom AI integrations to streamline your operations.
                            </p>
                        </a>
                    </div>
                    <div className="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1"><a
                        className="flex flex-col justify-between h-full" href="/services/web-development">
                        <div className="flex items-center gap-4 mb-5">
                            <div
                                className="rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F33] group-hover:bg-[#158E99]">
                                <Globe size={60} className="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] text-[#158E99] group-hover:text-white" />
                            </div>
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                Web Development
                            </h4>
                        </div>
                        <p className="text-gray-500 text-[14px] xl:text-lead-lg mb-4">
                            Custom websites and platforms with React, Next.js, Laravel, and modern frameworks.
                        </p>
                    </a>
                    </div>
                    <div className="rounded-2xl p-[20px] border border-gray-200 group bg-white flex-[1.4]"><a
                        className="flex h-full" href="/services/mobile-app-development">
                        <div className="flex flex-col gap-1">
                            <div
                                className="bg-opacity-20 rounded-full transition-all duration-200 w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F33] group-hover:bg-[#158E99]">
                                <Smartphone size={60} className="rounded-full p-[8px] xl:p-[18px] max-w-[60px] text-[#158E99] group-hover:text-white" />
                            </div>
                            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                Mobile Apps
                            </h4>
                            <p className="text-gray-500 text-[14px] xl:text-lead-lg xl:mb-5">
                                iOS & Android apps with Flutter, React Native, and native development.
                            </p>
                            <img className="w-[18px]" src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/icons/icon-right-arrow.svg"
                                alt="Learn more" />
                        </div>
                        <img className="object-cover rounded-2xl xl:max-h-[249px] xl:max-w-[188px] max-w-[50%]"
                            src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/thumbnail-2.png" alt="Mobile App Development" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}
