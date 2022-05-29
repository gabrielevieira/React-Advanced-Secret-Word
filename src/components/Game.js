import { useRef, useState } from 'react';
import './Game.css';

const Game = ({
  pickedWord,
  pickedCategory,
  letters,
  guesses,
  score,
  guessedLetters,
  wrongLettrers,
  findLetter,
}) => {

  const [letter, setLetter] = useState("")

  const letterInputRef = useRef(null)

  const handleLeterrs = (e) => {
    e.preventDefault();

    findLetter(letter);   

    setLetter("");

    letterInputRef.current.focus();
  }
  return (
    <div className="game">
      <div className="point">
        <h1>Game</h1>
        <span>Pontuaçao e : {score}</span>
      </div>
      <div className="findWord">
        <h3 >Advinhe a palavra</h3>
        <h3 className="tip"
        >Dica sobre a palavra : <span>{pickedCategory}</span>
        </h3>
        <p>voce ainda tem {guesses} tentativas</p>
        <div className="wordContainer">
          {letters.map((letter, i) => (
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">
                {letter}
              </span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
          ))}
        </div>
        <div className="letterContainer">
          <p>Tente advinhar a palavra</p>
          <form onSubmit={handleLeterrs}>
            <input type="text" 
            name="letter" 
            maxLeght="1" 
            required 
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
            />
            <button> JOGAR </button>
          </form>
        </div>
      </div>
      <div>
        <div className="wrongLetterContainer">
        <span>Letras ja ultilizadas : </span>
          {wrongLettrers.map((letter, i) => (            
            <div key={i}>{letter}</div>
          ))}
          {console.log("Form",wrongLettrers)} 
        </div>
      </div>
    </div>
  )
}

export default Game