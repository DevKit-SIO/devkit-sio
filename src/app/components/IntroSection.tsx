'use client'

import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function IntroSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const subscribe = useMutation(api.newsletter.subscribe);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === 'loading' || status === 'success') return;

        setStatus('loading');
        setMessage('');

        try {
            await subscribe({ email });
            setStatus('success');
            setMessage('Thanks! We have received your inquiry.');
            setEmail('');
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setMessage('Failed to send. Please try again later.');
        }
    };

    return (
        <section className="py-20 lg:py-28 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
                            Tell us about your project, we're ready to build.
                        </h2>

                        <div className="relative max-w-lg">
                            {status === 'success' ? (
                                <div className="rounded-2xl bg-teal-50 p-6 text-teal-800 border border-teal-200">
                                    <p className="font-semibold text-lg">{message || 'Thanks for subscribing!'}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="relative flex items-center">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={status === 'loading'}
                                        required
                                        className="w-full rounded-full border border-gray-200 bg-white px-6 py-4 pr-36 text-base outline-none transition-all focus:border-teal-500 focus:ring-1 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="absolute right-2 top-2 bottom-2 rounded-full bg-teal-600 px-6 font-bold text-white transition-all hover:bg-teal-700 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? 'Sending...' : 'Get Quote'}
                                        {!status && <ArrowRight className="h-4 w-4" />}
                                    </button>
                                </form>
                            )}
                            {status === 'error' && (
                                <p className="mt-2 text-red-500 font-medium ml-4">{message}</p>
                            )}
                        </div>

                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6 text-teal-600 fill-teal-50" />
                                <span className="font-bold text-slate-700">AI-Powered Results</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-6 w-6 text-teal-600 fill-teal-50" />
                                <span className="font-bold text-slate-700">Scalable Solutions</span>
                            </div>
                        </div>

                    </div>

                    <div className="relative lg:pl-10">
                        {/* This side is empty in the design (white space) or maybe I missed something?
                  Looking at the image, the text is on the left/center.
                  Actually, the "Tell us about your business" is a full width or maybe 2 column with empty right?
                  In the image, it looks like:
                  [ Stats ]
                  [ Text + Form ]
                  [ Image/Video ]

                  Wait, let's re-examine the image.
                  Hero
                  Stats
                  "Tell us about your business..." (Left)
                  Then below that is "1. Acquisition", "2. Activation", "3. Retention" etc. which seems to be overlaid on a large image.

                  Actually, the "Tell us about your business" seems to be part of a larger section or just above the video section.
                  The video section has a big image with people meeting, and play button.

                  It seems "Tell us about your business" is a header for the video section possibly?
                  Or separate.

                  Let's look at the "Tell us about your business" part again.
                  It has the input field.
                  And below it are two checkmarks "Driven results", "Build relationships" (text is blurry but looks like it).

                  And BELOW that is a large image with a play button.
                  And ON TOP of that image (at the bottom) are 3 cards: 1. Acquisition, 2. Activation, 3. Retention.

                  So I should probably group these maybe? Or keep them separate.
                  I'll keep them structurally separate for cleaner code, but visually they might flow together.

                  The big image with play button seems to be full width or contained.

                  Let's implement "IntroSection" as just the text and input.
                  And "VideoStepsSection" as the Image + Cards.
              */}
                    </div>
                </div>
            </div>
        </section>
    );
}
