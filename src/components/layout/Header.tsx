import Link from 'next/link';
import Image from "next/image";
import RightSide from "@/src/components/layout/RightSide";
import Logo from '@/public/logo.png'
import {BotMessageSquare, ChevronRight, ChevronDown, Cloud, Gauge, GitCompareArrows, Sprout, SquareStack, QrCode, BrainCircuit, Cable, Landmark} from "lucide-react";

export default function Header() {

    return (
        <header className="h-auto full-width relative py-[15px] first-letter:lg:py-[26px]">
            <div
                className="px-[12px] md:px-[36px] xl:px-0 mt-0 flex items-center justify-between mx-auto relative max-w-[1320px]">
                <Link className="flex" href="/">
                    <Image
                        className="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]"
                        src={Logo}
                        alt="DevKit SIO"/>
                </Link>
                <nav className="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">
                    <ul className="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
                        <li className="flex items-center group">
                            <Link
                                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                href="/">
                                Home
                            </Link>
                        </li>
                        <li className="flex items-center group relative">
                            <a className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                               href="#">
                                Services
                            </a>
                            <ChevronDown className="group-hover:filter-green"/>

                            <div className="menu-child absolute left-full right-full top-full z-50
                                              mx-auto w-[1320px] -translate-x-[45%]
                                              opacity-0 pointer-events-none
                                              translate-y-8
                                              transition-all duration-200
                                              group-hover:opacity-100
                                              group-hover:pointer-events-auto
                                              group-hover:translate-y-4">
                                <div className="bg-white rounded-[6px] menu-shadow p-8 grid grid-cols-4 gap-8 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0">

                                    <div>
                                        <p className="flex items-center mb-4 text-[15px] font-semibold text-heading-6">
                                            <GitCompareArrows
                                                className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                            <span className="whitespace-nowrap">Software Development</span>
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/web-development" className="mega-link">
                                                    Web Development
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/mobile-app-development" className="mega-link">
                                                    Mobile Apps
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/saas-development" className="mega-link">
                                                    SaaS & Platforms
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="flex items-center mb-4 text-[15px] font-semibold text-heading-6">
                                            <Sprout
                                                className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                            <span className="whitespace-nowrap">Marketing & Growth</span>
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/seo" className="mega-link">
                                                    SEO & Organic Growth
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/paid-ads" className="mega-link">
                                                    Google & Meta Ads
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/community-management" className="mega-link">
                                                    Community Management
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="flex items-center mb-4 text-[15px] font-semibold text-heading-6">
                                            <BotMessageSquare
                                                className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                            <span className="whitespace-nowrap">AI & Remote Teams</span>
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/intelligence-artificielle" className="mega-link">
                                                    AI Consulting & Strategy
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/ai-chatbots" className="mega-link">
                                                    Chatbots & Assistants IA
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/automatisation" className="mega-link">
                                                    Automatisation des Processus (RPA)
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/ia-marketing" className="mega-link">
                                                    IA for Marketing & SEO
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/data-ia" className="mega-link">
                                                    Predictive Analytics & Data
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="flex items-center mb-4 text-[15px] font-semibold text-heading-6">
                                            <Gauge
                                                className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                            <span className="whitespace-nowrap">Remote Teams & Staff Augmentation</span>
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/dedicated-developers" className="mega-link">
                                                    Dedicated Developers
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/staff-augmentation" className="mega-link">
                                                    Remote IT Staff Augmentation
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/on-demand-teams" className="mega-link">
                                                    On-Demand Tech Teams
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/offshore-teams" className="mega-link">
                                                    Offshore & Nearshore Teams
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="flex items-center mb-4 text-[15px] font-semibold text-heading-6">
                                            <Cloud
                                                className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                            <span className="whitespace-nowrap">Cloud, DevOps & Infrastructure</span>
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/cloud-hosting" className="mega-link">
                                                    Cloud Hosting & Infrastructure
                                                </a>
                                            </li>
                                            <li className="transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100">
                                                <a href="/services/devops" className="mega-link">
                                                    DevOps & Maintenance
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center group">
                            <a
                                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                href="#">
                                Solutions
                            </a>
                            <ChevronDown className="group-hover:filter-green"/>
                            <ul className="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[300px]">
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="sv1">
                                    <a className="flex items-center text-[14px]" href="/solutions/mvp-development">
                                        <SquareStack
                                            className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                        <span className="whitespace-nowrap">MVP for Startups</span>
                                    </a>
                                </li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="sv1">
                                    <a className="flex items-center text-[14px]" href="/solutions/digital-transformation">
                                        <QrCode
                                            className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                        <span className="whitespace-nowrap">Digital Transformation</span>
                                    </a>
                                </li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="sv1">
                                    <a className="flex items-center text-[14px]" href="/solutions/enterprise-ai">
                                        <BrainCircuit
                                            className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                        <span className="whitespace-nowrap">AI Solutions for Enterprises</span>
                                    </a>
                                </li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="sv1">
                                    <a className="flex items-center text-[14px]" href="/solutions/team-scaling">
                                        <Cable
                                            className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                        <span className="whitespace-nowrap">Team Scaling & Cost Optimization</span>
                                    </a>
                                </li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="sv1">
                                    <a className="flex items-center text-[14px]" href="https://www.linkin.ma">
                                        <Landmark
                                            className="opacity-40 w-[24px] h-[24px] mr-[8px] -translate-y-[1px]"/>
                                        <span className="whitespace-nowrap">AI For accountants - Link In</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="flex items-center group">
                            <Link
                                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                href="/about-us">
                                About
                            </Link>
                        </li>
                        <li className="flex items-center group">
                            <Link
                                className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                                href="/contact">
                                Contact
                            </Link>
                        </li>

                        {/*<li className="flex items-center group"><a
                            className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                            href="#">Company</a><i><img className="icon-caret group-hover:filter-green"
                                                        src="./assets/images/icons/icon-caret.svg" alt="caret"/></i>
                            <ul className="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="sv1"><a className="flex items-center text-[14px]"
                                                       href="services-1.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-gem.svg" alt=""/><span
                                    className="whitespace-nowrap">Services 01</span></a>
                                </li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="sv2"><a className="flex items-center text-[14px]"
                                                       href="services-2.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-gem.svg" alt=""/><span
                                    className="whitespace-nowrap">Services 02</span></a>
                                </li>
                                <li className="hr px-[22px]"><span
                                    className="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="p1"><a className="flex items-center text-[14px]"
                                                      href="pricing-1.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-database.svg" alt=""/><span
                                    className="whitespace-nowrap">Pricing 01</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="p2"><a className="flex items-center text-[14px]"
                                                      href="pricing-2.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-database.svg" alt=""/><span
                                    className="whitespace-nowrap">Pricing 02</span></a></li>
                                <li className="hr px-[22px]"><span
                                    className="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="faqs1"><a className="flex items-center text-[14px]"
                                                         href="faqs-1.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-headset.svg" alt=""/><span
                                    className="whitespace-nowrap">FAQS 01</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="faqs2"><a className="flex items-center text-[14px]"
                                                         href="faqs-2.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-headset.svg" alt=""/><span
                                    className="whitespace-nowrap">FAQS 02</span></a></li>
                                <li className="hr px-[22px]"><span
                                    className="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="career"><a className="flex items-center text-[14px]"
                                                          href="career.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-briefcase.svg" alt=""/><span
                                    className="whitespace-nowrap">Career</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="career-details"><a className="flex items-center text-[14px]"
                                                                  href="career-details.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-briefcase.svg" alt=""/><span
                                    className="whitespace-nowrap">Career Detials</span></a></li>
                            </ul>
                        </li>
                        <li className="flex items-center group"><a
                            className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                            href="#">Pages</a><i><img className="icon-caret group-hover:filter-green"
                                                      src="./assets/images/icons/icon-caret.svg" alt="caret"/></i>
                            <ul className="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="contact"><a className="flex items-center text-[14px]"
                                                           href="contact.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-plane-header.svg" alt=""/><span
                                    className="whitespace-nowrap">Contact</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="singup"><a className="flex items-center text-[14px]"
                                                          href="signup.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-user-add.svg" alt=""/><span
                                    className="whitespace-nowrap">Sign Up</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="login"><a className="flex items-center text-[14px]"
                                                         href="login.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-fingerprint.svg" alt=""/><span
                                    className="whitespace-nowrap">Log In</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="rp"><a className="flex items-center text-[14px]"
                                                      href="reset-password.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-settings.svg" alt=""/><span
                                    className="whitespace-nowrap">Reset Password</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="error404"><a className="flex items-center text-[14px]"
                                                            href="error-404.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-exclamation.svg" alt=""/><span
                                    className="whitespace-nowrap">Error 404</span></a></li>
                            </ul>
                        </li>
                        <li className="flex items-center group"><a
                            className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                            href="#">Blog</a><i><img className="icon-caret group-hover:filter-green"
                                                     src="./assets/images/icons/icon-caret.svg" alt="caret"/></i>
                            <ul className="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="b1"><a className="flex items-center text-[14px]" href="blog-1.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-edit.svg" alt=""/><span
                                    className="whitespace-nowrap">Blog 01</span></a>
                                </li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="b2"><a className="flex items-center text-[14px]" href="blog-2.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-edit.svg" alt=""/><span
                                    className="whitespace-nowrap">Blog 02</span></a>
                                </li>
                                <li className="hr px-[22px]"><span
                                    className="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="single"><a className="flex items-center text-[14px]"
                                                          href="single.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-document-signed.svg" alt=""/><span
                                    className="whitespace-nowrap">Blog Single</span></a></li>
                            </ul>
                        </li>
                        <li className="flex items-center group"><a
                            className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                            href="#">Shop</a><i><img className="icon-caret group-hover:filter-green"
                                                     src="./assets/images/icons/icon-caret.svg" alt="caret"/></i>
                            <ul className="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="s1"><a className="flex items-center text-[14px]" href="shop-1.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-edit.svg" alt=""/><span
                                    className="whitespace-nowrap">Shop 01</span></a>
                                </li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="s2"><a className="flex items-center text-[14px]" href="shop-2.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-edit.svg" alt=""/><span
                                    className="whitespace-nowrap">Shop 02</span></a>
                                </li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="product"><a className="flex items-center text-[14px]"
                                                           href="single-product.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-edit.svg" alt=""/><span
                                    className="whitespace-nowrap">Product Details</span></a>
                                </li>
                            </ul>
                        </li>*/}
                    </ul>
                </nav>
                <div className="hidden xl:block">
                    <button type="button">
                        <a className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white"
                           href="/contact">
                            <span
                                className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo">
                                Request a Quote
                            </span>
                            <ChevronRight size={24} className="ml-[7px] filter-black group-hover:filter-white"/>
                        </a>
                    </button>
                </div>
            </div>
            <RightSide/>
        </header>
    );
}
