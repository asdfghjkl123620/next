import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'



const postsDirectory = path.join(process.cwd(),'posts')

export function getSortedPostsData() {
    //取得所有的檔案名在posts底下

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        //移除".md"取得id
        const id = fileName.replace(/\.md$/,'')

        //讀取markdown檔案做為字串
        const fullPath = path.join(postsDirectory,fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        //使用gray-matter去解析post metadata的部分

        const matterResult = matter(fileContents)

        //結合資料和id

        return {
            id,
            ...matterResult.data
        }
    })

    //透過date整理所有的post

    return allPostsData.sort((a,b) => {
        if(a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}