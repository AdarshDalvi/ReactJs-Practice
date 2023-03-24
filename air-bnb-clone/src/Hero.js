import hero from "./images/hero.png"
import "./styles/hero.css"

export default function Hero(){
    return (
        <main>
            <div className="image-container">
                <img src={hero} className="hero-image"></img>
            </div>
            <h1 className="h1">Online Experiences</h1>
            <p className="p">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </main>
    )
}