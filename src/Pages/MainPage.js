import { useEffect, useState } from "react";
export default function MainPage() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10
    `)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not OK");
      })
      .then((pokemons) => setState(pokemons.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Lorem </h1>
      <ul>
        {state.map((val) => (
          <li>{val.name}</li>
        ))}
      </ul>
    </>
  );
}
