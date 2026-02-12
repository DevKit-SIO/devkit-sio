'use client';

import Link from 'next/link';
import { usePreloadedQuery, Preloaded } from 'convex/react';
import { api } from '@/convex/_generated/api';

interface BlogSectionProps {
  preloadedPosts: Preloaded<typeof api.blog.getLatestPosts>;
}

export default function BlogSection({ preloadedPosts }: BlogSectionProps) {
  const posts = usePreloadedQuery(preloadedPosts);

  if (posts.length === 0) {
    return (
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-start justify-between lg:flex-row lg:items-end">
            <div>
              <h2 className="mb-2 text-4xl font-extrabold text-slate-900">
                Latest News
              </h2>
              <p className="text-xl text-slate-500">From Our Blog and Event Message</p>
            </div>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 lg:mt-0"
            >
              View More →
            </Link>
          </div>
          <div className="text-center py-16">
            <p className="text-slate-500">No blog posts yet. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between lg:flex-row lg:items-end">
          <div>
            <h2 className="mb-2 text-4xl font-extrabold text-slate-900">
              Latest News
            </h2>
            <p className="text-xl text-slate-500">From Our Blog and Event Message</p>
          </div>
          <Link
            href="/blog"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 lg:mt-0"
          >
            View More →
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
          {posts.map((post, index) => (
            <a className="block group" href={`/blog/${post.slug}`} key={index}>
              <div className="flex items-center mb-[11px]">
                <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                <span className="uppercase text-gray-500">{post.category}</span>
              </div>
              <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                {post.title}
              </p>
              <div className="relative mb-16">
                <div className="relative">
                  <div className="pr-[26px] aspect-[430/275]">
                    <img className="h-full w-full object-cover rounded-2xl z-10 relative"
                      src={post.image} alt={post.title} />
                  </div>
                  <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                    <div
                      style={{ backgroundColor: post.bgColor }}
                      className="w-full h-full rounded-2xl transition-all duration-200 opacity-50 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
