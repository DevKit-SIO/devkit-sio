
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms & Conditions | DevKit SIO",
    description: "Terms of service and legal agreement for using DevKit SIO websites and services.",
};

export default function TermsConditions() {
    return (
        <div className="pt-[100px] pb-[100px] px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1000px]">
            <h1 className="font-chivo font-bold text-[32px] md:text-[48px] mb-8 text-gray-900">Terms & Conditions</h1>
            <div className="prose prose-lg max-w-none text-gray-600">
                <p className="lead text-xl text-gray-500 mb-8">
                    Last Updated: February 10, 2026
                </p>

                <h3>1. Agreement to Terms</h3>
                <p>
                    These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and DevKit SIO ("we," "us" or "our"), concerning your access to and use of the devkit-sio.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
                <p>
                    You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms and Conditions. If you do not agree with all of these terms and conditions, then you are expressly prohibited from using the Site and must discontinue use immediately.
                </p>

                <h3>2. Intellectual Property Rights</h3>
                <p>
                    Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                </p>
                <p>
                    The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>

                <h3>3. User Representations</h3>
                <p>The Site is provided for users who are at least 18 years old. By using the Site, you represent and warrant that:</p>
                <ul>
                    <li>All registration information you submit will be true, accurate, current, and complete.</li>
                    <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                    <li>You have the legal capacity and you agree to comply with these Terms and Conditions.</li>
                    <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
                    <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                </ul>

                <h3>4. Prohibited Activities</h3>
                <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                <p>As a user of the Site, you agree not to:</p>
                <ul>
                    <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                    <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.</li>
                    <li>Circumvent, disable, or otherwise interfere with security-related features of the Site.</li>
                    <li>Engage in unauthorized framing of or linking to the Site.</li>
                    <li>Use the Site as part of any effort to compete with us.</li>
                </ul>

                <h3>5. Disclaimer</h3>
                <p>
                    THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>

                <h3>6. Limitation of Liability</h3>
                <p>
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>

                <h3>7. Term and Termination</h3>
                <p>
                    These Terms and Conditions shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS AND CONDITIONS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS AND CONDITIONS.
                </p>

                <h3>8. Governing Law</h3>
                <p>
                    These Terms shall be governed by and defined following the laws of France. DevKit SIO and yourself irrevocably consent that the courts of France shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>

                <h3>9. Contact Us</h3>
                <p>
                    To resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                </p>
                <address className="not-italic bg-gray-50 p-6 rounded-lg border border-gray-200 mt-4">
                    <strong>DevKit SIO SARL</strong><br />
                    Email: contact@devkit-sio.com<br />
                    Phone: +212 6 61 333 946
                </address>
            </div>
        </div>
    );
}
