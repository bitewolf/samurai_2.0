import Preloader from "../../Common/Preloader/Preloader"
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }
   return (
        <div>
            {/* <div>
            <img src='https://drifterplanet.com/wp-content/uploads/2017/12/Cancun-Private-Beach-Party.jpg'></img>
            </div> */}
            <div>
                <img src={props.profile.photos.large}></img><br></br>
                <span>{props.profile.aboutMe}</span><br></br>
                <span>{props.profile.fullName}</span>
                <ProfileStatus status={'status'} />
            </div>
        </div>
    )
}

export default ProfileInfo

