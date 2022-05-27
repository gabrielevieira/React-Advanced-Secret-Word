import './App.css';
import StartScreen from './components/StartScreen';

import { wordsList } from './data/words';

import { useState } from 'react'
import StartGame from './components/StartGame';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stage = [
  {id: 1, nome: "start"}, 
  { id:2, nome: "game"}, 
  {id:3, nome:"gameOver"} ];

function App() {

  const [gameStage, setGameStage] = useState(stage[0].nome)



  const [word] = useState(wordsList);

  console.log(word)


  return (
    <div className="App">
      <StartScreen/>
      {gameStage === "start" && <StartGame/>}
      {gameStage === "game" && <Game/>}
      {gameStage === "gameOver" && <GameOver/>}

    </div>
  );
}

export default App;
