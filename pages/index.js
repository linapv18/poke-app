import { useState } from "react";
import useSWR from "swr";
import Background from "../components/Background";
import Message from "../components/Message";
import PokemonInfo from "../components/PokemonInfo";
import { fetcher } from "../utils/request";
import { Oval } from "react-loader-spinner";

const Home = () => {
  const [pokemonName, setPokemonName] = useState();
  const [searchValue, setSearchValue] = useState("");
  const { data, error, isLoading } = useSWR(
    pokemonName ? `https://pokeapi.co/api/v2/pokemon/${pokemonName}/` : null,
    fetcher
  );

  const searchEntry = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setPokemonName(searchValue);
  };

  const renderContent = () => {
    if (isLoading)
      return (
        <div className="mx-auto my-28">
          <Oval
            height={40}
            width={40}
            color="#AAAAAA"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#AAAAAA"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      );
    if (error)
      return (
        <Message>
          We couldn't find any pokemon with that name/id. 😔 Please try entering
          a different one.{" "}
        </Message>
      );
    if (!data)
      return (
        <Message>
          Please enter a pokemon{" "}
          <span className="text-bold text-pink-500 ">name </span> or{" "}
          <span className="text-bold text-pink-500 ">id</span> and click enter
          to display the information!
        </Message>
      );
    return <PokemonInfo data={data} />;
  };

  return (
    <div className="">
      <Background type={data?.types[0].type.name} />
      <div className="container mx-auto shadow-xl mt-36 text-slate-700 max-w-3xl flex flex-col p-5 relative bg-white min-h-[610px]">
        <div className="text-4xl font-semibold text-center">PokeSearch</div>
        <form onSubmit={onSubmit} className="mx-auto my-3 w-3/5 h-14">
          <input
            className="border rounded border-inherit text-base h-14 w-full pl-4 border-stone-400"
            type="text"
            placeholder="Pokemon name or id"
            onChange={searchEntry}
          />
        </form>
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
