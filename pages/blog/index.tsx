import type { NextPage } from 'next'

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'
import { IBlog } from '../../api/interfaces/blog';
import BlogCategory, { getServerSideProps as getSSP } from './category/[name]';

export const getServerSideProps: GetServerSideProps = getSSP

const Blog: NextPage<Props> = (props: Props) => {
  return (
    <BlogCategory ActiveTab='all' TabItems={props.TabItems} Posts={props.Posts} />
  )
}

export default Blog

interface Props {
  TabItems?: string[]
  Posts?: IBlog[]
}