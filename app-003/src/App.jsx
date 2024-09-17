import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [rodada, setRodada] = useState(1);
  const [vezJogador1, setVezJogador1] = useState(true);
  const [scoreRodadaJ1, setScoreRodadaJ1] = useState(0);
  const [scoreRodadaJ2, setScoreRodadaJ2] = useState(0);
  const [fimDeJogo, setFimDeJogo] = useState(false);

  const qtdRodadas = 5;

  const jogarDados = (setScoreRodada) => {
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    const scoreRodadaJogadorAtual = dado1 + dado2;
    setScoreRodada(scoreRodadaJogadorAtual);
    setVezJogador1(!vezJogador1);
    if (vezJogador1) {
      setScoreRodadaJ2(0);
    } else {
      if (scoreRodadaJ1 > scoreRodadaJogadorAtual) {
        setScore1(score1 + 1);
      } else if (scoreRodadaJ1 < scoreRodadaJogadorAtual) {
        setScore2(score2 + 1);
      } else {
        // empate
      }
      if (rodada == qtdRodadas) {
        setFimDeJogo(true);
      } else {
        setRodada(rodada + 1);
      }
    }
  };

  useEffect(() => {
    if (fimDeJogo) {
      let mensagem = "Empate!";
      if (score1 > score2) {
        mensagem = "Jogador 1 venceu!";
      } else {
        mensagem = "Jogador 2 venceu!";
      }
      setTimeout(() => {
        alert(mensagem);
        setScore1(0);
        setScore2(0);
        setVezJogador1(true);
        setFimDeJogo(false);
        setRodada(1);
        setScoreRodadaJ1(0);
        setScoreRodadaJ2(0);
      });
    }
  }, [fimDeJogo]);

  return (
    <>
      <h1>
        Jogo de Dados - Rodada {rodada}/{qtdRodadas}
      </h1>
      <hr />
      <h2>Placar</h2>
      <p>
        Jogador 1: {score1} - Jogador 2: {score2}
      </p>
      <hr />
      <p>
        {scoreRodadaJ1 != 0 && <span>{scoreRodadaJ1}</span>} -{" "}
        {scoreRodadaJ2 != 0 && <span>{scoreRodadaJ2}</span>}
      </p>
      <hr />
      <p>
        <button
          disabled={fimDeJogo || !vezJogador1}
          onClick={() => jogarDados(setScoreRodadaJ1)}
        >
          Jogar Dado
        </button>{" "}
        -{" "}
        <button
          disabled={fimDeJogo || vezJogador1}
          onClick={() => jogarDados(setScoreRodadaJ2)}
        >
          Jogar Dado
        </button>
      </p>
    </>
  );
}

export default App;
