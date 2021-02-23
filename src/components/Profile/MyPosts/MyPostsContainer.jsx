import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'
import MyPosts from './MyPosts'

const MyPostsContainer = (props) => {
        
        
    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
            <MyPosts updateNewPostText = {onPostChange} addPost = {addPost}
            postData={props.postData}
            newPostText={props.newPostText}/>
        )
    }

export default MyPostsContainer