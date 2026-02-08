import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const subscribe = mutation({
    args: { email: v.string() },
    handler: async (ctx, args) => {
        // Check if email already exists
        const existing = await ctx.db
            .query("newsletter")
            .filter((q) => q.eq(q.field("email"), args.email))
            .first();

        if (existing) {
            await ctx.scheduler.runAfter(0, internal.actions.sendEmail.sendEmail, { email: args.email });
            return { status: "already_subscribed", message: "We have received your request!" };
        }

        // Insert new subscription
        await ctx.db.insert("newsletter", {
            email: args.email,
            date: Date.now(),
        });

        // Schedule email sending
        await ctx.scheduler.runAfter(0, internal.actions.sendEmail.sendEmail, { email: args.email });

        return { status: "success", message: "Thank you! We have received your request." };
    },
});
