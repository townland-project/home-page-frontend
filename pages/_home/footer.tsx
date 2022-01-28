/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { FooterColumn, Social } from "../../database/footer"

export const Footer = () => {
    return (
        <footer className="flex flex-col px-[5vw] pt-[50px] pb-[20px]">
            <div className="md:flex flex-nowrap">
                <div className="flex flex-col w-full md:w-3/12 min-h-[250px]">
                    <div className="flex flex-nowrap items-center">
                        <div className="w-[75px] h-[75px] bg-app-logo bg-center bg-no-repeat bg-contain"></div>
                        <div className="flex flex-col ml-[10px]">
                            <strong className="text-slate-900 text-xl">Townland</strong>
                            <span className="text-slate-500 text-sm">Your 2D RP world</span>
                        </div>
                    </div>
                    <p className="text-gray-700 p-5 text-gl mt-2">
                        A two-dimensional world where people play a role and collect items in a blockchain.
                    </p>
                </div>
                <div className="flex-1"></div>
                {
                    FooterColumn.map((column, i) =>
                        <div key={i} className="flex flex-col w-full md:w-3/12 min-h-[250px]">
                            <strong className="text-gray-900 text-xl mb-4">{column.name}</strong>

                            {
                                column.link.map((link, j) =>
                                    <Link key={j} href={link.path}>
                                        <a className="text-gray-700 hover:text-blue-700 w-fit mb-2" href={link.path}>
                                            {link.name}
                                        </a>
                                    </Link>
                                )
                            }
                        </div>
                    )
                }
                <div className="flex flex-col w-full md:w-3/12 min-h-[250px]">
                    <strong className="text-gray-900 text-xl mb-4">Subscribe to our newsletter</strong>
                    <div className="flex flex-nowrap items-center">
                        <div className="tl-input-container mr-3">
                            <input type="email" placeholder="E.g. mail@townland.xyz" className="text-sm" />
                        </div>
                        <button className="whitespace-pre text-sm tl-flat-button bg-yellow-500 text-white">
                            More Events
                        </button>
                    </div>
                    <div className="flex-1"></div>
                    <strong className="hidden md:block text-gray-900 text-gl mb-4">Follow us</strong>
                    <div className="flex flex-nowrap items-center justify-center md:justify-start mb-6">
                        {
                            Social.map((item, index) =>
                                <a
                                    key={index}
                                    style={{ 'backgroundColor': item.color, 'transform': `rotate(${(index / 2) === 0 ? '20deg' : '-20deg'})` }}
                                    className="mr-6 rounded-md w-[40px] h-[40px] flex items-center justify-center hover:scale-125"
                                    href={item.link}>
                                    <img style={{ 'transform': `rotate(${(index / 2) === 0 ? '-15deg' : '15deg'})` }} className="w-[24px] h-[24px]" src={item.icon} alt={item.title} />
                                </a>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-slate-300"></div>
            <div className="flex flex-nowrap mt-3">
                &copy; {new Date().getFullYear()} with <span className="text-red-500 font-bold px-2">LOVE</span> by Townland
                <div className="flex-1"></div>
            </div>
        </footer >
    )
}