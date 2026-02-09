
import type { Metadata } from 'next';
import Link from 'next/link';
import { Code2, PenTool, Database, Terminal, Cpu, Users, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
    title: "Our Team | DevKit SIO",
    description: "Meet the experts at DevKit SIO. A collective of senior engineers, designers, and AI specialists dedicated to your success.",
};

export default function Team() {
    return (
        <>
            {/* Hero */}
            <div className="full-width bg-gray-50 py-[100px] lg:py-[150px]">
                <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] text-center">
                    <span className="font-chivo inline-block bg-green-100 text-green-900 py-[6px] px-[16px] rounded-[50px] text-[14px] font-bold mb-[24px] uppercase tracking-wider">
                        The Power Behind the Code
                    </span>
                    <h1 className="font-chivo font-bold text-[40px] md:text-[64px] mb-6 text-gray-900">
                        A Collective of <span className="text-green-600">Experts</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-2xl max-w-[800px] mx-auto leading-relaxed">
                        DevKit SIO isn't just a development agency; we are a high-performance engineering team.
                        We don't hire junior developers to learn on your project. We deploy seasoned experts who have built systems at scale.
                    </p>
                </div>
            </div>

            {/* How We Assemble */}
            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1200px] py-[100px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-center">
                    <div>
                        <h2 className="font-chivo font-bold text-[32px] md:text-[48px] mb-8">Not Just Employees, But Craftsmen</h2>
                        <div className="prose prose-lg text-gray-600">
                            <p>
                                In the software industry, the difference between an average developer and a 10x engineer isn't just speed; it's the ability to foresee problems before they happen, to architect for scalability, and to write code that human beings can actually read and maintain.
                            </p>
                            <p>
                                At DevKit SIO, we have a rigorous selection process. We look for individuals who are not only technically brilliant but also possess the soft skills necessary for collaboration and leadership. Our team is composed of:
                            </p>
                            <ul className="space-y-4 font-medium mt-6">
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    Former CTOs and Tech Leads
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    Open Source Contributors
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    University Researchers in AI & Math
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    Award-Winning UX/UI Designers
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500 rounded-[40px] rotate-6 opacity-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                            alt="Team Collaboration"
                            className="relative z-10 rounded-[40px] shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Team Roles / Departments */}
            <div className="full-width bg-gray-900 py-[100px] lg:py-[150px] text-white">
                <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px]">
                    <div className="text-center mb-[80px]">
                        <h2 className="font-chivo font-bold text-[32px] md:text-[48px] mb-6">Our Core Competencies</h2>
                        <p className="text-gray-400 text-xl max-w-[700px] mx-auto">
                            We are organized into specialized units, each focused on mastering a specific domain of technology.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Unit 1 */}
                        <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl hover:bg-gray-750 transition-colors">
                            <Code2 className="w-10 h-10 text-green-400 mb-6" />
                            <h3 className="font-bold text-2xl mb-4">Frontend Engineering</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Architects of the user experience. Our frontend specialists live and breathe React, Next.js, and modern CSS. They are obsessed with performance, accessibility, and creating pixel-perfect interfaces that feel alive.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">React</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Next.js</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">TypeScript</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Tailwind</span>
                            </div>
                        </div>

                        {/* Unit 2 */}
                        <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl hover:bg-gray-750 transition-colors">
                            <Database className="w-10 h-10 text-blue-400 mb-6" />
                            <h3 className="font-bold text-2xl mb-4">Backend & Cloud</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                The backbone of your application. Our backend team designs distributed systems, secure APIs, and database architectures that can handle millions of requests without breaking a sweat.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Node.js</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Python</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">AWS</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">PostgreSQL</span>
                            </div>
                        </div>

                        {/* Unit 3 */}
                        <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl hover:bg-gray-750 transition-colors">
                            <Cpu className="w-10 h-10 text-purple-400 mb-6" />
                            <h3 className="font-bold text-2xl mb-4">AI & Data Science</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                The brain trust. From training custom LLMs to implementing predictive analytics models, our data scientists turn raw data into actionable intelligence and automated decision-making systems.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">PyTorch</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">TensorFlow</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">OpenAI</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">RAG</span>
                            </div>
                        </div>

                        {/* Unit 4 */}
                        <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl hover:bg-gray-750 transition-colors">
                            <PenTool className="w-10 h-10 text-pink-400 mb-6" />
                            <h3 className="font-bold text-2xl mb-4">Product Design</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Where form meets function. Our designers don't just make things look pretty; they conduct user research, create wireframes, and design intuitive flows that convert visitors into loyal users.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Figma</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">UI/UX</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Prototyping</span>
                            </div>
                        </div>

                        {/* Unit 5 */}
                        <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl hover:bg-gray-750 transition-colors">
                            <Terminal className="w-10 h-10 text-orange-400 mb-6" />
                            <h3 className="font-bold text-2xl mb-4">DevOps & SRE</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                The guardians of uptime. They automate deployments, manage infrastructure as code, and ensure that your system stays online, secure, and resilient against failures.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Docker</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Kubernetes</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">CI/CD</span>
                            </div>
                        </div>

                        {/* Unit 6 */}
                        <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl hover:bg-gray-750 transition-colors">
                            <Briefcase className="w-10 h-10 text-yellow-400 mb-6" />
                            <h3 className="font-bold text-2xl mb-4">Project Management</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                The glue that holds it all together. Our PMs are certified Agilists who ensure clear communication, manage timelines, and remove blockers so the engineering team can focus on shipping.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Agile</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Scrum</span>
                                <span className="bg-gray-900 px-3 py-1 rounded-full text-xs font-bold text-gray-300">Jira</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1000px] py-[100px] text-center">
                <h2 className="font-chivo font-bold text-[32px] md:text-[48px] mb-6 text-gray-900">Ready to work with the best?</h2>
                <p className="text-gray-600 text-xl mb-10">
                    We're selective about the projects we take on because we invest our full expertise into every line of code.
                    If you're looking for a partner who cares as much about your product as you do, let's talk.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/contact" className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors">
                        Schedule a Consultation
                    </Link>
                    <Link href="/careers" className="inline-block bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors">
                        Join the Team
                    </Link>
                </div>
            </div>
        </>
    );
}
