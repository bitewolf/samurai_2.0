import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts  postData = {props.store.profilePage.postData} newPostText = {props.store.profilePage.newPostText} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile

