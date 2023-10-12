import './Hints.css'
import React from 'react'
export default function Hints(props){
    
    const styles = {
        backgroundColor: props.emoji === "🔥" ? "green" : "red"
    }
    return(
        <div className="hints">
            <div id="lang" className="hint-tabs">
                {props.lang}
            </div>
            <div id="lang-family" className="hint-tabs" style={styles}>
                {props.langFamily}
            </div>
            <div id="progress" className="hint-tabs">
                {props.emoji}
            </div>
        </div>
    )
}