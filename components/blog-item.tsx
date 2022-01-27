/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Api } from "../api";

export function GetDate(from: Date | number): string {
    let date = new Date(from);

    return `${date.getDate()}th ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
}

export const BlogItem = (props: Props) => {
    const item = props.item;

    return (
        <Link href={`/blog/post/${item.id}`}>
            <a className="flex flex-col bg-white rounded-xl p-[20px] m-[20px] max-w-[300px]">
                <img className="rounded-xl" src={`${Api.Endpoint}${item.image}`} alt={item.title} />
                <h2 className="mt-4 mb-1 text-2xl">{item.title}</h2>
                <div className="flex flex-nowrap">
                    <strong className="mr-5">{GetDate(item.date)}</strong> <span>{item.author}</span>
                </div>
                <p className="mt-2 text-gray-700 text-sm">
                    {item.summery}
                </p>
            </a>
        </Link>
    )
}

interface Props {
    item: IBlogItem
}

export interface IBlogItem {
    id: string | number
    image: string
    title: string
    author: string
    date: Date | number
    summery: string
    keywords: string[]
}