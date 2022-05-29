
//Components React
import { useEffect, useState, useCallback } from 'react'

//CSS
import './App.css';

//Data
import { wordsList } from './data/words';

//Components
import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen';

const stage = [
  {id:1, nome: "start"}, 
  {id:2, nome: "game"}, 
  {id:3, nome:"gameOver"} ];

  const guessesQty = 3;

function App() {

  const [gameStage, setGameStage] = useState(stage[0].nome)
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState("")

  const [guessedLetters, setGuessedLetters] = useState ([]);
  const [wrongLettrers, setWrongLetters] = useState([])
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(guessesQty);


  const pickedCategoryandLetters = useCallback(() =>{
        //picked categories
        const categories = Object.keys(words)
        const category = categories[Math.floor(Math.random() *  Object.keys(categories).length)]
    
        //picked word
        const word = words[category][Math.floor(Math.random() * words[category].length)]
        return {word, category}
      },[words]);


  
  const startGame = useCallback(() =>{

   clearLettersStates();

   const {word, category} = pickedCategoryandLetters();    

     //create an array of letters
     let wordLetters = word.split("")
     wordLetters = wordLetters.map((w) => w.toLowerCase());
     
     setPickedWord(word);
     setPickedCategory(category)
     setLetters(wordLetters)
    
    setGameStage(stage[1].nome)
  }, [pickedCategoryandLetters]);


  const findLetter = (letter) => {
    const normalizeLetter = letter.toLowerCase()

    if(guessedLetters.includes(normalizeLetter) || wrongLettrers.includes(normalizeLetter)){
      return
    }

    if(letters.includes(normalizeLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, 
        normalizeLetter,
      ])
    }else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
         normalizeLetter,
        ]);

        setGuesses((actualGuesses) => actualGuesses - 1 );
    }
  };

  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  
  const retryGame = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stage[0].nome)
  }

  // check if guesses ended
  useEffect(() => {
    if(guesses <= 0){
      // reset all states
      clearLettersStates()

      setGameStage(stage[2].nome);
    }
  }, [guesses])

  //check win condition
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    console.log(uniqueLetters)

    if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore) => (actualScore += 100));

      startGame();
    }

  },[guessedLetters, letters, startGame]);


  return (
    <div className="App">
      {gameStage === "start" &&  < StartScreen startGame={startGame}/>}
      {gameStage === "game" && <Game 
      pickedWord={pickedWord}
      pickedCategory={pickedCategory}
      letters={letters}
      guesses={guesses}
      score={score}
      guessedLetters={guessedLetters}
      wrongLettrers={wrongLettrers}
      findLetter={findLetter}
      />}
      {gameStage === "gameOver" && <GameOver retryGame={retryGame} score={score}/>}

    </div>
  );
}

export default App;
