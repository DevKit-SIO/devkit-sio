
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cookie Policy | DevKit SIO",
    description: "Detailed information about how DevKit SIO uses cookies and similar technologies.",
};

export default function CookiePolicy() {
    return (
        <div className="pt-[100px] pb-[100px] px-[12px] md:px-[36px] xl:px-0 mx-auto max-w-[1000px]">
            <h1 className="font-chivo font-bold text-[32px] md:text-[48px] mb-8 text-gray-900">Cookie Policy</h1>
            <div className="prose prose-lg max-w-none text-gray-600">
                <p className="lead text-xl text-gray-500 mb-8">
                    Effective Date: February 10, 2026<br />
                    Last Updated: February 10, 2026
                </p>

                <h3>1. Introduction</h3>
                <p>
                    This Cookie Policy explains how DevKit SIO ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website at devkit-sio.com.
                    It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
                <p>
                    In some cases, we may use cookies to collect personal information, or that becomes personal information if we combine it with other information.
                    For more details on how we process your personal data, please see our <a href="/privacy-policy" className="text-green-600 underline">Privacy Policy</a>.
                </p>

                <h3>2. What are Cookies?</h3>
                <p>
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                </p>
                <p>
                    Cookies set by the website owner (in this case, DevKit SIO) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies".
                    Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
                </p>

                <h3>3. Why We Use Cookies</h3>
                <p>We use first-party and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties. Third parties serve cookies through our Website for advertising, analytics, and other purposes.</p>

                <h4>Essential Website Cookies:</h4>
                <p>These cookies are strictly necessary to provide you with services available through our Website and to use some of its features, such as access to secure areas.</p>

                <h4>Performance and Functionality Cookies:</h4>
                <p>These cookies are used to enhance the performance and functionality of our Website but are non-essential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.</p>

                <h4>Analytics and Customization Cookies:</h4>
                <p>These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or how effective our marketing campaigns are, or to help us customize our Website for you.</p>

                <h3>4. How to Control Cookies</h3>
                <p>
                    You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager.
                    The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services.
                </p>
                <p>
                    Depending on your browser, you can also change your settings to block cookies. Please note that if you block cookies, some features of our website may not function correctly.
                </p>

                <h3>5. Tracking Technologies</h3>
                <p>
                    We may also use other tracking technologies like web beacons (sometimes called "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique identifier that enable us to recognize when someone has visited our Website or opened an email including them. This allows us, for example, to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate with cookies, to understand whether you have come to the website from an online advertisement displayed on a third-party website, to improve site performance, and to measure the success of e-mail marketing campaigns.
                </p>

                <h3>6. Updates to this Policy</h3>
                <p>
                    We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons.
                    Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                </p>
                <p>
                    The date at the top of this Cookie Policy indicates when it was last updated.
                </p>

                <h3>7. Contact Us</h3>
                <p>
                    If you have any questions about our use of cookies or other technologies, please email us at privacy@devkit-sio.com or by post to:
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
