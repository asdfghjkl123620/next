import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
import { getSortedPostsData } from '../lib/post'


//return allPostData在props物件裡面,blog posts會被傳遞至Home component
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
      <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I am Ching ,Nice to meet you,If you want to let me know more about you,you can ask me for cellphone</p>
        <p>
        (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({id, data, title }) => (
              <li  className={utilStyles.listItem} key={id}>
               {title}
              <br />
              {id}
              <br />
              {date}
              </li>
            ))}

          </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}