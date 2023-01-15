import "./styles/info.css"
import profile from "./icons/profile.jpg"
import email from "./icons/email.png"
import linkedin from "./icons/linked-in.png"


export default function Info(){
    return (
        <div>
            <img className="profile-image" src={profile}></img>
            <p className="adarsh">Adarsh Dalvi</p>
            <p className="position">Frontend Developer</p>
            <p className="website">adarshDalvi.com</p>
            <div className="prof-buttons">
                <button className="emailButton">
                    <img className="email" src={email}></img>
                    Email   
                </button>
                <button className="linkedButton">
                    <img className="linkedin" src={linkedin}></img>
                    LinkedIn   
                </button>
            </div>
        </div>
    )
}