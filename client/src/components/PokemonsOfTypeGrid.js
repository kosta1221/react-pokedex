import React from "react";
import { fetchPokemonData } from "../utils";

function PokemonsOfTypeGrid({ pokemonsOfType, data, setData }) {
	const handleGridClick = (event) => {
		const pokemonName = event.target.getAttribute("name");
		fetchPokemonData(data, setData, pokemonName);
	};

	return (
		<div className="grid-container">
			{pokemonsOfType.map((pokemon) => (
				<div>
					<span>{pokemon.name}</span>
					<img
						src={pokemon.sprites["front_default"]}
						alt="pokemon"
						onMouseEnter={(event) => (event.target.src = pokemon.sprites["back_default"])}
						onMouseLeave={(event) => (event.target.src = pokemon.sprites["front_default"])}
						name={pokemon.name}
						onClick={handleGridClick}
					/>
				</div>
			))}
		</div>
	);
}

export default PokemonsOfTypeGrid;
