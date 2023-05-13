"use client";

import { useState } from "react";

import Background from "../components/Background";
import EmptyState from "../components/EmptyState";
import PokemonInfo from "../components/PokemonInfo";

const Home = () => {
  const [pokemonName, setPokemonName] = useState();
  const [pokemonData, setPokemonData] = useState();
  const [aboutPokemon, setAboutPokemon] = useState("");
  const searchEntry = (e) => {
    const { value } = e.target;
    setPokemonName(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      });
  };

  const renderContent = () => {
    if (!pokemonData) return <EmptyState />;

    if (pokemonData.isLoading) return <h1>Loading...</h1>;

    if (pokemonData.isError) return <pre>{JSON.stringify(pokemon.error)}</pre>;

    return <PokemonInfo pokemonData={pokemonData} />;
  };

  return (
    <div className="">
      <Background />
      <div className="container mx-auto shadow-xl mt-36 text-slate-700 max-w-3xl flex flex-col p-5 relative bg-white">
        <div className="text-4xl font-semibold text-center">PokeSearch</div>
        <form onSubmit={onSubmit} className="mx-auto my-3 w-3/5 h-14">
          <input
            className="border rounded border-inherit text-base h-14 w-full pl-4"
            type="text"
            placeholder="Label"
            onChange={searchEntry}
          />
        </form>
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
