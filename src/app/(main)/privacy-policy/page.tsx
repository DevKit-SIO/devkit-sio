
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | DevKit SIO",
    description: "DevKit SIO is committed to protecting your privacy. Read our detailed Privacy Policy to understand how we handle your data.",
};

export default function PrivacyPolicy() {
    return (
        <div className="pt-[100px] pb-[100px] px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1000px]">
            <h1 className="font-chivo font-bold text-[32px] md:text-[48px] mb-8 text-gray-900">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none text-gray-600">
                <p className="lead text-xl text-gray-500 mb-8">
                    Effective Date: February 10, 2026<br />
                </p>

                <h3>1. Purpose and Scope</h3>
                <p>
                    DevKit SIO ("we", "us", "our") is committed to protecting your privacy and ensuring the security of your personal data.
                    This Privacy Policy outlines our practices regarding the collection, use, processing, and disclosure of your information when you access or use our website and services (refered to as the "Services").
                </p>
                <p>
                    We comply with the General Data Protection Regulation (GDPR) for our European users and adhere to global best practices for data privacy.
                </p>

                <h3>2. Information We Collect</h3>
                <p>We collect information to provide better services to all our users. The types of information we collect include:</p>

                <h4>2.1 Information You Provide to Us</h4>
                <ul>
                    <li><strong>Account Information:</strong> When you register for an account, we collect your name, email address, company name, and password.</li>
                    <li><strong>Contact Information:</strong> When you fill out a contact form or request a quote, we collect your name, email, phone number, and project details.</li>
                    <li><strong>Payment Information:</strong> If you purchase services, we collect billing details. Note that we do not store credit card numbers; these are processed by our secure payment processors (Stripe/PayPal).</li>
                </ul>

                <h4>2.2 Information We Collect Automatically</h4>
                <ul>
                    <li><strong>Log Data:</strong> We automatically record information created by your use of the Services, including IP address, browser type, operating system, the referring web page, pages visited, location, your mobile carrier, device and application IDs, search terms, and cookie information.</li>
                    <li><strong>Usage Data:</strong> We track how you interact with our website to improve user experience (e.g., time spent on pages, clicks, scroll depth).</li>
                </ul>

                <h3>3. How We Use Your Information</h3>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                    <li><strong>Service Provision:</strong> To provide, maintain, and improve our Services, including processing transactions and providing customer support.</li>
                    <li><strong>Communication:</strong> To send you technical notices, updates, security alerts, and support and administrative messages.</li>
                    <li><strong>Marketing:</strong> To communicate with you about products, services, offers, promotions, and events offered by DevKit SIO, and provide news and information we think will be of interest to you.</li>
                    <li><strong>Security:</strong> To monitor and analyze trends, usage, and activities in connection with our Services and for fraud prevention.</li>
                    <li><strong>Legal Compliance:</strong> To comply with applicable legal obligations.</li>
                </ul>

                <h3>4. Legal Basis for Processing (GDPR)</h3>
                <p>If you are from the European Economic Area (EEA), DevKit SIO's legal basis for collecting and using the personal information described above will depend on the Personal Information concerned and the specific context in which we collect it.</p>
                <p>However, we will normally collect personal information from you only:</p>
                <ul>
                    <li>Where we have your consent to do so;</li>
                    <li>Where we need the personal information to perform a contract with you; or</li>
                    <li>Where the processing is in our legitimate interests and not overridden by your rights.</li>
                </ul>

                <h3>5. Data Sharing and Disclosure</h3>
                <p>We do not sell your personal data. We may share your information in the following circumstances:</p>
                <ul>
                    <li><strong>Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf (e.g., hosting, analytics, payment processing).</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required to do so by law or in the good-faith belief that such action is necessary to comply with state and federal laws or respond to a court order, judicial, or other government subpoena or warrant.</li>
                    <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                </ul>

                <h3>6. Data Security</h3>
                <p>
                    We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>

                <h3>7. Your Data Protection Rights</h3>
                <p>Depending on your location, you may have the following rights:</p>
                <ul>
                    <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                    <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate.</li>
                    <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                    <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>

                <h3>8. International Data Transfers</h3>
                <p>
                    Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.
                </p>

                <h3>9. Children's Privacy</h3>
                <p>
                    Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us.
                </p>

                <h3>10. Contact Us</h3>
                <p>
                    If you have any questions about this Privacy Policy, please contact us:
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
