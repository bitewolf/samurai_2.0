import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'


const Profile = () => {
    return (
        <div className={s.content}>
        <div>
        <img src='https://drifterplanet.com/wp-content/uploads/2017/12/Cancun-Private-Beach-Party.jpg'></img>
        </div>
        <div>
        ava + description
        </div>
        <MyPosts />
        <div>
        <img src='https://www.tandemconstruction.com/sites/default/files/styles/project_slider_main/public/images/project-images/IMG-Fieldhouse-10.jpg?itok=Whi8hHo9' height='100px'></img>
        </div>
        </div>
    )
}

export default Profile

