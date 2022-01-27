import type { NextPage } from 'next'
import Head from 'next/head'

import { Tabs } from '../_tabs'
import { SimpleHeader } from '../../../components/simple-header'
import { SimpleFooter } from '../../../components/simple-footer'
import { BlogItem } from '../../../components/blog-item'

import { Api } from '../../../api'

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'
import { IBlog } from '../../../api/interfaces/blog'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let category: string = ctx.params ? ctx.params.name as string : 'all'
  // your fetch function here 
  const [tabs, posts] = await Promise.all([getTabs(), getPosts(category)])

  return {
    props: {
      ActiveTab: category,
      TabItems: tabs,
      Posts: posts
    }
  }
}

const getTabs = async (): Promise<string[]> => {
  let { data } = await Api.Category.Find()
  let tabs: string[] = data.map(item => item.attributes.name)
  tabs.unshift('all')
  return tabs
}

const getPosts = async (category: string): Promise<IBlog[]> => {
  return (await (category == 'all' ? Api.Blog.Find() : Api.Blog.FindByCategory(category))).data
}

const BlogCategory: NextPage<Props> = (props: Props) => {
  return (
    <main data-simplebar className="bg-pink-200 w-screen h-screen font-roboto relative select-none overflow-y-auto overflow-x-hidden">
      <Head>
        <title>Townland | Latest {props.ActiveTab?.charAt(0).toUpperCase() + props.ActiveTab?.slice(1)!} Blog Posts</title>
      </Head>
      <SimpleHeader paddingBottom='pb-[200px] lg:pb-[250px]'>
        <h2 className="text-5xl text-slate-700 mb-2">Latest Blog Posts</h2>
        <p className="text-xl text-slate-600">Stay up to date with posts written by Gods for <span className='underline'>{props.ActiveTab!}</span> posts</p>
      </SimpleHeader>
      <div className="tl-tab-container flex flex-col relative -top-32 px-[5vw]">
        <Tabs Active={props.ActiveTab!} Items={props.TabItems || ['']} />

        <div className="tl-tab-content bg-white py-2">
          <div className="flex flex-wrap">
            {props.Posts?.map((item, index) =>
              <BlogItem
                key={index}
                item={{
                  id: item.id,
                  image: item.attributes.image.data.attributes.url,
                  title: item.attributes.title,
                  author: item.attributes.author.data.attributes.username,
                  summery: item.attributes.summery,
                  keywords: item.attributes.keywords.data.map(keys => keys.attributes.name),
                  date: item.attributes.publishedAt
                }} />
            )}
          </div>
        </div>
      </div>

      <SimpleFooter />
    </main>
  )
}

export default BlogCategory

interface Props {
  ActiveTab?: string
  TabItems?: string[]
  Posts?: IBlog[]
}