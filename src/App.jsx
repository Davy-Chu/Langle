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
  const languages = ["Chinese", "Spanish", "French", "Japanese","Arabic","German","Russian","Portugese",
    "Italian","Turkish","Korean","Polish","Dutch","Swedish","Indonesian","Greek","Hebrew","Thai","Czech","Farsi"];
  const [guessCount, setCount] = useState(0);
  const [language, setLanguage] = useState("wtf");
  function getLang(){
    const randNum = Math.floor(Math.random() * languages.length);
    setLanguage(languages[randNum]);
  }
  const incrementCount = () => { 
    setCount(guessCount + 1);
  }
  useEffect(() => {
    
    getLang();
    
  }, [])

  const [hintsList, setHintsList] = React.useState([
    {
      lang: "Chinese",
      langFamily: "Sino-Tibetan",
      emoji: "🔥",
      id: "1"
    }
  ])
  const addHint = () => {
    setHintsList([...hintsList, {lang:"Spanish", langFamily:"Indo-European", emoji:"❄️", id:"2"}]);
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
      />
      {hintsList.map(hint => {
        console.log(hintsList);
        return(
          <Hints
            key={hint.id}
            lang={hint.lang}
            langFamily={hint.langFamily}
            emoji={hint.emoji}
          />
        )
        })}
      <Hints
        lang="Spanish"
        langFamily="Indo-European"
        emoji="❄️"
      />
    </div>
  )
}

export default App
