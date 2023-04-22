import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function PokeComponent({ pokemonProp }) {
  const [pokemon, setPokemon] = useState(null);
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

  return (
    <>
      <NavLink to={`/detail/${pokemon?.id}`}>
        <div className="content bg-[#E8FEFF] flex justify-between items-start w-[30rem] rounded-[1.5rem] shadow-xl mr-[2rem] mb-[3rem] ">
          <h1 className="text-4xl font-bold ml-5 mt-3 capitalize">
            {pokemon?.name}
          </h1>
          <img
            src={pokemon?.sprites.other.dream_world.front_default}
            className="h-36 p-5"
            alt=""
          />
        </div>
      </NavLink>
    </>
  );
}
