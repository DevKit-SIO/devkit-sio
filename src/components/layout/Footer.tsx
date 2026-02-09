import {Facebook, Instagram, Linkedin} from 'lucide-react';
import Image from "next/image";
import Logo from '@/public/logo.png'

export default function Footer() {

    return (
        <footer className="mt-[92px] lg:mt-[150px] xl:mt-[200px] mb-[30px]">
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
                <div className="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between">
                    <Image className="h-full w-full object-cover max-w-[162px]" src={Logo} alt="logo"/>
                    <div className="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]">
                        <p className="text-heading-6 font-chivo font-bold">Ready to get started?</p>
                        <button type="button">
                            <a className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit"
                               href="#">
                                <span className="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">
                                    Contact us
                                </span>
                            </a>
                        </button>
                    </div>
                </div>
                <div className="w-full bg-gray-200 h-[1px] mb-[52px]"></div>
                <div
                    className="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px]">
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Contact
                        </h5>
                        <p className="text-text mb-5">
                            Résidence Al amira 3, 4ème étage, Bureau 42, Av. Yacoub El Mansour, 40000 - Marrakech - Maroc
                        </p>
                        <p className="text-text underline">
                            (+212) 6 61 333 946
                        </p>
                        <p className="text-text underline">
                            <a href="mailto:contact@devkit-sio.com">
                                contact@devkit-sio.com
                            </a>
                        </p>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            About Us
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]"
                                href="/about">
                                    Company Overview
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/mission-vision">
                                    Mission & Vision
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/team">
                                    Our Team
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/careers">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Services
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/services/web-development">
                                    Web & Software Development
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/services/seo">
                                    SEO & Digital Growth
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/services/intelligence-artificielle">
                                    AI & Automation Solutions
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/services/staff-augmentation">
                                    Dedicated Developers
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/services/community-management">
                                    Community Management
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Global Markets
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/zones/france">
                                    France & Francophone Countries
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/zones/europe">
                                    Europe (EU)
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/zones/usa-uk">
                                    USA & United Kingdom
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/zones/moyen-orient">
                                    Saudi Arabia & GCC
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Resources & Support
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/blog">
                                    Blog & Insights
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/faq">
                                    FAQs
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/contact">
                                    Contact & Support
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/privacy-policy">
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/cookie-policy">
                                    Cookie Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="/terms-conditions">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full bg-gray-200 h-[1px] mb-[46px]"></div>
                <div className="text-gray-400 lg:flex lg:items-center lg:justify-between">
                    <div className="md:flex md:items-center md:gap-6">
                        <p className="text-lead font-bold">
                            © DevKit SIO Official {new Date().getFullYear()}
                        </p>
                        <div className="flex items-center justify-between md:gap-6">
                            <a className="text-text" href="/privacy-policy">Privacy policy</a>
                            <a className="text-text" href="/cookie-policy">Cookies</a>
                            <a className="text-text" href="/terms-conditions">Terms of service</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 mt-5 lg:mt-0">
                        <a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#">
                            <Facebook size={24}/>
                        </a>
                        <a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#">
                            <Instagram size={24}/>
                        </a>
                        <a className="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#">
                            <Linkedin size={24}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
