import Link from 'next/link';
import Image from "next/image";
import RightSide from "@/src/components/layout/RightSide";
import Logo from '@/public/logo.png'
import {ChevronRight} from "lucide-react";

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
                            <Link className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                               href="/">
                                Home
                            </Link>
                        </li>
                        {/*<li className="flex items-center group">
                            <a className="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                               href="#">About</a><i><img className="icon-caret group-hover:filter-green"
                                                         src="./assets/images/icons/icon-caret.svg" alt="caret"/></i>
                            <ul className="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="ab1"><a className="flex items-center text-[14px]"
                                                       href="about-1.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-star-header.svg" alt=""/><span
                                    className="whitespace-nowrap">About 01</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="ab2"><a className="flex items-center text-[14px]"
                                                       href="about-2.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-star-header.svg" alt=""/><span
                                    className="whitespace-nowrap">About 02</span></a></li>
                                <li className="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100"
                                    data-menu="ab3"><a className="flex items-center text-[14px]"
                                                       href="about-3.html"><img
                                    className="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"
                                    src="./assets/images/icons/icon-star-header.svg" alt=""/><span
                                    className="whitespace-nowrap">About 03</span></a></li>
                            </ul>
                        </li>
                        <li className="flex items-center group"><a
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
                        <a className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white" href="#">
                            <span className="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo">
                                Learn more
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
