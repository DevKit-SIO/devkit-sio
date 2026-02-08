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
                                href="#">
                                    Mission &amp; Vision
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Our Team
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Careers
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Press &amp; Media
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Advertising
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Discover
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Our Blog
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Plans &amp; Pricing
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Knowledge Base
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Cookie Policy
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Office Center
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    News &amp; Events
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Support
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    FAQs
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Editor Help
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Community
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Live Chatting
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Contact Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Support Center
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">
                            Useful links
                        </h5>
                        <ul>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Request an offer
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    How it works
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Pricing
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Reviews
                                </a>
                            </li>
                            <li className="mb-2">
                                <a className="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">
                                    Stories
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
                            <a className="text-text" href="#">Privacy policy</a>
                            <a className="text-text" href="#">Cookies</a>
                            <a className="text-text" href="#">Terms of service</a>
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
