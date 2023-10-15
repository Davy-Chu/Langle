import { useState, useEffect} from 'react'
import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Display from './components/Display/Display'
import Form from './components/Form/Form'
import Hints from './components/Hints/Hints'
/*
Form in the middle of page that gives hints after each try
1 try: Audio file of a single work being spoken in the language
2 tries: Audio file of a full sentence being spoken
3 tries: Written form of the first word
4 tries: Written form of the sentence
After each try: Lets you know if the language is related/closer in the language tree
*/
function App() {
  const languages = ["chinese", "spanish", "french", "japanese","arabic","german","russian","portugese",
    "italian","turkish","korean","polish","dutch","swedish","indonesian","greek","hebrew","thai","czech","farsi"];
  const [guessCount, setCount] = useState(0);
  const [language, setLanguage] = useState("wtf");
  //Chooses a random language from the list of languages
  function getLang(){
    const randNum = Math.floor(Math.random() * languages.length);
    setLanguage(languages[randNum]);
    
  }
  //Increases the guess count when an incorrect guess is made
  const incrementCount = () => { 
    setCount(guessCount + 1);
  }
  useEffect(() => {
    
    getLang();
    // console.log(language);
  }, [])
  const [guessed, setGuessed] = useState([]);
  const addToGuessed = (lang) => {
    setGuessed([...guessed, lang]);
  }
  const [hintsList, setHintsList] = React.useState([
    {
      lang: "Chinese",
      langFamily: "Sino-Tibetan",
      emoji: "🔥",
      id: "1"
    }
  ])
  //Adds a hint element to the page if a guess is incorrect
  const addHint = (hint) => {
    hint.lang = hint.lang[0].toUpperCase() + hint.lang.slice(1);
    // console.log(hint.lang)
    setHintsList([...hintsList, {lang:hint.lang, langFamily:"Indo-European", emoji:"❄️", id:guessCount+2}]);

  }
  return (
    <div className="app">
      <Header />
      <Display 
        guessCount={guessCount}
        language={language}
      />
      <Form lang={language}
            addHint={addHint}
            incrementCount={incrementCount}
            languageList={languages}
            addToGuessed={addToGuessed}
            guessed={guessed}
      />
      {hintsList.map(hint => {
        // console.log(hintsList);
        return(
          <Hints
            key={hint.id}
            lang={hint.lang}
            langFamily={hint.langFamily}
            emoji={hint.emoji}
          />
        )
        })}
    </div>
  )
}

export default App
