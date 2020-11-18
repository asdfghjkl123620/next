import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'


export default function Post({ postData }) {
    return (
    <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        {/* {postData.title}
        <br/>
        {postData.id}
        <br/> */}
        {/* {postData.date} */}
            <div className={utilStyles.lightText}>
                <Date dateString={ postData.date }/>
            </div>
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml }}/>
        </article>
    </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    //回傳一個list是id的值
    return {
        paths,//The array of possible values for id must be the value of the paths key of the returned object.
        fallback: false//任何透過getStaticPaths path沒有回傳直 會變成404
    }
}


export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    //運用params.id抓取需要的資料for blog post
    return {
        props: {
            postData
        }
    }
}