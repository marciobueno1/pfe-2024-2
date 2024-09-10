import { useImmer } from "use-immer";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const [person, updatePerson] = useImmer({ name: "", age: "" });

  const handleInputChange = (evt) => {
    updatePerson((draft) => {
      draft[evt.target.name] = evt.target.value;
    });
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Name:{" "}
          <input name="name" value={person.name} onChange={handleInputChange} />
        </p>
        <p>
          Age:{" "}
          <input
            type="number"
            name="age"
            value={person.age}
            onChange={handleInputChange}
          />
        </p>
        <Counter />
        <Counter />
        <hr />
        Person: {JSON.stringify(person)}
      </div>
    </>
  );
}

export default App;
