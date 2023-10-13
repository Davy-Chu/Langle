import './Form.css'
import React from 'react'
export default function Form(props) {
    const [formData, setFormData] = React.useState("");
    // console.log(formData)
    const {lang, addHint, languageList, incrementCount, addToGuessed, guessed} = props;
    function handleGuess(event){
        event.preventDefault()
        // console.log(formData)
        if(formData.toLowerCase() == lang){
            //do stuff
        }  else{
            //Check if guess is in the list of languages
            if(languageList.includes(formData.toLowerCase()) && !guessed.includes(formData.toLowerCase())){ 
                addHint({lang:formData.toLowerCase()});
                addToGuessed(formData.toLowerCase());
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