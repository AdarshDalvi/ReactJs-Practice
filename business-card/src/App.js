import React  from "react"
import "./styles/general.css"
import Info from "./Info"
import About from "./About"
import SocialIcons from "./SocialIcons"

export default function App(){
    return (
        <div className="container" >
            <Info/>
            <About/>
            <SocialIcons/>
        </div>
    )
}