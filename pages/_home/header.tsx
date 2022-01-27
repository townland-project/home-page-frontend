import Link from 'next/link'
import { HeaderLinks, HeaderTopLinks } from '../../database/header'

export const Header = () => {
    return (
        <header className="z-10 px-4 md:px-12 w-full flex flex-col">
            <div className="pt-6 flex flex-nowrap items-center justify-center md:justify-end">
                {
                    HeaderTopLinks.map((link, index) =>
                        <Link
                            key={index}
                            href={link.path}
                        >
                            <a className="ml-10 text-xs text-[#596275] hover:text-[#303952] flex items-center justify-center"
                                href={link.path}>
                                {link.name}
                            </a>
                        </Link>
                    )
                }
            </div>

            <div className="flex flex-nowrap items-center pt-6">
                <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
                <div className="flex flex-col ml-[10px]">
                    <strong className="text-[#303952] text-md md:text-xl">Townland</strong>
                    <span className="text-[#596275] text-xs md:text-sm">Your 2D RP world</span>
                </div>

                <div className="flex-1"></div>

                <div className="hidden md:flex flex-nowrap items-center">
                    {
                        HeaderLinks.map((link, index) =>
                            <Link
                                key={index}
                                href={link.path}
                            >
                                <a className="h-10 px-4 mr-2 rounded-md text-[#303952] hover:bg-slate-100/30 flex items-center justify-center"
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
        </header>
    )
}