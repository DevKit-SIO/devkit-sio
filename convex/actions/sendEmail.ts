"use node";

import { internalAction } from "../_generated/server";
import { v } from "convex/values";
import nodemailer from "nodemailer";

export const sendEmail = internalAction({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const senderEmail = process.env.SENDER_EMAIL || process.env.SMTP_USER || "contact@devkit-sio.com";

    // 1. Send Admin Notification
    await transport.sendMail({
      from: senderEmail,
      to: "contact@devkit-sio.com",
      subject: "New Project Inquiry - DevKit SIO",
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0d9488;">New Project Inquiry</h2>
          <p>You have received a new inquiry from the website.</p>
          <p><strong>Email:</strong> ${args.email}</p>
          <p style="font-size: 12px; color: #666; margin-top: 20px;">
            This email was sent automatically from your website contact form.
          </p>
        </div>
      `,
    });

    // 2. Send User Confirmation
    await transport.sendMail({
      from: senderEmail,
      to: args.email,
      subject: "We've received your inquiry - DevKit SIO",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <div style="text-align: center; margin-bottom: 20px;">
             <h1 style="color: #0d9488; margin: 0;">DevKit SIO</h1>
          </div>
          
          <h2 style="color: #1e293b;">Thanks for reaching out!</h2>
          
          <p style="color: #475569; line-height: 1.6;">
            We have received your project inquiry. Our team will review your request and get back to you shortly.
          </p>
          
          <div style="background-color: #f0fdfa; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #0d9488;">
            <p style="margin: 0; color: #134e4a;">
              <strong>While you wait:</strong> Check out our <a href="https://devkit-sio.com/blog" style="color: #0d9488; text-decoration: none; font-weight: bold;">latest blog posts</a> for tech insights and updates.
            </p>
          </div>
          
          <p style="color: #475569; font-size: 14px; margin-top: 30px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
            Best regards,<br>
            The DevKit SIO Team
          </p>
        </div>
      `,
    });

    return { success: true, message: "Email sent successfully" };
  },
});
