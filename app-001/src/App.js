import logo from "./logo.svg";
import "./App.css";

function MeuComponente() {
  return (
    <div>
      <h1>Meu Título</h1>
      <p>Meu primeiro parágrafo!</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuComponente />
        <hr />
        <MeuComponente />
        <hr />
        <MeuComponente />
      </header>
    </div>
  );
}

export default App;
