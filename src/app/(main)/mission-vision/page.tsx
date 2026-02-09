
import type { Metadata } from 'next';
import { Target, Lightbulb, Users, Zap, Shield, Globe, Award, Rocket } from 'lucide-react';

export const metadata: Metadata = {
    title: "Mission & Vision | DevKit SIO",
    description: "Our comprehensive mission to empower global businesses with cutting-edge AI and software solutions.",
};

export default function MissionVision() {
    return (
        <>
            {/* Hero Section */}
            <div className="full-width bg-gray-900 py-[100px] lg:py-[150px] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/assets/images/mission-vision/hero-bg.jpg')] bg-cover bg-center"></div>
                <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] text-center relative z-10">
                    <span className="font-chivo inline-block bg-green-500/20 text-green-300 border border-green-500/50 py-[8px] px-[20px] rounded-[50px] text-[14px] font-bold mb-[30px] uppercase tracking-wider backdrop-blur-md">
                        Our Purpose
                    </span>
                    <h1 className="font-chivo font-bold text-white text-[48px] md:text-[72px] mb-8 leading-tight">
                        Architecting the <span className="text-green-400">Digital Future</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-2xl max-w-[900px] mx-auto leading-relaxed">
                        We don't just write code; we build the digital infrastructure that powers the next generation of global enterprises.
                        Our mission is to democratize access to advanced technology, making AI and cloud-native solutions accessible to all.
                    </p>
                </div>
            </div>

            {/* Introduction / The Genesis */}
            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1000px] py-[80px] lg:py-[120px]">
                <h2 className="font-chivo font-bold text-[32px] md:text-[40px] mb-8 text-gray-900">The Genesis of DevKit SIO</h2>
                <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                        In an era defined by rapid technological acceleration, businesses face a critical paradox: technology is more accessible than ever, yet successfully leveraging it has never been more complex.
                        DevKit SIO was born from a simple yet profound realization—that there exists a widening gap between the potential of emerging technologies (like Artificial Intelligence and Machine Learning)
                        and the ability of traditional enterprises to integrate them effectively.
                    </p>
                    <p>
                        Founded by a collective of senior engineers, data scientists, and digital strategists, DevKit SIO began not merely as a software development agency, but as a strategic technology partner.
                        We recognized that writing code is the easy part. The challenge lies in understanding the intricate business logic, the market dynamics, and the human element that technology must serve.
                    </p>
                    <p>
                        Our journey started with a commitment to "Engineering Excellence"—a philosophy that rejects shortcuts in favor of robust, scalable, and secure architectures.
                        Today, we stand as a global beacon of innovation, helping clients across Europe, North America, and the Middle East navigate their digital transformation journeys with confidence and clarity.
                    </p>
                </div>
            </div>

            {/* Mission & Vision Split */}
            <div className="full-width bg-gray-50 py-[100px]">
                <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
                        {/* Mission */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-green-100 rounded-2xl">
                                    <Target className="w-8 h-8 text-green-600" />
                                </div>
                                <h2 className="font-chivo font-bold text-[32px] md:text-[40px]">Our Mission</h2>
                            </div>
                            <div className="prose prose-lg text-gray-600">
                                <p className="font-bold text-gray-900 text-xl mb-4">
                                    To empower organizations to achieve their full potential through intelligent, scalable, and human-centric technology solutions.
                                </p>
                                <p>
                                    Our mission encompasses three core pillars:
                                </p>
                                <ul className="list-none pl-0 space-y-4 mt-6">
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-green-500 shrink-0"></div>
                                        <span>
                                            <strong>Bridging the Gap:</strong> We translate complex technical concepts into tangible business value, ensuring that every line of code serves a strategic purpose.
                                        </span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-green-500 shrink-0"></div>
                                        <span>
                                            <strong>Accelerating Innovation:</strong> By providing on-demand access to top-tier talent and cutting-edge tech stacks, we enable our clients to innovate at the speed of startups, regardless of their size.
                                        </span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-green-500 shrink-0"></div>
                                        <span>
                                            <strong>Building for the Future:</strong> We architect solutions not just for today's needs but for tomorrow's scale. Our systems are designed to be resilient, adaptable, and future-proof.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Vision */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-indigo-100 rounded-2xl">
                                    <Lightbulb className="w-8 h-8 text-indigo-600" />
                                </div>
                                <h2 className="font-chivo font-bold text-[32px] md:text-[40px]">Our Vision</h2>
                            </div>
                            <div className="prose prose-lg text-gray-600">
                                <p className="font-bold text-gray-900 text-xl mb-4">
                                    To be the global standard for ethical, impactful, and transformative digital engineering.
                                </p>
                                <p>
                                    We envision a world where:
                                </p>
                                <ul className="list-none pl-0 space-y-4 mt-6">
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span>
                                            <strong>Technology is Invisible:</strong> The best technology works so seamlessly that it becomes invisible, allowing users to focus entirely on their goals and experiences.
                                        </span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span>
                                            <strong>AI is Ubiquitous but Ethical:</strong> We strive for a future where Artificial Intelligence augments human capability without compromising privacy, ethics, or human dignity.
                                        </span>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="w-2 h-2 mt-2.5 rounded-full bg-indigo-500 shrink-0"></div>
                                        <span>
                                            <strong>Innovation is Borderless:</strong> We see a connected global economy where talent and ideas flow freely, breaking down geographical barriers to solve humanity's toughest challenges.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] py-[100px] lg:py-[150px]">
                <div className="text-center max-w-[800px] mx-auto mb-[80px]">
                    <h2 className="font-chivo font-bold text-[32px] md:text-[48px] mb-6">Our DNA & Core Values</h2>
                    <p className="text-gray-600 text-xl">
                        These are the principles that guide every decision we make, every hire we onboard, and every line of code we write.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Value 1 */}
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                        <Users className="w-12 h-12 text-green-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-chivo font-bold text-2xl mb-4">Radical Transparency</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We believe that trust is the foundation of innovation. We maintain open lines of communication with our clients, sharing both good news and challenges immediately. There are no black boxes at DevKit SIO; you have full visibility into our process, progress, and code.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                        <Award className="w-12 h-12 text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-chivo font-bold text-2xl mb-4">Excellence as a Habit</h3>
                        <p className="text-gray-600 leading-relaxed">
                            "Good enough" is never enough. We strive for excellence in the smallest details—from variable naming conventions to pixel-perfect UI implementations. We believe that quality is cumulative, and high standards yield high ROI.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                        <Zap className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-chivo font-bold text-2xl mb-4">Innovation with Purpose</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We love new technology, but we don't chase hype spirals. We adopt new tools and frameworks only when they solve real problems more effectively than existing solutions. Our innovation is pragmatic, measured, and impact-driven.
                        </p>
                    </div>

                    {/* Value 4 */}
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                        <Shield className="w-12 h-12 text-purple-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-chivo font-bold text-2xl mb-4">Security First</h3>
                        <p className="text-gray-600 leading-relaxed">
                            In a digital-first world, security is not an afterthought; it's a prerequisite. We integrate security best practices (DevSecOps) from Day 0, ensuring that every application we build is fortified against modern threats.
                        </p>
                    </div>

                    {/* Value 5 */}
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                        <Globe className="w-12 h-12 text-cyan-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-chivo font-bold text-2xl mb-4">Global Mindset</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We operate across multiple time zones and cultures. This diversity gives us a unique perspective on user experience and market needs, allowing us to build products that resonate globally.
                        </p>
                    </div>

                    {/* Value 6 */}
                    <div className="bg-white border border-gray-100 p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                        <Rocket className="w-12 h-12 text-red-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="font-chivo font-bold text-2xl mb-4">Agile Adaptability</h3>
                        <p className="text-gray-600 leading-relaxed">
                            The tech landscape changes daily. We cultivate a culture of continuous learning and adaptability, allowing us to pivot strategies and embrace new paradigms without losing momentum.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Methodology Section */}
            <div className="full-width bg-gray-900 py-[100px] lg:py-[150px] text-white">
                <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1000px]">
                    <h2 className="font-chivo font-bold text-[32px] md:text-[48px] mb-8 text-center">Our Methodology</h2>
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="text-green-500 font-bold text-6xl opacity-50">01</div>
                            <div>
                                <h3 className="font-bold text-2xl mb-4">Discovery & Strategy</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We start by listening. Before writing a single line of code, we conduct deep-dive workshops to understand your business goals, user needs, and competitive landscape. We map out the technical architecture and strategic roadmap to ensure alignment.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-800"></div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="text-green-500 font-bold text-6xl opacity-50">02</div>
                            <div>
                                <h3 className="font-bold text-2xl mb-4">Agile Development</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We work in two-week sprints, delivering shippable code at the end of every cycle. This allows for constant feedback loops, ensuring that the product evolves in the right direction and providing you with tangible progress updates.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-800"></div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="text-green-500 font-bold text-6xl opacity-50">03</div>
                            <div>
                                <h3 className="font-bold text-2xl mb-4">QA & Optimization</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Quality Assurance is continuous, not a final step. We employ automated testing, peer code reviews, and performance profiling to ensure that your application is bug-free, fast, and scalable from launch day.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-px bg-gray-800"></div>

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="text-green-500 font-bold text-6xl opacity-50">04</div>
                            <div>
                                <h3 className="font-bold text-2xl mb-4">Deployment & Growth</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Launch is just the beginning. We manage the deployment to cloud infrastructure (AWS/Vercel) and provide ongoing maintenance, monitoring, and feature enhancements to help your product grow with your user base.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
