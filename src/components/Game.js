import './Game.css';

const Game = ({
  pickedWord,
  pickedCategory,
  letters,
  guess,
  score,
  guessedLetters,
  wrongsLettrers,
  findLetter,

}) => {
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
        <p>voce ainda tem {guess} tentativas</p>
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
          <form>
            <input type="text" name="letter" maxLeght="1" required />
            <button onClick={findLetter}> JOGAR </button>
          </form>
        </div>
      </div>
      <div>
        <div className="wrongLetterContainer">
        <span>Letras ja ultilizadas</span>
          {wrongsLettrers.map((letters, i) => (
            <span key={i}>{letters}, </span>
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Game