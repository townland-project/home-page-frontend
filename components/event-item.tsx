import { Api } from "../api";

/* eslint-disable @next/next/no-img-element */
export function GetDate(from: Date | number): string {
    let date = new Date(from);

    return `${date.getDate()}th ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
}

export const EventItem = (props: Props) => {
    const item = props.item

    return (
        <div className="flex flex-col bg-white shadow-lg rounded-xl p-[16px] m-[20px] max-w-[350px] overflow-hidden">
            <img className="rounded-xl" src={`${Api.Endpoint}${item.image}`} alt={item.title} />
            <div className="flex flex-col">
                <h2 className="mt-4 mb-1 text-2xl">{item.title}</h2>
                <span className="text-gray-500 text-sm">Event start: {GetDate(item.start)}</span>
                <span className="text-gray-500 text-sm">Event end: {GetDate(item.end)}</span>

                <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
        </div>
    )
}

interface Props {
    item: IEventItem
}

export interface IEventItem {
    image: string
    title: string
    start: Date | number
    end: Date | number
    description: string
}