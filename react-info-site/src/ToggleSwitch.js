import './styles/Toggle.css'

export default function ToggleSwitch(props){

    return (
        <div className={props.isDark?"darkMode":""} style={{display:"flex",alignItems:"center"}}>
            <p className='light'>Light</p>
            <div className="toggleBox" onClick={props.toggleSwitch}>
                <div className="toggleCircle"></div>
            </div>
            <p className='dark'>Dark</p>
        </div>
    )
}