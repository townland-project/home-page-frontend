/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link"
import Image from "next/image"

import { Social } from "../database/footer"

export const SimpleFooter = () => {
    return (
        <footer className="hidden md:flex flex-nowrap items-center mt-auto px-[5vw] py-[30px]">
            <Link href="/">
                <a
                    className="mx-5 text-ms text-slate-500 hover:text-blue-600 flex items-center justify-center"
                >
                    Home
                </a>
            </Link>

            {/* <Link
                className="mx-5 text-ms text-slate-500 hover:text-blue-600 flex items-center justify-center"
                to="/exhange">
                Exchange
            </Link> */}

            <Link href="/market">
                <a
                    className="mx-5 text-ms text-slate-500 hover:text-blue-600 flex items-center justify-center"
                    href="/market">
                    Market Place
                </a>
            </Link>


            <Link href="/event">
                <a
                    className="mx-5 text-ms text-slate-500 hover:text-blue-600 flex items-center justify-center"
                    href="/event">
                    Events
                </a>
            </Link>

            <Link href="/blog">
                <a
                    className="mx-5 text-ms text-slate-500 hover:text-blue-600 flex items-center justify-center"
                    href="/blog">
                    Blog
                </a>
            </Link>

            <div className="flex-1"></div>
            {
                Social.map((item, index) =>
                    <a
                        key={index}
                        className="mr-6 rounded-full w-[32px] h-[32px] bg-slate-800 flex items-center justify-center"
                        href={item.link}>
                        <Image className="w-[16px] h-[16px]" width="16px" height="16px" src={item.icon} alt={item.title} />
                    </a>
                )
            }
            <div className="flex-1"></div>

            <span className="ml-3 text-ms text-slate-600">&copy; 2022 Townland</span>
        </footer >
    )
}