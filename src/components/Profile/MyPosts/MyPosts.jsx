import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
let postsElements = props.postData.map ( p => <Post message={p.message} likesCount={p.likesCount} />)
    return (
        <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>remove</button>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
        </div>
    )
}

export default MyPosts

