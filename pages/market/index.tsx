import type { NextPage } from 'next'
import { useState } from 'react'

import { MarketItem } from '../../components/market-item'
import { SimpleFooter } from '../../components/simple-footer'
import { SimpleHeader } from '../../components/simple-header'
import { Items } from '../../database/market'
import { Filter } from './_filter'

const Market: NextPage = () => {
    const [show, setShow] = useState(false)

    return (
        <main data-simplebar className="bg-slate-100 w-screen h-screen font-roboto relative select-none overflow-y-auto overflow-x-hidden">
            <SimpleHeader paddingBottom='pb-[150px] lg:pb-[250px]' backgroundColor='bg-blue-300' />

            <div className="flex flex-nowrap px-[0vw] md:px-[10vw]">
                <Filter show={show} />

                <div className="flex flex-wrap justify-center md:justify-start relative -top-[175px]">
                    {
                        Items.map(item => <MarketItem key={item.id} item={item} />)
                    }
                </div>
            </div>

            <button onClick={() => setShow(!show)} className="bg-red-400 z-10 px-4 pr-6 py-3 text-lg rounded-lg shadow-xl hover:shadow-3xl active:scale-95 md:hidden flex flex-nowrap items-center fixed bottom-4 left-4">
                <i className="material-icons mr-2">filter_alt</i>
                Filters
            </button>

            <SimpleFooter />
        </main>
    )
}

export default Market
