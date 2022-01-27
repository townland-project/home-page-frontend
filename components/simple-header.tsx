import Link from "next/link"
import { HeaderLinks } from "../database/header"

export const SimpleHeader = (props: Props) => {
    return (
        <header className={`flex flex-col px-4 sm:px-14 pt-6 ${props.paddingBottom ?? ''} ${props.backgroundColor ?? ''}`}>
            <div className="flex flex-nowrap items-center">
                <Link href="/">
                    <a className="flex flex-nowrap items-center">
                        <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
                        <div className="flex flex-col ml-[10px]">
                            <strong className="text-[#303952] text-md md:text-xl">Townland</strong>
                            <span className="text-[#596275] text-xs md:text-sm">Your 2D RP world</span>
                        </div>
                    </a>
                </Link>
                <div className="flex-1"></div>
                <div className="hidden md:flex flex-nowrap items-center">
                    {
                        HeaderLinks.map((link, index) =>
                            <Link
                                key={index}
                                href={link.path}>
                                <a
                                    className="h-10 px-4 mr-2 rounded-md text-[#303952] hover:bg-slate-100/30 flex items-center justify-center"
                                    href={link.path}>
                                    {link.name}

                                </a>
                            </Link>
                        )
                    }

                    <div className="w-[1px] h-8 bg-[#303952] mr-8"></div>

                    <a className="tl-button bg-blue-500 text-gray-900" href="https://play.townland.xyz">
                        Enter the world
                    </a>
                </div>
            </div>
            <div className="flex flex-col mt-8 lg:px-16">
                {props.children}
            </div>
        </header>
    )
}

interface Props {
    backgroundColor?: string
    paddingBottom?: string
    children?: any
}