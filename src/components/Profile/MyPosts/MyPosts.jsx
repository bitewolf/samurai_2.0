import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from 'react'
import { useFormik } from 'formik'

const MyPosts = (props) => {
    
let postsElements = props.postData.map ( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

const formik = useFormik({
    initialValues: {
        postText: 'new post'
    },
    onSubmit: values => {
        props.addPost(values.postText)
    }
})


  return (
        <div>
            My posts
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <input type = 'text' id='postText' name='postText' onChange={formik.handleChange} value={formik.values.postText}/>
                        <div className={s.buttons}>
                                <button type = 'submit'>Add post</button>
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