import { GrLinkPrevious } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const [pokemon, setPokemon] = useState(null);
  const { id } = useParams();

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

  return (
    <>
      <div className="flex m-6">
        <NavLink to="/">
          <GrLinkPrevious className="back text-[3rem] mx-5"></GrLinkPrevious>
        </NavLink>
        <h1 className="text-6xl font-bold capitalize">{pokemon?.name}</h1>
      </div>

      <div className="flex items-center mt-20 ml-24">
        <div className="grid grid-cols-2 w-1/5 ml-28 text-xl">
          <p className="font-bold text-right mb-2 mr-10">Height</p>
          <p className=" text-left">{pokemon?.height} m</p>
          <p className="font-bold text-right mb-2 mr-10">Weight</p>
          <p>{pokemon?.weight}kg</p>
          <p className="font-bold text-right mb-2 mr-10">Type</p>
          <div>
            {pokemon?.types.map((type, index) => (
              <ul className="flex flex-col" key={index}>
                <li className="capitalize whitespace-nowrap">
                  {type.type.name}
                </li>
              </ul>
            ))}
          </div>
          <p className="font-bold text-right mb-2 mr-10">Abilities</p>
          <div>
            {pokemon?.abilities.map((ability, index) => (
              <li className="flex flex-col" key={index}>
                <p className="capitalize whitespace-nowrap">
                  {ability.ability.name}
                </p>
              </li>
            ))}
          </div>
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
