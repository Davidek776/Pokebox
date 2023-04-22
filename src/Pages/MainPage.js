import { useEffect, useState } from "react";
import PokeComponent from "../Components/PokeComponent";

export default function MainPage() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=2
    `)
      .then((response) => {
        if (response.ok) {
          // console.log(response.data.results);
          return response.json();
        }
        throw new Error("Network response was not OK");
      })
      .then((pokemons) => {
        setState(pokemons.results);
      })
      .catch((err) => console.log("a" + err));
  }, []);

  {
  }

  // state.map((async pokemon) => (

  // ))

  return (
    <>
      <h1 className="text-6xl font-bold mt-8 ml-20">Pokebox</h1>

      <ul className="flex">
        {state.map((pokemon) => (
          <PokeComponent
            key={pokemon.name}
            pokemonProp={pokemon}
          ></PokeComponent>
        ))}
      </ul>
    </>
  );
}
