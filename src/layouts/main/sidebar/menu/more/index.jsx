import { Popover, Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";

const More = () => {
    return (
        <Popover className="relative">
            <Popover.Button className="py-1 block group outline-none">
                <div className="p-3  transition-colors rounded-full pr-6 inline-flex text-xl gap-5 items-center group-hover:bg-[#eff3f41a]">
                    <div>
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width={26.25}
                            height={26.25}
                        >
                            <g>
                                <path
                                    fill="#fff"
                                    d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                                ></path>
                            </g>
                        </svg>
                    </div>

                    <div>Daha fazla</div>
                </div>
            </Popover.Button>
            <Popover.Panel className="w-[318px] rounded-xl absolute overflow-hidden bottom-0 left-0 bg-black shadow-box">
                <button className="px-4 h-14 group outline-none transition-colors w-full pr-6 inline-flex text-xl gap-5 items-center hover:bg-[#eff3f41a]">
                    <div>
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            data-testid="icon"
                            width={26.25}
                            height={26.25}
                        >
                            <g>
                                <path
                                    fill="#fff"
                                    d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
                                ></path>
                            </g>
                        </svg>
                    </div>

                    <div className="font-semibold">Para kazanma</div>
                </button>

                <Disclosure>
                    <Disclosure.Button className="h-[52px] flex w-full font-bold hover:bg-[#eff3f41a] items-center px-4">
                        İçerik Üreticisi Stüdyosu
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <Link
                            to="/"
                            className="px-3 h-11 gap-3 hover:bg-[#eff3f41a] flex items-center text-[15] text-white"
                        >
                            İstatistikler
                        </Link>
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="h-[52px] flex hover:bg-[#eff3f41a] w-full font-bold items-center px-4">
                        Profesyonel Araçlar
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <Link
                            to="/"
                            className="px-3 h-11 gap-3 text-[15] hover:bg-[#eff3f41a] flex items-center   text-white"
                        >
                            Reklamlar
                        </Link>
                    </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                    <Disclosure.Button className="h-[52px] flex hover:bg-[#eff3f41a] w-full font-bold items-center px-4">
                        Ayarlar ve Destek
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 flex flex-col">
                        <Link
                            to="/"
                            className="px-3 h-11 gap-3 flex items-center  text-[15] hover:bg-[#eff3f41a]  text-white"
                        >
                            Ayarlar ve Gizlilik
                        </Link>
                        <Link
                            to="/"
                            className="px-3 h-11 gap-3 flex items-center text-[15] hover:bg-[#eff3f41a]  text-white"
                        >
                            Yardım Merkezi
                        </Link>
                        <Link
                            to="/"
                            className="px-3 h-11 gap-3 flex items-center text-[15] hover:bg-[#eff3f41a]  text-white"
                        >
                            Görünüm
                        </Link>
                        <Link
                            to="/"
                            className="px-3 h-11 gap-3 flex items-center text-[15] hover:bg-[#eff3f41a] text-white"
                        >
                            Klavye Kısayolları
                        </Link>
                    </Disclosure.Panel>
                </Disclosure>
            </Popover.Panel>
        </Popover>
    );
};

export default More;
