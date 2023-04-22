import { GrLinkPrevious } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/` + id)
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
      <div className="flex m-6">
        <NavLink to="/">
          <GrLinkPrevious className="text-[3rem] mx-5"></GrLinkPrevious>
        </NavLink>
        <h1 className="text-6xl font-bold">{pokemon?.name}</h1>
      </div>

      <div className="flex items-center mt-20">
        <div className="grid grid-cols-2 w-1/3 ml-28 text-xl">
          <p className="font-bold text-center mb-2">Height</p>
          <p className=" text-left">{pokemon?.height} m</p>
          <p className="font-bold text-center mb-2">Weight</p>
          <p>{pokemon?.weight}kg</p>
          <p className="font-bold text-center mb-2">HP</p>
          <p>{pokemon?.HP}</p>
          <p className="font-bold text-center mb-2">Attack</p>
          <p>49</p>
          <p className="font-bold text-center mb-2">Speed</p>
          <p>45</p>
        </div>
        <img
          src={pokemon?.sprites.other.dream_world.front_default}
          alt=""
          className="w-[15rem]"
        />
      </div>
    </>
  );
}
