import ToggleSwitch from "./ToggleSwitch";
import "./styles/header.css"
import React from 'react'

function Header(props){

    let src= props.isDark?`react_logo.png`:`reactjs-light.png`


    return (
        <nav className='nav' style={{backgroundColor:props.isDark?"#21222A": "#FFFFFF"}}>
            <div className="right-section">
                <img src={`/images/${src}`} className="logoImage" ></img>
                <p style={{color:props.isDark?"##00ABCA": "#00ABCA"}}>ReactFacts</p>
            </div>
            <ToggleSwitch 
                isDark={props.isDark}
                toggleSwitch={()=>props.toggleSwitch()}
            />
        </nav>
    )
}

export default Header;