import profile from  './Profile.JPG';
import './UserProfileCard.css'
function UserProfileCard() {
    return(
        <div className="user-profile-card">
            <img className="profile" src={profile} alt="Profile"/>
            <h2>Karabo Rithuri</h2>
            <p>A short bio about Karabo Rithuri...</p>
        </div>
    )
}
export default UserProfileCard;