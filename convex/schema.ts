import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    blog: defineTable({
        slug: v.string(),
        metaTitle: v.optional(v.string()),
        metaDescription: v.optional(v.string()),
        metaKeywords: v.optional(v.string()),
        author: v.optional(v.string()),
        canonicalUrl: v.optional(v.string()),
        category: v.string(),
        title: v.string(),
        image: v.string(),
        bgColor: v.string(),
        body: v.string(),
        date: v.number(),
    }),
    service: defineTable({
        slug: v.string(),
        metaTitle: v.optional(v.string()),
        metaDescription: v.optional(v.string()),
        metaKeywords: v.optional(v.string()),
        author: v.optional(v.string()),
        canonicalUrl: v.optional(v.string()),
        category: v.string(),
        type: v.union(v.literal('service'), v.literal('solution')),
        title: v.string(),
        image: v.string(),
        body: v.string(),
        date: v.number(),
    }),
    contact: defineTable({
        fullname: v.string(),
        company: v.string(),
        email: v.string(),
        phone: v.string(),
        message: v.string(),
        date: v.number(),
    }),
    newsletter: defineTable({
        email: v.string(),
        date: v.number(),
    }),
});
