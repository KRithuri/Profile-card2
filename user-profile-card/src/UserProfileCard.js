import profile from  './Profile.JPG';
import card from './html.jpg';
import './UserProfileCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UserProfileCard() {
    return(
        <div className="user-profile-card">
            <div className="card">
                <div className="card-image">
                    <img src={card} alt=""/>
                </div>
                <div className="profile-image">
                    <img src={profile} alt="Profile"/>
                </div>
                <div className="card-content">
                    <h2>Karabo Rithuri</h2>
                    <h6>Bcom in Information Systems Undergraduate</h6>
                    <h6>Aspiring Full Stack Developer</h6>
                    <p>Technical skills: Python, C#, SQL, HTML, CSS, JavaScript</p>
                </div>
                <div className="icons">
                    <FontAwesomeIcon icon="facebook"/>
                </div>
            </div>
            
            
            <div className="right">
                <div className="name-role">
                    <div className="name">
                        <h2>Karabo Rithuri</h2>
                        <p>Bcom in Information Systems Undergraduate</p>
                    </div>
                </div>
            </div>
            
            <p>A short bio about Karabo Rithuri...</p>
        </div>
    )
}
export default UserProfileCard;