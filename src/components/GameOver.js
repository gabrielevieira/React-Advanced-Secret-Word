import './GameOver.css'

const GameOver = ({retryGame}) => {
  return (
    <div>
      <h1>Jogue Novamente</h1>
    <button onClick={retryGame}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver