'use client';

import { useState } from 'react';
import { Home, Send, Phone, Mail, Loader2, CheckCircle2 } from "lucide-react";
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function Contact() {
    const submitContact = useMutation(api.contact.submit);
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

    return (
        <>
            <div className="full-width bg-teal-50">
                <div className="text-center px-5 pt-[74px] pb-[90px]">
                    <h2 className="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[22px]">
                        Contact Us
                    </h2>
                    <p className="text-text text-gray-500 mx-auto md:w-[49ch]">
                        We are strictly professional, efficient, and ready to turn your ideas into digital reality. Reach out to discuss your next project.
                    </p>
                </div>
            </div>
            <div
                className="bg-white relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[-80px] rounded-[58px] shadow-2xl max-w-[1320px] mx-auto mb-[100px]">
                <div className="mx-auto relative">
                    <Send className="absolute right-0 max-w-[129px] top-[-50px] text-teal-100 opacity-50 w-32 h-32" />
                    <p className="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">
                        Get in touch
                    </p>
                    <h2 className="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">
                        Have a project in mind?
                    </h2>
                    <p className="text-text text-gray-600 mb-[30px] md:mb-[60px]">
                        The right move at the right time saves your investment. Let's build something great together.
                    </p>
                    <div className="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]">
                        <div className="flex-1 max-w-[400px]">
                            <div className="flex gap-[13px] mb-[30px]">
                                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                    <Home className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-heading-6 font-bold font-chivo mb-1">
                                        DevKit SIO
                                    </p>
                                    <p className="text-text text-gray-600">
                                        Résidence Al amira 3, 4ème étage, Bureau 42
                                    </p>
                                    <p className="text-text text-gray-600">
                                        Av. Yacoub El Mansour, 40000
                                    </p>
                                    <p className="text-text text-gray-600">
                                        Marrakech - Maroc
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[13px] mb-[30px]">
                                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-heading-6 font-bold font-chivo mb-1">
                                        Phone
                                    </p>
                                    <p className="text-text text-gray-600">
                                        (+212) 6 61 333 946
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[13px] mb-[30px]">
                                <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-heading-6 font-bold font-chivo mb-1">
                                        Email
                                    </p>
                                    <p className="text-text text-gray-600">
                                        <a href="mailto:contact@devkit-sio.com" className="hover:text-teal-600 transition-colors">
                                            contact@devkit-sio.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1">
                            {status === 'success' ? (
                                <div className="flex flex-col items-center justify-center p-8 text-center bg-teal-50 rounded-2xl border border-teal-100 h-full min-h-[400px]">
                                    <CheckCircle2 className="w-16 h-16 text-teal-600 mb-4" />
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-600">
                                        Thanks for reaching out. We'll be in touch shortly.
                                    </p>
                                    <button
                                        onClick={() => setStatus('idle')}
                                        className="mt-6 text-teal-600 font-semibold hover:text-teal-700 underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                        <input
                                            name="fullname"
                                            value={formData.fullname}
                                            onChange={handleChange}
                                            className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] bg-slate-50 rounded-lg border border-slate-100 focus:border-teal-500 transition-colors"
                                            type="text" placeholder="Enter your name" required />
                                        <input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] bg-slate-50 rounded-lg border border-slate-100 focus:border-teal-500 transition-colors"
                                            type="text" placeholder="Company (optional)" />
                                    </div>
                                    <div className="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]">
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] bg-slate-50 rounded-lg border border-slate-100 focus:border-teal-500 transition-colors"
                                            type="email" placeholder="Your email" required />
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px] bg-slate-50 rounded-lg border border-slate-100 focus:border-teal-500 transition-colors"
                                            type="tel" placeholder="Phone number" />
                                    </div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px] bg-slate-50 rounded-lg border border-slate-100 focus:border-teal-500 transition-colors"
                                        cols={100} rows={10} placeholder="Tell us about your project" required></textarea>
                                    <div className="flex flex-col gap-5">
                                        <button
                                            className="flex items-center justify-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-teal-600 hover:bg-teal-700 w-fit disabled:opacity-70 disabled:cursor-not-allowed"
                                            type="submit" disabled={status === 'loading'}>
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="h-5 w-5 animate-spin mr-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-[7px] w-[12px] text-white" />
                                                </>
                                            )}
                                        </button>
                                        {status === 'error' && (
                                            <p className="text-red-500 text-sm">
                                                Something went wrong. Please try again.
                                            </p>
                                        )}
                                        <p className="text-md text-gray-500">
                                            By clicking contact us button, you agree our terms and policy.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-[400px] lg:h-[500px] mb-[-1px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.841125239833!2d-8.009868599999999!3d31.638200099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafed591261ff53%3A0x1436e2afc31db7c8!2sDevKit%20SIO%20%7C%20Agence%20de%20communication%20digital%20Marrakech!5e0!3m2!1sfr!2sma!4v1770487544817!5m2!1sfr!2sma"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DevKit SIO Location"></iframe>
            </div>
        </>
    )
}
