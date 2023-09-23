import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.map((poke) => (
    <PokemonCard key= {poke.id} name={poke.name} hp={poke.hp} front={poke.sprites.front} back={poke.sprites.back}/>
    ///or <PokemonCard {..pk} />
  ))}
    </Card.Group>
  );
}

export default PokemonCollection;
