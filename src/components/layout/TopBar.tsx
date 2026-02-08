export default function TopBar() {

    return (
        <div className="w-full address">
            <div className="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8">
                <p className="text-base hidden font-bold md:block">
                    <a href="https://share.google/2YE7EgChu74pyNXpv">
                        Résidence Al amira 3, 4ème étage, Bureau 42, Av. Yacoub El Mansour, 40000 - Marrakech - Maroc
                    </a>
                </p>
                <div className="flex items-center contact ml-auto gap-[10px] md:gap-5 md:flex-row">
                    <span>
                        <a href="tel:+212661333946">(+212) 6 61 333 946</a>
                    </span>
                    <div className="border border-dashed border-white self-stretch"></div>
                    <span>
                        <a href="mailto:contact@devkit-sio.com">contact@devkit-sio.com</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
