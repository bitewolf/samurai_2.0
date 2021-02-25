import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import store from './../../redux/redux-store'

const Profile = () => {
      
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
            
        </div>
    )
}

export default Profile

