import './GameOver.css'

const GameOver = ({retryGame, score}) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <span>Sua pontuaçao e: {score}</span>
    <button onClick={retryGame}>Resetar Jogo</button>
    </div>
  )
}

export default GameOver