import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
    return (
        <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>remove</button>
        </div>
        <div className={s.posts}>
            <Post message='Hi, how are u?' likesCount='10'/>
            <Post message="It's my first post" likesCount='110'/>

        </div>
        </div>
    )
}

export default MyPosts

