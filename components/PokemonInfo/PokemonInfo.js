import React from "react";
import Image from "next/image";

const PokemonInfo = ({ data }) => {
  const { sprites, id, name, types, stats, flavor_text_entries } = data;
  const flavorTextEntry = flavor_text_entries.find(
    ({ language }) => language.name === "en"
  );

  return (
    <>
      <Image
        src={sprites?.other["official-artwork"].front_default}
        alt=""
        width={134}
        height={130}
        className="mx-auto mt-3"
      />
      <h2 className="font-semibold text-center text-3xl capitalize">
        No {id} {name}
      </h2>
      <div>
        <h3 className="font-medium text-2xl">About</h3>
        <div className="text-lg">{flavorTextEntry?.flavor_text}</div>
      </div>
      <div className="mt-10 flex justify-between">
        <div>
          <h3 className="font-medium text-2xl">Types</h3>
          <div className="text-lg mt-px capitalize">
            {types?.map(({ type }) => type.name).join(", ")}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-2xl">Stats</h3>
          <div className="w-60 text-sm">
            <div className="flex justify-between font-bold">
              <div className="font-bold">Stats</div>
              <div className="font-bold">Value</div>
            </div>
            <div className="flex justify-between">
              <div>HP</div>
              <div>{stats?.[0].base_stat}</div>
            </div>
            <div className="flex justify-between">
              <div>Attack</div>
              <div>{stats?.[1].base_stat}</div>
            </div>
            <div className="flex justify-between">
              <div>Defense</div>
              <div>{stats?.[2].base_stat}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
