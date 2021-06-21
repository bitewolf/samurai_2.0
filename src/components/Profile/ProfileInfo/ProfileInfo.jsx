import Preloader from "../../Common/Preloader/Preloader"
// import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }
   return (
        <div>
                <img src={profile.photos.large} alt="текст"></img><br></br>
                <span>{profile.aboutMe}</span><br></br>
                <span>{profile.fullName}</span>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
}

export default ProfileInfo

