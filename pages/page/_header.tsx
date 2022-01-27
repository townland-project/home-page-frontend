/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link"
import { useRouter } from "next/router"
import { Pages } from "../../database/page"

export const Header = (props: Props) => {
    const Path = useRouter().asPath
    

    return (
        <header className="flex flex-col items-center h-screen w-[65px]">
            <Link href='/'>
                <a href="/" className="w-[45px] h-[45px] mt-8 -mb-8 bg-app-logo bg-center bg-no-repeat bg-contain">
                </a>
            </Link>
            <div className="flex-1"></div>
            <div className="flex flex-nowrap -rotate-90">
                {
                    Pages.map((item, index) =>
                        <Link
                            key={index}
                            href={item.path}
                        >
                            <a
                                style={{ 'color': item.path === Path ? props.color : '' }}
                                className="text-gray-500 mx-8"
                                href={item.path}>
                                {item.name}
                            </a>
                        </Link>
                    )
                }
            </div>
            <div className="flex-1"></div>
        </header>
    )
}

interface Props {
    color: string
}