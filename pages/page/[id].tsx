import Head from "next/head"
import ReactMarkdown from 'react-markdown'
import { Header } from "./_header"
import { Api } from "../../api"
import { IPage } from "../../api/interfaces/page"

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let id: string = ctx.params?.id as string

    const { data } = await Api.Page.FindById(id) // your fetch function here     

    if (data.length == 0) {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {}
        };
    }

    return {
        props: {
            Item: data[0]
        }
    }
}

const Page: NextPage<Props> = (props: Props) => {
    return (
        <main className="flex flex-nowrap bg-slate-200">
            <Head>
                <title>Townland | {props.Item.attributes.title}</title>
            </Head>

            <Header color="#d946ef" />
            <section data-simplebar className="flex flex-col w-full h-screen px-16 py-10">
                <h1 className="text-4xl text-slate-700">{props.Item.attributes.title}</h1>

                <div className="px-6 py-4">
                    <ReactMarkdown>{props.Item.attributes.content}</ReactMarkdown>
                </div>
            </section>
        </main>
    )
}

export default Page

interface Props {
    Item: IPage
}