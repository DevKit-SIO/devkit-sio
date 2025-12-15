'use client'

import {Menu, X} from "lucide-react";
import {useState} from "react";
import {cn} from "@/src/lib/utils";

export default function RightSide() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {!isMenuOpen && (<Menu className="burger-icon burger-icon-white menu__icon" onClick={() => setIsMenuOpen(!isMenuOpen)}/>)}
            {isMenuOpen && (<X className="burger-icon burger-icon-white menu__icon" onClick={() => setIsMenuOpen(!isMenuOpen)}/>)}
            <nav className={cn("fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100]", !isMenuOpen ? 'pointer-events-none opacity-0' : '')}>
                <div className="flex items-center border-b p-[15px] lg:p-[26px] gap-[10px] border-[#F2F4F7]">
                    <img className="max-w-[50px]" src="./assets/images/avatar-9.png" alt="avatar"/>
                    <div>
                        <p className="font-bold">Hi! Steven</p>
                        <p className="text-sm font-chivo text-gray-500">You have 5 new messages</p>
                    </div>
                </div>
                <div className="p-[30px]">
                    <ul className="font-chivo font-medium text-[16px] leading-[16px]">
                        <li className="group menu-mobile-item py-[13px]">
                            <div
                                className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                <p>Home</p><img className="w-[18px] h-[18px]"
                                                src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/icons/icon-angle-down-fill.svg"
                                                alt="angle icon"/>
                            </div>
                            <ul className="pl-5 menu-child hidden pt-[10px]">
                                <li className="text-md py-[10px]" id="hp1"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="#">Homepage 01</a></li>
                                <li className="text-md py-[10px]" id="hp2"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="home-2.html">Homepage 02</a></li>
                                <li className="text-md py-[10px]" id="hp3"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="home-3.html">Homepage 03</a></li>
                                <li className="text-md py-[10px]" id="hp4"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="home-4.html">Homepage 04</a></li>
                                <li className="text-md py-[10px]" id="hp5"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="home-5.html">Homepage 05</a></li>
                                <li className="text-md py-[10px]" id="hp6"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="home-6.html">Homepage 06</a></li>
                                <li className="text-md py-[10px]" id="hp7"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="home-7.html">Homepage 07</a></li>
                                <li className="text-md py-[10px]" id="hp8"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="home-8.html">Homepage 08</a></li>
                            </ul>
                        </li>
                        <li className="group menu-mobile-item py-[13px]">
                            <div
                                className="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                                <p>About</p><img className="w-[18px] h-[18px]"
                                                 src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/icons/icon-angle-down-fill.svg"
                                                 alt="angle icon"/>
                            </div>
                            <ul className="pl-5 menu-child hidden pt-[10px]">
                                <li className="text-md py-[10px]" id="ab1"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="about-1.html">About 01</a></li>
                                <li className="text-md py-[10px]" id="ab2"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="about-2.html">About 02</a></li>
                                <li className="text-md py-[10px]" id="ab3"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="about-3.html">About 03</a></li>
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
                                <li className="text-md py-[10px]" id="sv1"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="services-1.html">Services 01</a></li>
                                <li className="text-md py-[10px]" id="sv2"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="services-2.html">Services 02</a></li>
                                <li className="text-md py-[10px]" id="p1"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="pricing-1.html">Pricing 01</a></li>
                                <li className="text-md py-[10px]" id="p2"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="pricing-2.html">Pricing 02</a></li>
                                <li className="text-md py-[10px]" id="faqs1"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="faqs-1.html">FAQS 01</a></li>
                                <li className="text-md py-[10px]" id="faqs2"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="faqs-2.html">FAQS 02</a></li>
                                <li className="text-md py-[10px]" id="career"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="career.html">Career</a></li>
                                <li className="text-md py-[10px]" id="career-details"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="career-details.html">Career Detials</a></li>
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
                                <li className="text-md py-[10px]" id="contact"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="contact.html">Contact</a></li>
                                <li className="text-md py-[10px]" id="singup"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="signup.html">Sign Up</a></li>
                                <li className="text-md py-[10px]" id="login"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="login.html">Log In</a></li>
                                <li className="text-md py-[10px]" id="rp"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="reset-password.html">Reset Password</a></li>
                                <li className="text-md py-[10px]" id="error404"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="error-404.html">Error 404</a></li>
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
                                <li className="text-md py-[10px]" id="b1"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="blog-1.html">Blog 01</a></li>
                                <li className="text-md py-[10px]" id="b2"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="blog-2.html">Blog 02</a></li>
                                <li className="text-md py-[10px]" id="single"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="single.html">Blog Single</a></li>
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
                                <li className="text-md py-[10px]" id="s1"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="shop-1.html">Shop 01</a></li>
                                <li className="text-md py-[10px]" id="s2"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="shop-2.html">Shop 02</a></li>
                                <li className="text-md py-[10px]" id="product"><a
                                    className="block transition-all duration-200 hover:text-green-900 hover:translate-x-1"
                                    href="single-product.html">Product Details</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
                        <p className="font-bold text-heading-6 mb-[10px]">Your Account</p>
                        <ul className="text-[15px]">
                            <li className="py-[13px]"><a
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Profile</a></li>
                            <li className="py-[13px]"><a
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Work Preferences</a></li>
                            <li className="py-[13px]"><a
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">My Boosted Shots</a></li>
                            <li className="py-[13px]"><a
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">My Collections</a></li>
                            <li className="py-[13px]"><a
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Account Settings</a></li>
                            <li className="py-[13px]"><a
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Go Pro</a></li>
                            <li className="py-[13px]"><a
                                className="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"
                                href="#">Sign Out</a></li>
                        </ul>
                    </div>
                    <div className="text-gray-400 font-chivo text-[13px]">Copyright 2022 © Agon - Agency
                        Template.<br/><span>Designed by</span><a className="text-green-900"
                                                                 href="http://alithemes.com">&nbsp;AliThemes</a></div>
                </div>
            </nav>
        </>
    )
}
