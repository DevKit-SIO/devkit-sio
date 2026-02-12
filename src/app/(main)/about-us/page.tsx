'use client';

import { useState } from 'react';
import { ArrowRight, Home, Leaf, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useMutation, useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';

const FAQS = [
    {
        question: "What specific services does DevKit SIO offer in Marrakech?",
        answer: "As a premier Digital Innovation Agency in Marrakech, we specialize in: custom Web Development (Next.js, React), Mobile App Development (Flutter, React Native), AI & Machine Learning Solutions, Workflow Automation (n8n, Zapier), and comprehensive Digital Strategy. We serve businesses locally in Morocco and internationally.",
    },
    {
        question: "Do you build custom software tailored to my business needs?",
        answer: "Absolutely. We don't believe in one-size-fits-all. We analyze your specific business challenges and goals to architect and develop custom software solutions—whether it's an internal dashboard, a customer-facing portal, or a complex SaaS platform—ensuring scalability and security.",
    },
    {
        question: "Can you develop mobile applications for both iOS and Android?",
        answer: "Yes, we use modern cross-platform technologies like Flutter and React Native to build high-performance mobile applications that run seamlessly on both iOS and Android devices. This approach reduces development time and cost while maintaining a native-like user experience.",
    },
    {
        question: "How can AI integration benefit my business?",
        answer: "AI can transform your operations by automating repetitive tasks, providing predictive analytics, enhancing customer support with intelligent chatbots, and personalizing user experiences. We help you identify high-impact use cases for AI to drive efficiency and growth.",
    },
    {
        question: "What is your approach to Workflow Automation?",
        answer: "We leverage powerful tools like n8n and custom scripts to connect your disparate apps and services. This automates data flow between your CRM, marketing tools, and internal databases, significantly reducing manual data entry and human error.",
    },
    {
        question: "What technology stack do you primarily use?",
        answer: "We focus on a modern, robust tech stack including: Next.js and React for frontend; Node.js, Python (Django/FastAPI), and Convex for backend; PostgreSQL and MongoDB for databases; and Vercel or AWS for cloud infrastructure. This ensures your product is fast, secure, and scalable.",
    },
    {
        question: "What does your development process look like?",
        answer: "Our process is transparent and Agile: 1. Discovery (understanding your needs), 2. Design (UI/UX prototyping), 3. Development (iterative coding sprints), 4. Testing (QA and UAT), 5. Launch (deployment), and 6. Support (maintenance and updates). You are involved at every step.",
    },
    {
        question: "How long does it typically take to complete a project?",
        answer: "Timeline varies by complexity. A simple landing page might take 2-3 weeks, an MVP (Minimum Viable Product) usually takes 4-8 weeks, while complex enterprise platforms can take 3-6 months. We provide a detailed timeline during the proposal phase.",
    },
    {
        question: "How much does a custom software project cost?",
        answer: "Cost depends on features, complexity, and design requirements. We offer competitive pricing for high-quality engineering. After our initial consultation, we provide a detailed proposal with fixed-price or time-and-materials options suitable for your budget.",
    },
    {
        question: "Do you offer fixed-price or hourly engagement models?",
        answer: "We offer both. For well-defined projects, we prefer Fixed Price contracts so you know exactly what to budget. For ongoing development, maintenance, or projects with evolving scopes, we offer Time & Materials or Retainer models.",
    },
    {
        question: "Do you provide UI/UX design services?",
        answer: "Yes, our team includes talented UI/UX designers who create intuitive, beautiful, and user-centric interfaces. We start with wireframes and high-fidelity mockups to ensure the design matches your brand vision before writing a single line of code.",
    },
    {
        question: "Can you redesign or upgrade my existing website/app?",
        answer: "Certainly. We can audit your current system, recommend improvements, and execute a redesign or full re-platforming to modern technologies to improve performance, security, and user engagement.",
    },
    {
        question: "Can you help migrate my legacy system to the cloud?",
        answer: "Yes, we specialize in digital transformation. We can help you migrate on-premise legacy systems to secure cloud environments (AWS, Azure, Vercel), ensuring data integrity and minimal downtime.",
    },
    {
        question: "Do you offer post-launch support and maintenance?",
        answer: "Yes, software needs care. We offer various Support & Maintenance packages that include security updates, bug fixes, server monitoring, and minor feature enhancements to keep your application running smoothly.",
    },
    {
        question: "Will I produce the source code and intellectual property?",
        answer: "Yes. Upon full payment and project completion, you retain 100% ownership of the source code and intellectual property. We are your development partners, but it is your product.",
    },
    {
        question: "Do you handle hosting and domain setup?",
        answer: "We guide you through the process. We can set up your hosting environments (production, staging) and configure domains, SSL certificates, and CDNs. You strictly own your accounts (AWS, Vercel, etc.) for full transparency.",
    },
    {
        question: "Where is DevKit SIO located?",
        answer: "Our headquarters are in Marrakech, Morocco. We embrace the vibrant tech scene in Morocco while maintaining global standards.",
    },
    {
        question: "Do you work with international clients remotely?",
        answer: "Yes, vast majority of our work is remote. We use tools like Slack, Zoom, Jira, and GitHub to maintain seamless communication and collaboration with clients across Europe, North America, and the Middle East.",
    },
    {
        question: "How do you ensure the quality of the software?",
        answer: "We implement rigorous testing protocols, including unit tests, integration tests, and manual user acceptance testing (UAT). We also use CI/CD pipelines to ensure that every code deployment is stable and verified.",
    },
    {
        question: "How do I get started with DevKit SIO?",
        answer: "It's simple. Fill out the contact form below, email us at contact@devkit-sio.com, or call us. We'll schedule a free consultation to discuss your idea and how we can bring it to life.",
    }
];

export default function AboutUs() {
    const submitContact = useMutation(api.contact.submit);
    const posts = useQuery(api.blog.getLatestPosts, { limit: 6 });
    const [formData, setFormData] = useState({
        fullname: '',
        company: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'loading') return;

        setStatus('loading');
        try {
            await submitContact(formData);
            setStatus('success');
            setFormData({ fullname: '', company: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Contact submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    console.log({posts})

    return (
        <>
            <div className="full-width bg-teal-50">
                <div
                    className="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-end lg:justify-between">
                    <div className="lg:w-[60%] lg:mr-[150px]"><span
                        className="font-chivo inline-block bg-[#bee1e6] text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[10px]">Digital Innovation Agency</span>
                        <h1 className="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[30px]">
                            Empowering Business with Technology
                        </h1>
                        <p className="text-quote md:text-lead-lg text-gray-500 relative z-10 pr-[40px] lg:pr-[60px] mb-[44px]">
                            We craft world-class digital experiences, from web and mobile apps to AI-driven automation, right here in Marrakech.
                        </p>
                        <div className="flex items-center justify-start mb-[50px]">
                            <button type="button">
                                <a
                                    className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]"
                                    href="/contact">
                                    <span
                                        className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                        Start a Project
                                    </span>
                                    <ArrowRight className="ml-[7px] w-[12px] text-white group-hover:text-black" />
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="flex justify-between w-full flex-wrap lg:flex-col gap-[40px] lg:gap-0">
                            <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                                <div className="bg-white rounded-full w-[80px] h-[80px]"><img
                                    className="h-full w-full object-cover p-[18px]"
                                    src="/assets/images/icons/icon-waves.svg" alt="icon" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">+50
                                    </h2>
                                    <p className="text-text text-gray-500">Successful Projects
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                                <div className="bg-white rounded-full w-[80px] h-[80px]"><img
                                    className="h-full w-full object-cover p-[18px]"
                                    src="/assets/images/icons/icon-pine.svg" alt="icon" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">+5
                                    </h2>
                                    <p className="text-text text-gray-500">Years Experience
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                                <div className="bg-white rounded-full w-[80px] h-[80px]"><img
                                    className="h-full w-full object-cover p-[18px]"
                                    src="/assets/images/icons/icon-anchor.svg" alt="icon" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">100%
                                    </h2>
                                    <p className="text-text text-gray-500">Client Satisfaction
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute hidden bottom-[-60px] left-[-117px] translate-x-[-260px] lg:block"><img
                            className="h-full w-full object-cover animate-hero-thumb-sm-animation"
                            src="/assets/images/hero-about2.png" alt="Agon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center mx-auto max-w-[905px]"><span
                className="font-chivo inline-block bg-[#fff3ea] text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-4">Our Process</span>
                <div className="text-center mb-[88px]">
                    <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                        From Concept to Launch
                    </h2>
                    <p className="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
                        We follow a proven methodology to ensure your project is delivered on time, on budget, and to the highest standards.
                    </p>
                </div>
                <div
                    className="flex flex-col gap-5 items-center justify-center relative md:flex-wrap md:flex-row lg:gap-[30px] xl:gap-[110px]">
                    <div
                        className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-[#fff3ea] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
                        <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                            <img className="max-w-[36px]" src="/assets/images/icons/icon-dharma-wheel.svg" alt="icon" />
                        </div>
                        <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">1. Discovery
                        </h4>
                        <p className="text-text text-gray-500">We analyze your business needs
                        </p><img
                            className="hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]"
                            src="/assets/images/icons/icon-arrow-1.svg" alt="direction arrow" />
                    </div>
                    <div
                        className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-[#fde2e4] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
                        <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                            <img className="max-w-[36px]" src="/assets/images/icons/icon-wave.svg" alt="icon" /></div>
                        <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">2. Strategy
                        </h4>
                        <p className="text-text text-gray-500">We design a custom roadmap
                        </p><img
                            className="hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]"
                            src="/assets/images/icons/icon-arrow-2.svg" alt="direction arrow" />
                    </div>
                    <div
                        className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-[#dbece5] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
                        <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                            <img className="max-w-[36px]" src="/assets/images/icons/icon-headphones.svg" alt="icon" />
                        </div>
                        <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">3. Development
                        </h4>
                        <p className="text-text text-gray-500">Agile build & testing
                        </p><img
                            className="hidden absolute right-0 top-full lg:block translate-x-[-60px] z-[-1] xl:translate-y-[30px]"
                            src="/assets/images/icons/icon-arrow-3.svg" alt="direction arrow" />
                    </div>
                    <div
                        className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-[#d1ecfd] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px] lg:order-1">
                        <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                            <img className="max-w-[36px]" src="/assets/images/icons/icon-trees.svg" alt="icon" /></div>
                        <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">4. Launch
                        </h4>
                        <p className="text-text text-gray-500">Deploy and optimize
                        </p><img
                            className="hidden absolute left-0 lg:block top-1/2 translate-x-[-30px] z-[-1] xl:-translate-x-full xl:left-[-15px]"
                            src="/assets/images/icons/icon-arrow-4.svg" alt="direction arrow" />
                    </div>
                    <div
                        className="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-[#dbece5] md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]">
                        <div className="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                            <img className="max-w-[36px]" src="/assets/images/icons/icon-flower.svg" alt="icon" /></div>
                        <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">5. Support
                        </h4>
                        <p className="text-text text-gray-500">Continuous maintenance
                        </p>
                    </div>
                </div>
            </div>
            <div className="full-width bg-green-900">
                <div
                    className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex items-center mx-auto lg:mt-[150px] py-[96px] gap-[50px] max-w-[1320px]">
                    <div className="hidden grid-cols-2 grid-rows-2 flex-1 gap-5 lg:grid">
                        <div>
                            <img className="h-full w-full object-cover rounded-2xl"
                                src="/assets/images/devkit-sio-bureau.jpg" alt="DecKit SIO" />
                        </div>
                        <div className="col-start-1 row-start-2">
                            <img className="h-full w-full object-cover rounded-2xl"
                                src="/assets/images/devkit-sio-community-management.jpg"
                                alt="DecKit SIO" />
                        </div>
                        <div className="col-start-2 row-span-2">
                            <img className="h-full w-full object-cover rounded-2xl"
                                src="/assets/images/project-management-2.jpeg" alt="DecKit SIO" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold text-white mb-[26px]">
                            Ready to transform your business?
                        </h1>
                        <p className="text-text mb-9 text-[#D1DAE4]">
                            We merge strategic thinking with cutting-edge technology to give you a competitive advantage.
                        </p>
                        <button type="button">
                            <a
                                className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 text-text w-fit"
                                href="/contact">
                                <span
                                    className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                    Get Started
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]">
                <div
                    className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-[45px] md:mb-[87px]">
                    <div>
                        <h2 className="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                            Our Insights
                        </h2>
                        <p className="text-quote md:text-lead-lg text-gray-600">
                            Learn more about technologies and trends.
                        </p>
                    </div>
                    <button type="button">
                        <a
                            className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit"
                            href="/blog">
                            <span
                                className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                View Blog
                            </span>
                            <ArrowRight className="ml-[7px] w-[12px] filter-white group-hover:filter-black" />
                        </a>
                    </button>
                </div>
                <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
                    {!posts ? (
                        // Loading Skeletons
                        Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="block group animate-pulse">
                                <div className="flex items-center mb-[11px]">
                                    <div className="bg-gray-200 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                                </div>
                                <div className="h-8 bg-gray-200 rounded w-full mb-[26px]"></div>
                                <div className="relative mb-16">
                                    <div className="aspect-[430/275] bg-gray-200 rounded-2xl"></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        posts.map((post) => (
                            <a key={post._id} className="block group" href={`/blog/${post.slug}`}>
                                <div className="flex items-center mb-[11px]">
                                    <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                                    <span className="uppercase text-gray-500">{post.category}</span>
                                </div>
                                <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                                    {post.title}
                                </p>
                                <div className="relative mb-16">
                                    <div className="relative">
                                        <div className="pr-[26px] aspect-[430/275]">
                                            <img
                                                className="h-full w-full object-cover rounded-2xl z-10 relative"
                                                src={post.image || "/assets/images/thumbnail-1.png"}
                                                alt={post.title}
                                            />
                                        </div>
                                        <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                                            <div
                                                className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"
                                                style={{ backgroundColor: post.bgColor || '#F1F2F3' }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))
                    )}
                </div>
            </div>
            <div className="gap-6 flex flex-col mx-auto px-5 xl:gap-[50px] max-w-[950px] mt-[70px] lg:mt-[98px]">
                <div className="flex-1 mb-[40px]">
                    <div className="text-center mb-[22px]">
                        <h2 className="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                            Frequently asked questions
                        </h2>
                    </div>
                    <p className="text-text text-gray-600 text-center mx-auto mb-[40px] md:w-[55ch]">
                        Got questions? We've got answers. If you can't find what you're looking for, contact us directly.
                    </p>
                    <div className="flex flex-col md:flex-row md:gap-[35px]">
                        <div className="mb-[30px] lg:mb-0">
                            <div className="flex items-center mb-[17px]">
                                <Leaf className="mr-[9px]" />
                                <h4 className="text-heading-6 font-chivo font-bold">Client First</h4>
                            </div>
                            <p className="text-excerpt text-gray-600">Your success is our priority.</p>
                        </div>
                        <div className="mb-[30px] lg:mb-0">
                            <div className="flex items-center mb-[17px]">
                                <Leaf className="mr-[9px]" />
                                <h4 className="text-heading-6 font-chivo font-bold">Modern Tech</h4>
                            </div>
                            <p className="text-excerpt text-gray-600">Using latest frameworks.</p>
                        </div>
                        <div className="mb-[30px] lg:mb-0">
                            <div className="flex items-center mb-[17px]">
                                <Leaf className="mr-[9px]" />
                                <h4 className="text-heading-6 font-chivo font-bold">Fast Delivery</h4>
                            </div>
                            <p className="text-excerpt text-gray-600">On time, every time.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-[1.5]">
                    <div className="flex-[1.5]">
                        {FAQS.map((faq, index) => (
                            <div key={index} className="relative accordion-item mb-5">
                                <details className="group">
                                    <summary className="flex justify-between py-5 items-center gap-5 px-[30px]">
                                        <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5">
                                            {faq.question}
                                        </h4>
                                    </summary>
                                    <div className="text-text content font-chivo mt-[30px] ml-[30px]">
                                        {faq.answer}
                                    </div>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] full-width mt-[70px] lg:mt-[150px]">
                <div className="mx-auto relative max-w-[1320px]">
                    <Send className="absolute right-0 max-w-[129px] top-[-50px] text-gray-300" />
                    <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">Contact us</p>
                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
                        Have a project in mind?
                    </h2>
                    <p className="text-text text-gray-600 mb-[30px] md:mb-[60px]">
                        The right move at the right time saves your investment. Let's discuss your vision.
                    </p>
                    <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
                        <div>
                            <div className="flex gap-[13px] mb-[15px] md:mb-[25px]">
                                <Home />
                                <p className="text-heading-6 font-bold font-chivo">DevKit SIO</p>
                            </div>
                            <p className="text-text text-gray-600">
                                Résidence Al amira 3, 4ème étage, Bureau 42
                            </p>
                            <p className="text-text text-gray-600 mb-[10px] md:mb-[16px]">
                                Av. Yacoub El Mansour, 40000<br />Marrakech - Maroc
                            </p>
                            <p className="text-text text-gray-600 underline">
                                (+212) 6 61 333 946
                            </p>
                            <p className="text-text text-gray-600 underline">
                                <a href="mailto:contact@devkit-sio.com">contact@devkit-sio.com</a>
                            </p>
                        </div>
                        {status === 'success' ? (
                            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white rounded-2xl">
                                <CheckCircle2 className="w-16 h-16 text-teal-600 mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                                <p className="text-gray-600 mb-6 text-center">We'll be in touch shortly.</p>
                                <button onClick={() => setStatus('idle')} className="text-teal-600 underline font-semibold">
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form className="flex-1" onSubmit={handleSubmit}>
                                <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                    <input
                                        className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] rounded-lg border border-transparent focus:border-gray-500  bg-white"
                                        type="text" placeholder="Enter your name"
                                        name="fullname" value={formData.fullname} onChange={handleChange} required />
                                    <input
                                        className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] rounded-lg border border-transparent focus:border-gray-500 bg-white"
                                        type="text" placeholder="Company (optional)"
                                        name="company" value={formData.company} onChange={handleChange} />
                                </div>
                                <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                    <input
                                        className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] rounded-lg border border-transparent focus:border-gray-500 bg-white"
                                        type="email" placeholder="Your email"
                                        name="email" value={formData.email} onChange={handleChange} required />
                                    <input
                                        className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] rounded-lg border border-transparent focus:border-gray-500 bg-white"
                                        type="tel" placeholder="Phone number"
                                        name="phone" value={formData.phone} onChange={handleChange} />
                                </div>
                                <textarea
                                    className="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px] rounded-lg border border-transparent focus:border-gray-500 bg-white"
                                    cols={100} rows={10} placeholder="Tell us about your project"
                                    name="message" value={formData.message} onChange={handleChange} required></textarea>
                                <div className="flex flex-col gap-5">
                                    <button
                                        className="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit hover:bg-gray-800 disabled:opacity-70 disabled:cursor-not-allowed"
                                        type="submit" disabled={status === 'loading'}>
                                        {status === 'loading' ? (
                                            <>Sending... <Loader2 className="ml-[7px] w-[12px] animate-spin" /></>
                                        ) : (
                                            <>Send Message <Send className="ml-[7px] w-[12px] filter-white" /></>
                                        )}
                                    </button>
                                    {status === 'error' && <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>}
                                    <p className="text-md text-gray-500">By clicking send, you agree our terms and policy.</p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
