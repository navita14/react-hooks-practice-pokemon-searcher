import React, {useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon,setPokemon}) {
  const [search,setSearch] = useState("")

  const filterPokemon = pokemon.filter(poke => {
    return poke.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemon={setPokemon}/>
      <br />
      <Search setSearch={setSearch} />
      <br />
      <PokemonCollection pokemon={filterPokemon}/> 
      {/* prior pokemon = {pokemon} but we want to filter it and not use all in the search bar */}
    </Container>
  );
}

export default PokemonPage;
