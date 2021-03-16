import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { Form, Field } from 'react-final-form'

const MyPosts = (props) => {
    
let postsElements = props.postData.map ( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
let newPostElement = React.createRef()

let onAddPost = () => {
    props.addPost()
}

let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
}

const onSubmit = (e) => {
    console.log(e)
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

            FORM
                <Form onSubmit={onSubmit}
                    render={({ handleSubmit })=>(
                        <form onSubmit={handleSubmit}>
                            <Field name='login' component='input' placeholder='login'/>
                            <button type='submit'>submit</button>
                        </form>
                    )}
                
                
                />
        </div>
    )
}

export default MyPosts