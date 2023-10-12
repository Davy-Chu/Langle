import './Form.css'
import React from 'react'
export default function Form(props) {
    const [formData, setFormData] = React.useState("");
    // console.log(formData)
    const {lang, addHint, languageList, incrementCount} = props;
    function handleGuess(event){
        event.preventDefault()
        console.log(formData)
        if(formData == lang){
            //do stuff
        }  else{
            if(languageList.find((language) => language == formData) != undefined){
                addHint();
                incrementCount();
            }
        }
    }
    function handleChange(event){
        setFormData(event.target.value)
    }
    return(
        <div className="form">
            <form id="text-area" onSubmit={handleGuess}>
                <input type="text" id="text-input" placeholder="Enter name of language" onChange={handleChange}></input>
                <button id="submit-button">Guess</button>
            </form>
        </div>
    )
}