export default function TopBar() {

    return (
        <div className="w-full address">
            <div className="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
                <p className="text-base hidden font-bold md:block">
                    66 avenue des Champs, 75008, Paris, France
                </p>
                <div className="flex items-center contact ml-auto gap-[10px] md:gap-5 md:flex-row">
                    <span>(+212) 6 61 333 946</span>
                    <div className="border border-dashed border-white self-stretch"></div>
                    <span>
                        <a href="">contact@devkit-sio.com</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
