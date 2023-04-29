import "./styles/styles.css"
import Header from "./Header";
import MainContent from "./MainContent";
import React from 'react'

function App(){
    const [isDark,setIsDark] = React.useState(false)
    function toggleSwitch(){
        setIsDark(prevIsDark=>!prevIsDark)
    }


    return (
        <div className="container">
            <Header 
                isDark= {isDark}
                toggleSwitch={()=>toggleSwitch()}
            />
            <MainContent 
                isDark={isDark}
            />
        </div>
    )
}

export default App;