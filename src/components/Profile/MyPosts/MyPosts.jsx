import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are u', likesCount: 15},
        {id: 2, message: 'I am trololo', likesCount: 2},
        {id: 3, message: 'azaza', likesCount: 101}
    ]

    return (
        <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>remove</button>
        </div>
        <div className={s.posts}>
            <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            <Post message={postData[2].message} likesCount={postData[2].likesCount}/>

        </div>
        </div>
    )
}

export default MyPosts

