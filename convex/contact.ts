import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const submit = mutation({
    args: {
        fullname: v.string(),
        company: v.string(),
        email: v.string(),
        phone: v.string(),
        message: v.string(),
    },
    handler: async (ctx, args) => {
        // Insert into contact table
        await ctx.db.insert("contact", {
            fullname: args.fullname,
            company: args.company,
            email: args.email,
            phone: args.phone,
            message: args.message,
            date: Date.now(),
        });

        // Schedule email sending
        await ctx.scheduler.runAfter(0, internal.actions.sendEmail.sendEmail, {
            email: args.email,
        });

        return { status: "success", message: "Message sent successfully!" };
    },
});
