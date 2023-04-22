import { useEffect, useState } from "react";
import PokeComponent from "../Components/PokeComponent";
import Pagination from "../Components/Pagination";

export default function MainPage() {
  const [state, setState] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  useEffect(() => {
    fetch(currentPageUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not OK");
      })
      .then((pokemons) => {
        setNextPageUrl(pokemons.next);
        setPrevPageUrl(pokemons.previous);
        setState(pokemons.results);
      })
      .catch((err) => console.log("a" + err));
  }, [currentPageUrl]);

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function goToPrevPage() {
    if (prevPageUrl != null) {
      setCurrentPageUrl(prevPageUrl);
    }
  }

  return (
    <>
      <h1 className="text-6xl font-bold mt-12 ml-20">Pokebox</h1>

      <ul className="flex flex-wrap justify-center mt-12 mx-5">
        {state.map((pokemon) => (
          <PokeComponent
            key={pokemon.name}
            pokemonProp={pokemon}
          ></PokeComponent>
        ))}
      </ul>

      <Pagination
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
      ></Pagination>
    </>
  );
}
