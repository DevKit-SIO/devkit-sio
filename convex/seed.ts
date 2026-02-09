import { action, internalAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { blogPostsPart1 } from "./blogData1";
import { blogPostsPart2 } from "./blogData2";
import { servicesData as importedServicesData } from "./servicesData";

// Helper function to fetch and store image, returns storage URL
async function fetchAndStoreImage(ctx: any, imageUrl: string): Promise<string> {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const storageId = await ctx.storage.store(blob);
        const url = await ctx.storage.getUrl(storageId);
        return url || imageUrl;
    } catch (error) {
        console.error(`Failed to store image: ${imageUrl}`, error);
        return imageUrl;
    }
}
async function fetchAndStoreImageGetId(ctx: any, imageUrl: string): Promise<string> {
    try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const storageId = await ctx.storage.store(blob);
        return storageId;
    } catch (error) {
        console.error(`Failed to store image: ${imageUrl}`, error);
        return "";
    }
}

// Services data for linking - matches Header.tsx structure
const servicesData = [
    { slug: "web-development", title: "Custom Web Development", link: "/services/web-development" },
    { slug: "mobile-app-development", title: "Mobile App Development", link: "/services/mobile-app-development" },
    { slug: "saas-development", title: "SaaS & Platform Development", link: "/services/saas-development" },
    { slug: "seo", title: "SEO & Organic Growth", link: "/services/seo" },
    { slug: "paid-ads", title: "Google & Meta Ads", link: "/services/paid-ads" },
    { slug: "community-management", title: "Community Management", link: "/services/community-management" },
    { slug: "intelligence-artificielle", title: "AI Consulting", link: "/services/intelligence-artificielle" },
    { slug: "ai-chatbots", title: "AI Chatbots & Assistants", link: "/services/ai-chatbots" },
    { slug: "automatisation", title: "Process Automation (RPA)", link: "/services/automatisation" },
    { slug: "ia-marketing", title: "AI for Marketing", link: "/services/ia-marketing" },
    { slug: "data-ia", title: "Predictive Analytics", link: "/services/data-ia" },
    { slug: "dedicated-developers", title: "Dedicated Developers", link: "/services/dedicated-developers" },
    { slug: "staff-augmentation", title: "Staff Augmentation", link: "/services/staff-augmentation" },
    { slug: "cloud-hosting", title: "Cloud Hosting", link: "/services/cloud-hosting" },
    { slug: "devops", title: "DevOps & Maintenance", link: "/services/devops" },
    { slug: "mvp-development", title: "MVP for Startups", link: "/solutions/mvp-development" },
    { slug: "digital-transformation", title: "Digital Transformation", link: "/solutions/digital-transformation" },
    { slug: "enterprise-ai", title: "Enterprise AI Solutions", link: "/solutions/enterprise-ai" },
    { slug: "team-scaling", title: "Team Scaling", link: "/solutions/team-scaling" },
];

export const seedBlogPosts = action({
    handler: async (ctx) => {
        const posts = [...blogPostsPart1, ...blogPostsPart2];

        const baseDate = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        const colors = ["#eae4e9", "#fff3ea", "#fde2e4", "#fad2e1", "#dbece5", "#bee1e6", "#f0efeb", "#dfe7fd", "#d1ecfd", "#ddd3fa"];

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];

            // Generate HTML body from content object
            const content = post.content as any;

            // Build related services HTML
            const relatedServicesHtml = (post.relatedServices || [])
                .map(slug => {
                    const service = servicesData.find(s => s.slug === slug);
                    return service ? `<a href="${service.link}" class="inline-block bg-gray-100 hover:bg-green-100 text-gray-800 hover:text-green-900 py-2 px-4 rounded-full text-sm font-medium transition-colors">${service.title}</a>` : '';
                })
                .filter(Boolean)
                .join('\n            ');

            let body = `<p class="font-bold mb-6 md:mb-9 text-lg leading-relaxed">${content.intro}</p>
<div class="flex items-center justify-between mb-7 md:mb-[57px]">
    <div class="flex items-center gap-[15px]">
        <div>
            <p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">DevKit SIO</p>
            <p class="text-sm font-bold text-gray-500">${new Date(baseDate - i * oneDay).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
    </div>
</div>
<div class="mb-8 md:mb-12"><img class="h-full w-full object-cover rounded-2xl shadow-lg" src="${await fetchAndStoreImage(ctx, post.mainImage)}" alt="${post.title}">
</div>
<div class="blog-content-body text-lg leading-relaxed text-gray-700">
${content.mainBody}
</div>`;

            if (post.hasQuote && post.quoteText) {
                body += `
<div class="bg-green-900 grid place-items-center px-8 py-12 rounded-[20px] mb-12 shadow-xl my-12">
    <div class="text-center max-w-[625px]"> 
        <img class="mb-6 mx-auto" src="/assets/images/icons/icon-left-quote.svg" alt="quote icon">
        <p class="text-white font-chivo mb-6 text-2xl md:text-3xl italic leading-relaxed">"${post.quoteText}"</p>
        <p class="text-green-200 font-bold font-chivo text-xl tracking-wide uppercase">— ${post.quoterName}</p>
    </div>
</div>`;
            }

            body += `
<div class="mt-8 mb-12 p-6 bg-green-50 rounded-2xl border border-green-100">
    <h3 class="font-bold font-chivo text-xl mb-3 text-green-900">Conclusion</h3>
    <p class="text-gray-700 leading-relaxed">${content.conclusion}</p>
</div>

<div class="w-full bg-gray-200 mb-8 h-px"></div>
<div class="mb-8">
    <h4 class="font-bold font-chivo text-[18px] text-gray-900 mb-4 flex items-center gap-2">
        <span>Related Services</span>
    </h4>
    <div class="flex flex-wrap gap-3">
        ${relatedServicesHtml}
    </div>
</div>`;

            // Store cover image
            const coverImageStorageId = await fetchAndStoreImageGetId(ctx, post.coverImage);

            await ctx.runMutation(internal.blog.createPostInternal, {
                slug: post.slug,
                category: post.category,
                title: post.title,
                image: coverImageStorageId,
                body: body,
                bgColor: colors[i % colors.length],
                date: baseDate - (i * oneDay),
                metaTitle: post.metaTitle,
                metaDescription: post.metaDescription,
                metaKeywords: post.metaKeywords,
                author: post.author,
                canonicalUrl: post.canonicalUrl,
            });
        }
    },
});





export const seedServices = internalAction({
    args: {},
    handler: async (ctx) => {
        const services = importedServicesData;

        for (const service of services) {
            console.log(`Seeding service: ${service.title}`);

            // Store cover image
            let imageStorageId = "";
            if (service.image) {
                imageStorageId = await fetchAndStoreImageGetId(ctx, service.image);
            }

            await ctx.runMutation(internal.services.createServiceInternal, {
                slug: service.slug,
                category: service.category,
                type: service.type as "service" | "solution",
                title: service.title,
                image: imageStorageId,
                body: service.body,
                date: Date.now(),
                metaTitle: service.metaTitle,
                metaDescription: service.metaDescription,
                metaKeywords: service.metaKeywords,
                author: service.author,
                canonicalUrl: service.canonicalUrl,
            });
        }
    },
});
