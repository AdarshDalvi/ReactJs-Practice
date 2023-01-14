import "./styles/header.css"
import search from "./search.svg"

function Header(){
    return (
        <header>
            <nav className="nav">
                <div className="right-section">
                    <img src="/images/react_logo.png" className="logoImage" ></img>
                    <p>ReactFacts</p>
                </div>
                <p className="extra">React Course - Project 1</p>
            </nav>
        </header>
    )
}

export default Header;