import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'


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
            {allPostsData.map(({id, date, title }) => (
              <li  className={utilStyles.listItem} key={id}>
               <Link href={`/posts/${id}`}>
                 <a>{title}</a>
               </Link>             
              <br />
              {id}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date}/>
              </small>
              
              </li>
            ))}

          </ul>
      </section>
    </Layout>
  )
}


export async function getStaticProps() {
  //從檔案系統,api,db取得外部資料
  const allPostsData = getSortedPostsData()

  //props的值會傳遞到Home component
  return {
    props: {
      allPostsData
    }
  }
}