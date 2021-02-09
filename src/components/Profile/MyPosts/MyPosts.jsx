import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are u', likesCount: 15},
        {id: 2, message: 'I am trololo', likesCount: 2},
        {id: 3, message: 'Oww shit', likesCount: 15},
        {id: 4, message: 'God dammit', likesCount: 2},
        {id: 5, message: 'azaza', likesCount: 101}
    ]

    let postsElement = posts
    .map(p => <Post message={p.message} likesCount={p.likesCount}/>)    
    return (
        <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>remove</button>
        </div>
        <div className={s.posts}>
            {postsElement}
        </div>
        </div>
    )
}

export default MyPosts

