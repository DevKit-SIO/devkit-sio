import { Facebook, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from 'next';

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await fetchQuery(api.blog.getPostBySlug, { slug });

    if (!post) {
        return {};
    }

    return {
        title: post.metaTitle || post.title,
        description: post.metaDescription,
        keywords: post.metaKeywords?.split(',').map(k => k.trim()),
        authors: [{ name: post.author || 'DevKit SIO Team' }],
        alternates: {
            canonical: post.canonicalUrl || `https://www.devkit-sio.com/blog/${slug}`,
        },
        openGraph: {
            title: post.metaTitle || post.title,
            description: post.metaDescription,
            type: 'article',
            publishedTime: new Date(post.date).toISOString(),
            authors: [post.author || 'DevKit SIO Team'],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.metaTitle || post.title,
            description: post.metaDescription,
            images: [post.image],
        },
    };
}

export default async function Post({ params }: PageProps) {
    const { slug } = await params;

    const post = await fetchQuery(api.blog.getPostBySlug, { slug });

    if (!post) {
        notFound();
    }

    // Get the current URL for sharing
    const headersList = await headers();
    const host = headersList.get("host") || "www.devkit-sio.com";
    const protocol = headersList.get("x-forwarded-proto") || "http";
    const shareUrl = `${protocol}://${host}/blog/${slug}`;

    const encodedUrl = encodeURIComponent(shareUrl);
    const shareTitle = encodeURIComponent(post.title);

    // JSON-LD Structured Data for AI SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.metaTitle || post.title,
        description: post.metaDescription,
        image: post.image,
        datePublished: new Date(post.date).toISOString(),
        author: {
            '@type': 'Person',
            name: post.author || 'DevKit SIO Team',
        },
        publisher: {
            '@type': 'Organization',
            name: 'DevKit SIO',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.devkit-sio.com/assets/images/logo.png', // Assuming logo path
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': post.canonicalUrl || `https://www.devkit-sio.com/blog/${slug}`,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="full-width relative">
                <div className="aspect-[384/91] h-[350px] md:h-[455px]">
                    <img className="h-full w-full object-cover" src={post.image || "/assets/images/hero-single.png"} alt={post.title} />
                </div>
                <div className="absolute w-full h-full bg-gray-900 top-0 opacity-50"></div>
                <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[41px] uppercase">
                        {post.category}
                    </span>
                    <h1 className="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-semibold text-white w-[18ch] lg:w-[25ch]">
                        {post.title}
                    </h1>
                </div>
            </div>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto text-md text-gray-500 relative blog-content max-w-[830px] text-[14px] leading-[25px] md:text-[18px] md:leading-[32px]">
                <div className="flex flex-col items-center gap-6 absolute top-0 follow-scroll translate-x-[-106px] hidden xl:flex">
                    <p className="text-heading-6 font-bold font-chivo text-gray-400">Share</p>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors"> <Facebook /></a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors"> <Linkedin /></a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareTitle}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors"> <Twitter /></a>
                    <a href={`https://wa.me/?text=${shareTitle}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors"> <MessageCircle /></a>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
        </>
    )
}
