import "./Answer.css"
export default function Answer(props){
    return(
        <div className="answer">
            <h2>The answer was:</h2>
            <p>{props.language}</p>
        </div>
    )
}