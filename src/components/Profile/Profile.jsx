import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import store from './../../redux/redux-store'

const Profile = (props) => {
    
    let state = props.store.getState()
    
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={state}  postData = {state.profilePage.postData} newPostText = {state.profilePage.newPostText} dispatch={props.store.dispatch}/>
            
        </div>
    )
}

export default Profile

