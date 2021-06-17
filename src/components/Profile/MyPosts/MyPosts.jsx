import s from './MyPosts.module.css'
import Post from './Post/Post'
import React, { PureComponent } from 'react'
import validate from './../../../utils/validators/validatorsJax'
import { Formik, useFormik } from 'formik'

// class MyPosts extends PureComponent {

//     // shouldComponentUpdate (nextProps, nextState) {
//     //     return nextProps !== this.props || nextState !== this.state
//     // }

//     render() {
//         console.log('Render')
//         let postsElements = this.props.postData.map ( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

//         const initialValues = {
//             postText: 'new post'
//         }

//         const onSubmit = values => {
//             this.props.addPost(values.postText)
//         }

//         const formikProps = {
//             initialValues,
//             onSubmit,
//             validate
//         }


//         return (
//                 <div>
//                     My posts
//                     <div>
//                         <Formik {...formikProps} >
//                             {props => 
//                                 (
//                                     <form onSubmit={props.handleSubmit}>
//                                     <div>
//                                         <input type = 'text' id='postText' name='postText' onChange={props.handleChange} value={props.values.postText}/>
//                                         {props.errors.postText ? <div className={s.errors}>{props.errors.postText}</div> : null}
//                                     </div>
//                                     <div className={s.buttons}>
//                                         <button type = 'submit'>Add post</button>
//                                         <button type = 'button'>Remove</button>
//                                     </div>
//                                 </form> 
//                                 )}

//                         </Formik>

                        
//                     </div>
//                     <div className={s.posts}>
//                         {postsElements}
//                     </div>  
//                 </div>
//             )
//     }


// }


const MyPosts = React.memo((props) => {

console.log('Render')
let postsElements = [...props.postData].reverse().map ( p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>)

const initialValues = {
    postText: 'new post'
}

const onSubmit = values => {
    props.addPost(values.postText)
}

const formik = useFormik({
    initialValues,
    onSubmit,
    validate
})


  return (
        <div>
            My posts
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input type = 'text' id='postText' name='postText' onChange={formik.handleChange} value={formik.values.postText}/>
                        {formik.errors.postText ? <div className={s.errors}>{formik.errors.postText}</div> : null}
                    </div>
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
})

export default MyPosts