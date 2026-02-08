'use client';

import { ArrowRight, Loader2 } from "lucide-react";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Solutions() {
    const { results, status, loadMore } = usePaginatedQuery(
        api.services.getPaginatedSolutions,
        {},
        { initialNumItems: 12 }
    );

    return (
        <>
            <img
                className="h-full w-full object-cover absolute top-0 left-0 z-0 md:!object-fill max-h-[500px] lg:max-h-[600px]"
                src="/assets/images/blog-1-bg.png" alt="background" />
            <div className="full-width">
                <div className="text-center px-5 pt-[74px] pb-[90px]">
                    <h1 className="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-7">
                        Our Solutions
                    </h1>
                    <p className="font-bold font-chivo text-[14px] md:text-heading-6 text-gray-600 mx-auto md:max-w-[55ch]">
                        Innovative digital solutions designed to streamline operations, enhance customer experience, and drive business success.
                    </p>
                </div>
            </div>
            <div className="px-[12px] md:px-[36px] xl:px-0 mt-[120px] z-10 relative lg:mt-[198px]">
                {!results || (status === "LoadingFirstPage") ? (
                    <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
                        {/* Skeleton Loading State */}
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="block group animate-pulse">
                                <div className="flex items-center mb-[11px]">
                                    <div className="bg-gray-200 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                                </div>
                                <div className="h-8 bg-gray-200 rounded w-full mb-[26px]"></div>
                                <div className="relative mb-16">
                                    <div className="aspect-[430/275] bg-gray-200 rounded-2xl"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
                        {results.map((solution) => (
                            <a key={solution._id} className="block group" href={`/solutions/${solution.slug}`}>
                                <div className="flex items-center mb-[11px]">
                                    <div className="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                                    <span className="uppercase text-gray-500">{solution.category}</span>
                                </div>
                                <p className="text-heading-4 font-chivo font-bold inline-block mb-[26px]">
                                    {solution.title}
                                </p>
                                <div className="relative mb-16">
                                    <div className="relative">
                                        <div className="pr-[26px] aspect-[430/275]">
                                            <img
                                                className="h-full w-full object-cover rounded-2xl z-10 relative bg-gray-100"
                                                src={solution.image || "/assets/images/thumbnail-2.png"}
                                                alt={solution.title}
                                            />
                                        </div>
                                        <div className="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                                            <div
                                                className="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px] bg-bg-2"
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                <div className="mt-12 flex justify-center pb-20">
                    {status === "LoadingMore" ? (
                        <div className="flex items-center gap-2 text-gray-500">
                            <Loader2 className="animate-spin w-6 h-6" /> Loading more...
                        </div>
                    ) : status === "CanLoadMore" ? (
                        <button
                            type="button"
                            onClick={() => loadMore(12)}
                            className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit mx-auto"
                        >
                            <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                Load more services
                            </span>
                            <ArrowRight className="ml-[7px] w-[12px] text-white group-hover:text-black" />
                        </button>
                    ) : null}
                </div>
            </div>
        </>
    )
}
