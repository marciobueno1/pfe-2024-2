import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getPeople } from "./api";

export function Personagens() {
  // const [url, setUrl] = useState("https://swapi.dev/api/people/?page=1");
  const [page, setPage] = useState(1);
  const { isPending, error, data, isFetching } = useQuery({
    queryKey: [`people-${page}`],
    queryFn: getPeople(page),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  function handleBtAnteriorClick() {
    setPage(page - 1);
  }

  function handleBtProximaClick() {
    setPage(page + 1);
  }
  return (
    <div>
      <h1>Personagens de Star Wars{isFetching && "***"}</h1>
      <button disabled={data.previous == null} onClick={handleBtAnteriorClick}>
        Anterior
      </button>
      <button disabled={data.next == null} onClick={handleBtProximaClick}>
        Próxima
      </button>
      <hr />
      <ol start={(page - 1) * 10 + 1}>
        {data.results.map((person) => (
          <li key={person.url}>{person.name}</li>
        ))}
      </ol>
    </div>
  );
}
