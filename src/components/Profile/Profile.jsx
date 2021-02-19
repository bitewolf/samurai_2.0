import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts  postData = {props.state.postData} newPostText = {props.state.newPostText} addPost={props.addPost} updNewPostText={props.updNewPostText}/>
        </div>
    )
}

export default Profile

