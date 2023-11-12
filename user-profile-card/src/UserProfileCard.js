import profile from  './Profile.JPG';
import card from './html.jpg';
import './UserProfileCard.css'
import {FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaEnvelope} from "react-icons/fa";
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
                    <h1>Karabo Rithuri</h1>
                    <h5>Bcom in Information Systems Undergraduate</h5>
                    
                    <p>Skills and Technologies:<br></br> Python, C#, SQL, HTML, CSS, Bootstrap, JavaScript, React</p>
                </div>
                <div className="icons">
                    <FaTwitter className='social-media' /> <FaFacebook className='social-media'/> <FaLinkedin className='social-media'/> <FaGithub className='social-media'/> <FaEnvelope className='social-media'/> <FaInstagram className='social-media'/>
                </div>
            </div>
            
        </div>
    )
}
export default UserProfileCard;