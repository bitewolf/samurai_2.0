import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { useFormik } from 'formik'

const MyPosts = (props) => {
    
let postsElements = props.postData.map ( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

let onAddPost = () => {
    props.addPost()
}

const formik = useFormik({
    initialValues: {
        postText: 'new post'
    },
    onSubmit: values => {
    }
})

const onChange = (e) => {
    
    formik.handleChange(e)
    props.updateNewPostText(formik.values.postText)
}


  return (
        <div>
            My posts
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <input type = 'text' id='postText' name='postText' onChange={onChange} value={formik.values.postText}/>
                        <div className={s.buttons}>
                                <button type = 'submit' onClick = {onAddPost}>Add post</button>
                                <button type = 'button'>Remove</button>
                        </div>
                    </form>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>  
        </div>
    )
}

export default MyPosts