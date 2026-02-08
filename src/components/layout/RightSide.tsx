'use client'

import {useState} from "react";
import {ChevronDown, Menu, X} from "lucide-react";
import Image from "next/image";
import {cn} from "@/src/lib/utils";
import Logo from '@/public/logo.png'
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function RightSide() {
    const pathname:string = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [accordion, setAccordion] = useState<string|undefined>(undefined);

    return (
        <>
            {!isMenuOpen && (<Menu className="burger-icon burger-icon-white menu__icon" onClick={() => setIsMenuOpen(!isMenuOpen)}/>)}
            {isMenuOpen && (<X className="burger-icon burger-icon-white menu__icon" onClick={() => setIsMenuOpen(!isMenuOpen)}/>)}
            <nav className={cn("fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100]", !isMenuOpen ? 'pointer-events-none opacity-0' : '')}>
                <div className="flex items-center border-b p-[15px] lg:p-[26px] gap-[10px] border-[#F2F4F7]">
                    <Image className="max-w-[50px]" src={Logo} alt="DevKit SIO"/>
                    <div>
                        <p className="font-bold">Hi! Steven</p>
                        <p className="text-sm font-chivo text-gray-500">You have 5 new messages</p>
                    </div>
                </div>
                <div className="p-[30px]">
                    <ul className="font-chivo font-medium text-[16px] leading-[16px]" data-accordion="collapse">
                        <li className="menu-mobile-item py-[13px]">
                            <Link href="/" className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li className="hr px-[22px]">
                            <span className="block bg-gray-100 w-full h-[1px] my-[5px]"></span>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <div className="flex items-center justify-between text-gray-400">
                                <p>Services</p>
                            </div>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" onClick={() => setAccordion(accordion !== '1' ? '1' : undefined)}>
                                <p>Software Development</p>
                                <ChevronDown className={cn("w-[18px] h-[18px]", {'-rotate-90': accordion !== '1'})}/>
                            </div>
                            <ul className={cn("pl-5 menu-child pt-[10px]", {'hidden': accordion !== '1'})}>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/web-development">
                                        Web Development
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/mobile-app-development">
                                        Mobile Apps
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/saas-development">
                                        SaaS & Platforms
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" onClick={() => setAccordion(accordion !== '2' ? '2' : undefined)}>
                                <p>Marketing & Growth</p>
                                <ChevronDown className={cn("w-[18px] h-[18px]", {'-rotate-90': accordion !== '2'})}/>
                            </div>
                            <ul className={cn("pl-5 menu-child pt-[10px]", {'hidden': accordion !== '2'})}>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/seo">
                                        SEO & Organic Growth
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/paid-ads">
                                        Google & Meta Ads
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/community-management">
                                        Community Management
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" onClick={() => setAccordion(accordion !== '3' ? '3' : undefined)}>
                                <p>AI & Remote Teams</p>
                                <ChevronDown className={cn("w-[18px] h-[18px]", {'-rotate-90': accordion !== '3'})}/>
                            </div>
                            <ul className={cn("pl-5 menu-child pt-[10px]", {'hidden': accordion !== '3'})}>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/intelligence-artificielle">
                                        AI Consulting & Strategy
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/ai-chatbots">
                                        Chatbots & Assistants IA
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/automatisation">
                                        Automatisation des Processus (RPA)
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/ia-marketing">
                                        IA for Marketing & SEO
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/data-ia">
                                        Predictive Analytics & Data
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" onClick={() => setAccordion(accordion !== '4' ? '4' : undefined)}>
                                <p>Remote Teams & Staff Augmentation</p>
                                <ChevronDown className={cn("w-[18px] h-[18px]", {'-rotate-90': accordion !== '4'})}/>
                            </div>
                            <ul className={cn("pl-5 menu-child pt-[10px]", {'hidden': accordion !== '4'})}>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/dedicated-developers">
                                        Dedicated Developers
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/staff-augmentation">
                                        Remote IT Staff Augmentation
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/on-demand-teams">
                                        On-Demand Tech Teams
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/offshore-teams">
                                        Offshore & Nearshore Teams
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" onClick={() => setAccordion(accordion !== '5' ? '5' : undefined)}>
                                <p>Cloud, DevOps & Infrastructure</p>
                                <ChevronDown className={cn("w-[18px] h-[18px]", {'-rotate-90': accordion !== '5'})}/>
                            </div>
                            <ul className={cn("pl-5 menu-child pt-[10px]", {'hidden': accordion !== '5'})}>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/cloud-hosting">
                                        Cloud Hosting & Infrastructure
                                    </Link>
                                </li>
                                <li className="text-md py-[10px]">
                                    <Link className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                       href="/services/devops">
                                        DevOps & Maintenance
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="hr px-[22px]">
                            <span className="block bg-gray-100 w-full h-[1px] my-[5px]"></span>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <div className="flex items-center justify-between text-gray-400">
                                <p>Solutions</p>
                            </div>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <Link className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                               href="/solutions/mvp-development">
                                <p>MVP for Startups</p>
                            </Link>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <Link className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                               href="/solutions/digital-transformation">
                                <p>Digital Transformation</p>
                            </Link>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <Link className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                               href="/solutions/enterprise-ai">
                                <p>AI Solutions for Enterprises</p>
                            </Link>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <Link className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                               href="/solutions/team-scaling">
                                <p>Team Scaling & Cost Optimization</p>
                            </Link>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <Link className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                               href="https://www.linkin.ma">
                                <p>AI For accountants - Link In</p>
                            </Link>
                        </li>
                        <li className="hr px-[22px]">
                            <span className="block bg-gray-100 w-full h-[1px] my-[5px]"></span>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <Link className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                               href="/about-us">
                                <p>About</p>
                            </Link>
                        </li>
                        <li className="menu-mobile-item py-[13px]">
                            <Link className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                               href="/contact">
                                <p>Contact</p>
                            </Link>
                        </li>
                        {/*<li className="group menu-mobile-item py-[13px]">
                            <div
                                className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                <p>About</p><img className="w-[18px] h-[18px]"
                                                 src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/icons/icon-angle-down-fill.svg"
                                                 alt="angle icon"/>
                            </div>
                            <ul className="pl-5 menu-child hidden pt-[10px]">
                                <li className="text-md py-[10px]" id="ab1"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="about-1.html">About 01</Link></li>
                                <li className="text-md py-[10px]" id="ab2"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="about-2.html">About 02</Link></li>
                                <li className="text-md py-[10px]" id="ab3"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="about-3.html">About 03</Link></li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div
                                className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                <p>Services</p><img className="w-[18px] h-[18px]"
                                                    src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/icons/icon-angle-down-fill.svg"
                                                    alt="angle icon"/>
                            </div>
                            <ul className="pl-5 menu-child hidden pt-[10px]">
                                <li className="text-md py-[10px]" id="sv1"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="services-1.html">Services 01</Link></li>
                                <li className="text-md py-[10px]" id="sv2"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="services-2.html">Services 02</Link></li>
                                <li className="text-md py-[10px]" id="p1"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="pricing-1.html">Pricing 01</Link></li>
                                <li className="text-md py-[10px]" id="p2"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="pricing-2.html">Pricing 02</Link></li>
                                <li className="text-md py-[10px]" id="faqs1"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="faqs-1.html">FAQS 01</Link></li>
                                <li className="text-md py-[10px]" id="faqs2"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="faqs-2.html">FAQS 02</Link></li>
                                <li className="text-md py-[10px]" id="career"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="career.html">Career</Link></li>
                                <li className="text-md py-[10px]" id="career-details"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="career-details.html">Career Detials</Link></li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div
                                className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                <p>Pages</p><img className="w-[18px] h-[18px]"
                                                 src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/icons/icon-angle-down-fill.svg"
                                                 alt="angle icon"/>
                            </div>
                            <ul className="pl-5 menu-child hidden pt-[10px]">
                                <li className="text-md py-[10px]" id="contact"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="contact.html">Contact</Link></li>
                                <li className="text-md py-[10px]" id="singup"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="signup.html">Sign Up</Link></li>
                                <li className="text-md py-[10px]" id="login"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="login.html">Log In</Link></li>
                                <li className="text-md py-[10px]" id="rp"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="reset-password.html">Reset Password</Link></li>
                                <li className="text-md py-[10px]" id="error404"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="error-404.html">Error 404</Link></li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div
                                className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                <p>Blog</p><img className="w-[18px] h-[18px]"
                                                src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/icons/icon-angle-down-fill.svg"
                                                alt="angle icon"/>
                            </div>
                            <ul className="pl-5 menu-child hidden pt-[10px]">
                                <li className="text-md py-[10px]" id="b1"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="blog-1.html">Blog 01</Link></li>
                                <li className="text-md py-[10px]" id="b2"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="blog-2.html">Blog 02</Link></li>
                                <li className="text-md py-[10px]" id="single"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="single.html">Blog Single</Link></li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div
                                className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                <p>Shop</p><img className="w-[18px] h-[18px]"
                                                src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/icons/icon-angle-down-fill.svg"
                                                alt="angle icon"/>
                            </div>
                            <ul className="pl-5 menu-child hidden pt-[10px]">
                                <li className="text-md py-[10px]" id="s1"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="shop-1.html">Shop 01</Link></li>
                                <li className="text-md py-[10px]" id="s2"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="shop-2.html">Shop 02</Link></li>
                                <li className="text-md py-[10px]" id="product"><Link
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="single-product.html">Product Details</Link></li>
                            </ul>
                        </li>*/}
                    </ul>
                    <div className="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
                        <p className="font-bold text-heading-6 mb-[10px]">Your Account</p>
                        <ul className="text-[15px]">
                            <li className="py-[13px]"><Link
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Profile</Link></li>
                            <li className="py-[13px]"><Link
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Work Preferences</Link></li>
                            <li className="py-[13px]"><Link
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">My Boosted Shots</Link></li>
                            <li className="py-[13px]"><Link
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">My Collections</Link></li>
                            <li className="py-[13px]"><Link
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Account Settings</Link></li>
                            <li className="py-[13px]"><Link
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Go Pro</Link></li>
                            <li className="py-[13px]"><Link
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Sign Out</Link></li>
                        </ul>
                    </div>
                    <div className="text-gray-400 font-chivo text-[13px]">
                        Copyright {new Date().getFullYear()} © DevKit SIO - All right preserved</div>
                </div>
            </nav>
        </>
    )
}
