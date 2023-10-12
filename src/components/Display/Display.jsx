import './Display.css'
export default function Display(props) {
    console.log(props.language)
    return(
        <div className="display">
            <h2 id="guess-count">Hint:1/6</h2>
            <h3 id="display-content">
                <p>Guess any language!</p>
            </h3>
        </div>
    )
}