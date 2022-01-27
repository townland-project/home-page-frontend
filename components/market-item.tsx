/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

export function GetDate(from: Date | number): string {
    let date = new Date(from);

    return `${date.getDate()}th ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
}

export function GetRGBColor(price: number): string {
    if (price <= 10) return '#22c55e';
    else if (10 < price && price <= 20) return '#f59e0b';
    else return '#ef4444';
}

export function GetRGBAColor(price: number): string {
    if (price <= 10) return '#dcfce7';
    else if (10 < price && price <= 20) return '#fef3c7';
    else return '#fee2e2';
}


export const MarketItem = (props: Props) => {
    const item = props.item;

    return (
        < div style={{
            'borderColor': GetRGBColor(item.price),
            'boxShadow': `-1px 5px ${GetRGBColor(item.price)}`,
        }} className="flex flex-col overflow-hidden relative rounded-2xl border-2 border-solid bg-white min-w-[300px] m-[16px] p-[15px] pb-[5px] " >
            <span style={{ 'backgroundColor': GetRGBColor(item.price) }} className="text-white px-2 py-1 text-xs absolute top-2 right-8 z-0 rounded-md">{item.price} <sub>TOWL</sub></span>
            <img className="rounded-xl w-full min-h-[120px]" src={item.image} alt={item.title} />
            <a className="flex items-center justify-center rounded-full w-[45px] h-[45px] text-white bg-violet-500 drop-shadow-[0_4px_#7c3aed] absolute top-[185px] right-10 z-0" href={`/market/${item.id}`}>
                <i className="material-icons">shopping_bag</i>
            </a>
            <h3 className="mt-8 ml-2 text-2xl text-slate-800">{item.title}</h3>
            <span className="ml-2 text-gray-500">Sales start: {GetDate(item.start)}</span>
            <p className="ml-2 text-slate-600">{item.description}</p>
            <div className="flex flex-wrap items-center mt-4">
                <span style={{ 'color': GetRGBColor(item.price), 'backgroundColor': GetRGBAColor(item.price) }} className="mr-2 mb-2 flex flex-nowrap items-center rounded-md w-fit px-2 py-1 text-xs">
                    <i className="material-icons text-sm mr-2">people</i>
                    <span>{item.offers} Person{item.offers > 2 ? 's' : ''} offered</span>
                </span>
                {
                    item.keywords.map((keyword, index) =>
                        <span key={index} className="mr-2 mb-2 px-[12px] py-[4px] h-fit rounded-md bg-slate-100 text-slate-600 text-sm">
                            {keyword}
                        </span>
                    )
                }
            </div>
        </div>
    )
}

interface Props {
    item: IMarketItem
}

export interface IMarketItem {
    id: number
    image: string
    title: string
    description: string
    keywords: string[]
    price: number
    offers: number
    start: Date | number
    creator?: {
        image: string
        name: string
        address: string
    }
    collection?: {
        image: string
        name: string
        creator: string // creator address
    }
}