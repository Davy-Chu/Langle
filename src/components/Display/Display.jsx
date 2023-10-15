import './Display.css'
export default function Display(props) {
    // console.log(props.language)
    const hintDisplay = () => {
        if(props.guessCount == 0){
            return(<p>Guess any language!</p>);
        } else if (props.guessCount == 1){
            return(<p>Audiofile word in Russian</p>);
        } else if (props.guessCount == 2){
            return(<p>Audio file sentence in Russian</p>);
        } else if (props.guessCount == 3){
            return(<p>время</p>);
        } else if (props.guessCount >= 4 ){
            return(<p>Sentence in Russian</p>);
        }
    }
    return(
        <div className="display">
            {props.guessCount > 0 && <h2 id="guess-count">Hint:{props.guessCount}/6</h2>}
            <h3 id="display-content">
                {hintDisplay()}
                
            </h3>
        </div>
    )
}