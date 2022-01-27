/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'

import { SimpleFooter } from '../../../components/simple-footer'
import { SimpleHeader } from '../../../components/simple-header'

import { Api } from '../../../api'

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'
import { IBlog } from '../../../api/interfaces/blog'
import { GetDate } from '../../../components/blog-item'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let id: string = ctx.params?.id as string

  const { data } = await Api.Blog.FindById(id) // your fetch function here 

  return {
    props: {
      Item: data
    }
  }
}

const BlogPost: NextPage<Props> = (props: Props) => {
  return (
    <main data-simplebar className="bg-slate-100 w-screen h-screen font-roboto relative select-none overflow-y-auto overflow-x-hidden">
      <Head>
        <title>Townland | {props.Item.attributes.title}</title>
      </Head>
      <SimpleHeader paddingBottom='pb-[250px]' backgroundColor='bg-pink-200' />
      <div className="flex flex-col relative -top-44 px-[5vw] lg:px-[15vw]">
        <div className="lg:flex lg:flex-nowrap bg-white p-3 rounded-xl border-2 border-gray-900 shadow-[0_2px_#111827]">
          <div className="flex flex-col mx-auto lg:mx-0 lg:mr-8 lg:min-w-[400px]">
            <img className="rounded-xl lg:w-[400px]" src={`${Api.Endpoint}${props.Item.attributes.image.data.attributes.url}`} alt={props.Item.attributes.title} />
          </div>

          <div className="flex flex-col mt-4 px-4 lg:px-0">
            <div className="flex flex-nowrap">
              <strong className="mr-5">{GetDate(props.Item.attributes.publishedAt)}</strong> <span>{props.Item.attributes.author.data.attributes.username}</span>
            </div>
            <h2 className="mt-4 mb-1 text-2xl">{props.Item.attributes.title}</h2>
            <p className="mt-2 text-gray-700 text-sm">
              {props.Item.attributes.summery}
            </p>

            <div className="flex flex-nowrap items-center mt-auto">
              {
                props.Item.attributes.keywords.data.map((keyword, index) =>
                  <span key={index} className="mr-2 mb-2 px-[12px] py-[4px] h-fit rounded-md bg-slate-200 text-slate-600 shadow text-sm">
                    #{keyword.attributes.name.replaceAll(' ', '_')}
                  </span>
                )
              }
            </div>
          </div>
        </div>

        <div className="px-5 py-7" dangerouslySetInnerHTML={{ __html: props.Item.attributes.content! }}></div>
      </div>
      <SimpleFooter />
    </main >
  )
}

export default BlogPost

interface Props {
  Item: IBlog
}