
import type { Metadata } from 'next';
import { ChevronDown, MessageCircle, Server, Rocket, CreditCard } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Frequently Asked Questions | DevKit SIO",
    description: "Comprehensive answers to common questions about DevKit SIO's services, development process, technologies, and pricing models.",
};

export default function FAQ() {
    return (
        <>
            {/* Hero */}
            <div className="full-width bg-gray-50 py-[100px] lg:py-[150px]">
                <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1320px] text-center">
                    <span className="font-chivo inline-block bg-green-100 text-green-900 py-[6px] px-[16px] rounded-[50px] text-[14px] font-bold mb-[24px] uppercase tracking-wider">
                        Help Center
                    </span>
                    <h1 className="font-chivo font-bold text-[40px] md:text-[64px] mb-6 text-gray-900">Frequently Asked Questions</h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-[800px] mx-auto">
                        Whether you're a startup founder or an enterprise CTO, we know you have questions.
                        Here are detailed answers to the most common queries we receive.
                    </p>
                </div>
            </div>

            <div className="px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1000px] py-[100px]">

                {/* Section 1: General & Process */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-blue-100 rounded-xl">
                            <Rocket className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="font-chivo font-bold text-3xl text-gray-900">General & Process</h2>
                    </div>

                    <div className="space-y-6">
                        <details className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-green-500 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-chivo font-bold text-xl marker:content-none hover:text-green-600 transition-colors">
                                <span>How do we start a project with DevKit SIO?</span>
                                <span className="relative size-5 shrink-0 transition duration-300 group-open:-rotate-180">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </summary>
                            <div className="mt-6 leading-relaxed text-gray-600 prose prose-lg">
                                <p>Our onboarding process is designed to be streamlined yet thorough:</p>
                                <ol>
                                    <li><strong>Initial Consultation:</strong> We schedule a 30-minute discovery call to understand your needs and determine if we're a good fit.</li>
                                    <li><strong>Workshop & Proposal:</strong> For complex projects, we conduct a technical workshop to outline the architecture and scope. We then provide a detailed proposal with timeline and cost estimates.</li>
                                    <li><strong>Kickoff:</strong> Once the agreement is signed, we assemble your dedicated team, set up communication channels (Slack/Teams), and begin the first sprint within 5-7 days.</li>
                                </ol>
                            </div>
                        </details>

                        <details className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-green-500 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-chivo font-bold text-xl marker:content-none hover:text-green-600 transition-colors">
                                <span>What is your development methodology?</span>
                                <span className="relative size-5 shrink-0 transition duration-300 group-open:-rotate-180">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </summary>
                            <div className="mt-6 leading-relaxed text-gray-600 prose prose-lg">
                                <p>We are strictly Agile. We work in 2-week sprints, which means you get:</p>
                                <ul>
                                    <li><strong>Transparency:</strong> You see progress every two weeks via a demo.</li>
                                    <li><strong>Flexibility:</strong> Requirements can evolve based on user feedback and market changes.</li>
                                    <li><strong>Control:</strong> You prioritize the backlog, ensuring we're always working on the most high-value features.</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-green-500 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-chivo font-bold text-xl marker:content-none hover:text-green-600 transition-colors">
                                <span>Do you provide a dedicated team?</span>
                                <span className="relative size-5 shrink-0 transition duration-300 group-open:-rotate-180">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </summary>
                            <div className="mt-6 leading-relaxed text-gray-600 prose prose-lg">
                                <p>Yes. Unlike freelance marketplaces or low-cost agencies where developers juggle 5 projects at once, DevKit SIO assigns dedicated engineers to your project. This ensures distinct focus, deep knowledge retention, and higher coding standards. Your team becomes an extension of your company.</p>
                            </div>
                        </details>
                    </div>
                </div>

                {/* Section 2: Technical */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-purple-100 rounded-xl">
                            <Server className="w-6 h-6 text-purple-600" />
                        </div>
                        <h2 className="font-chivo font-bold text-3xl text-gray-900">Technical & Security</h2>
                    </div>

                    <div className="space-y-6">
                        <details className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-green-500 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-chivo font-bold text-xl marker:content-none hover:text-green-600 transition-colors">
                                <span>Which technologies do you use?</span>
                                <span className="relative size-5 shrink-0 transition duration-300 group-open:-rotate-180">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </summary>
                            <div className="mt-6 leading-relaxed text-gray-600 prose prose-lg">
                                <p>We specialize in modern, scalable stacks:</p>
                                <ul>
                                    <li><strong>Frontend:</strong> React.js, Next.js, Vue.js, TypeScript, Tailwind CSS.</li>
                                    <li><strong>Backend:</strong> Node.js, Python (Django/FastAPI), Go, Java/Spring Boot.</li>
                                    <li><strong>Mobile:</strong> React Native, Flutter, Swift, Kotlin.</li>
                                    <li><strong>Cloud/DevOps:</strong> AWS, Google Cloud, Azure, Docker, Kubernetes, Terraform.</li>
                                    <li><strong>AI/Data:</strong> PyTorch, TensorFlow, OpenAI API, LangChain.</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-green-500 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-chivo font-bold text-xl marker:content-none hover:text-green-600 transition-colors">
                                <span>How do you handle code quality and testing?</span>
                                <span className="relative size-5 shrink-0 transition duration-300 group-open:-rotate-180">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </summary>
                            <div className="mt-6 leading-relaxed text-gray-600 prose prose-lg">
                                <p>Quality is non-negotiable. We implement:</p>
                                <ul>
                                    <li><strong>CI/CD Pipelines:</strong> Automated testing on every commit.</li>
                                    <li><strong>Code Reviews:</strong> Every pull request must be reviewed by a senior engineer.</li>
                                    <li><strong>Automated Testing:</strong> Unit tests (Jest), Integration tests, and E2E tests (Cypress/Playwright).</li>
                                    <li><strong>Static Analysis:</strong> Linting and formatting rules (ESLint, Prettier) to enforce style consistency.</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-green-500 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-chivo font-bold text-xl marker:content-none hover:text-green-600 transition-colors">
                                <span>Who owns the code?</span>
                                <span className="relative size-5 shrink-0 transition duration-300 group-open:-rotate-180">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </summary>
                            <div className="mt-6 leading-relaxed text-gray-600 prose prose-lg">
                                <p><strong>You do.</strong> Upon final payment, 100% of the intellectual property (IP), source code, and assets are transferred to you. We do not retain any rights to your proprietary software.</p>
                            </div>
                        </details>
                    </div>
                </div>

                {/* Section 3: Pricing & Contracts */}
                <div className="mb-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-yellow-100 rounded-xl">
                            <CreditCard className="w-6 h-6 text-yellow-600" />
                        </div>
                        <h2 className="font-chivo font-bold text-3xl text-gray-900">Pricing & Contracts</h2>
                    </div>

                    <div className="space-y-6">
                        <details className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-green-500 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-chivo font-bold text-xl marker:content-none hover:text-green-600 transition-colors">
                                <span>What brings the cost down or up?</span>
                                <span className="relative size-5 shrink-0 transition duration-300 group-open:-rotate-180">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </summary>
                            <div className="mt-6 leading-relaxed text-gray-600 prose prose-lg">
                                <p>Several factors influence the budget:</p>
                                <ul>
                                    <li><strong>Complexity of Features:</strong> Simple CRUD apps are cheaper than AI-driven platforms.</li>
                                    <li><strong>Platform Support:</strong> Web-only is cheaper than Web + iOS + Android.</li>
                                    <li><strong>Design Customization:</strong> Using a UI library is cheaper than a fully custom, animated design system.</li>
                                    <li><strong>Timeline:</strong> Rush projects may incur a premium for overtime / additional resource allocation.</li>
                                </ul>
                            </div>
                        </details>

                        <details className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm [&_summary::-webkit-details-marker]:hidden open:border-green-500 transition-colors">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 font-chivo font-bold text-xl marker:content-none hover:text-green-600 transition-colors">
                                <span>Do you offer Fixed Price or Time & Material?</span>
                                <span className="relative size-5 shrink-0 transition duration-300 group-open:-rotate-180">
                                    <ChevronDown className="w-6 h-6" />
                                </span>
                            </summary>
                            <div className="mt-6 leading-relaxed text-gray-600 prose prose-lg">
                                <p>We offer both models depending on the project nature:</p>
                                <ul>
                                    <li><strong>Fixed Price:</strong> Best for small, well-defined projects (e.g., MVPs, Landing Pages) where scope is clear and unlikely to change.</li>
                                    <li><strong>Time & Material (T&M):</strong> Best for long-term development, complex products, or when requirements are expected to evolve. You pay for the team's time, offering maximum flexibility.</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>

                {/* Still have questions? */}
                <div className="bg-gray-900 rounded-3xl p-12 text-center text-white">
                    <MessageCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h2 className="font-chivo font-bold text-[32px] mb-4">Still have questions?</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-[600px] mx-auto">
                        Can't find the answer you're looking for? Our team is here to help. Reach out to us directly and we'll get back to you within 24 hours.
                    </p>
                    <Link href="/contact" className="inline-block bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-colors">
                        Contact Support
                    </Link>
                </div>

            </div>
        </>
    );
}
