import { query, mutation, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import Solutions from "@/src/app/(main)/solutions/page";

// Query to get paginated services with image URLs
export const getPaginatedServices = query({
    args: { paginationOpts: paginationOptsValidator },
    handler: async (ctx, args) => {
        const result = await ctx.db
            .query("service")
            .filter(q => q.eq(q.field('type'), 'service'))
            .order("desc")
            .paginate(args.paginationOpts);

        const pageWithUrls = await Promise.all(
            result.page.map(async (service) => ({
                ...service,
                image: (await ctx.storage.getUrl(service.image)) ?? "",
            }))
        );

        return { ...result, page: pageWithUrls };
    },
});

// Query to get paginated Solutions with image URLs
export const getPaginatedSolutions = query({
    args: { paginationOpts: paginationOptsValidator },
    handler: async (ctx, args) => {
        const result = await ctx.db
            .query("service")
            .filter(q => q.eq(q.field('type'), 'solution'))
            .order("desc")
            .paginate(args.paginationOpts);

        const pageWithUrls = await Promise.all(
            result.page.map(async (service) => ({
                ...service,
                image: (await ctx.storage.getUrl(service.image)) ?? "",
            }))
        );

        return { ...result, page: pageWithUrls };
    },
});

// Query to get a single service by slug with image URL
export const getServiceBySlug = query({
    args: { slug: v.string() },
    handler: async (ctx, args) => {
        const service = await ctx.db
            .query("service")
            .filter((q) => q.eq(q.field("slug"), args.slug))
            .first();

        if (!service) return null;

        return {
            ...service,
            image: (await ctx.storage.getUrl(service.image)) ?? "",
        };
    },
});

// Internal mutation for seeding (allows setting date)
export const createServiceInternal = internalMutation({
    args: {
        slug: v.string(),
        category: v.string(),
        type: v.union(v.literal('service'), v.literal('solution')),
        title: v.string(),
        image: v.string(),
        body: v.string(),
        date: v.number(),
        metaTitle: v.optional(v.string()),
        metaDescription: v.optional(v.string()),
        metaKeywords: v.optional(v.string()),
        author: v.optional(v.string()),
        canonicalUrl: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        // Check if slug exists to prevent duplicates during multiple seed runs
        const existing = await ctx.db
            .query("service")
            .filter((q) => q.eq(q.field("slug"), args.slug))
            .first();

        if (existing) return existing._id;

        return await ctx.db.insert("service", args);
    },
});
