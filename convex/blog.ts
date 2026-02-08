import { query, mutation, internalMutation } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

// Query to get paginated blog posts with image URLs
export const getPaginatedPosts = query({
    args: { paginationOpts: paginationOptsValidator },
    handler: async (ctx, args) => {
        const result = await ctx.db
            .query("blog")
            .order("desc")
            .paginate(args.paginationOpts);

        const pageWithUrls = await Promise.all(
            result.page.map(async (post) => ({
                ...post,
                image: (await ctx.storage.getUrl(post.image)) ?? "",
            }))
        );

        return { ...result, page: pageWithUrls };
    },
});

// Query to get the latest blog posts with image URLs
export const getLatestPosts = query({
    args: { limit: v.optional(v.number()) },
    handler: async (ctx, args) => {
        const limit = args.limit ?? 6;
        const posts = await ctx.db
            .query("blog")
            .order("desc")
            .take(limit);

        // Map over posts to generate image URLs from storage IDs
        const postsWithUrls = await Promise.all(
            posts.map(async (post) => ({
                ...post,
                image: (await ctx.storage.getUrl(post.image)) ?? "",
            }))
        );

        return postsWithUrls;
    },
});

// Query to get a single post by slug with image URL
export const getPostBySlug = query({
    args: { slug: v.string() },
    handler: async (ctx, args) => {
        const post = await ctx.db
            .query("blog")
            .filter((q) => q.eq(q.field("slug"), args.slug))
            .first();

        if (!post) return null;

        return {
            ...post,
            image: (await ctx.storage.getUrl(post.image)) ?? "",
        };
    },
});

// Mutation to create a new blog post (Public)
export const createPost = mutation({
    args: {
        slug: v.string(),
        category: v.string(),
        title: v.string(),
        image: v.string(),
        body: v.string(),
        bgColor: v.string(),
    },
    handler: async (ctx, args) => {
        const postId = await ctx.db.insert("blog", {
            slug: args.slug,
            category: args.category,
            title: args.title,
            image: args.image, // Should be storage ID
            body: args.body,
            bgColor: args.bgColor,
            date: Date.now(),
        });
        return postId;
    },
});

// Internal mutation for seeding (allows setting date)
export const createPostInternal = internalMutation({
    args: {
        slug: v.string(),
        category: v.string(),
        title: v.string(),
        image: v.string(),
        body: v.string(),
        bgColor: v.string(),
        date: v.number(),
    },
    handler: async (ctx, args) => {
        return await ctx.db.insert("blog", args);
    },
});

// Mutation to generate upload URL for images
export const generateUploadUrl = mutation({
    handler: async (ctx) => {
        return await ctx.storage.generateUploadUrl();
    },
});
