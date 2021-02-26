import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'

const MyPosts = (props) => {
    debugger
let postsElements = props.postData.map ( p => <Post message={p.message} likesCount={p.likesCount} />)
let newPostElement = React.createRef()

let onAddPost = () => {
    props.addPost()
}

let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
}

 return (
        <div>
        My posts
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            <div className={s.buttons}>
                <button onClick = {onAddPost}>Add post</button>
                <button>remove</button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
        </div>
    )
}

export default MyPosts