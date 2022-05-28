
//Components React
import { useState } from 'react'

//CSS
import './App.css';

//Data
import { wordsList } from './data/words';

//Components
import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen';

const stage = [
  {id: 1, nome: "start"}, 
  {id:2, nome: "game"}, 
  {id:3, nome:"gameOver"} ];

function App() {

  const [gameStage, setGameStage] = useState(stage[0].nome)
  const [words, setWords] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("")

  const [guessedLetters, setGuessedLetters] = useState ([]);
  const [wrongsLettrers, setWrongsLetters] = useState([])
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState(3);


  const pickedCategoryandLetters = () =>{
        //picked categories
        const categories = Object.keys(words)

        const category = categories[Math.floor(Math.random() *  Object.keys(categories).length)]
    
        //picked word
        const word = words[category][Math.floor(Math.random() * words[category].length)]

        return {word, category}
      } 


  
  const startGame =() =>{

   const {word, category} = pickedCategoryandLetters();    

     //create an array of letters
     let wordLetters = word.split("")

     wordLetters = wordLetters.map((w) => w.toLowerCase());
     
     console.log(category, word)
     console.log(wordLetters)

     setPickedWord(word);
     setPickedCategory(category)
     setLetters(wordLetters)
    
    setGameStage(stage[1].nome)
  }

  const findLetter = () => {
    setGameStage(stage[2].nome)
  }

  const retryGame = () => {
    setGameStage(stage[0].nome)
  }


  return (
    <div className="App">
      {gameStage === "start" &&  < StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game 
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guess={guess}
      score={score}
      guessedLetters={guessedLetters}
      wrongsLettrers={wrongsLettrers}
      />}
      {gameStage === "gameOver" && <GameOver retryGame={retryGame}/>}

    </div>
  );
}

export default App;
