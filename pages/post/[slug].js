import ReadersNav from '../../components/ReadersNav'
import Recommandation from '../../components/Recommandation'
import ArticleMain from '../../components/ArticleMain'
import { MediumContext } from '../../context/MediumContext'
import { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'



const styles = {
    content:`flex`,
}

const Post = () => {
    const {posts,users} = useContext(MediumContext)
    const router = useRouter()

    const [post,setPost] = useState([])
    const [author,setAuthor] = useState([])

    useEffect(()=>{

        if(posts.length===0 || users.lenght===0) { 
            return
        }

        // console.log(router.query.slug,"Gun Gun Gun")

        setPost(posts.find(post=>post.id === router.query.slug))

        // console.log(users,"just fire fire fire")
        setAuthor(users.find(user => user.id === post.data?.author),'MoneyFace')

    },[post])

    return(
        <>
        <div className={styles.content}>
            <ReadersNav author={author} />
            <ArticleMain post={post} author={author} key={post.id}/>
            <Recommandation author={author} />
        </div>
        </>
    )
}
export default Post