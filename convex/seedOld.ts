import { action, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";

// Helper function to fetch and store image, returns storage URL
async function fetchAndStoreImage(ctx: any, imageUrl: string): Promise<string> {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const storageId = await ctx.storage.store(blob);
        const url = await ctx.storage.getUrl(storageId);
        return url || imageUrl; // Fallback to original URL if storage fails
    } catch (error) {
        console.error(`Failed to store image: ${imageUrl}`, error);
        return imageUrl; // Fallback to original URL
    }
}

// Seed action to populate the database with 10 test blog posts
export const seedBlogPosts = action({
    handler: async (ctx) => {
        // Define posts with their content image URLs (from Unsplash)
        const postsData = [
            {
                slug: "ai-revolutionizing-business-2025",
                category: "AI & Automation",
                title: "How AI is Revolutionizing Business Operations in 2025",
                coverImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop",
                    grid1: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
                    grid2: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
                    grid3: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&h=300&fit=crop",
                },
                hasQuote: true,
                quoteText: "AI is not about replacing humans; it's about augmenting human capabilities and freeing us to focus on what we do best—creative problem-solving and building meaningful relationships.",
                quoterName: "Dr. Andrew Ng",
            },
            {
                slug: "flutter-mobile-apps-best-practices",
                category: "Mobile Development",
                title: "Building Scalable Mobile Apps with Flutter: Best Practices",
                coverImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&h=300&fit=crop",
                },
                hasQuote: false,
            },
            {
                slug: "seo-strategies-drive-results",
                category: "Digital Marketing",
                title: "SEO Strategies That Drive Real Results for Your Business",
                coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=300&fit=crop",
                },
                hasQuote: true,
                quoteText: "The best SEO strategy is to build your site for users, not search engines. If you focus on providing value and great experiences, rankings will follow naturally.",
                quoterName: "John Mueller, Google",
            },
            {
                slug: "cloud-infrastructure-scaling-guide",
                category: "Cloud & DevOps",
                title: "Scaling Your Infrastructure: A Complete Cloud Migration Guide",
                coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
                    grid1: "https://images.unsplash.com/photo-1560732488-6b0df240254a?w=600&h=400&fit=crop",
                    grid2: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=400&h=300&fit=crop",
                    grid3: "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?w=400&h=300&fit=crop",
                },
                hasQuote: false,
            },
            {
                slug: "react-nextjs-web-development",
                category: "Web Development",
                title: "Modern Web Development with React and Next.js",
                coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
                },
                hasQuote: true,
                quoteText: "Next.js is designed to progressively adopt new features without breaking existing code. It grows with your needs, from simple static sites to complex enterprise applications.",
                quoterName: "Guillermo Rauch, Vercel",
            },
            {
                slug: "n8n-workflow-automation",
                category: "Automation",
                title: "Automate Your Business Workflows with n8n",
                coverImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
                },
                hasQuote: false,
            },
            {
                slug: "laravel-api-development",
                category: "Backend Development",
                title: "Building Robust APIs with Laravel: A Complete Guide",
                coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=300&fit=crop",
                },
                hasQuote: true,
                quoteText: "Laravel provides the most developer-friendly experience while maintaining the flexibility and power needed for applications of any scale.",
                quoterName: "Taylor Otwell, Laravel",
            },
            {
                slug: "digital-transformation-roadmap",
                category: "Strategy",
                title: "Creating a Digital Transformation Roadmap for Your Business",
                coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
                    grid1: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
                    grid2: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop",
                    grid3: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
                },
                hasQuote: false,
            },
            {
                slug: "chatbot-customer-service",
                category: "AI & Automation",
                title: "How AI Chatbots are Transforming Customer Service",
                coverImage: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=400&h=300&fit=crop",
                },
                hasQuote: true,
                quoteText: "The goal isn't to replace human connection with AI, but to use AI to enable more meaningful human connections by handling routine queries efficiently.",
                quoterName: "Clara Shih, Salesforce",
            },
            {
                slug: "startup-mvp-development",
                category: "Startups",
                title: "From Idea to MVP: A Startup's Guide to Product Development",
                coverImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
                contentImages: {
                    main: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=500&fit=crop",
                    side: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
                },
                hasQuote: true,
                quoteText: "If you're not embarrassed by the first version of your product, you've launched too late. The goal is to learn, not to impress.",
                quoterName: "Reid Hoffman, LinkedIn",
            },
        ];

        // Content templates for each post
        const postContents: Record<string, { intro: string; mainContent: string; heading1: string; section1: string; heading2: string; section2: string; closing: string }> = {
            "ai-revolutionizing-business-2025": {
                intro: "Artificial Intelligence has become the cornerstone of modern business transformation, reshaping how companies operate and compete in the global marketplace. From automating repetitive tasks to providing deep customer insights, AI technologies are enabling businesses to achieve unprecedented levels of efficiency.",
                mainContent: "Machine learning algorithms now power everything from customer service chatbots to predictive maintenance systems. Companies implementing AI-driven automation report up to 40% reduction in operational costs. Natural language processing enables seamless customer interactions, while computer vision systems revolutionize quality control in manufacturing.",
                heading1: "The Rise of Intelligent Automation",
                section1: "The integration of AI into business workflows is no longer optional—it's essential for survival. Start small with pilot projects that demonstrate clear ROI. Identify repetitive, data-heavy processes that could benefit from automation. Build cross-functional teams that combine technical expertise with domain knowledge.",
                heading2: "Looking Ahead: AI Trends to Watch",
                section2: "Generative AI, edge computing, and autonomous systems will dominate the next wave of innovation. Prepare your organization by investing in data infrastructure, upskilling your workforce, and fostering a culture of continuous learning and adaptation.",
                closing: "The future belongs to organizations that embrace AI as a strategic partner. Those who hesitate risk falling behind competitors who leverage these powerful technologies to deliver better products and services faster than ever before.",
            },
            "flutter-mobile-apps-best-practices": {
                intro: "Flutter has emerged as the go-to framework for cross-platform mobile development, offering unprecedented speed and flexibility for developers worldwide. With its hot reload feature, beautiful UI components, and single codebase approach, Flutter allows developers to build stunning apps for iOS and Android simultaneously.",
                mainContent: "The framework's widget-based architecture promotes code reusability and maintainability. Implementing clean architecture with BLoC or Riverpod state management ensures your app remains maintainable as it grows. Separate your business logic from UI components, use dependency injection for testability.",
                heading1: "Architecture Patterns That Scale",
                section1: "Use const constructors wherever possible to reduce widget rebuilds. Implement lazy loading for lists with large datasets. Profile your app regularly using Flutter DevTools to identify and fix performance bottlenecks. Optimize images and assets, minimize unnecessary rebuilds with proper state management.",
                heading2: "The Future of Flutter Development",
                section2: "With Flutter 3 supporting web, desktop, and embedded devices, the framework's reach extends far beyond mobile. Invest in learning Flutter today to build applications that run everywhere your users need them.",
                closing: "Flutter's ecosystem continues to grow with packages for every use case imaginable. From Firebase integration to advanced animations, the community has created tools that accelerate development significantly.",
            },
            "seo-strategies-drive-results": {
                intro: "Search Engine Optimization remains one of the most effective ways to drive organic traffic to your website and build sustainable business growth. In this comprehensive guide, we break down the essential SEO strategies that help businesses rank higher on Google.",
                mainContent: "From technical optimization to content strategy, every element plays a crucial role in your search visibility. High-quality, user-focused content drives modern SEO success. Google's algorithms increasingly reward pages that provide genuine value and demonstrate expertise.",
                heading1: "Content is Still King",
                section1: "Focus on creating content that serves your audience first. Ensure your site loads quickly on all devices—Core Web Vitals directly impact rankings. Implement proper schema markup to help search engines understand your content. Create a logical site structure with clear navigation.",
                heading2: "Measuring SEO Success",
                section2: "Track organic traffic, keyword rankings, and conversion rates to measure your SEO efforts. Use tools like Google Search Console and Analytics to identify opportunities and monitor progress.",
                closing: "Remember, SEO is a long-term investment that compounds over time. Local SEO has become increasingly important for businesses serving specific geographic areas. Optimize your Google Business Profile and gather authentic reviews.",
            },
            "cloud-infrastructure-scaling-guide": {
                intro: "Moving to the cloud is no longer optional—it's essential for business agility, scalability, and competitive advantage in today's digital landscape. This guide walks you through the entire cloud migration process.",
                mainContent: "Whether you're moving to AWS, Azure, or GCP, the principles remain consistent. Start with a thorough assessment of your current infrastructure. Identify dependencies, evaluate workload requirements, and prioritize applications for migration based on your goals and resources.",
                heading1: "Planning Your Migration Strategy",
                section1: "Choose between lift-and-shift, re-platforming, or complete re-architecture. Implement a zero-trust security model from day one. Use identity and access management to control permissions, encrypt data at rest and in transit.",
                heading2: "Building for Resilience",
                section2: "Design for failure by distributing workloads across availability zones and regions. Implement disaster recovery procedures, automate backups, and regularly test your recovery processes.",
                closing: "Cost optimization is an ongoing process—implement auto-scaling and use reserved instances for predictable workloads. Monitor your cloud spend and eliminate waste regularly.",
            },
            "react-nextjs-web-development": {
                intro: "React and Next.js have revolutionized how we build web applications, combining developer experience with exceptional performance and SEO capabilities. The App Router introduced in Next.js 13 brings even more powerful capabilities.",
                mainContent: "With server-side rendering, static site generation, and an incredible developer experience, Next.js is the perfect framework for building fast, SEO-friendly websites. The new App Router leverages React Server Components for improved performance.",
                heading1: "Understanding the App Router",
                section1: "Use server components by default and add client interactivity only where needed. This approach significantly improves initial page load times. Leverage server components for data fetching to reduce client-side API calls.",
                heading2: "Deployment and Beyond",
                section2: "Deploy to Vercel for the best Next.js experience, or self-host on any Node.js-compatible platform. Image optimization, font loading, and script management are all built into Next.js.",
                closing: "Take advantage of these features to improve your Core Web Vitals scores and deliver exceptional user experiences across all devices.",
            },
            "n8n-workflow-automation": {
                intro: "n8n is an open-source workflow automation tool that connects your apps and automates repetitive tasks, saving time and reducing human error. Learn how to build powerful automation workflows that connect your favorite tools.",
                mainContent: "From CRM updates to email notifications, n8n handles the tedious work so your team can focus on high-value activities. Self-host n8n on your own infrastructure for complete data control, or use the cloud version for quick deployment.",
                heading1: "Getting Started with n8n",
                section1: "The visual workflow builder makes it easy to connect services without writing code, though custom JavaScript nodes are available for complex logic. Sync data between CRM and email marketing platforms automatically.",
                heading2: "Common Automation Patterns",
                section2: "Create approval workflows that route requests to the right people. Process form submissions and update databases automatically. Monitor systems and alert teams when issues arise.",
                closing: "Start with simple automations that provide immediate value, then gradually tackle more complex workflows. Document your automations and build a library of reusable components.",
            },
            "laravel-api-development": {
                intro: "Laravel is the most popular PHP framework for building modern web applications and APIs, offering elegant syntax and powerful features out of the box. This guide covers everything from setting up your Laravel project to implementing authentication.",
                mainContent: "Build APIs that are secure, performant, and easy to maintain. Use API Resources to transform your Eloquent models into JSON responses consistently. This layer of abstraction allows you to control exactly what data is exposed to clients.",
                heading1: "API Resources and Transformations",
                section1: "Handle relationships gracefully and modify presentations without touching your models. Implement Laravel Sanctum for SPA authentication or Passport for full OAuth2 support. Use policies and gates to control access to resources.",
                heading2: "Performance at Scale",
                section2: "Optimize database queries with eager loading to avoid N+1 problems. Implement caching strategies for frequently accessed data. Use queues for time-consuming operations to keep your API responsive.",
                closing: "Testing is non-negotiable—Laravel's testing tools make it easy to write feature tests that verify your endpoints work correctly under all conditions.",
            },
            "digital-transformation-roadmap": {
                intro: "Digital transformation is more than just adopting new technology—it's about fundamentally changing how your business operates and delivers value to customers. Learn how to create a comprehensive digital transformation roadmap.",
                mainContent: "This strategic approach ensures technology investments deliver measurable results and lasting competitive advantage. Begin with an honest evaluation of your digital maturity across key dimensions.",
                heading1: "Assessing Your Current State",
                section1: "Identify gaps between current capabilities and future aspirations. Prioritize initiatives based on impact and feasibility. Quantify the expected benefits of each initiative: cost savings, revenue growth, and customer satisfaction.",
                heading2: "Building the Business Case",
                section2: "Secure executive sponsorship and cross-functional buy-in. Digital transformation requires organizational change, not just IT projects. Implementation should be iterative—deliver value incrementally.",
                closing: "Celebrate quick wins to maintain momentum. Build digital capabilities within your organization by investing in upskilling employees and recruiting talent.",
            },
            "chatbot-customer-service": {
                intro: "AI-powered chatbots are revolutionizing customer service by providing instant, 24/7 support while reducing operational costs and improving satisfaction. Discover how implementing a chatbot can transform your customer experience.",
                mainContent: "Modern chatbots powered by large language models understand context, handle nuanced questions, and provide personalized responses. They can resolve common issues instantly and route complex cases to human agents.",
                heading1: "The Evolution of Conversational AI",
                section1: "Start with a clear scope: identify the most common customer inquiries and train your bot to handle these excellently. Design conversation flows that feel natural and provide easy escalation paths to human agents when needed.",
                heading2: "The Human-AI Partnership",
                section2: "Integrate your chatbot with your CRM and knowledge base for personalized, accurate responses. Measure success through resolution rates, customer satisfaction scores, and escalation rates.",
                closing: "Continuously refine your bot based on real interaction data and customer feedback. The best customer service combines AI efficiency with human empathy.",
            },
            "startup-mvp-development": {
                intro: "Building a Minimum Viable Product is crucial for validating your startup idea before investing significant resources in full-scale development. This guide walks you through the entire MVP development process.",
                mainContent: "From defining your core features to launching and iterating based on user feedback, learn how to build just enough to validate your assumptions. Identify the single most important problem you're solving.",
                heading1: "Defining Your Core Value Proposition",
                section1: "Resist the temptation to add 'nice-to-have' features—every addition delays your learning. Focus ruthlessly on what makes your solution unique. Use no-code or low-code tools when possible to accelerate development.",
                heading2: "Iteration and Growth",
                section2: "Launch to a small group of early adopters who understand they're using a work-in-progress. Measure user engagement, retention, and willingness to pay. These metrics matter more than feature completeness.",
                closing: "Use validated learning to decide whether to persevere, pivot, or stop. Each iteration should bring you closer to product-market fit.",
            },
        };

        const baseDate = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        const colors = ["#eae4e9", "#fff3ea", "#fde2e4", "#fad2e1", "#dbece5", "#bee1e6", "#f0efeb", "#dfe7fd", "#d1ecfd", "#ddd3fa"];

        for (let i = 0; i < postsData.length; i++) {
            const postData = postsData[i];
            const content = postContents[postData.slug];

            // Store cover image
            const coverStorageId = await fetchAndStoreImage(ctx, postData.coverImage);

            // Store content images
            const mainImageUrl = await fetchAndStoreImage(ctx, postData.contentImages.main);
            const sideImageUrl = postData.contentImages.side ? await fetchAndStoreImage(ctx, postData.contentImages.side) : "";
            const grid1Url = postData.contentImages.grid1 ? await fetchAndStoreImage(ctx, postData.contentImages.grid1) : "";
            const grid2Url = postData.contentImages.grid2 ? await fetchAndStoreImage(ctx, postData.contentImages.grid2) : "";
            const grid3Url = postData.contentImages.grid3 ? await fetchAndStoreImage(ctx, postData.contentImages.grid3) : "";

            // Build HTML body with stored image URLs
            let body = `<p class="font-bold mb-6 md:mb-9">${content.intro}</p>
<div class="flex items-center justify-between mb-7 md:mb-[57px]">
    <div class="flex items-center gap-[15px]">
        <div>
            <p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">DevKit SIO</p>
            <p class="text-sm font-bold">${new Date(baseDate - i * oneDay).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
    </div>
</div>
<div class="mb-6 md:mb-9"><img class="h-full w-full object-cover rounded-2xl" src="${mainImageUrl}" alt="${postData.title}">
</div>
<p class="mb-6 md:mb-9">${content.mainContent}</p>
<h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-6 text-gray-900 md:mb-9">${content.heading1}</h2>
<p class="mb-6 md:mb-9">${content.section1}</p>`;

            // Add quote block if hasQuote
            if (postData.hasQuote && postData.quoteText) {
                body += `
<div class="bg-green-900 grid place-items-center px-5 rounded-[20px] pb-[45px] pt-[45px] md:pb-[77px] mb-[49px]">
    <div class="text-center max-w-[625px]"> <img class="mb-5 mx-auto scale-75 md:mb-7 md:scale-100" src="/assets/images/icons/icon-left-quote.svg" alt="quote icon">
        <p class="text-white font-chivo mb-5 text-lead md:text-[32px] md:leading-[48px] md:mb-7">${postData.quoteText}</p>
        <p class="text-white font-bold font-chivo text-[22px] leading-[38px]">${postData.quoterName}</p>
    </div>
</div>`;
            }

            body += `
<h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-900 mb-6 md:mb-9">${content.heading2}</h3>`;

            // Add grid images if available, otherwise add side image with text
            if (grid1Url && grid2Url && grid3Url) {
                body += `
<figure class="mb-8 md:mb-12">
    <div class="grid md:grid-cols-2 gap-[30px]"><img class="h-full w-full object-cover rounded-2xl row-span-2" src="${grid1Url}" alt="illustration"><img class="h-full w-full object-cover rounded-2xl" src="${grid2Url}" alt="illustration"><img class="h-full w-full object-cover rounded-2xl" src="${grid3Url}" alt="illustration">
    </div>
    <figcaption class="text-center mt-4">Visual examples in action</figcaption>
</figure>
<p class="mb-6 md:mb-9">${content.section2}</p>`;
            } else if (sideImageUrl) {
                body += `
<div class="flex gap-4 mb-6 flex-col md:flex-row md:mb-9">
    <div class="flex-1">
        <p class="mb-6 md:mb-9">${content.section2}</p>
    </div>
    <div><img class="h-full w-full object-cover rounded-2xl" src="${sideImageUrl}" alt="${postData.title}">
    </div>
</div>`;
            } else {
                body += `<p class="mb-6 md:mb-9">${content.section2}</p>`;
            }

            body += `
<p class="mb-8 md:mb-12">${content.closing}</p>
<div class="w-full bg-gray-200 mb-7 h-px md:mb-10"></div>`;

            // Get storage ID for cover image
            let coverImageStorageId: string;
            try {
                const response = await fetch(postData.coverImage);
                const blob = await response.blob();
                coverImageStorageId = await ctx.storage.store(blob);
            } catch (error) {
                console.error(`Failed to store cover image for ${postData.slug}:`, error);
                throw new Error(`Failed to store cover image for ${postData.slug}`);
            }

            // Create post
            await ctx.runMutation(internal.blog.createPostInternal, {
                slug: postData.slug,
                category: postData.category,
                title: postData.title,
                image: coverImageStorageId,
                body: body,
                bgColor: colors[i % colors.length],
                date: baseDate - (i * oneDay),
            });
        }

        return { success: true, postsCreated: postsData.length };
    },
});

export const seedServices = internalAction({
    args: {},
    handler: async (ctx) => {
        const placeholderImage = "";

        const services = [
            { slug: "web-development", category: "Development", type: "service", title: "Custom Web Development", body: "Build scalable, high-performance web applications using modern frameworks like Next.js and React. We focus on SEO, speed, and user experience." },
            { slug: "mobile-app-development", category: "Development", type: "service", title: "Mobile App Development", body: "Create native-like experiences for iOS and Android with Flutter and React Native. We deliver smooth, responsive, and feature-rich mobile apps." },
            { slug: "ai-solutions", category: "AI & Automation", type: "solution", title: "AI & Machine Learning", body: "Leverage the power of Artificial Intelligence to automate processes, gain insights from data, and enhance decision-making capabilities." },
            { slug: "workflow-automation", category: "AI & Automation", type: "solution", title: "Workflow Automation", body: "Streamline your business operations with n8n and Zapier. Connect your favorite apps and automate repetitive tasks to save time and reduce errors." },
            { slug: "cloud-migration", category: "Infrastructure", type: "service", title: "Cloud Migration & DevOps", body: "Securely migrate your legacy systems to the cloud (AWS, Vercel). We handle infrastructure setup, CI/CD pipelines, and server management." },
            { slug: "ui-ux-design", category: "Design", type: "service", title: "UI/UX Design", body: "Craft intuitive and visually stunning user interfaces. Our design process ensures that your product is not only beautiful but also easy to use." },
            { slug: "digital-strategy", category: "Consulting", type: "service", title: "Digital Transformation Strategy", body: "We help you define a clear digital roadmap. From technology selection to market positioning, we guide you through every step of your digital journey." },
            { slug: "ecommerce-solutions", category: "Development", type: "solution", title: "E-commerce Solutions", body: "Launch powerful online stores with Shopify or custom builds. We integrate payment gateways, inventory management, and marketing tools." },
            { slug: "api-integration", category: "Development", type: "service", title: "API Development & Integration", body: "Connect your systems with robust APIs. We build secure REST and GraphQL APIs to ensure seamless data exchange between your applications." },
            { slug: "maintenance-support", category: "Support", type: "service", title: "Maintenance & Support", body: "Ensure your software remains secure and up-to-date. We offer ongoing maintenance packages including bug fixes, security patches, and performance monitoring." },
        ] as const;

        for (const service of services) {
            await ctx.runMutation(internal.services.createServiceInternal, {
                ...service,
                image: placeholderImage,
                date: Date.now(),
            });
        }
    },
});
