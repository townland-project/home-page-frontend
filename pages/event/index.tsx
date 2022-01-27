import type { NextPage } from 'next'
import Head from 'next/head'

import { SimpleFooter } from '../../components/simple-footer'
import { SimpleHeader } from '../../components/simple-header'
import { Search } from './_search'

import { Api } from '../../api'

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'
import { IEvent } from '../../api/interfaces/event'
import { EventItem } from '../../components/event-item'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { data } = await Api.Event.Find() // your fetch function here 

    return {
        props: {
            Events: data
        }
    }
}

const Event: NextPage<Props> = (props: Props) => {
    return (
        <main data-simplebar className="bg-green-200 w-screen h-screen font-roboto relative select-none overflow-y-auto overflow-x-hidden">
            <Head>
                <title>Townland | Latest Available Events</title>
            </Head>

            <SimpleHeader paddingBottom='pb-[100px]'>
                <p className="text-2xl ml-1 text-gray-800/70">Latest Available Events</p>
                <h2 className="text-3xl md:text-4xl text-slate-700">Events that make us to be together</h2>
            </SimpleHeader>

            <div className="flex flex-col px-[5vw] md:px-[10vw] relative -top-10">
                <Search />

                <div className="flex flex-wrap">
                    {
                        props.Events.map((item, index) =>
                            <EventItem
                                key={index}
                                item={{
                                    image: item.attributes.image.data.attributes.url,
                                    title: item.attributes.title,
                                    start: item.attributes.start,
                                    end: item.attributes.end,
                                    description: item.attributes.content
                                }}
                            />
                        )
                    }
                </div>
            </div>

            <SimpleFooter />
        </main>
    )
}

export default Event

interface Props {
    Events: IEvent[]
}