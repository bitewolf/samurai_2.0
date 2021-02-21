import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state'

const MyPosts = (props) => {
    
let postsElements = props.postData.map ( p => <Post message={p.message} likesCount={p.likesCount} />)
let newPostElement = React.createRef()

let addPost = () => {
    
    props.dispatch(addPostActionCreator())
}

let onPostChange = () => {
    let text = newPostElement.current.value
    props.dispatch(updateNewPostTextActionCreator(text))
}

 return (
        <div>
        My posts
        <div>
            <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}></textarea>
            <div className={s.buttons}>
                <button onClick = {addPost}>Add post</button>
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