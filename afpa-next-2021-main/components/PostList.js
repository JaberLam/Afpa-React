
import stylesPost from '../styles/Post.module.css'
import PostItem from './PostItem'

const PostList = ({posts}) => {
    return (
        <div className={stylesPost.grid}>
            {posts.map(post => (<PostItem post={post}/>))}
        </div>
    )
}

export default PostList
