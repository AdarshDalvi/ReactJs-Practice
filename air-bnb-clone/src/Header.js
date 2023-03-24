import "./styles/header.css"
import logo from "./images/logo.png"

export default function Header(){
    return (
        <nav>
            <img src={logo}></img>
        </nav>
    )
}