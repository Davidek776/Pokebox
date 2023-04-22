import { useEffect, useState } from "react";

export default function PokeComponent({ pokemonProp }) {
  // console.log(pokemon);
  const [pokemon, setPokemon] = useState(null);
  console.log(pokemonProp.url);
  useEffect(() => {
    fetch(pokemonProp.url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not OK");
      })
      .then(setPokemon)
      .catch((err) => console.log("a" + err));
  }, []);

  console.log(pokemon);
  return (
    <>
      <div className="bg-[#E8FEFF] flex justify-between items-start w-[43vw] rounded-[1.5rem] shadow-xl">
        <h1 className="text-4xl font-bold ml-5 mt-3 ">{pokemon?.name}</h1>
        <img src={pokemon?.sprites.front_default} className="w-36" alt="" />
      </div>
    </>
  );
}
