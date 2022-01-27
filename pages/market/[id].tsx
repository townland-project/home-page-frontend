/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'

import { GetDate, GetRGBAColor, GetRGBColor, IMarketItem } from '../../components/market-item'
import { SimpleFooter } from '../../components/simple-footer'
import { SimpleHeader } from '../../components/simple-header'
import { Items } from '../../database/market'

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {


    return {
        props: {
            Item: Items[parseInt(ctx.params!.id as string) - 1]
        }
    }
}

const MarketItem: NextPage<Props> = (props: Props) => {
    return (
        <main data-simplebar className="pb-44 md:pb-0 flex flex-col w-screen h-screen select-none bg-slate-200 overflow-x-hidden overflow-y-auto">
            <SimpleHeader />

            <div className="md:flex flex-nowrap mt-8 px-[5vw] lg:px-[10vw] h-[70vh]">
                <div className="flex flex-col items-center min-w-[300px] lg:min-w-[400px] h-fit bg-white px-4 py-6 rounded-xl shadow-md">
                    <img className="rounded-xl w-full md:w-[300px] lg:w-[400px]" src={props.Item.image} alt={props.Item.title} />
                    <span style={{ 'color': GetRGBColor(props.Item.price), 'backgroundColor': GetRGBAColor(props.Item.price) }} className="relative -top-6 flex flex-nowrap items-center rounded-md w-fit px-4 py-2 text-sm">
                        <i className="material-icons text-lg mr-2">people</i>
                        <span>{props.Item.offers} Person{props.Item.offers > 2 ? 's' : ''} offered</span>
                    </span>
                    <div className="lg:flex flex-nowrap w-full px-2 lg:px-0">
                        <div className="flex flex-col w-6/12">
                            <span className="mt-4 text-sm text-slate-500">Stock</span>
                            <span className="mb-4 text-2xl text-slate-600">1<sub className="text-sm">/1</sub></span>
                        </div>
                        <div className="flex flex-col w-6/12">
                            <span className="mt-4 text-sm text-slate-500">Price</span>
                            <span className="mb-4 text-2xl text-slate-600">{props.Item.price}<sub className="text-sm">TOWL</sub></span>
                        </div>
                    </div>
                    <button className="mt-4 py-3 lg:py-4 text-sm lg:text-base w-full rounded-xl bg-violet-500 text-white shadow-[0_6px_#7c3aed]">
                        Offer My Price
                    </button>
                </div>
                <div className="flex flex-col mt-8 md:mt-0 ml-8 lg:ml-12 w-full">
                    <h1 className="text-xl lg:text-3xl text-slate-800">{props.Item.title}</h1>
                    <span className="text-sm lg:text-base text-gray-500">Sales start: {GetDate(props.Item.start)}</span>
                    <span className="mt-6 text-sm text-slate-500">Keywords</span>
                    <div className="flex flex-wrap items-center mt-2">
                        {
                            props.Item.keywords.map((keyword, index) =>
                                <span key={index} className="mr-2 mb-2 px-[12px] py-[4px] h-fit rounded-md bg-slate-100 text-slate-600 text-sm">
                                    {keyword}
                                </span>
                            )
                        }
                    </div>
                    <span className="mt-6 text-sm text-slate-500">Description</span>
                    <p className="text-slate-600">{props.Item.description}</p>

                    <div className="flex flex-col mt-6">
                        <div className="flex flex-col mt-6">
                            <span className="mb-2 text-sm text-slate-500">Creator</span>
                            <a className="flex flex-nowrap items-center" href={`/market/creator/${props.Item.creator?.address}`}>
                                <div style={{ 'backgroundImage': `url(${props.Item.creator?.image})` }} className="w-[45px] h-[45px] rounded-lg bg-center bg-no-repeat bg-contain"></div>
                                <div className="flex flex-col ml-4">
                                    <span className="text-lg lg:text-2xl text-slate-700">{props.Item.creator?.name}</span>
                                    <span className="text-slate-600">{props.Item.creator?.address}</span>
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-col mt-6">
                            <span className="mb-2 text-sm text-slate-500">Collection</span>
                            <a className="flex flex-nowrap items-center" href={`/market/creator/${props.Item.creator?.address}/${props.Item.id}`}>
                                <div style={{ 'backgroundImage': `url(${props.Item.collection?.image})` }} className="w-[45px] h-[45px] rounded-lg bg-center bg-no-repeat bg-contain"></div>
                                <span className="ml-4 text-lg lg:text-2xl text-slate-700">{props.Item.collection?.name}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <SimpleFooter />
        </main>
    )
}

export default MarketItem

interface Props {
    Item: IMarketItem
}