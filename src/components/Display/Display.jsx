import './Display.css'
export default function Display(props) {
    // console.log(props.language)
    const hintDisplay = () => {
        switch(props.guessCount){
            case 0:
                return(<p>Guess any language!</p>);
            case 1:
                return(<p>Audiofile word in Russian</p>);
            case 2:
                return(<p>Audio file sentence in Russian</p>);
            case 3:
                return(<p>время</p>);
            case 4:
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