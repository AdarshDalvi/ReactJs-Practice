import "./styles/social.css"
import twitter from "./icons/twitter.png"
import facebook from "./icons/facebook.png"
import instagram from "./icons/instagram.png"
import github from "./icons/github.png"

export default function SocialIcons(){
    return (
        <footer>
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={instagram}></img>
            <img src={github}></img>
        </footer>
    )
}