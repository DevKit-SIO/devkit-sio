import {ArrowRight} from "lucide-react";

export default async function NotFound() {
    return (
        <div
            className="px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex flex-col justify-center items-center text-center lg:mt-[161px]">
            <div className="max-w-[565px] mb-[50px]">
                <img className="h-full w-full object-cover" src="/assets/images/404.png" alt="404 image"/>
            </div>
            <h1 className="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-7">
                Whoops! That page doesn’t exist.
            </h1>
            <h4 className="font-bold font-chivo text-[14px] xl:text-heading-5 text-gray-500 mb-[70px]">
                The page you requested could not be found
            </h4>
            <button type="button">
                <a className="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 flex-row-reverse"
                   href="/">
                    <span className="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                        Back to Homepage
                    </span>
                    <ArrowRight className="mr-4 rotate-180 text-white w-[12px] group-hover:text-black"/>
                </a>
            </button>
        </div>
    )
}
