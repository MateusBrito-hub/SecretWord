import './Over.css'

const Over = ({retry, score}) => {
    return (
        <div>
            <h1>Fim de Jogo</h1>
            <h2>Sua pontuação foi: <span>{score}</span></h2>
            <button onClick={retry}>Tentar novamente!</button>
        </div>
    )
}

export default Over