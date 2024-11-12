export const getPeople = (page) => () =>
  fetch(`https://swapi.dev/api/people/?page=${page}`).then((res) => res.json());
